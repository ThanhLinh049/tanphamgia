/** Slider tin tức mobile — vòng lặp vô hạn khi vuốt trái/phải */
function initNewsSlider(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('.home-news-slider');
  if (!track) return;

  const slides = track.querySelectorAll<HTMLElement>('.home-news-slide');
  const totalSets = 3;
  const count = slides.length / totalSets;

  if (!Number.isInteger(count) || count < 2) return;

  let isJumping = false;
  let scrollTimer: ReturnType<typeof setTimeout> | undefined;

  const getSlideStep = () => {
    const first = slides[0];
    const second = slides[1];
    if (!first) return 0;
    if (second) return second.offsetLeft - first.offsetLeft;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    return first.offsetWidth + gap;
  };

  const jumpTo = (left: number) => {
    isJumping = true;
    track.style.scrollSnapType = 'none';
    track.scrollLeft = left;
    requestAnimationFrame(() => {
      track.style.scrollSnapType = '';
      isJumping = false;
    });
  };

  const alignToMiddleSet = () => {
    const step = getSlideStep();
    if (step <= 0) return;
    jumpTo(step * count);
  };

  const handleScrollEnd = () => {
    if (isJumping) return;

    const step = getSlideStep();
    if (step <= 0) return;

    const index = Math.round(track.scrollLeft / step);

    if (index < count) {
      jumpTo(track.scrollLeft + step * count);
      return;
    }

    if (index >= count * 2) {
      jumpTo(track.scrollLeft - step * count);
    }
  };

  const scheduleScrollEnd = () => {
    if (isJumping) return;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(handleScrollEnd, 80);
  };

  alignToMiddleSet();

  track.addEventListener('scroll', scheduleScrollEnd, { passive: true });
  track.addEventListener('scrollend', handleScrollEnd);
  window.addEventListener('resize', alignToMiddleSet);
  window.addEventListener('pageshow', alignToMiddleSet);
}

document.querySelectorAll<HTMLElement>('[data-news-slider]').forEach(initNewsSlider);
