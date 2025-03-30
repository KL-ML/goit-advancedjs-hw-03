import{i as g,S as h}from"./assets/vendor-B2mb6eXk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function l(r){g.error({timeout:3e3,message:`${r}`,position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.99)",messageColor:"#FFFFFF",icon:"",close:!1})}const u="search-form-state";function y(r){const e=r.target.form.elements.searchQuery.value.trim();localStorage.setItem(u,JSON.stringify(e))}function b(r){const e=JSON.parse(localStorage.getItem(u));e&&(r.elements.searchQuery.value=e)}function L(){localStorage.removeItem(u)}const S="30636701-b7bfaf1719dc5d89c8acde7b5",v="https://pixabay.com/api/",$=new URLSearchParams({key:S,image_type:"photo",orientation:"horizontal",safesearch:!0});function E(r){return fetch(`${v}?${$}&q=${r}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const i=document.querySelector(".gallery");function F(r){const e=r.hits.map(({webformatURL:n,largeImageURL:s,tags:t,likes:o,views:a,comments:d,downloads:p})=>`
            <div class="photo-card">
              <a href="${s}" class="img-link">
                  <img class="img" src="${n}" alt="${t}" width=360px; loading="lazy" />
              </a>
              <div class="info">
                  <p class="info-item">
                      <b>Likes </b>${o}
                  </p>
                  <p class="info-item">
                      <b>Views </b>${a}
                  </p>
                  <p class="info-item">
                      <b>Comments </b>${d}
                  </p>
                  <p class="info-item">
                      <b>Downloads </b>${p}
                  </p>
              </div>
            </div>
        `).join("");i.insertAdjacentHTML("beforeend",e),new h("ul.gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function f(){i.innerHTML=""}function O(){i.innerHTML='<span class="loader"></span>'}function m(){i.innerHTML=""}const c=document.querySelector(".form");b(c);c.addEventListener("input",y);c.addEventListener("submit",P);function P(r){r.preventDefault();const e=r.currentTarget.elements.searchQuery.value.trim();if(e===""){l("Enter your search request");return}f(),O(),E(e).then(n=>{if(n.total===0){l("Sorry, there are no images matching your search query. Please try again!"),m(),f();return}m(),F(n)}).catch(n=>{l(`Error ${n}`)}).finally(()=>{c.reset()}),r.target.reset(),L()}
//# sourceMappingURL=index.js.map
