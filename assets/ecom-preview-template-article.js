!function(){const e=function(){"use strict";window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-5jzy00kkuz7"]=window.__ectimmers["ecom-5jzy00kkuz7"]||{};let e=this.$el.querySelector(".ecom-shopify__article__description-view-more-btn"),t=this.settings.content_type,o=this.$el.querySelector(".ecom-shopify__article__description--full"),i=this.$el.querySelector(".ecom-shopify__article__description--paragraph");e&&e.addEventListener("click",(function(){"text"===t&&o?(o.style.display="inherit",i.style.display="none"):i.style.maxHeight=null,this.style.display="none"}))},t={content_type:"text"};document.querySelectorAll(".ecom-5jzy00kkuz7").forEach((function(o){e.call({$el:o,settings:t,id:"ecom-5jzy00kkuz7",isLive:!0})}))}(),function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-5ec67u3aenh"]=window.__ectimmers["ecom-5ec67u3aenh"]||{},"slider"===this.settings.layout){let e=this.$el;if(!e)return;let t=e.querySelector(".ecom-shopify__blog-container"),o=t&&t.dataset.optionSwiper;o=JSON.parse(o),o.pagination={el:e.querySelector(".ecom-swiper-pagination"),type:"bullets",clickable:!0},o.navigation={nextEl:e.querySelector(".ecom-swiper-button-next"),prevEl:e.querySelector(".ecom-swiper-button-prev")},new window.EComSwiper(t,o)}if(this.settings.use_ajax&&this.isLive){const e=this.$el;if(!e)return;const t=e.querySelector(".ecom-shopify__blog-wrapper"),o=function(e){e.preventDefault();const o=this.dataset.get,n=this.closest(".ecom-sections[data-section-id]");if(!o||!n||!n.dataset.sectionId)return;const c=n.dataset.sectionId;i(`${o}&section_id=${c}`,n),t.scrollIntoView()};e.querySelectorAll(".ecom-pagination-item").forEach(e=>{e.addEventListener("click",o)});const i=function(t,i){i.classList.add("ecom-doing-load-blog"),async function(e){return(await fetch(e,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()}(t).then((function(t){e.querySelectorAll(".ecom-shopify__blog--post").forEach((function(e){e.remove()}));const n=document.createElement("div");n.innerHTML=t;const c=n.querySelector(".ecom-shopify__blog--posts");if(!c)return;const s=i.querySelector(".ecom-shopify__blog--posts"),r=i.querySelector(".ecom-pagination-navigation.ecom-collection__pagination-navigation");for(;c.firstChild;)s.appendChild(c.firstChild);c.parentNode.removeChild(c);const l=n.querySelector(".ecom-pagination-navigation.ecom-collection__pagination-navigation");l&&(r.innerHTML=l.innerHTML,e.querySelectorAll(".ecom-pagination-item").forEach(e=>{e.addEventListener("click",o)}))})).finally((function(){i.classList.remove("ecom-doing-load-blog")}))}}},t={layout:"grid"};document.querySelectorAll(".ecom-5ec67u3aenh").forEach((function(o){e.call({$el:o,settings:t,id:"ecom-5ec67u3aenh",isLive:!0})}))}(),window.location.search.indexOf("ecom-token=")<0&&(document.querySelector(".ecom-builder").innerHTML='<h3 style="width:100%;display:block;text-align:center">This template for preview purposes only</h3>',document.querySelector("body").style.opacity="0.7");