// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

for (let el of galleryItems) {
    document.querySelector('.gallery').insertAdjacentHTML('beforeEnd',
        `<a class="gallery__item" href="${el.original}">
            <img class="gallery__image" src="${el.preview}" 
                   alt="${el.description}"></a>`)
};


new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250
});