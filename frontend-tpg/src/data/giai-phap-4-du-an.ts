/** Dự án tiêu biểu — Giải pháp 4 (Y tế, Spa & Dịch vụ) */

export interface DuAnGiaiPhap4 {
  slug: string;
  name: string;
  stats: string;
  field?: string;
  image: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

export const duAnGiaiPhap4: DuAnGiaiPhap4[] = [
  {
    slug: 'bv-rang-ham-mat-sai-gon',
    name: 'BV Răng Hàm Mặt Sài Gòn',
    stats: '650 sản phẩm | Đồng phục Scrub & áo Blouse',
    field: 'Nha khoa & Y tế',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80',
    intro:
      'Hệ thống bệnh viện cần đồng phục phù hợp cho đội ngũ bác sĩ và phụ tá, đảm bảo sự thoải mái trong cường độ làm việc cao, đồng thời duy trì hình ảnh chuyên nghiệp và đồng nhất giữa các chi nhánh.',
    challenges: [
      'Đồng phục cần phù hợp cho đội ngũ bác sĩ và phụ tá với cường độ làm việc cao.',
      'Đảm bảo sự thoải mái trong quá trình sử dụng hàng ngày.',
      'Duy trì hình ảnh chuyên nghiệp và đồng nhất giữa các chi nhánh.',
    ],
    solutions: [
      'Xây dựng hệ thống đồng phục theo từng vị trí công việc.',
      'Chuẩn hóa màu sắc và nhận diện thương hiệu.',
      'Lưu trữ hồ sơ kỹ thuật phục vụ các đợt bổ sung nhân sự.',
    ],
    results: [
      'Đồng bộ hình ảnh trên toàn hệ thống.',
      'Nâng cao trải nghiệm đội ngũ.',
      'Duy trì chất lượng ổn định qua nhiều năm hợp tác.',
    ],
  },
];
