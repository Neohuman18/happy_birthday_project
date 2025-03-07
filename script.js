document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImg.src = this.src;
            modal.classList.add("active");
        });
    });

    modal.addEventListener("click", function () {
        modal.classList.remove("active");
    });
});
