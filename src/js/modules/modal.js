// 1. Selectors
import { elements } from './DOMelements';

// 2. Actions
if (elements.closeModal) {
  function selectImg(e) {
    if (window.innerWidth >= 889) {
      elements.modalCheck.checked = false;
      elements.modal.style.opacity = 1;
      elements.modal.style.visibility = 'visible';
      elements.modalImg.style.display = 'block';
      elements.modalImg.src = e.target.src;
    }
  }

  const close = e => {
    e.stopPropagation();
    elements.modal.style.opacity = 0;
    elements.modal.style.visibility = 'hidden';
    elements.modalImg.style.display = 'none';
    elements.modalImg.src = '';
  };

  // 3. Events
  elements.imgs.forEach(img => {
    img.addEventListener('click', selectImg);
  });

  elements.modal.addEventListener('click', close);

  elements.closeModal.addEventListener('click', close);
}
