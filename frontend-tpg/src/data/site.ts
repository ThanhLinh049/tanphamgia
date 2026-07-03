/** Dữ liệu thương hiệu & điều hướng — đồng bộ Sitemap + Google Sheets */

export const seo = {
  title: 'Tân Phạm Gia | Thiết Kế & Sản Xuất áo thun polo đồng phục trọn gói',
  description:
    'Tư vấn, thiết kế và sản xuất đồng phục doanh nghiệp theo yêu cầu. Xưởng may trực tiếp, 23 năm kinh nghiệm, đáp ứng đơn hàng số lượng lớn trên toàn quốc.',
};


/** Điều hướng trang con — đồng bộ URL slug SEO sheet */
export const mainNavigation = [
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Giải pháp', href: '/giai-phap' },
  { label: 'Khách hàng', href: '/khach-hang' },
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Tài liệu', href: '/tai-lieu' },
  { label: 'Liên hệ', href: '/lien-he' },
];

export const brandQuote =
  'Tân Phạm Gia luôn lắng nghe và thấu hiểu để đưa ra giải pháp phù hợp nhất cho doanh nghiệp.';

/** Đầu mối liên hệ dùng chung toàn site (CTA, footer, case studies) */
export const siteContact = {
  email: 'dongphuc@tanphamgia.com.vn',
  phone: '084 3406 406',
  phoneHref: 'tel:0843406406',
};

/** Sitemap 1.7 — Giấy khen & chứng nhận */
export const certificates = [
  { title: 'ISO 9001:2015', desc: 'Hệ thống quản lý chất lượng' },
  { title: 'Hàng Việt Nam CLC', desc: 'Chất lượng cao' },
  { title: 'Tiêu chuẩn Oeko-Tex', desc: 'An toàn vải & môi trường' },
  { title: 'Giấy khen & Bằng khen', desc: 'Đối tác uy tín ngành may' },
];

export const stats = [
  { value: '23+', label: 'Năm kinh nghiệm' },
  { value: '500+', label: 'Doanh nghiệp đồng hành' },
  { value: '1M+', label: 'Sản phẩm đã sản xuất' },
  { value: '30K+', label: 'Sản phẩm / tháng' },
];

export const whyChoose = [
  {
    num: '01',
    title: '23 năm kinh nghiệm may mặc',
    desc: 'Kinh nghiệm tích lũy từ thời trang cao cấp đến đồng phục doanh nghiệp — hiểu sâu chất liệu, form dáng và nhu cầu thực tế.',
  },
  {
    num: '02',
    title: 'Tiên phong "Thời trang hóa"',
    desc: 'Tỷ lệ vàng, Rập 3D và may trên mannequin — sản phẩm vừa chuyên nghiệp vừa tôn dáng, nâng trải nghiệm người mặc.',
  },
  {
    num: '03',
    title: 'Năng lực sản xuất quy mô lớn',
    desc: 'Nhà xưởng 2.000m², 30.000 sp/tháng — linh hoạt từ doanh nghiệp vừa đến tập đoàn và chuỗi hệ thống.',
  },
  {
    num: '04',
    title: 'QC đa tầng nghiêm ngặt',
    desc: 'Kiểm soát từ nguyên liệu đến thành phẩm — đồng bộ chất lượng qua nhiều đợt sản xuất, chủ động tiến độ.',
  },
];

