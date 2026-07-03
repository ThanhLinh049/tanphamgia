/** Nội dung trang Tài liệu — Sitemap 6.1 → 6.5 (slug chuẩn: /tai-lieu) */

export const taiLieuSeo = {
  title: 'Catalogue Đồng Phục Doanh Nghiệp & Hồ Sơ Năng Lực',
  description:
    'Tải miễn phí catalogue đồng phục, hồ sơ năng lực, tài liệu hướng dẫn lựa chọn và triển khai đồng phục cho doanh nghiệp.',
};

export const taiLieuHeader = {
  eyebrow: 'Tài liệu',
  title: 'Thư viện tài liệu',
  desc: 'Tải miễn phí bộ tài liệu dành cho người phụ trách đồng phục doanh nghiệp — miễn phí, gửi qua email ngay.',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAOXcJjYusFwlUjGTmmTS_HHhtnC_vi6jPYSS9yLHlekPfnszOwTSUO1NCB_oUSrCZI2_-AYTuZuEhrgYSg14nDUOw8a9isE3OefB1Hs0shHZgAQRU14UI7M-CRsnFqFjNjVbOIR1uc5ulgWqAWn20a6HzqwJ5DLmOAdI9GdFSOWEiTh8DNYtmR_sRsGhX0v2JQQatAopWgHNAUCGjXHfQlQWbPjuaeGX9RXfwbc0Wpm_Gk9UOy0qyi3qIsHr5Li0WV0BjVcq-a2Ok',
};

export interface TaiLieuItem {
  title: string;
  /** Meta hiển thị: định dạng, số trang, dung lượng — chỉ điền khi khách cung cấp */
  meta?: string;
}

/** 6.2 — Tài liệu thương hiệu */
export const brandDocs: TaiLieuItem[] = [
  { title: 'Hồ sơ năng lực 2026', meta: 'PDF · 32 trang · 8,4 MB' },
  { title: 'Proposal mẫu — Giải pháp đồng phục', meta: 'PDF · 18 trang · 5,8 MB' },
];

/** 6.3 — Catalogue sản phẩm */
export const catalogues: TaiLieuItem[] = [
  { title: 'Catalogue Văn phòng & Công sở 2026' },
  { title: 'Catalogue Polo doanh nghiệp 2026' },
  { title: 'Catalogue F&B & Dịch vụ 2026' },
  { title: 'Catalogue Công nghiệp & Bảo hộ 2026' },
  { title: 'Catalogue Y tế & Spa 2026' },
  { title: 'Catalogue Thể thao & Sự kiện 2026' },
];

/** 6.4 — Tài liệu hữu ích */
export const guides: TaiLieuItem[] = [
  { title: 'Hướng dẫn chọn chất liệu đồng phục theo môi trường làm việc' },
  { title: 'Hướng dẫn đo size và phân bổ size cho đơn hàng số lượng lớn' },
  { title: 'Checklist chuẩn bị trước khi đặt đồng phục doanh nghiệp' },
  { title: 'Tổng hợp phương pháp & kỹ thuật in/thêu logo đồng phục' },
  { title: 'Bộ tài liệu chất liệu chuyên biệt dành riêng cho môi trường sản xuất' },
];

/** 6.5 — Form thu thập thông tin: 4 cam kết (tổng hợp từ tài liệu khách: 6.1, 7.5 & cam kết bảo mật) */
export const formCommitments = [
  'Hoàn toàn miễn phí',
  'Gửi link tải qua email ngay',
  'Bảo mật thông tin doanh nghiệp',
  'Phản hồi trong 24 giờ làm việc',
];

/** Lựa chọn ngành trong form — theo 4 nhóm giải pháp */
export const formIndustries = [
  'Sản xuất & FDI',
  'Văn phòng & Tập đoàn',
  'FMCG & Chuỗi phân phối',
  'Y tế, Spa & Dịch vụ',
  'Ngành khác',
];
