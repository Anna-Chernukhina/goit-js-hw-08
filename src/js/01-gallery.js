import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const imagesList = document.querySelector('.gallery');
console.log("imagesList:", imagesList);

const imagesMarkup = galleryItems.map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
  ).join('');
  
// console.log(imagesMarkup);

imagesList.insertAdjacentHTML('afterbegin', imagesMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});