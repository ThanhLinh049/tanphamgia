/** Nội dung trang Tin tức — Sitemap 5.1 → 5.2 (bài viết sẽ đồng bộ WordPress sau) */

import { blogPosts, type BlogPost } from './site';

/** Số bài viết trên mỗi trang danh sách */
export const POSTS_PER_PAGE = 12;

/**
 * Nguồn cấp bài viết cho trang danh sách.
 * Khi tích hợp Headless WordPress: thay phần thân hàm bằng fetch REST/WPGraphQL
 * (kèm try/catch + fallback) — giao diện không cần đổi.
 */
export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export const tinTucSeo = {
  title: 'Kiến Thức Đồng Phục Doanh Nghiệp & Xu Hướng Mới Nhất',
  description:
    'Chia sẻ kiến thức quản lý đồng phục, lựa chọn chất liệu, kinh nghiệm triển khai và xu hướng đồng phục doanh nghiệp mới nhất.',
};

export const tinTucHeader = {
  eyebrow: 'Tin tức',
  title: 'Tin tức & Kiến thức chuyên ngành',
  desc: 'Chia sẻ kiến thức quản lý đồng phục, lựa chọn chất liệu, kinh nghiệm triển khai và xu hướng đồng phục doanh nghiệp mới nhất.',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCUCALWa0oFU7OKFjiBXUFunl-EAmIMgQCyigWDHw0ygrHQQHgLkJPPxiKsIfefwZ45gu7Vp7KGaMW46IG1NWeOfI_8JJ-hfx1ifvzN4Q12UllmDyRQH03tO-IqkNP5n2xhuWrRVHfcxeQDAccVK1NKO6NKr0zBEEIwe_td6ed5jtF0KNYrs0816DjsRDtXA8t7uikeixstCSpLUdcH5tneawAIDnGVr5yRawVu7HH5_o_Y93p4LoykxfU0f3CLSA6s3dINtL6hoTQ',
};

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

/** Chuyển tên chuyên mục tiếng Việt thành slug URL (bỏ dấu, kebab-case) */
export function slugifyCategory(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Danh sách chuyên mục duy nhất kèm số bài — suy ra từ bài viết, không khai báo tay */
export function getCategories(): BlogCategory[] {
  const counter = new Map<string, BlogCategory>();
  for (const post of getAllPosts()) {
    const slug = slugifyCategory(post.category);
    const existing = counter.get(slug);
    if (existing) {
      existing.count += 1;
    } else {
      counter.set(slug, { name: post.category, slug, count: 1 });
    }
  }
  return [...counter.values()];
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((post) => slugifyCategory(post.category) === categorySlug);
}
