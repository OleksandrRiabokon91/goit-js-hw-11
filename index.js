import{a as m,S as y,i as s}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function p(i){const a="https://pixabay.com"+"/api/",e={key:"50355121-f8c083c230eef48e4f2dd2afb",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"},{data:t}=await m.get(a,{params:e});return t.hits}const l=document.querySelector(".gallery"),c=document.getElementById("global-loader"),g=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
<li class="gallery__item">
  <a class="gallery__link" href="${a}">
    <img class="gallery__image" src="${o}" alt="${e}" loading="lazy" />
  </a>
  <ul class="info">
    <li><b>Likes</b> ${t}</li>
    <li><b>Views</b> ${n}</li>
    <li><b>Comments</b> ${f}</li>
    <li><b>Downloads</b> ${d}</li>
  </ul>
</li>`).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){l.innerHTML=""}function L(){c.classList.add("is-active")}function w(){c.classList.remove("is-active")}const u=document.querySelector(".form"),P=u.elements["search-text"];u.addEventListener("submit",v);function v(i){i.preventDefault();const r=P.value.trim();if(r.length<1){s.info({message:"Search field is empty. Please type a keyword.",position:"topRight",timeout:3e3});return}b(),L(),p(r).then(o=>{if(!o.length){s.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}h(o)}).catch(()=>{s.error({message:"Network error. Please try later.",position:"topRight",timeout:4e3})}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map
