// Xử lý scroll mượt cho anchor và đổi style nav khi cuộn trang
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const nav = document.getElementById('site-nav');
const heroImage = document.getElementById('hero-image');
const navSolid = nav?.dataset.navSolid === 'true';

/** Đồng bộ trạng thái nav theo vị trí scroll hiện tại */
function updateNav() {
  const scrolled = window.pageYOffset;
  if (nav) nav.classList.toggle('nav-scrolled', navSolid || scrolled > 60);
  if (heroImage) heroImage.style.transform = `translateY(${scrolled * 0.25}px) scale(1.05)`;
}

if (nav && navSolid) {
  nav.classList.add('nav-scrolled');
}

window.addEventListener('scroll', updateNav, { passive: true });
// Khôi phục đúng màu khi reload/back-forward giữ vị trí scroll
window.addEventListener('pageshow', updateNav);
window.addEventListener('load', updateNav);
updateNav();
