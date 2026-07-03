// Hiệu ứng hiện dần khi cuộn — gắn class .js-reveal để CSS chỉ ẩn phần tử khi JS sẵn sàng (no-JS vẫn thấy đủ nội dung)
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!reduced && 'IntersectionObserver' in window && els.length > 0) {
  document.documentElement.classList.add('js-reveal');

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
  );

  els.forEach((el) => io.observe(el));
}
