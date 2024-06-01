import{a as L,i as p,S as w}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();async function y(e){try{const{data:t}=await L(e);return console.log(t),t.hits.length===0?(p.show({position:"topRight",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB"}),null):t}catch(t){return console.log("Fetch error:",t),null}}function q(e){return`<li class="gallery-item">
               <div class="gallery-image-container">
                   <a class="gallery-link" href=${e.largeImageURL}>
                     <img
                       class="gallery-image"
                       src=${e.webformatURL} 
                       alt=${e.tags} />
                   </a>
               </div>
               <div class="property-container">
                 <div class="property">
                   Likes
                   <span class="keys">${e.likes}</span>
                 </div>
	             <div class ="property">
                   Views
                   <span class="keys">${e.views}</span>
                 </div>
	             <div class ="property">
                   Comments
                   <span class="keys">${e.comments}</span>
                 </div>
	             <div class ="property">
                   Downloads
                   <span class="keys">${e.downloads}</span>
                 </div>
               </div>    
          </li>`}function f(e){return e.map(q).join("")}const g=document.querySelector(".images-form");document.querySelector(".images-container");const S=document.querySelector(".images-form-input"),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),s=document.querySelector(".load-more");let n=1,d="",u=0;g.addEventListener("submit",F);s.addEventListener("click",k);async function F(e){if(e.preventDefault(),S.value.trim()!==""){d=e.target.elements.query.value.trim(),n=1,g.reset(),c.innerHTML="",s.classList.add("load-more-hidden"),m.style.display="block";try{const t=await y(h(d,n));if(t){u=t.totalHits;const a=f(t.hits);c.innerHTML=a,b.refresh(),u>15&&s.classList.remove("load-more-hidden"),v()}}catch(t){console.log(t)}finally{m.style.display="none"}}}async function k(){n+=1,s.disabled=!0;try{const e=await y(h(d,n));if(e){const t=f(e.hits);c.insertAdjacentHTML("beforeend",t),b.refresh(),n*15>=u&&(s.classList.add("load-more-hidden"),p.show({position:"topRight",backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results.",messageColor:"#FAFAFB"})),v()}}catch(e){console.log(e)}finally{s.disabled=!1}}function h(e,t){const a="https://pixabay.com/api/",i=new URLSearchParams({key:"44020863-07a417a47184dc9fb21f180f5",q:e,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});return`${a}?${i}`}function v(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}let b=new w(".gallery-image-container a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
