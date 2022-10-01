const loader = document.querySelector('.loader')
const container = document.querySelector('.container')
container.style.display = 'none'
window.addEventListener('load', () => {
    setTimeout(function () {
        loader.classList.add('out')
        container.style.display = 'block'
    }, 2000)
})
const menu = document.querySelectorAll('.menuLinks')
menu.forEach((item) => {
    item.addEventListener('click', function () {
        menu.forEach((item) => item.classList.remove('active'))
        this.classList.add('active')
        console.log("coucou")
    })
})