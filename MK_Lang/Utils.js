const KeyWords = {
  Name: ["let", ":", "int", "=", "(", ")", ";"], 
  Type: ["VARIABLE_INIT", "IDENTIFIER_TYPE", "TYPE", "INIT", "LS", "RS", "ENDL"]
}

const Variables = [];

function Err(Code, Text) {
  return `error ${Code}. ${Text}.`;
}