function Token(Type, Text) {
  return { Type, Text }
}

function KeyWordAnalyze(Word) {
  if (!isNaN(Word)) return "NUMBER";
  
  if (Word == "") return;
  const WordInList = KeyWords.Name.indexOf(Word);
  
  const Result = WordInList == -1? (
    "VARIABLE"
  ): KeyWords.Type[WordInList];
  
  return Result;
}