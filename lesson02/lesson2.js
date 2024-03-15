// Здесь хранятся команды выполняющий интерпретатор
const instructions = {
  'INCREMENT': 0, // Плюс
  'INCREMENT_5': 1, // Плюс 5
  'DECREMENT': 2, // Минус
  'MULTIPLY_BY_2': 3, // Умножить на два
  'NEW_VALUE': 4, // Дает начать новое значение
  'END': 5 // Завершение
};

// Функция преобразующая ascii-код в символ
const turnItIntoANumber = (value) => String.fromCharCode(value)

// Список команд
const program = [
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT'],
  instructions['MULTIPLY_BY_2'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['MULTIPLY_BY_2'],
  instructions['NEW_VALUE'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['INCREMENT_5'],
  instructions['MULTIPLY_BY_2'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['INCREMENT'],
  instructions['END']
];

// Интерпретатор
function execute(program) {
  let pointer = 0;
  let asciiCode = 0;
  let find = false;
  let value = '';

  while (!find) {
    const command = program[pointer]
    switch (command) {
      case instructions['INCREMENT']:
        pointer++
        asciiCode++
        break;
      case instructions['INCREMENT_5']:
        pointer++
        asciiCode = asciiCode + 5
        break;
      case instructions['MULTIPLY_BY_2']:
        pointer++
        asciiCode = asciiCode * 2
        break;
      case instructions['NEW_VALUE']:
        pointer++
        value += turnItIntoANumber(asciiCode)
        asciiCode = 0
        break
      case instructions['END']:
        find = true
        if (!value.length) {
          value = turnItIntoANumber(asciiCode)
        } else {
          value += turnItIntoANumber(asciiCode)
        }
        break;
      case undefined:
        find = true
    }
  }
  return value
}

console.log(execute(program))
