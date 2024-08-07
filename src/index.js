import './style.css'

console.log("Loading scripts..")

document.addEventListener("DOMContentLoaded", () => {
    loadElements()
    const title = document.createElement('h1')
    title.innerText = 'Hello, world'
    document.body.appendChild(title)
})

function loadElements() {
    addLogo()
    checkMobile()
    handleScreenResize()
}

function addLogo(image) {
    const logo = document.getElementById('nav-logo')
    logo.src = image
}

function checkMobile() {
    const screenWidth = window.innerWidth
    if(screenWidth < 764) {
        hideNavLinks()
    }
}

function handleScreenResize() {
    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth
        if(screenWidth < 764) {
            hideNavLinks()
        } else if(screenWidth > 764) {
            showNavLinks()
        }
    })
}

function hideNavLinks() {
    const navLinks = document.getElementsByClassName('navbar__links')[0]
    const hamburger = document.getElementById('navbar-menu')
    navLinks.style.display = "none"
    hamburger.style.display = 'block'
}

function showNavLinks() {
    const navLinks = document.getElementsByClassName('navbar__links')[0]
    const hamburger = document.getElementById('navbar-menu')
    navLinks.style.display = "flex"
    hamburger.style.display = 'none'
}

function addCarousel(images) {
    const carousel = new Carousel(images).createCarousel()

    return carousel
}