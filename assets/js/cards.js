document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const cardOriginalImage = card.querySelector(".first-image-1");
    
    card.addEventListener("mouseenter", () => {
        cardOriginalImage.style.opacity = 0;
        setTimeout(() => {
            cardOriginalImage.src = "./assets/img/cards/chick-collection/asimetric-skirt/as-2.png";
            cardOriginalImage.style.opacity = 1;
        }, 300); 
    });

    card.addEventListener("mouseleave", () => {
        cardOriginalImage.style.opacity = 0;
        setTimeout(() => {
            cardOriginalImage.src = "./assets/img/cards/chick-collection/asimetric-skirt/as-1.png";
            cardOriginalImage.style.opacity = 1;
        }, 300); 
    });
});