export const solutions = [
  {
    slug: 'san-xuat-fdi',
    title: 'Doanh nghiệp Sản xuất & FDI',
    desc: 'Giải pháp đồng phục tuân thủ an toàn lao động, bền bỉ và đồng nhất hình ảnh thương hiệu.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7szr7Elx-oAqCEnir2uiBqNE-4WpmIm10Kj1YsgXyu1XMFvP0qvIXYrsMpRh9sztusxsq8_7_MFPstpomb4RaDeTg9J3ldf2CSKwYUq91qGdHVM6Dm9YkfE3Rdfay_snBPthtK7WWCq_NFHZ3j3Kua1MgJAT-qQPXwlpAIQIDLIpk4Njn_msEnsXh9DyyRtwkvdNU5u10NXpGyYseM_HBo6gwnr6IFqeZ9gHXI1CrvRQnXAxx3UyIT7UIbTDEMKjd1gdxbZwWKrKl',
    bullets: [
      'Tuân thủ an toàn lao động',
      'Tạo sự thoải mái cho nhân sự làm việc trong môi trường đặc thù',
      'Đồng nhất hình ảnh thương hiệu',
      'Tăng tuổi thọ đồng phục',
    ],
    featured: true,
  },
  {
    slug: 'van-phong-tap-doan',
    title: 'Văn phòng & Tập đoàn',
    desc: 'Giải pháp chuẩn hóa nhận diện thương hiệu và nâng trải nghiệm mặc cho đội ngũ văn phòng.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80',
    bullets: [
      'Xây dựng nhận diện thương hiệu',
      'Hình ảnh chuyên nghiệp, nhất quán',
      'Tự tin, thoải mái và tự hào khi mặc trên 12 tiếng/ngày',
    ],
    featured: true,
  },
  {
    slug: 'fmcg-chuoi-phan-phoi',
    title: 'FMCG & Chuỗi phân phối',
    desc: 'Giải pháp đồng phục giúp tăng nhận diện tại điểm bán và truyền tải thông điệp chiến dịch.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOKUFLheAUb34f4xZiQpBUrQkm8680rBXAVAzao8_wuHeyIyWND-1cnAQbOA80ZWqijWzCjrT8gQCg3KjzFmJBymeebvX3xAyN1bsI0U7rmrmGsrCXdZem8Gvt-DNISTMBEE0l3VQmRo_xJBZp5yZs4uww3eEz7DQr_tCWj9bUtE2NbhImbI_LOorZXgpwuA9vWl8aOidIp9nNAcBCCDzqHtly-0yVY4MutTrPKvDAl_j0ErFC1I8gCoeb9QJJAMslPyO1ylQAMk',
    bullets: [
      'Hỗ trợ xây dựng nhận diện thương hiệu tại điểm bán',
      'Truyền tải thông điệp, tạo ấn tượng trong chiến dịch quảng bá',
      'Chất lượng cao tăng tuổi thọ đồng phục mặc hằng ngày',
    ],
    featured: true,
  },
  {
    slug: 'y-te-spa-dich-vu',
    title: 'Y tế, Spa & Dịch vụ',
    desc: 'Giải pháp đồng phục chất lượng cao cho môi trường đặc thù, đề cao thoải mái và thẩm mỹ.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxP6CFZlp3ggmwGEczcGuTImTcqVax4g1QmQUxHl1DEUyVAHj0mdNbxUD-EqS0F3NQNzNfbQN0ax9SIZ62ID0h1-x0UQyRqMxIcqji0Cu5nzwa_SLGBitLXLnORAxIjqlduZZUPE6upya0xjD-YldIjtwbptXZof83YaJpRItUxQzd9vn77CMyaTSd27VeqXiC6LQ61cE-PDK4tWlWjVlq7PuD1BVQYDnywiA_dC08kRpIMCQiDZhZG7GEehac2rkhi_CnAmr-JWA',
    bullets: [
      'Đồng phục chất lượng cao phù hợp môi trường đặc thù',
      'Thiết kế đề cao sự thoải mái, linh hoạt và tính thẩm mỹ',
      'Chất lượng tốt, tăng tuổi thọ đồng phục mặc hằng ngày',
    ],
    featured: true,
  },
];

/** Dự án tiêu biểu trên trang chủ — section #du-an */
export interface HomeFeaturedCaseStat {
  value: string;
  label: string;
}

export interface HomeFeaturedCase {
  name: string;
  image: string;
  alt: string;
  href?: string;
  tag?: string;
  desc?: string;
  stats?: HomeFeaturedCaseStat[];
  statHighlight?: { value: string; suffix: string; valueClass?: 'gold' | 'white' };
}

