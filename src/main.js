import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImages } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";

const form = document.querySelector('.images-form');
const imagesList = document.querySelector('.images-container');
const request = document.querySelector('.images-form-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector(".load-more");

let page = 1;
let query = '';
let totalHits = 0;


form.addEventListener('submit', handleSubmit);
loadMore.addEventListener("click", onLoadMore);

async function handleSubmit(event) {
  event.preventDefault();
    if (request.value.trim() === '') {      
      return; 
  }
     
  query = event.target.elements.query.value.trim();
  page = 1;
  form.reset();
  gallery.innerHTML = '';
  loadMore.classList.add('load-more-hidden');
  loader.style.display = 'block';
  try {
    const data = await searchImages(getUrl(query, page));
    if (data) {
        totalHits = data.totalHits;
        const markup = imagesTemplate(data.hits);
        gallery.innerHTML = markup;      
        lightbox.refresh();
      if (totalHits > 15) {
        loadMore.classList.remove('load-more-hidden');
      }
      scrollCard();
    }
  } catch (error) {
      console.log(error);
      
  } finally {
    loader.style.display = 'none';
  }
   
};

async function onLoadMore() {
    page += 1;
    loadMore.disabled = true;

    try {
        const data = await searchImages(getUrl(query, page));
        if (data) {
          const markup = imagesTemplate(data.hits);
          gallery.insertAdjacentHTML("beforeend", markup);
          lightbox.refresh();
          if (page * 15 >= totalHits) {
            loadMore.classList.add('load-more-hidden');
            iziToast.show({
              position: 'topRight',
              backgroundColor: '#EF4040',
              message: "We're sorry, but you've reached the end of search results.",
              messageColor: '#FAFAFB',
            });
          }
          scrollCard();
        }
    } catch (error) {
      console.log(error);
    } finally {
    loadMore.disabled = false;
    }
}

function getUrl(query, page) {
  const baseUrl = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44020863-07a417a47184dc9fb21f180f5',
    q: query,
    lang: 'en',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });
  return `${baseUrl}?${params}`;
}

function scrollCard() {
  const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: "smooth"
        })  
}


let lightbox = new SimpleLightbox('.gallery-image-container a', {
        captionsData: 'alt',
        captionDelay: 250
});
      
