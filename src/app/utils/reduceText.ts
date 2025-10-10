export function reduceText(text:string, numberOfWords: number = 20) {

  const words = text.split(' ');

  if(words.length >= numberOfWords) {
    const reducedWords = words.slice(0, 20);
    let reducedText = reducedWords.join(' ');
    reducedText = reducedText + '...';
    return reducedText
  }

  return text
}