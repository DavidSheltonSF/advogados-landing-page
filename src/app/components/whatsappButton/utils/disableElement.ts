export function disableElement(elementClass: string) {
  const element = document.querySelector(elementClass);
  element?.classList.remove('cursor-pointer');
  element?.classList.add('disabledElement')
}