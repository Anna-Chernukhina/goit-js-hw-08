import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');
console.log("galleryRef:", galleryRef);

const markUpGallery = galleryItems
  .map(
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
  )
    .join('');
  
console.log(markUpGallery);

galleryRef.insertAdjacentHTML('afterbegin', markUpGallery);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});