
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('[data-filter]').forEach((input) => {
  const selector = input.getAttribute('data-filter');
  const items = Array.from(document.querySelectorAll(selector));
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    items.forEach((item) => {
      item.hidden = q && !item.textContent.toLowerCase().includes(q);
    });
  });
});

const back = document.querySelector('[data-back-to-top]');
if (back) {
  window.addEventListener('scroll', () => back.classList.toggle('visible', window.scrollY > 700));
  back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
