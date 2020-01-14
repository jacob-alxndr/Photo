/* eslint-disable no-inner-declarations */
// 1. Selectors
import { elements } from './DOMelements';

// 2. Actions
if (elements.closeModal) {
  const removeModal = e => {
    if (elements.modal.classList.contains('open')) {
      if (e.type === 'click') {
        const prev = e.target === elements.prevEl;
        const next = e.target === elements.nextEl;
        const isOutside = !e.target.closest('.image-container');
        if (prev || next) {
          return false;
        }
        if (isOutside) {
          elements.modal.classList.remove('open');
        }
      } else if (e.type === 'keydown') {
        const esc = e.keyCode;
        if (esc === 27) {
          elements.modal.classList.remove('open');
        }
      }
    }
  };

  const fluff = e => {
    if (e.keyCode === 37) {
      elements.prevEl.classList.add('fluff');
      console.log('true');
    } else if (e.keyCode === 39) {
      elements.nextEl.classList.add('fluff');
      console.log('true');
    }
  };

  const removeAnimation = e => {
    elements.prevEl.classList.remove('fluff');
    elements.nextEl.classList.remove('fluff');
    // console.log('3');
  };

  elements.prevEl.addEventListener('animationend', removeAnimation);
  elements.nextEl.addEventListener('animationend', removeAnimation);

  // 3. Events
  elements.imgs.forEach((img, i) => {
    function selectImg(e) {
      if (window.innerWidth >= 889) {
        if (e.type === 'click') {
          elements.modalCheck.checked = false;
          elements.modal.classList.add('open');
          elements.modalImg.src = e.target.src;

          const { imgs } = elements;

          function prev(e) {
            if (elements.modal.classList.contains('open')) {
              if (e.keyCode === 37 || e.type === 'click') {
                i -= 1;
                if (i < 0) {
                  i = imgs.length - 1;
                }

                elements.modalImg.src = imgs[i].src;
              }
            }
          }
          function next(e) {
            if (elements.modal.classList.contains('open')) {
              if (e.keyCode === 39 || e.type === 'click') {
                i += 1;
                if (i >= imgs.length) {
                  i = 0;
                }

                elements.modalImg.src = imgs[i].src;
              }
            }
          }
          elements.prevEl.addEventListener('click', prev);
          elements.nextEl.addEventListener('click', next);
          window.addEventListener('keydown', next);
          window.addEventListener('keydown', prev);
        }
        if (e.type === 'keydown') {
          const ent = e.keyCode;
          if (ent === 13) {
            elements.modalCheck.checked = false;
            elements.modal.classList.add('open');
            elements.modalImg.src = e.target.querySelector('img').src;
          }
        }
      }
    }

    img.addEventListener('click', selectImg);
    img.closest('a').addEventListener('keydown', selectImg);
  });

  elements.modal.addEventListener('click', removeModal);
  elements.closeModal.addEventListener('click', removeModal);
  window.addEventListener('keydown', removeModal);
  window.addEventListener('keydown', fluff);
}
