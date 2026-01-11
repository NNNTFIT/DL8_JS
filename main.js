const nav = document.getElementById("nav")
const list = document.getElementById("list")
const container = document.getElementById("container")

function openMenu(){
    container.classList.add("container-active")
    list.classList.add("list-active")
    nav.classList.add("nav-active")
    document.body.classList.add("menu-open")
}

function closeMenu(){
    container.classList.remove("container-active")
    list.classList.remove("list-active")
    nav.classList.remove("nav-active")
    document.body.classList.remove("menu-open")
}