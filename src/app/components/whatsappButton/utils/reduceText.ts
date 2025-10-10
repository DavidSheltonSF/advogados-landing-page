export function reduceText(text:string) {

  const words = text.split(' ');

  if(words.length >= 20) {
    const reducedWords = words.slice(0, 20);
    let reducedText = reducedWords.join(' ');
    reducedText = reducedText + '...';
    return reducedText
  }

  return text
}