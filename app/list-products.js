import './index.scss';

// images
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.jpg";
import image6 from "./assets/images/image6.jpg";
import image7 from "./assets/images/image7.jpg";
import image8 from "./assets/images/image8.jpg";
import image9 from "./assets/images/image9.jpg";
import image10 from "./assets/images/image10.jpg";
import image11 from "./assets/images/image11.jpg";
import image12 from "./assets/images/image12.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        { name: 'Gemstones', description: 'Beautiful and rare gemstones.', image: image1 },
        { name: 'Green Chili Pepper', description: 'Spicy and fresh green chili pepper.', image: image2 },
        { name: 'Green Pepper', description: 'Crisp and vibrant green pepper.', image: image3 },
        { name: 'Mayonnaise', description: 'Creamy and rich mayonnaise.', image: image4 },
        { name: 'Soap', description: 'Gentle and fragrant soap.', image: image5 },
        { name: 'CBD Lotion', description: 'Soothing CBD-infused lotion.', image: image6 },
        { name: 'Michael Kors Watch', description: 'Elegant Michael Kors watch.', image: image7 },
        { name: 'Nikon Camera', description: 'High-quality Nikon camera.', image: image8 },
        { name: 'Lexar SD Card', description: 'Reliable Lexar SD card.', image: image9 },
        { name: 'Coca-Cola Zero', description: 'Refreshing Coca-Cola Zero.', image: image10 },
        { name: 'Camera Lens', description: 'Versatile camera lens.', image: image11 },
        { name: 'Fujifilm Camera', description: 'Compact Fujifilm camera.', image: image12 }
    ];

    products.forEach(product => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'mb-4');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.width = '18rem';

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.height = '200px';
        img.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-success', 'float-end');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);

        productsContainer.appendChild(colDiv);
    });
});