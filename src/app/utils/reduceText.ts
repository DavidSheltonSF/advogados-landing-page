export function reduceText(text:string, wordsQuantity: number = 20) {
  const words = text.split(' ');
  if(words.length > wordsQuantity) {
    const reducedWords = words.slice(0, wordsQuantity);
    let reducedText = reducedWords.join(' ');
    reducedText = reducedText + '...';
    return reducedText
  }
  return text
}