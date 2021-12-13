const animItems = document.querySelectorAll('._anim-items');

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function animOnScroll() {
  animItems.forEach((animItem) => {
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    const scrolledToObject =
      window.pageYOffset > animItemOffset - animItemPoint;
    const didNotScrollObject =
      window.pageYOffset < animItemOffset + animItemHeight;

    if (scrolledToObject && didNotScrollObject) {
      animItem.classList.add('_active');
    } else {
      if (!animItem.classList.contains('_anim-no-hide')) {
        animItem.classList.remove('_active');
      }
    }
  });
  setTimeout(() => animOnScroll(), 600);
}

window.addEventListener('scroll', animOnScroll);
