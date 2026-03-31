import './style.css'

const navbar = document.getElementById('navbar')
const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')
const mobileLinks = document.querySelectorAll('#mobile-menu a')

const updateNavbarState = () => {
  const scrolled = window.scrollY > 24

  if (!navbar) return

  navbar.classList.toggle('bg-darkgreen/95', scrolled)
  navbar.classList.toggle('backdrop-blur', scrolled)
  navbar.classList.toggle('shadow-lg', scrolled)
  navbar.classList.toggle('border-b', scrolled)
  navbar.classList.toggle('border-white/10', scrolled)
}

window.addEventListener('scroll', updateNavbarState)
window.addEventListener('load', updateNavbarState)

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true'
    mobileMenuButton.setAttribute('aria-expanded', String(!isExpanded))
    mobileMenu.classList.toggle('hidden', isExpanded)
  })

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
      mobileMenuButton.setAttribute('aria-expanded', 'false')
    })
  })
}

const faders = document.querySelectorAll('.fade-up')

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('show')
      observer.unobserve(entry.target)
    })
  },
  { threshold: 0.2 }
)

faders.forEach((fader) => appearOnScroll.observe(fader))
