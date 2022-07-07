// NavBar on Scroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY > 0)
})


// Show/Hide Answer on Click

const faq_answer = document.querySelectorAll(".faq");
// const icons = document.querySelectorAll(".faqs__icon");

faq_answer.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("show")
    })
})

// show/hide NavMenu

const menu = document.querySelector(".nav__menu")
const mobile_btn = document.querySelector(".mobile__nav")
const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector(".close")
const mobile_nav_icon = document.querySelectorAll(".mobile_nav_icon")

// const closemenu = document.querySelector(".nav__menu")

mobile_btn.addEventListener("click", () => {
    menu.classList.toggle("active")
    mobile_nav_icon.forEach(btn => {
        btn.classList.toggle("active")
    })

})