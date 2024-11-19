/* Publish by EComposer at 2024-06-20 20:00:25*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-x6m6hcy5c3"]=  window.__ectimmers["ecom-x6m6hcy5c3"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-x6m6hcy5c3').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-x6m6hcy5c3', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-r782401tboc').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-r782401tboc', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-gt4zu7zqmqe').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-gt4zu7zqmqe', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-30fxukc9avf').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-30fxukc9avf', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-w39tk42tk1s"]=  window.__ectimmers["ecom-w39tk42tk1s"] || {};
if(!this.$el)return;const e=this.$el,i=this,c=this.settings.layout;let l=e.closest(".core__row--columns");const n=e.querySelector(".ecom-shopify__menu-list--mobile"),s=e.querySelector(".ecom-menu__icon-humber"),m=e.querySelector(".ecom-menu-collapse-close--mobile");let h=e.closest("div.ecom-core.core__block")||"",p=e.closest("div.ecom-column.ecom-core")||"",w=e.querySelectorAll(".ecom-shopify__menu-item--link");for(h&&(h.style.overflow="visible"),w&&n&&w.forEach(function(t){t.addEventListener("click",function(){y()})}),s&&(s.addEventListener("click",C),m.addEventListener("click",y));l;)l.style.zIndex="100",l=l.parentElement.closest(".core__row--columns");function C(){!n||(n.parentNode.style.display="block",n.classList.add("ecom-show"),h&&(h.style.zIndex="100"),p&&(p.style.zIndex="100"),document.querySelector("body").classList.add("ecom-menu-opened"),setTimeout(function(){document.addEventListener("click",d),document.addEventListener("keydown",f)},500))}function d(t){let a=t.target;do{if(a==n)return;a=a.parentNode}while(a);a!=n&&(y(),document.removeEventListener("click",d),document.removeEventListener("keydown",f))}function f(t){(t.isComposing||t.keyCode===27)&&(y(),document.removeEventListener("keydown",f),document.removeEventListener("click",d))}function y(){n.parentNode.style.display="none",n.classList.remove("ecom-show"),h&&(h.style.zIndex="1"),p&&(p.style.zIndex="1"),document.querySelector("body").classList.remove("ecom-menu-opened"),document.removeEventListener("keydown",f),document.removeEventListener("click",d)}let x=e.querySelector('.ecom-shopify__menu-list[data-menu-layout="horizontal"]'),v=null;x&&(v=x.querySelectorAll(".ecom-shopify__menu-item--has-children>.ecom-menu_item>.ecom-element--menu_title")),v&&v.forEach(function(t){t.addEventListener("click",function(a){a.preventDefault()})});function S(){var t=e.querySelectorAll(".ecom-shopify__menu-list .ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-list .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item"),a=e.querySelectorAll(".ecom-shopify__menu-list--mobile .ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-list--mobile .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item");if(!!t){var u,g="false",k=e.querySelector(".ecom-shopify__menu-wrapper");if(k&&k.dataset.showAll)var g=k.dataset.showAll;for(u=0;u<t.length;u++){let b=function(o){let r=o.nextElementSibling,_=null;if(o.classList.contains("ecom-item-active")){if(o.classList.remove("ecom-item-active"),r){r.style.maxHeight=null;var $=r.querySelectorAll(".ecom-menu_item");$&&$.forEach(z=>{var L=z.nextElementSibling;L&&(L.style.maxHeight=null),z.classList.remove("ecom-item-active")}),_=o.closest(".ecom-shopify__menu-sub-menu"),_&&(_.style.maxHeight=parseInt(_.style.maxHeight)-r.scrollHeight+"px")}}else o.classList.add("ecom-item-active"),r&&(_=o.closest(".ecom-shopify__menu-sub-menu"),_&&(_.style.maxHeight=parseInt(_.style.maxHeight)+r.scrollHeight+"px"),r.style.maxHeight=r.scrollHeight+"px")};c==="horizontal"&&!i.isLive?t[u].addEventListener("click",function(o){o.preventDefault()}):c==="horizontal"&&i.isLive?t[u].addEventListener("click",function(o){o.stopPropagation()}):(c==="vertical"||!i.isLive)&&(g&&g=="true"&&b(t[u]),t[u].addEventListener("click",function(o){o.preventDefault(),b(this)})),a[u]&&a[u].addEventListener("click",function(o){o.preventDefault(),b(this)})}}}S()

                    });
                    
                        document.querySelectorAll('.ecom-w39tk42tk1s').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-w39tk42tk1s', settings: {"layout":"vertical"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-dm7t8tu57g').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-dm7t8tu57g', settings: {"layout":"vertical"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-48uwjrws23p"]=  window.__ectimmers["ecom-48uwjrws23p"] || {};
var e=this.$el;if(e&&this.isLive){var o=e.querySelectorAll(".element-social-link:not(.element-social-link__custom)");o.length&&o.forEach(function(s){var n=s.getAttribute("href")||"#",r=n.replace("{current-link}",location.href);s.setAttribute("href",r)})}

                    });
                    
                        document.querySelectorAll('.ecom-48uwjrws23p').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-48uwjrws23p', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-681riw5rd66').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-681riw5rd66', settings: {},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}