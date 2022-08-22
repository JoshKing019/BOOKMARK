const menuOpen = document.querySelector('.openMenu')
const menuClose = document.querySelector('.ri-close-line')
const menu = document.querySelector('.firstlink')
const html = document.querySelector('html')

const menuList = document.querySelectorAll('.links1')

menuOpen.addEventListener("click", function(){
    menu.style.top = "30%"
    menuClose.style.display = "block"
    menuOpen.style.display = 'none'
    html.style.overflowY = "hidden"
})


menuClose.addEventListener("click", function(){
    menu.style.top = "-20%"
    menuClose.style.display = "none"
    menuOpen.style.display = 'block'
    html.style.overflowY = "scroll"
})

menuList.forEach(link => {
    link.addEventListener("click", function(){
        menu.style.top = "-270%"
        menuClose.style.display = "none"
        menuOpen.style.display = 'block'
        html.style.overflowY = "scroll"
    })
})
