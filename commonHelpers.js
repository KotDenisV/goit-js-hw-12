import{i as c,S as u}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(t){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"44020863-07a417a47184dc9fb21f180f5",q:t,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${s}?${o}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>e.hits.length===0?(c.show({position:"topRight",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB"}),null):e).catch(e=>{console.log("Fetch error:",e)})}function d(t){return`<li class="gallery-item">
               <div class="gallery-image-container">
                   <a class="gallery-link" href=${t.largeImageURL}>
                     <img
                       class="gallery-image"
                       src=${t.webformatURL} 
                       alt=${t.tags} />
                   </a>
               </div>
               <div class="property-container">
                 <div class="property">
                   Likes
                   <span class="keys">${t.likes}</span>
                 </div>
	             <div class ="property">
                   Views
                   <span class="keys">${t.views}</span>
                 </div>
	             <div class ="property">
                   Comments
                   <span class="keys">${t.comments}</span>
                 </div>
	             <div class ="property">
                   Downloads
                   <span class="keys">${t.downloads}</span>
                 </div>
               </div>    
          </li>`}function m(t){return t.map(d).join("")}const l=document.querySelector(".images-form");document.querySelector(".images-container");const y=document.querySelector(".images-form-input"),f=document.querySelector(".gallery"),i=document.querySelector(".loader");l.addEventListener("submit",g);function g(t){if(t.preventDefault(),y.value.trim()==="")return;const s=t.target.elements.query.value.trim();l.reset(),i.style.display="block",p(s).then(o=>{const n=m(o.hits);f.innerHTML=n,h.refresh(),i.style.display="none"}).catch(o=>{console.log(o),i.style.display="none"})}let h=new u(".gallery-image-container a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
