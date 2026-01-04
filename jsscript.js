const nbar=document.getElementById("nbar");
const menutooglei=document.getElementById("menutooglei");
const nlinks=document.getElementById("nlinks");
document.querySelector('.navlinks li a[href="#"]').onclick = () => document.getElementById("collection").scrollIntoView({ behavior: "smooth" });

window.addEventListener("scroll",() => {
    if(window.scrollY > 50) {
        nbar.classList.add("scrolled");
    } else {
        nbar.classList.remove("scrolled");
    }
});
menutooglei.addEventListener("click",() => 
{
    nlinks.classList.toggle("active");
});
