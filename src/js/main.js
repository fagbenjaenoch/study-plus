const body = document.querySelector("body");
const header = document.querySelector("header");
const menu = document.querySelector("menu");
const menuBtn = document.querySelector("menuBtn");
const cancelBtn = document.querySelector("cancelBtn");

window.onscroll = () =>{
    this.scroll > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
}