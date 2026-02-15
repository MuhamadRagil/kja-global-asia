import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './style.css'

const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent')
    navbar.classList.add('bg-white', 'shadow-lg')
    navbar.querySelectorAll('a').forEach(link => link.classList.remove('text-white'))
    navbar.querySelectorAll('a').forEach(link => link.classList.add('text-gray-800'))
    navbar.querySelector('h1').classList.remove('text-white')
    navbar.querySelector('h1').classList.add('text-primary')
  } else {
    navbar.classList.add('bg-transparent')
    navbar.classList.remove('bg-white', 'shadow-lg')
    navbar.querySelectorAll('a').forEach(link => link.classList.add('text-white'))
    navbar.querySelectorAll('a').forEach(link => link.classList.remove('text-gray-800'))
    navbar.querySelector('h1').classList.add('text-white')
    navbar.querySelector('h1').classList.remove('text-primary')
  }
})

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const faders = document.querySelectorAll('.fade-up')

const appearOptions = {
  threshold: 0.2
}

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('show')
    observer.unobserve(entry.target)
  })
}, appearOptions)

faders.forEach(fader => {
  appearOnScroll.observe(fader)
})
