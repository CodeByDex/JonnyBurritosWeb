const sectionMain = document.querySelector('#Main');
const sectionAbout = document.querySelector('#About');

document.querySelector("#BTN-About").addEventListener("click", function () {
    sectionMain.classList.add("hide");
    sectionAbout.classList.remove("hide");
});

document.querySelector("#Logo").addEventListener("click", function () {
    sectionMain.classList.remove("hide");
    sectionAbout.classList.add("hide");
});