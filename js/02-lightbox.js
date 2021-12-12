import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),

}

const galleryMarkup = createGalleryMarkup();
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item"
    href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>
    `;
    })
    .join('');
}
refs.gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    
});
console.log(galleryItems);
