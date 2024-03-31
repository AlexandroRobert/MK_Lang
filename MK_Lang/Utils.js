// Ключевые слова, включая семантику
const KeyWords = {
  Name: ["let", ":", "int", "=", "(", ")", ";"], 
  Type: ["VARIABLE_INIT", "IDENTIFIER_TYPE", "TYPE", "INIT", "LS", "RS", "ENDL"]
}

// Набор названий переменных
const Variables = [];

// Вернёт строку с ошибкой
function Err(Code, Text) {
  return `error ${Code}. ${Text}.`;
}