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

  const shakeAnimation = e => {
    if (e.keyCode === 37 || e.target === elements.prevEl) {
      elements.prevEl.classList.add('shake');
    } else if (e.keyCode === 39 || e.target === elements.nextEl) {
      elements.nextEl.classList.add('shake');
    }
  };

  const removeAnimation = () => {
    elements.prevEl.classList.remove('shake');
    elements.nextEl.classList.remove('shake');
  };

  // 3. Events
  elements.imgs.forEach((img, i) => {
    function selectImg(e) {
      if (window.innerWidth >= 889) {
        if (e.type === 'click' || e.keyCode === 13) {
          elements.modalCheck.checked = false;
          elements.modal.classList.add('open');
          elements.modalImg.src = e.target.src;

          const { imgs } = elements;

          function slideShow(e) {
            if (elements.modal.classList.contains('open')) {
              if (e.keyCode === 37 || e.target === elements.prevEl) {
                i -= 1;
                if (i < 0) {
                  i = imgs.length - 1;
                }
              } else if (e.keyCode === 39 || e.target === elements.nextEl) {
                i += 1;
                if (i >= imgs.length) {
                  i = 0;
                }
              }

              elements.modalImg.src = imgs[i].src;
            }
          }

          window.addEventListener('click', slideShow);
          window.addEventListener('keydown', slideShow);
        }
      }
    }

    img.addEventListener('click', selectImg);
    img.closest('a').addEventListener('keydown', selectImg);
  });

  elements.modal.addEventListener('click', removeModal);
  window.addEventListener('keydown', removeModal);
  window.addEventListener('click', shakeAnimation);
  window.addEventListener('keydown', shakeAnimation);
  window.addEventListener('animationend', removeAnimation);
}
