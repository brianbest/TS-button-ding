import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <button id="ding">Hello there.</button>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#ding')!)
