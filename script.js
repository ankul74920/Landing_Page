var typing = new Typed(".text_animation", {
    strings: ["", "Website Development", "Ecommerce Development", "Custom Software Development", "Mobile App Development"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});

let count = document.querySelectorAll(".counter-number")
let arr = Array.from(count)
arr.map(function (item) {
    let startnumber = 0
    function counterup() {
        startnumber++
        item.innerHTML = startnumber
        if (startnumber == item.dataset.number) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(function () {
        counterup()
    }, 10)
})

const header = document.querySelector(".header-sticky");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});