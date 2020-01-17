/* eslint-disable no-inner-declarations */
import { elements } from './DOMelements';

if (elements.closeModal) {
  // 1. Selectors
  let index;
  const keyCode = { esc: 27, leftAr: 37, rightAr: 39, ent: 13 };
  // 2. Actions
  const removeModal = e => {
    if (elements.modal.classList.contains('open')) {
      if (e.type === 'click') {
        const notPrevBtn = e.target !== elements.prevEl;
        const notNextBtn = e.target !== elements.nextEl;
        const isOutside =
          !e.target.closest('.image-container') && notPrevBtn && notNextBtn;
        if (isOutside) {
          elements.modal.classList.remove('open');
        }
      } else if (e.type === 'keydown') {
        const escKey = e.keyCode;
        if (escKey === keyCode.esc) {
          elements.modal.classList.remove('open');
        }
      }
    }
  };

  const shakeAnimation = e => {
    if (e.keyCode === keyCode.leftAr || e.target === elements.prevEl) {
      elements.prevEl.classList.add('shake');
    } else if (e.keyCode === keyCode.rightAr || e.target === elements.nextEl) {
      elements.nextEl.classList.add('shake');
    }
  };

  const removeAnimation = () => {
    elements.prevEl.classList.remove('shake');
    elements.nextEl.classList.remove('shake');
  };

  function slideShow(e) {
    const { imgs } = elements;
    const prev = () => {
      index -= 1;

      if (index < 0) {
        index = imgs.length - 1;
      }
    };
    const next = () => {
      index += 1;
      if (index >= imgs.length) {
        index = 0;
      }
    };
    if (elements.modal.classList.contains('open')) {
      if (e.keyCode === keyCode.leftAr || e.target === elements.prevEl) {
        prev();
      } else if (
        e.keyCode === keyCode.rightAr ||
        e.target === elements.nextEl
      ) {
        next();
      }

      elements.modalImg.src = imgs[index].src;
    }
  }

  // 3. Events
  elements.imgs.forEach((img, i) => {
    function openModal(e) {
      if (window.innerWidth >= 889) {
        if (e.type === 'click' || e.keyCode === keyCode.ent) {
          elements.modalCheck.checked = false;
          elements.modal.classList.add('open');
          elements.modalImg.src = e.target.src;

          index = i;
        }
      }
    }

    img.addEventListener('click', openModal);
    img.closest('a').addEventListener('keydown', openModal);
  });

  elements.prevEl.addEventListener('animationend', removeAnimation);
  elements.nextEl.addEventListener('animationend', removeAnimation);
  elements.modal.addEventListener('click', removeModal);
  window.addEventListener('keydown', removeModal);
  window.addEventListener('click', slideShow);
  window.addEventListener('keydown', slideShow);
  window.addEventListener('click', shakeAnimation);
  window.addEventListener('keydown', shakeAnimation);
}
