export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number, name: string) => {
    counter = count * 2;
    element.innerHTML = `Hello there ${name} ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1, "mr.picard"))
  setCounter(0, "boss")
}
