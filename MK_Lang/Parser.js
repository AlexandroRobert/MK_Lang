// Превращает текст в массив из токенов
function Parser(Code) {
  let IgnoreString = true;  // Если true, то запись строки не идёт
  let Word = "";            // Записанное слово
  
  const TokensList = [];    // Список токенов
  
  for (let i = 0; i < Code.length; i++) {
    const ch = Code[i], next = i >= Code.length? "": Code[i + 1];
    Word += ch;
    
    // Запись строк
    if (ch == "'") {
      IgnoreString = IgnoreString? false: true;
      
      if (!IgnoreString) Word = "";
      if (IgnoreString) {
        TokensList.push(new Token("STRING", Word.slice(0, Word.length - 1)));
        Word = "";
      }
    }
    
    // TODO: вынести в <see href="./Utils.js>" массив с семантикой
    if (["+", "-", "=", ":", "(", ")", ";"].includes(next) || next == " " || next == "\n" && IgnoreString) {
      TokensList.push(new Token("", Word.trim()));
      Word = "";
      continue;
    }
  }
  
  // Сортировка токенов
  return TokensList.map(function(i) {
    return new Token(
      KeyWordAnalyze(i.Text.trim()), i.Text.trim() 
    );
  }).filter(i => i.Text !== "");
}