class BCD {
  #numbers = []

  constructor(number) {
    this.#generateBcdCodes(number);
  }

  // start - helpers

  #createMask(len, pos) {
    let r = ~0;
    r <<= 32 - len
    r >>>= 32 - pos
    return r
  }

  #calculateBitwisePositionAndShift(totalBits, currentIndex) {
    const getPosition = totalBits - currentIndex * 4;
    const moveToTheLeft = getPosition - 4;
    return {getPosition, moveToTheLeft};
  }

  #findNegativeArrayIndex(index) {
    let temporaryNumbersArrayIndex = -1;
    let numbersDifferenceBetweenArrays = 0
    let bitsCount = this.#countTheBitsInANumber(temporaryNumbersArrayIndex);
    let condition = (bitsCount + numbersDifferenceBetweenArrays) < Math.abs(index);
    while (condition) {
      numbersDifferenceBetweenArrays += bitsCount;
      temporaryNumbersArrayIndex -= 1;
      bitsCount = this.#countTheBitsInANumber(temporaryNumbersArrayIndex);
      condition = (bitsCount + numbersDifferenceBetweenArrays) < Math.abs(index);
    }
    return {
      negativeArrayIndex: temporaryNumbersArrayIndex,
      numbersDifferenceBetweenArrays
    }
  }

  #countTheBitsInANumber(index) {
    const number = this.#numbers.at(index);
    let totalBitsLength = 0;

    for (let count = 0; count < 7; count++) {
      const getPosition = 28 - count * 4;
      const moveToTheLeft = getPosition - 4;
      const singleBit = (number & this.#createMask(4, getPosition)) >> moveToTheLeft;
      if (singleBit !== 0) {
        totalBitsLength++;
      }
    }

    return totalBitsLength;
  }

  #calculateNegativeIndexes(index) {
    const {
      negativeArrayIndex,
      numbersDifferenceBetweenArrays
    } = this.#findNegativeArrayIndex(index);

    const bitsCount = this.#countTheBitsInANumber(negativeArrayIndex);
    const indexOfTheNumberInArray = bitsCount - Math.abs(index) + numbersDifferenceBetweenArrays;

    return {
      negativeArrayIndex,
      indexOfTheNumberInArray
    };
  }

  // end - helpers

  #generateBcdCodes(number) {
    let acc = 0;
    let pointer = 0;
    let remainderOfTheDivisionCounter = 0;
    const totalNumberLength = String(number).length

    while (number > 0n) {
      let digit = number % 10n;
      acc |= Number(digit) << (pointer * 4);

      pointer++;
      remainderOfTheDivisionCounter++
      number = number / 10n;

      const blockSplitCondition = (totalNumberLength - remainderOfTheDivisionCounter) % 7 === 0

      if (blockSplitCondition) {
        this.#numbers.unshift(acc);
        acc = 0;
        pointer = 0;
      }
    }
  }

  #getNumberByPositiveIndex(positiveArrayIndex, index) {
    const currentNumberIndex = index % 7
    const totalBits = this.#countTheBitsInANumber(positiveArrayIndex) * 4
    const {
      getPosition,
      moveToTheLeft
    } = this.#calculateBitwisePositionAndShift(totalBits, currentNumberIndex)
    return ((this.#numbers.at(positiveArrayIndex)) & (this.#createMask(4, getPosition))) >>> moveToTheLeft
  }

  #getNumberByNegativeIndex(index) {
    const {
      negativeArrayIndex,
      indexOfTheNumberInArray
    } = this.#calculateNegativeIndexes(index)
    const totalBits = this.#countTheBitsInANumber(negativeArrayIndex) * 4
    const {
      getPosition,
      moveToTheLeft
    } = this.#calculateBitwisePositionAndShift(totalBits, indexOfTheNumberInArray)
    return ((this.#numbers.at(negativeArrayIndex)) & (this.#createMask(4, getPosition))) >>> moveToTheLeft
  }

  // start - public methods

  valueOf() {
    let acc = 0n
    let pointer = 0n
    for (const number of this.#numbers) {
      acc |= BigInt(number) << pointer * 28n
      pointer++
    }
    return acc
  }


  get(index) {
    let positiveArrayIndex = Math.floor(index / 7)
    return positiveArrayIndex >= 0 ? this.#getNumberByPositiveIndex(positiveArrayIndex, index) : this.#getNumberByNegativeIndex(index)
  }

  // end - public methods
}

// current numbers array - [ 106439473, 19088743, 1893 ]

const n = new BCD(6582331_1234567_765n);
console.log(n.valueOf())
console.log(n.get(1))
