/** Dữ liệu thương hiệu & điều hướng — đồng bộ Sitemap + Google Sheets */

export const seo = {
  title: 'Tân Phạm Gia | Thiết Kế & Sản Xuất áo thun polo đồng phục trọn gói',
  description:
    'Tư vấn, thiết kế và sản xuất đồng phục doanh nghiệp theo yêu cầu. Xưởng may trực tiếp, 23 năm kinh nghiệm, đáp ứng đơn hàng số lượng lớn trên toàn quốc.',
};

/** Điều hướng anchor trên trang chủ */
export const navigation = [
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Giải pháp', href: '#giai-phap' },
  { label: 'Khách hàng', href: '#doi-tac' },
  { label: 'Tin tức', href: '#tin-tuc' },
  { label: 'Tài liệu', href: '#tai-lieu' },
  { label: 'Liên hệ', href: '#lien-he' },
];

/** Điều hướng trang con — đồng bộ URL slug SEO sheet */
export const mainNavigation = [
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Giải pháp', href: '/#giai-phap' },
  { label: 'Khách hàng', href: '/khach-hang' },
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Tài liệu', href: '/tai-lieu' },
  { label: 'Liên hệ', href: '/lien-he' },
];

export const brandQuote =
  'Tân Phạm Gia luôn lắng nghe và thấu hiểu để đưa ra giải pháp phù hợp nhất cho doanh nghiệp.';

/** Sitemap 1.7 — Giấy khen & chứng nhận */
export const certificates = [
  { icon: 'verified', title: 'ISO 9001:2015', desc: 'Hệ thống quản lý chất lượng' },
  { icon: 'workspace_premium', title: 'Hàng Việt Nam CLC', desc: 'Chất lượng cao' },
  { icon: 'eco', title: 'Tiêu chuẩn Oeko-Tex', desc: 'An toàn vải & môi trường' },
  { icon: 'military_tech', title: 'Giấy khen & Bằng khen', desc: 'Đối tác uy tín ngành may' },
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
    icon: 'factory',
    slug: 'giai-phap-1',
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
    icon: 'corporate_fare',
    slug: 'giai-phap-2',
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
    icon: 'storefront',
    slug: 'giai-phap-3',
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
    icon: 'medical_services',
    slug: 'giai-phap-4',
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
  stats?: HomeFeaturedCaseStat[];
  statHighlight?: { value: string; suffix: string; valueClass?: 'gold' | 'white' };
}

export const homeFeaturedCases = {
  featured: {
    name: 'Ngân hàng BIDV',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDcz4grX0Tjw51FTdB5HZbTmcrYakXnp7WFjK-2VEfZcR45qJg81c0tcljJFjAwIJTFzyhkp3cYgFg-pBIktGRpQoqXaQKlYSVtvmMkicnivUhEnczXAOlUWn7p3aZX0U1qcowjy_97kPA_r3-PivXNSaDbFOOOX_6jiBJmo4A0j0D9e3qRVIUh7laSY54Gct149JLW1vsGGGj8J52tBRRd7ZXIWlIfTCG2X92nrw60rSTjemYH3_FC4-qYNw2ligyY7SaiNTBUHs',
    alt: 'Dự án BIDV',
    tag: 'Hợp tác chiến lược',
    href: '/giai-phap/giai-phap-2#du-an',
    stats: [
      { value: '15.000', label: 'sản phẩm' },
      { value: '21 ngày', label: 'bàn giao' },
    ],
  } satisfies HomeFeaturedCase,
  secondary: [
    {
      name: 'Bệnh viện Vinmec',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDxP6CFZlp3ggmwGEczcGuTImTcqVax4g1QmQUxHl1DEUyVAHj0mdNbxUD-EqS0F3NQNzNfbQN0ax9SIZ62ID0h1-x0UQyRqMxIcqji0Cu5nzwa_SLGBitLXLnORAxIjqlduZZUPE6upya0xjD-YldIjtwbptXZof83YaJpRItUxQzd9vn77CMyaTSd27VeqXiC6LQ61cE-PDK4tWlWjVlq7PuD1BVQYDnywiA_dC08kRpIMCQiDZhZG7GEehac2rkhi_CnAmr-JWA',
      alt: 'Dự án Vinmec',
      href: '/giai-phap/giai-phap-4#du-an',
      statHighlight: { value: '2.500+', suffix: 'sp kháng khuẩn', valueClass: 'gold' },
    },
    {
      name: 'Highland Coffee',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOKUFLheAUb34f4xZiQpBUrQkm8680rBXAVAzao8_wuHeyIyWND-1cnAQbOA80ZWqijWzCjrT8gQCg3KjzFmJBymeebvX3xAyN1bsI0U7rmrmGsrCXdZem8Gvt-DNISTMBEE0l3VQmRo_xJBZp5yZs4uww3eEz7DQr_tCWj9bUtE2NbhImbI_LOorZXgpwuA9vWl8aOidIp9nNAcBCCDzqHtly-0yVY4MutTrPKvDAl_j0ErFC1I8gCoeb9QJJAMslPyO1ylQAMk',
      alt: 'Dự án Highland Coffee',
      href: '/giai-phap/giai-phap-3#du-an',
      statHighlight: { value: '8.000+', suffix: 'đồng phục', valueClass: 'white' },
    },
  ] satisfies HomeFeaturedCase[],
  quote: {
    text: 'Chuẩn hóa màu–form–logo. Sản phẩm vượt kỳ vọng về thẩm mỹ và tiện dụng.',
    author: 'BIDV Team',
  },
  contact: {
    email: 'dongphuc@tanphamgia.com.vn',
    phone: '0843 406 406',
    phoneHref: 'tel:0843406406',
    ctaLabel: 'Nhận tư vấn',
    ctaHref: '/#lien-he',
  },
  allProjectsHref: '/giai-phap/giai-phap-2#du-an',
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
