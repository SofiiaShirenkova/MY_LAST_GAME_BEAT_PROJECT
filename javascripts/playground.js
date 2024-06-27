$(document).ready(function() {
  $(function() {
      $(".draggable1, .draggable2, .draggable3, .draggable4, .draggable5, .draggable6, .draggable7, .draggable8, .draggable9, .draggable10, .draggable11, .draggable12, .draggable13, .draggable14, .draggable15, .draggable16, .draggable17, .draggable18, .draggable19, .draggable20, .draggable21, .draggable22, .draggable23, .draggable24, .draggable25, .draggable26, .draggable27, .draggable28, .draggable29, .draggable30, .draggable31, .draggable32, .draggable33, .draggable34, .draggable35, .draggable36, .draggable37, .draggable38, .draggable39, .draggable40, .draggable41").draggable();
  }); //помогает двигать эллемент по веб странице
  
});


document.addEventListener("DOMContentLoaded", function() {

});

//рандомное расположение блоков

;(() => {
  "use strict";
  const TRIES_PER_BOX = 50;
  const randUint = range => Math.random() * range | 0;
  const placing  = [...document.querySelectorAll(".draggable1, .draggable2, .draggable3, .draggable4, .draggable5, .draggable6, .draggable7, .draggable8, .draggable9, .draggable10, .draggable11, .draggable12, .draggable13, .draggable14, .draggable15, .draggable16, .draggable17, .draggable18, .draggable19, .draggable20, .draggable21, .draggable22, .draggable23, .draggable24, .draggable25, .draggable26, .draggable27, .draggable28, .draggable29, .draggable30, .draggable31, .draggable32, .draggable33, .draggable34, .draggable35, .draggable36, .draggable37, .draggable38, .draggable39, .draggable40, .draggable41")].map(el => Bounds(el, 5));
  const fitted = [];
  const areaToFit = Bounds();
  var maxTries = TRIES_PER_BOX * placing.length;
  while (placing.length && maxTries > 0) {
      let i = 0;
      while (i < placing.length) {
          const box = placing[i];
          box.moveTo(randUint(areaToFit.w - box.w), randUint(areaToFit.h - box.h));
          if (fitted.every(placed => !placed.overlaps(box))) {
              fitted.push(placing.splice(i--, 1)[0].placeElement());
          } else { maxTries-- }
          i++;
      }
  } 
  function Bounds(el, pad = 0) {   
      const box = el?.getBoundingClientRect() ?? {
          left: 0, top: 0, 
          right: innerWidth, bottom: innerHeight, 
          width: innerWidth, height: innerHeight
      };
      return {
          l: box.left - pad, 
          t: box.top - pad, 
          r: box.right + pad, 
          b: box.bottom + pad,
          w: box.width + pad * 2,
          h: box.height + pad * 2,
          overlaps(bounds) { 
              return !(
                  this.l > bounds.r || 
                  this.r < bounds.l || 
                  this.t > bounds.b || 
                  this.b < bounds.t
              ); 
          },
          moveTo(x, y) {
              this.r = (this.l = x) + this.w;
              this.b = (this.t = y) + this.h;
              return this;
          },
          placeElement() {
              if (el) {
                  el.style.top = (this.t + pad) + "px";
                  el.style.left = (this.l + pad) + "px";
              }
              return this;
          }
      };
  }
  })();