export function enableElement(selector: string) {
  const element = document.querySelector(selector);
  element?.classList.add('cursor-pointer');
  element?.classList.remove('disabledElement')
}