export const homeFeaturedCases = {
  featured: {
    name: 'Coca-Cola Philippines',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop&q=80',
    alt: 'Dự án đồng phục Coca-Cola Philippines',
    tag: 'Doanh nghiệp FDI',
    href: '/giai-phap/van-phong-tap-doan/du-an/coca-cola-philippines',
    desc: 'Triển khai đồng phục đồng nhất với hệ thống nhận diện thương hiệu toàn cầu — duyệt mẫu nhiều bước, kiểm soát chất lượng xuyên suốt dù toàn bộ quy trình phê duyệt thực hiện từ xa.',
    stats: [
      { value: '500+', label: 'sản phẩm' },
      { value: '60 ngày', label: 'triển khai' },
    ],
  } satisfies HomeFeaturedCase,
  secondary: [
    {
      name: 'BV Răng Hàm Mặt Sài Gòn',
      image:
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80',
      alt: 'Dự án đồng phục BV Răng Hàm Mặt Sài Gòn',
      href: '/giai-phap/y-te-spa-dich-vu/du-an/bv-rang-ham-mat-sai-gon',
      statHighlight: { value: '650', suffix: 'sp Scrub & Blouse', valueClass: 'gold' },
    },
    {
      name: 'VIVANT',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80',
      alt: 'Dự án đồng phục VIVANT',
      href: '/giai-phap/fmcg-chuoi-phan-phoi/du-an/vivant',
      statHighlight: { value: '1.250', suffix: 'sản phẩm', valueClass: 'white' },
    },
  ] satisfies HomeFeaturedCase[],
  quote: {
    text: 'Điều tôi đánh giá cao là khả năng kiểm soát chất lượng của Tân Phạm Gia. Từ mẫu duyệt đến thành phẩm đều được thực hiện nhất quán, quy trình phối hợp rõ ràng và đội ngũ luôn chủ động xử lý khi có phát sinh.',
    author: 'Lê Văn Tùng — Factory Ops Manager, Coca-Cola Philippines',
  },
  contact: {
    ...siteContact,
    ctaLabel: 'Nhận tư vấn',
    ctaHref: '/#lien-he',
  },
  allProjectsHref: '/giai-phap',
};

/** Bài viết tin tức — section #tin-tuc (sẽ đồng bộ WordPress sau) */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor?: string;
  badge?: string;
  image: string;
  alt: string;
  href?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'chon-vai-polo-khi-hau-viet-nam',
    title: 'Cách chọn vải Polo phù hợp với khí hậu Việt Nam',
    excerpt: 'Phân tích ưu nhược điểm của 5 dòng vải sợi tự nhiên thịnh hành nhất 2024...',
    category: 'Kiến Thức Vải',
    categoryColor: '#0d9488',
    badge: 'Must Read',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCUCALWa0oFU7OKFjiBXUFunl-EAmIMgQCyigWDHw0ygrHQQHgLkJPPxiKsIfefwZ45gu7Vp7KGaMW46IG1NWeOfI_8JJ-hfx1ifvzN4Q12UllmDyRQH03tO-IqkNP5n2xhuWrRVHfcxeQDAccVK1NKO6NKr0zBEEIwe_td6ed5jtF0KNYrs0816DjsRDtXA8t7uikeixstCSpLUdcH5tneawAIDnGVr5yRawVu7HH5_o_Y93p4LoykxfU0f3CLSA6s3dINtL6hoTQ',
    alt: 'Cách chọn vải Polo',
    href: '/tin-tuc',
  },
  {
    slug: 'dong-phuc-toi-gian-branding-2024',
    title: 'Đồng phục tối giản - Xu hướng Branding 2024',
    excerpt: 'Xu hướng thiết kế đồng phục tối giản giúp thương hiệu B2B trông sang trọng và dễ nhận diện.',
    category: 'Xu Hướng Thiết Kế',
    categoryColor: '#2c4c34',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKPVm-OoeutVpI2lVrIrcYoQZwNjiFHMp2-HEEFDN80wVhsLz2J3HcN0Bg0vPzN3dM5PsZEVUI5dSye-0LFkTQOz1E9tVsIezKLdiPM_T7gUAslwE4_wgmPEy5pzB0blOq7Ci6aySM0xf7tJtv1PtIRj3WvXHoGsYhU_t2eYjsHoM1CNyUKJa6rhVxqF8iED2hZhc6zDB4eoMotEFVlejj_u-1w3AugOuuR3uexBrEA85hZ_8w8ZNue9QTnanVU0pcICjbE-pkDp4',
    alt: 'Xu hướng Branding',
    href: '/tin-tuc',
  },
  {
    slug: 'san-xuat-10000-ao-thun-7-ngay',
    title: 'Quy trình sản xuất 10.000 áo thun trong 7 ngày',
    excerpt: 'Bài học vận hành xưởng may quy mô lớn — từ lập kế hoạch đến QC đa tầng trước khi bàn giao.',
    category: 'Vận Hành',
    categoryColor: '#a63e2d',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7MtgWlPwqJ9fCKjAbRcpSMKTzgwt49dLfkGwY9jBUgseZq3SrGrCzNBF7Ul8JUFqFCYA9P70DpqmqWrwgf80wJLgCGJWcba6ml0h4qzm0-zCauGXrjedvvGUzxJTjnIG9bwGiyhQZpAr4X1h1PMrhalr9ri0IxE2rARA7Cu2k2VGkD6i9ZXXnchF28EFp0kjv8QokunH25xAuEse-gjY3iSXowiHX519-Qr7q_XPMv26Vg8UKnBdcrjzcZJ77m7eRq0BxAkODQgA',
    alt: 'Vận Hành',
    href: '/tin-tuc',
  },
  {
    slug: 'medical-uniform-2025',
    title: 'Bộ sưu tập Medical Uniform 2025',
    excerpt: 'Tổng hợp mẫu đồng phục y tế mới — chất liệu kháng khuẩn, form dáng thoải mái cho môi trường bệnh viện.',
    category: 'Catalog',
    categoryColor: '#1a2b8c',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOXcJjYusFwlUjGTmmTS_HHhtnC_vi6jPYSS9yLHlekPfnszOwTSUO1NCB_oUSrCZI2_-AYTuZuEhrgYSg14nDUOw8a9isE3OefB1Hs0shHZgAQRU14UI7M-CRsnFqFjNjVbOIR1uc5ulgWqAWn20a6HzqwJ5DLmOAdI9GdFSOWEiTh8DNYtmR_sRsGhX0v2JQQatAopWgHNAUCGjXHfQlQWbPjuaeGX9RXfwbc0Wpm_Gk9UOy0qyi3qIsHr5Li0WV0BjVcq-a2Ok',
    alt: 'Catalog',
    href: '/tin-tuc',
  },
];

