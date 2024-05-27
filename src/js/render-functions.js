function imageTemplate(image) {
    return `<li class="gallery-item">
               <div class="gallery-image-container">
                   <a class="gallery-link" href=${image.largeImageURL}>
                     <img
                       class="gallery-image"
                       src=${image.webformatURL} 
                       alt=${image.tags} />
                   </a>
               </div>
               <div class="property-container">
                 <div class="property">
                   Likes
                   <span class="keys">${image.likes}</span>
                 </div>
	             <div class ="property">
                   Views
                   <span class="keys">${image.views}</span>
                 </div>
	             <div class ="property">
                   Comments
                   <span class="keys">${image.comments}</span>
                 </div>
	             <div class ="property">
                   Downloads
                   <span class="keys">${image.downloads}</span>
                 </div>
               </div>    
          </li>`;
}

function imagesTemplate(arr) {
    return arr.map(imageTemplate).join('');
}

export { imagesTemplate }