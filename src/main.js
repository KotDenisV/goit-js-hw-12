import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";

const form = document.querySelector('.images-form');
const imagesList = document.querySelector('.images-container');
const request = document.querySelector('.images-form-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    if (request.value.trim() === '') {      
      return; 
  }

  const query = event.target.elements.query.value.trim();
  form.reset();
  loader.style.display = 'block';

  searchImages(query)
    .then(data => {
      const markup = imagesTemplate(data.hits);
      gallery.innerHTML = markup;      
      lightbox.refresh();
      loader.style.display = 'none';
    })
    .catch(error => {
      console.log(error);
      loader.style.display = 'none';
    });
   
};

let lightbox = new SimpleLightbox('.gallery-image-container a', {
        captionsData: 'alt',
        captionDelay: 250
});
      
