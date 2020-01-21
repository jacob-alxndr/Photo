/* eslint-disable no-inner-declarations */
import { elements } from './DOMelements';

if (elements.closeModal) {
  // 1. Selectors
  let currentIndex;
  const { imgs } = elements;
  const keyCode = { esc: 27, leftAr: 37, rightAr: 39, ent: 13 };
  // 2. Actions

  const checkOutside = e => {
    if (e.type === 'click') {
      const notPrevBtn = e.target !== elements.prevEl;
      const notNextBtn = e.target !== elements.nextEl;
      const isOutside =
        !e.target.closest('img') &&
        notPrevBtn &&
        notNextBtn &&
        !e.target.closest('.modal__button');
      if (e.target.closest('.modal__button') === true) {
        removeModal();
      } else if (isOutside) {
        removeModal();
      }
    } else if (e.keyCode === keyCode.esc) {
      removeModal();
    } else if (e.type === 'scroll') {
      removeModal();
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

  const prev = () => {
    currentIndex -= 1;

    if (currentIndex < 0) {
      currentIndex = imgs.length - 1;
    }

    const prevImg = imgs[currentIndex].src;
    updateImgSrc(prevImg);
  };
  const next = () => {
    currentIndex += 1;
    if (currentIndex >= imgs.length) {
      currentIndex = 0;
    }
    const nextImg = imgs[currentIndex].src;
    updateImgSrc(nextImg);
  };

  function slideShow(e) {
    const { modalImg } = elements;

    if (elements.modal.classList.contains('open')) {
      if (e.keyCode === keyCode.leftAr || e.target === elements.prevEl) {
        prev();
      } else if (
        e.keyCode === keyCode.rightAr ||
        e.target === elements.nextEl
      ) {
        next();
      }
    }
  }

  const updateImgSrc = imgSrc => {
    const { modalImg } = elements;

    modalImg.src = imgSrc;
  };

  // 3. Events
  elements.imgs.forEach((img, i) => {
    function openModal(e) {
      if (window.innerWidth >= 889) {
        if (e.type === 'click') {
          elements.modalCheck.checked = false;
          elements.modal.classList.add('open');
          currentIndex = i;

          updateImgSrc(e.target.src);
        } else if (e.keyCode === keyCode.ent) {
          elements.modalCheck.checked = false;
          elements.modal.classList.add('open');
          currentIndex = i;

          updateImgSrc(e.target.querySelector('img').src);
        }
      }
    }

    img.addEventListener('click', openModal);
    img.closest('a').addEventListener('keydown', openModal);
  });

  const removeModal = e => {
    if (elements.modal.classList.contains('open')) {
      elements.modal.classList.remove('open');
      elements.modalCheck.checked = true;
    }
  };

  // Events
  elements.prevEl.addEventListener('animationend', removeAnimation);
  elements.nextEl.addEventListener('animationend', removeAnimation);
  elements.closeModal.addEventListener('click', checkOutside);
  elements.modal.addEventListener('click', checkOutside);
  window.addEventListener('keydown', checkOutside);
  window.addEventListener('click', slideShow);
  window.addEventListener('keydown', slideShow);
  window.addEventListener('click', shakeAnimation);
  window.addEventListener('keydown', shakeAnimation);
  window.addEventListener('scroll', checkOutside);
}
