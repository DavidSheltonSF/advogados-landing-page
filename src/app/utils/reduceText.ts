export function reduceText(text:string, maxWordsQuantity: number = 20) {
  const words = text.split(' ');
  if(words.length > maxWordsQuantity) {
    const reducedWords = words.slice(0, maxWordsQuantity);
    let reducedText = reducedWords.join(' ');
    reducedText = reducedText + '...';
    return reducedText
  }
  return text
}