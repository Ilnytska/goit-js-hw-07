import { galleryItems } from './gallery-items.js';
// Change code below this line
const instance = basicLightbox.create(`
  <img src="" />
`);

const refs = {
  gallery: document.querySelector('.gallery'),
  modal: instance.element().querySelector('img'),
  
}

const galleryMarkup = createGalleryMarkup();
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}

refs.gallery.addEventListener('click', onOpenModal);
refs.gallery.addEventListener('keydown',onCloseModal)
function onOpenModal(event) { 
 event.preventDefault() 
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.modal.src = event.target.dataset.source;
  instance.show()
}
function onCloseModal() {
document.removeEventListener('keydown', onEscKeyPress);
  refs.modal.src = '';
  instance.close()
}
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
 
