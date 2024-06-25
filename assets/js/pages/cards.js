const dataClothes = [
    {
        id: 0,
        title: "Falda denim asimetric",
        price: "60.000",
        image: "/img/cards/chick-collection/asimetric-skirt/as-1.png",
        alternative: "asimetric-skirt",
        imageSecond: "/img/cards/chick-collection/asimetric-skirt/as-2.png", 
        imageThird: "/img/cards/chick-collection/asimetric-skirt/as-3.png",
        description: "<ul><li>Estilo Y2k</li><li>Ceñido</li><li>Denim</li></ul>"
    },
    {
        id: 1,
        title: "Hoodie pink star",
        price: "80.000",
        image: "/img/cards/pink-goth-collection/sweater-pink-star/ps-1.png",
        alternative: "pink-star-hoodie",
        imageSecond: "/img/cards/pink-goth-collection/sweater-pink-star/ps-2.png", 
        imageThird: "/img/cards/pink-goth-collection/sweater-pink-star/ps-3.png",
        description: "<ul><li>Estilo Y2k</li><li>Oversized</li><li>Políester</li></ul>"
    },
    {
        id: 2,
        title: "Sweater cozy scholar",
        price: "120.000",
        image: "/img/cards/cozy-collection/sweater-schoolar/gs-1.png",
        alternative: "sweater-gray",
        imageSecond: "/img/cards/cozy-collection/sweater-schoolar/gs-2.png", 
        imageThird: "/img/cards/cozy-collection/sweater-schoolar/gs-3.png",
        description: "<ul><li>Estilo Y2k</li><li>Oversized</li><li>Algodón</li></ul>"
    },
    {
        id: 3,
        title: "Vestido pink goth",
        price: "115.000",
        image: "/img/cards/pink-goth-collection/dress-squares-pink/sdp-1.png",
        alternative: "vestido-pink-goth",
        imageSecond: "/img/cards/pink-goth-collection/dress-squares-pink/sdp-2.png", 
        imageThird: "/img/cards/pink-goth-collection/dress-squares-pink/sdp-3.png",
        description: "<ul><li>Estilo Y2k</li><li>Ceñido</li><li>Políester</li></ul>"
    },
    {
        id: 4,
        title: "Sweater pink goth",
        price: "80.000",
        image: "/img/cards/pink-goth-collection/sweater-first-love/flp-1.png",
        alternative: "sweater-pink-goth",
        imageSecond: "/img/cards/pink-goth-collection/sweater-first-love/flp-2.png", 
        imageThird: "/img/cards/pink-goth-collection/sweater-first-love/flp-3.png",
        description: "<ul><li>Estilo Y2k</li><li>Oversized</li><li>Políester</li></ul>"
    }
];

function cardsGenerate() {
    const container = document.getElementById('cards__container');
    dataClothes.forEach(datos => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <div>
            <img src="..${datos.image}" class="card-img-top first-image-1" alt="${datos.alternative}">
            <div class="card-body">
                <div class="card-body__info">
                    <a href="../pages/clothes.html" target="_blank">${datos.title}</a>
                    <p>$${datos.price}</p>
                </div>
                <div class="card-body__tag">
                    <button class="btn-view" data-id=${datos.id}>
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



const selectedItem = localStorage.getItem('selected')
const parsedItem = JSON.parse(selectedItem)
const arrayItem = []
arrayItem.push(parsedItem)
console.log(parsedItem)
console.log(parsedItem.title)


function addHTMLClothes() {
    const element = document.getElementById('clothe__images');
    if (element) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="carousel-item active">
                <img src="..${parsedItem.image}" class="d-block w-100" alt="${parsedItem.alternative}">
            </div>
            <div class="carousel-item">
                <img src="..${parsedItem.imageSecond}" class="d-block w-100" alt="${parsedItem.alternative}">
            </div>
            <div class="carousel-item">
                <img src="..${parsedItem.imageThird}" class="d-block w-100" alt="${parsedItem.alternative}">
            </div>
        `;
        while (div.firstChild) {
            element.appendChild(div.firstChild);
        }
    } else {
        console.error(`Elemento con ID "${elementoId}" no encontrado.`);
    }
}
addHTMLClothes();

function addHTMLClothesTitle() {
    const element = document.getElementById('clothe__title');
    if (element) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>
                ${parsedItem.title}
            </h2>
            <p>
                ${parsedItem.price}
            </p>
        `;
        while (div.firstChild) {
            element.appendChild(div.firstChild);
        }
    } else {
        console.error(`Elemento con ID "${elementoId}" no encontrado.`);
    }
}
addHTMLClothesTitle();

function addHTMLClothesDescription() {
    const element = document.getElementById('clothe__description');
    if (element) {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>
                ${parsedItem.description}
            </p>
        `;
        while (div.firstChild) {
            element.appendChild(div.firstChild);
        }
    } else {
        console.error(`Elemento con ID "${elementoId}" no encontrado.`);
    }
}
addHTMLClothesDescription();





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
