const nav_links = document.getElementById("nav_links");
const hamburger = document.getElementById("hamburger");

function toggleButton(){
    nav_links.classList.toggle("active_nav")
}
hamburger.onclick = toggleButton













// const modal_wrapper = document.getElementById("modal_wrapper");
// const modalOpen = document.getElementById("modal_opener");
// const modalClose = document.getElementById("modal_closer");

// function modalOpener(){
//     modal_wrapper.classList.add("modal_active");
//     console.log("hello");
// }
// function modalCloser(){
//     modal_wrapper.classList.remove("modal_active");
// }


// modalOpen.addEventListener("click", modalOpener);

// modalClose.addEventListener("click", modalCloser);