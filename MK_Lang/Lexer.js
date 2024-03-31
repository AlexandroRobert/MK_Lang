// Генерирует c++ код исходя из списка токенов, и бросает ошибки в случай неправильного построения токенов
function Lexer(TokensList) {
  let cppStr = "";  // cpp код
  
  for (let i = 0; i < TokensList.length; i++) {
    const Ch = TokensList[i];
    
    if (Ch.Type == "VARIABLE_INIT" || Ch.Type == "IDENTIFIER_TYPE") {}
    else if (Ch.Type == "STRING") cppStr += `"${Ch.Text}"`;
    else if (Ch.Type == "NUMBER") cppStr += Ch.Text;
    else if (Ch.Type == "TYPE") {
      Variables.push(TokensList[i + 1].Text)
      cppStr += `${Ch.Text} ${TokensList[i + 1].Text}`
      i += 1
    }
    else if (Ch.Type == "INIT") cppStr += " = ";
    else if (Ch.Type == "ENDL") cppStr += ";";
    else if (Ch.Type == "VARIABLE") {
      if (Variables.indexOf(Ch.Text)) throw new Error(Err(0.1, `"${Ch.Text}" is not defined`));
    }
    else {
      throw new Error(Err(0.2, `token is "${Ch.Text}" has no type`));
    }
  }
  
  return cppStr;
}