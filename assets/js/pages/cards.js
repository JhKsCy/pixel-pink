const dataClothes = [
    {
        title: "Falda denim asimetric",
        price: "60.000",
        image: "../img/cards/chick-collection/asimetric-skirt/as-1.png",
        alternative: "asimetric-skirt",
        imageSecond: "../img/cards/chick-collection/asimetric-skirt/as-2.png", 
        imageThird: "../img/cards/chick-collection/asimetric-skirt/as-3.png",
        description: ""
    },
    {
        title: "Hoodie pink star",
        price: "80.000",
        image: "../img/cards/pink-goth-collection/sweater-pink-star/ps-1.png",
        alternative: "pink-star-hoodie",
        imageSecond: "../img/cards/pink-goth-collection/sweater-pink-star/ps-2.png", 
        imageThird: "../img/cards/pink-goth-collection/sweater-pink-star/ps-3.png",
        description: ""
    },
    {
        title: "Sweater cozy scholar",
        price: "120.000",
        image: "../img/cards/cozy-collection/sweater-schoolar/gs-1.png",
        alternative: "sweater-gray",
        imageSecond: "../img/cards/cozy-collection/sweater-schoolar/gs-2.png", 
        imageThird: "../img/cards/cozy-collection/sweater-schoolar/gs-3.png",
        description: ""
    },
    {
        title: "Vestido pink goth",
        price: "115.000",
        image: "../img/cards/pink-goth-collection/dress-squares-pink/sdp-1.png",
        alternative: "vestido-pink-goth",
        imageSecond: "../img/cards/pink-goth-collection/dress-squares-pink/sdp-2.png", 
        imageThird: "../img/cards/pink-goth-collection/dress-squares-pink/sdp-3.png",
        description: ""
    },
    {
        title: "Sweater pink goth",
        price: "80.000",
        image: "../img/cards/pink-goth-collection/sweater-first-love/flp-1.png",
        alternative: "sweater-pink-goth",
        imageSecond: "../img/cards/pink-goth-collection/sweater-first-love/flp-2.png", 
        imageThird: "../img/cards/pink-goth-collection/sweater-first-love/flp-3.png",
        description: ""
    },
];

function cardsGenerate() {
    const container = document.getElementById('cards__container');
    dataClothes.forEach(datos => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <div>
            <img src="${datos.image}" class="card-img-top first-image-1" alt="${datos.alternative}">
            <div class="card-body">
                <div class="card-body__info">
                    <a href="../pages/clothes.html" target="_blank">${datos.title}</a>
                    <p>$${datos.price}</p>
                </div>
                <div class="card-body__tag">
                    <button>
                        <i class="fa-solid fa-tag fa-rotate-90"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    container.appendChild(card);
    
    });
}
cardsGenerate();



// document.addEventListener("DOMContentLoaded", () => {
//     const card = document.querySelector(".card");
//     const cardOriginalImage = card.querySelector(".first-image-1");
    
//     card.addEventListener("mouseenter", () => {
//         cardOriginalImage.style.opacity = 0;
//         setTimeout(() => {
//             cardOriginalImage.src = `${datos.imageSecond}`;
//             cardOriginalImage.style.opacity = 1;
//         }, 300); 
//     });

//     card.addEventListener("mouseleave", () => {
//         cardOriginalImage.style.opacity = 0;
//         setTimeout(() => {
//             cardOriginalImage.src = `${datos.image}`;
//             cardOriginalImage.style.opacity = 1;
//         }, 300); 
//     });
// });
