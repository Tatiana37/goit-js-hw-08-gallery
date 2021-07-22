import galleryItems from './app.js';
// console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    overlay: document.querySelector('.lightbox__overlay'),
    content: document.querySelector('.lightbox__content'),
    image: document.querySelector('.lightbox__image'),
    closeBtn: document.querySelector('.lightbox__button'),
};

function creatGalleryElement() {
    return galleryItems
    .map(({ preview, original, description }, index) => {
        return `<li class="gallery__item">
        <a
            class="gallery__link"
            href="${original}"
        >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                data-index="${index}"
            />
        </a>
    </li>`})
    .join('');   
};

refs.gallery.insertAdjacentHTML('beforeend', creatGalleryElement());

// const creatGalleryElement = (acc, { preview, original, description }) =>
//     acc +`<li class="gallery__item">
//         <a
//             class="gallery__link"
//             href="${original}"
//         >
//             <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//             />
//         </a>
//     </li>`;
// const galleryMarkUp = galleryItems.reduce(creatGalleryElement, '');
// refs.gallery.insertAdjacentHTML('beforeend', galleryMarkUp);