export const blogSectionMeta = {
  allPostsHref: '/tin-tuc',
};

/** Năng lực sản xuất trang chủ — 3 khối zig-zag (Sitemap 1.4 mở rộng) */
export interface HomeCapacity {
  eyebrow: string;
  title: string;
  desc: string;
  stat: { value: string; label: string };
  image: string;
  alt: string;
  bullets: string[];
}

export const homeCapacities: HomeCapacity[] = [
  {
    eyebrow: 'Quy mô sản xuất',
    title: 'Xưởng may 2.000m² đạt chuẩn quốc tế',
    desc: 'Hệ thống máy móc hiện đại nhập khẩu từ Nhật Bản và Đức — năng lực đáp ứng những đơn hàng khắt khe nhất về kỹ thuật và mỹ thuật.',
    stat: { value: '2.000m²', label: 'Nhà xưởng sản xuất' },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7szr7Elx-oAqCEnir2uiBqNE-4WpmIm10Kj1YsgXyu1XMFvP0qvIXYrsMpRh9sztusxsq8_7_MFPstpomb4RaDeTg9J3ldf2CSKwYUq91qGdHVM6Dm9YkfE3Rdfay_snBPthtK7WWCq_NFHZ3j3Kua1MgJAT-qQPXwlpAIQIDLIpk4Njn_msEnsXh9DyyRtwkvdNU5u10NXpGyYseM_HBo6gwnr6IFqeZ9gHXI1CrvRQnXAxx3UyIT7UIbTDEMKjd1gdxbZwWKrKl',
    alt: 'Nhà xưởng sản xuất Tân Phạm Gia',
    bullets: [],
  },
  {
    eyebrow: 'Chất lượng làm gốc',
    title: 'Kiểm soát chất lượng 5 tầng',
    desc: 'Quy trình kiểm tra nghiêm ngặt xuyên suốt: sợi vải đầu vào, cắt vải, may bán thành phẩm, hoàn thiện và kiểm định đóng gói cuối cùng.',
    stat: { value: 'QC 5 tầng', label: 'Từ nguyên liệu đến thành phẩm' },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZF2amQyazt-GlhQH0DeUYXVZBkumEl5R6CgjdG-dn0i5IrhMtCB2ZMm9VUkZRwiIQIWIztfTbQsGMzRLvuaT2VHY6uWPPQHTjMlgpApeytXq5twxbrE7JaH5DBMM3Wq0I6G3KUtyoE2pR9jZvWUthhvBo7IZAZV3S32L0TVLkejbhD6tP9cSh8EF0MwW4eWy5qOXNzFXEsmwc7o-jKSwr2uoIeviT4x3KWtNwCtrU8SJWzNs3WVp6UPimb_JxHku0lc8G80XNvUiu',
    alt: 'Quy trình kiểm soát chất lượng',
    bullets: ['ISO 9001:2015', 'Tiêu chuẩn Oeko-Tex', 'Kim may Groz-Beckert', 'Chỉ may Coats'],
  },
  {
    eyebrow: 'Tiến độ cam kết',
    title: 'Đơn lớn — giao đúng hạn',
    desc: 'Năng lực cung ứng 30.000 sản phẩm mỗi tháng, linh hoạt từ vài trăm đến hàng chục nghìn sản phẩm. Cam kết tiến độ nghiêm ngặt trên hợp đồng.',
    stat: { value: '30.000+', label: 'Sản phẩm mỗi tháng' },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBu8HpjmXphN1gwJce-Ox_5d9i_zbtoQaTdy84ejBZ8BZ2bWKuJdOOs4RJzlfYDV56v3ww17AfeGqGADxfImOWAipgUx4ac3LlLtUJH_gUQMorU6St9axuwZeOFDjoWiF4HI-BFxMfM4TWUu5jE4Oy2IJqtTxVWLjcA0wBxpbxRku1_OUhaFAipVDxdtm5rolzQ4tTFY5YZcp6-6w0A15XqGB3_7lsZExIlNmVUKGqjcU9u4O6ZA5nGJHgaiZB5Bupur1ij_zsjKI',
    alt: 'Kho vận hành và giao hàng',
    bullets: [],
  },
];

