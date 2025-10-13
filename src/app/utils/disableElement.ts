export function disableElement(selector: string) {
  const element = document.querySelector(selector);
  element?.classList.remove('cursor-pointer');
  element?.classList.add('disabledElement')
}