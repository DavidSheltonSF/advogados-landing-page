export function enableElement(elementClass: string) {
  const element = document.querySelector(elementClass);
  element?.classList.add('cursor-pointer');
  element?.classList.remove('disabledElement')
}