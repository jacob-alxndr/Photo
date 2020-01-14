/* eslint-disable no-inner-declarations */
// 1. Selectors
import { elements } from './DOMelements';

// 2. Actions
if (elements.closeModal) {
  function selectImg(e) {
    if (window.innerWidth >= 889) {
      if (e.type === 'click') {
        const { index } = e.target.dataset;

        elements.modalCheck.checked = false;
        elements.modal.classList.add('open');
        elements.modalImg.src = e.target.src;

        let num = 0;
        const ar = Array.from(elements.imgs);
        num = parseInt(index);
        function prev(e) {
          if (elements.modal.classList.contains('open')) {
            if (e.keyCode === 37 || e.type === 'click') {
              num -= 1;
              if (num < 0) {
                num = ar.length - 1;
              }

              elements.modalImg.src = ar[num].src;
            }
          }
        }
        function next(e) {
          if (elements.modal.classList.contains('open')) {
            if (e.keyCode === 39 || e.type === 'click') {
              num += 1;
              if (num >= ar.length) {
                num = 0;
              }

              elements.modalImg.src = ar[num].src;
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

  // 3. Events
  elements.imgs.forEach(img => {
    img.addEventListener('click', selectImg);
    img.closest('a').addEventListener('keydown', selectImg);
  });

  elements.modal.addEventListener('click', removeModal);
  elements.closeModal.addEventListener('click', removeModal);
  window.addEventListener('keydown', removeModal);
}
