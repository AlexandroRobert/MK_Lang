function Parser(Code) {
  let IgnoreString = true;
  let Word = "";
  
  const TokensList = [];
  
  for (let i = 0; i < Code.length; i++) {
    const ch = Code[i], next = i >= Code.length? "": Code[i + 1];
    Word += ch;
    
    if (ch == "'") {
      IgnoreString = IgnoreString? false: true;
      
      if (!IgnoreString) Word = "";
      if (IgnoreString) {
        TokensList.push(new Token("STRING", Word.slice(0, Word.length - 1)));
        Word = "";
      }
    }
    
    if (["+", "-", "=", ":", "(", ")", ";"].includes(next) || next == " " || next == "\n" && IgnoreString) {
      TokensList.push(new Token("", Word.trim()));
      Word = "";
      continue;
    }
  }
  
  return TokensList.map(function(i) {
    return new Token(
      KeyWordAnalyze(i.Text.trim()), i.Text.trim() 
    );
  }).filter(i => i.Text !== "");
}