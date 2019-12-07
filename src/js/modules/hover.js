// 1. Selectors
import { elements } from './DOMelements';

// 2. Actions

// 3. Events

const hover = () => {
  if (window.innerWidth > 800) {
    elements.menuItem.forEach(item => {
      item.addEventListener('mouseover', function() {
        elements.imgs.forEach(img => {
          if (img.getAttribute('data-tag') === item.getAttribute('data-tag')) {
            img.style.display = 'block';
            img.style.opacity = 1;
            img.style.visibility = 'visible';

            if (window.innerWidth < 800) {
              img.style.display = 'none';
              img.style.opacity = 0;
              img.style.visibility = 'hidden';
            }
          } else {
            img.style.display = 'none';
            img.style.opacity = 0;
            img.style.visibility = 'hidden';
          }
        });
      });
    });
  }
};

window.addEventListener('load', hover);
window.addEventListener('resize', hover);
