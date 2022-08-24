const navbarEl = document.querySelector('.nav-bar');
const bottomcontainerEl = document.querySelector('.bottom-container');

console.log(navbarEl);

window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
     if (window.scrollY > bottomcontainerEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add("active");
     }else{
        navbarEl.classList.remove("active")
     }
})
