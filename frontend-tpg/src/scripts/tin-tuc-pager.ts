// Phân trang bài viết phía client — mobile 4 bài/trang, desktop (≥768px) 12 bài/trang.
// Đổi kích thước trang khi resize qua breakpoint; no-JS thì mọi bài đều hiển thị.
const list = document.querySelector<HTMLElement>('[data-tt-list]');

if (list) {
  const items = Array.from(list.querySelectorAll<HTMLElement>('[data-tt-item]'));
  const pager = list.querySelector<HTMLElement>('[data-tt-pager]');
  const desktop = window.matchMedia('(min-width: 768px)');

  let page = 1;

  const pageSize = () => (desktop.matches ? 12 : 4);

  const btnBase =
    'inline-flex items-center justify-center w-11 h-11 text-sm transition-colors duration-300';
  const btnIdle = `${btnBase} border border-border-subtle text-ink-dark font-semibold hover:border-ink-dark`;
  const btnActive = `${btnBase} bg-brass text-ink-dark font-bold`;
  const btnDisabled = `${btnBase} border border-border-subtle/50 text-text-muted/40`;

  function makeButton(label: string, className: string, onClick?: () => void, ariaLabel?: string) {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = className;
    el.textContent = label;
    if (ariaLabel) el.setAttribute('aria-label', ariaLabel);
    if (onClick) el.addEventListener('click', onClick);
    else el.disabled = true;
    return el;
  }

  function go(target: number, pages: number) {
    page = Math.min(Math.max(target, 1), pages);
    render();
    list!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function render() {
    const size = pageSize();
    const pages = Math.max(1, Math.ceil(items.length / size));
    if (page > pages) page = pages;

    const start = (page - 1) * size;
    items.forEach((el, i) => {
      el.classList.toggle('hidden', i < start || i >= start + size);
    });

    if (!pager) return;
    pager.innerHTML = '';
    if (pages <= 1) {
      pager.classList.add('hidden');
      pager.classList.remove('flex');
      return;
    }
    pager.classList.remove('hidden');
    pager.classList.add('flex');

    pager.appendChild(
      page > 1
        ? makeButton('←', btnIdle, () => go(page - 1, pages), 'Trang trước')
        : makeButton('←', btnDisabled, undefined, 'Trang trước'),
    );

    for (let p = 1; p <= pages; p += 1) {
      const current = p === page;
      const btn = makeButton(String(p), current ? btnActive : btnIdle, current ? undefined : () => go(p, pages));
      if (current) btn.setAttribute('aria-current', 'page');
      pager.appendChild(btn);
    }

    pager.appendChild(
      page < pages
        ? makeButton('→', btnIdle, () => go(page + 1, pages), 'Trang sau')
        : makeButton('→', btnDisabled, undefined, 'Trang sau'),
    );
  }

  // Đổi kích thước trang khi vượt breakpoint mobile/desktop
  desktop.addEventListener('change', () => {
    page = 1;
    render();
  });

  render();
}
