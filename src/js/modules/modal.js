// 1. Selectors
import { elements } from './DOMelements';

// 2. Actions
if (elements.closeModal) {
  function selectImg(e) {
    if (window.innerWidth >= 889) {
      if (e.type === 'click') {
        const link = e.target.closest('a');
        // link.preventDefault();
        console.dir(e);
        elements.modalCheck.checked = false;
        elements.modal.classList.add('open');
        elements.modalImg.src = e.target.src;
      } else if (e.type === 'keydown') {
        const ent = e.keyCode;
        console.log(e.keyCode);
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
        // console.log(e.target);

        const isOutside = !e.target.closest('.image-container');
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