/** Testimonial trang chủ — trích nguyên văn tài liệu khách hàng (Sitemap 2.8) */
export const homeTestimonial = {
  text: 'Đội ngũ tư vấn rất kỹ từ thiết kế đến chất liệu nên chúng tôi khá yên tâm trong suốt quá trình triển khai. Đồng phục hoàn thiện đẹp, nhân viên mặc thoải mái và tạo được hình ảnh chuyên nghiệp.',
  author: 'Ông Trương Hoàng Nam',
  role: 'CEO, Hoàng Thiên Scale',
};

/** Logo khách hàng — Sitemap 1.6 (18 thương hiệu) */
export const clientLogos = [
  { name: 'Vincom', domain: 'vincom.com.vn', logo: '/images/logos/vincom.svg' },
  { name: 'Sense City', domain: 'sensecity.vn', logo: '/images/logos/sense-city.png' },
  { name: 'Lotte Mart', domain: 'lotte.vn', logo: '/images/logos/lotte-mart.svg' },
  { name: 'Vạn Hạnh Mall', domain: 'vanhanhmall.com', logo: '/images/logos/van-hanh-mall.svg' },
  { name: 'Coca-Cola', domain: 'coca-cola.com', logo: '/images/logos/coca-cola.svg' },
  { name: 'Bia Sài Gòn', domain: 'sabeco.com.vn', logo: '/images/logos/bia-sai-gon.png' },
  { name: 'Vivant', domain: 'vivant.com.vn', logo: '/images/logos/vivant.svg' },
  { name: 'Bosch', domain: 'bosch.com', logo: '/images/logos/bosch.png' },
  { name: 'DAT', domain: 'datgroup.com', logo: '/images/logos/dat.png' },
  { name: 'Vinamilk', domain: 'vinamilk.com.vn', logo: '/images/logos/vinamilk.svg' },
  { name: 'Techcombank', domain: 'techcombank.com.vn', logo: '/images/logos/techcombank.svg' },
  { name: 'BIDV', domain: 'bidv.com.vn', logo: '/images/logos/bidv.png' },
  { name: 'Sacombank', domain: 'sacombank.com.vn', logo: '/images/logos/sacombank.png' },
  { name: 'VietBank', domain: 'vietbank.com.vn', logo: '/images/logos/vietbank.png' },
  {
    name: 'BV Răng Hàm Mặt SG',
    domain: 'nhakhoaranghammatsg.com',
    logo: '/images/logos/bv-rang-ham-mat-sg.svg',
  },
  { name: 'Hanwha Life', domain: 'hanwhalife.com.vn', logo: '/images/logos/hanwha-life.svg' },
  { name: 'Zero Waste', domain: 'zerowaste.vn', logo: '/images/logos/zero-waste.svg' },
  { name: 'VFM', domain: 'vfm.com.vn', logo: '/images/logos/vfm.svg' },
];
