/**
 * Dữ liệu 4 nhóm giải pháp — hợp nhất từ tài liệu khách hàng (Sitemap 3.1 → 3.6).
 * Một khuôn dữ liệu, bốn bộ nội dung: trang chi tiết render qua template duy nhất.
 */

import { brandQuote } from './site';
import { duAnGiaiPhap1 } from './giai-phap-1-du-an';
import { duAnGiaiPhap2 } from './giai-phap-2-du-an';
import { duAnGiaiPhap3 } from './giai-phap-3-du-an';
import { duAnGiaiPhap4 } from './giai-phap-4-du-an';

/** Case study dùng chung giữa các giải pháp */
export interface DuAn {
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

/** Thông số kỹ thuật vải — bảng so sánh 4 cột */
export interface FabricSpec {
  name: string;
  composition: string;
  features: string;
  environment: string;
}

/** Vấn đề doanh nghiệp thường gặp: nguyên nhân + chuỗi hệ quả (→) */
export interface SolutionProblem {
  title: string;
  cause?: string;
  consequences: string[];
}

/** Giải pháp từ Tân Phạm Gia: mô tả + kết quả (→) */
export interface SolutionPlan {
  title: string;
  desc: string;
  outcome: string;
}

export interface GiaiPhap {
  slug: string;
  number: string;
  /** Tên ngắn dùng ở danh sách/điều hướng */
  name: string;
  /** Tiêu đề đầy đủ trên trang chi tiết */
  title: string;
  desc: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  audiences: string[];
  problemsTitle: string;
  problems: SolutionProblem[];
  plans: SolutionPlan[];
  products: string[];
  fabrics: FabricSpec[];
  projects: DuAn[];
}

/** SEO trang tổng /giai-phap — theo sheet SEO & Meta */
export const giaiPhapSeo = {
  title: 'Giải Pháp Đồng Phục Doanh Nghiệp Theo Yêu Cầu | Tư Vấn Trọn Gói',
  description:
    'Giải pháp đồng phục cho doanh nghiệp sản xuất, FDI, FMCG, ngân hàng và tập đoàn. Tư vấn chiến lược, thiết kế riêng và sản xuất quy mô lớn.',
};

/** Header trang tổng /giai-phap — mô tả là quote thương hiệu (render kiểu trích dẫn) */
export const giaiPhapIndexHeader = {
  eyebrow: 'Giải pháp',
  title: 'Giải pháp đồng phục toàn diện',
  desc: brandQuote,
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD7szr7Elx-oAqCEnir2uiBqNE-4WpmIm10Kj1YsgXyu1XMFvP0qvIXYrsMpRh9sztusxsq8_7_MFPstpomb4RaDeTg9J3ldf2CSKwYUq91qGdHVM6Dm9YkfE3Rdfay_snBPthtK7WWCq_NFHZ3j3Kua1MgJAT-qQPXwlpAIQIDLIpk4Njn_msEnsXh9DyyRtwkvdNU5u10NXpGyYseM_HBo6gwnr6IFqeZ9gHXI1CrvRQnXAxx3UyIT7UIbTDEMKjd1gdxbZwWKrKl',
};

/** Quy trình làm việc 6 bước — dùng chung cho cả 4 giải pháp (Sitemap 3.x mục 04) */
export const processSteps = [
  { num: '01', title: 'Tiếp nhận yêu cầu & tư vấn chuyên sâu' },
  { num: '02', title: 'Thiết kế & báo giá' },
  { num: '03', title: 'May mẫu thử & duyệt mẫu' },
  { num: '04', title: 'Ký kết hợp đồng' },
  { num: '05', title: 'Sản xuất & kiểm soát chất lượng' },
  { num: '06', title: 'Bàn giao & hậu mãi' },
];

/** Bảng vải dùng chung cho giải pháp 1 & 2 (tài liệu khách dùng cùng một bảng) */
const fabricsCongNghiep: FabricSpec[] = [
  {
    name: 'Pique Polyester',
    composition: '100% Poly',
    features: 'Thoáng khí, mau khô, bền màu cao',
    environment: 'Sản xuất thông thường',
  },
  {
    name: 'Pique Tici (CVC)',
    composition: '65% Cotton, 35% Poly',
    features: 'Mềm mại, thấm hút, in màu sắc nét',
    environment: 'Văn phòng nhà máy',
  },
  {
    name: 'Oxford kỹ thuật',
    composition: '100% Poly chuyên dụng',
    features: 'Bền cơ học, chống xước, chống tĩnh điện',
    environment: 'Điện tử, hóa chất',
  },
  {
    name: 'Kaki Việt Nam',
    composition: '95% Poly, 5% Spandex',
    features: 'Co giãn nhẹ, chống nhăn, lịch sự',
    environment: 'Kỹ sư, quản lý xưởng',
  },
];

export const giaiPhapList: GiaiPhap[] = [
  {
    slug: 'san-xuat-fdi',
    number: '01',
    name: 'Doanh nghiệp Sản xuất & FDI',
    title: 'Đồng phục Doanh nghiệp Sản xuất & FDI',
    desc: 'Giải pháp đồng phục chất lượng và đạt tiêu chuẩn cho đội ngũ quy mô lớn 200 đến 5.000+ nhân sự với nhiều bộ phận, nhiều môi trường làm việc khác nhau.',
    seoTitle: 'Đồng Phục Doanh Nghiệp Sản Xuất & FDI | Tân Phạm Gia',
    seoDescription:
      'Giải pháp đồng phục đạt chuẩn an toàn lao động cho nhà máy, khu công nghiệp và doanh nghiệp FDI. QC đa tầng, sản xuất quy mô lớn, hỗ trợ làm việc từ xa.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7szr7Elx-oAqCEnir2uiBqNE-4WpmIm10Kj1YsgXyu1XMFvP0qvIXYrsMpRh9sztusxsq8_7_MFPstpomb4RaDeTg9J3ldf2CSKwYUq91qGdHVM6Dm9YkfE3Rdfay_snBPthtK7WWCq_NFHZ3j3Kua1MgJAT-qQPXwlpAIQIDLIpk4Njn_msEnsXh9DyyRtwkvdNU5u10NXpGyYseM_HBo6gwnr6IFqeZ9gHXI1CrvRQnXAxx3UyIT7UIbTDEMKjd1gdxbZwWKrKl',
    audiences: [
      'Nhà máy sản xuất',
      'Khu công nghiệp',
      'FDI / Tập đoàn nước ngoài',
      'Logistics & Kho vận',
      'Kỹ thuật & Công trình',
    ],
    problemsTitle: 'Những vấn đề doanh nghiệp sản xuất thường gặp khi đặt đồng phục',
    problems: [
      {
        title: 'Số lượng lớn nhưng chất lượng không đồng đều',
        cause: 'Sai lệch màu sắc, size hoặc đường may giữa các sản phẩm',
        consequences: [
          'Đồng phục thiếu tính đồng bộ',
          'Tăng thời gian kiểm tra, xử lý sau giao hàng',
          'Ảnh hưởng hình ảnh chuyên nghiệp của doanh nghiệp',
        ],
      },
      {
        title: 'Chất liệu không đáp ứng yêu cầu môi trường đặc thù',
        cause: 'Đồng phục nóng, bí, nhanh xuống cấp',
        consequences: [
          'Nhân viên không thoải mái khi sử dụng, giảm hiệu suất làm việc',
          'Tuổi thọ sản phẩm thấp',
          'Chi phí thay mới tăng cao',
        ],
      },
      {
        title: 'Đơn tái đặt hàng chất lượng lệch so với ban đầu',
        cause: 'Màu sắc, chất liệu hoặc form dáng thay đổi',
        consequences: [
          'Khó duy trì hình ảnh chuyên nghiệp',
          'Mất đồng bộ giữa các bộ phận, chi nhánh',
          'Phát sinh rủi ro trong quản lý đồng phục',
        ],
      },
      {
        title: 'Công ty nước ngoài khó chọn nhà cung cấp tại Việt Nam',
        cause: 'Lo ngại về năng lực và tiêu chuẩn chất lượng',
        consequences: [
          'Lo ngại size chart không đáp ứng tiêu chuẩn quốc tế',
          'Khó kiểm soát chất lượng khi làm việc từ xa',
          'Rủi ro về đóng gói, vận chuyển quốc tế',
        ],
      },
    ],
    plans: [
      {
        title: 'Quy trình QC đa tầng cho đơn hàng số lượng lớn',
        desc: 'Kiểm soát chất lượng từ nguyên vật liệu, bán thành phẩm đến thành phẩm trước khi bàn giao.',
        outcome: 'Đảm bảo sự đồng bộ về màu sắc, kích thước và chất lượng sản phẩm.',
      },
      {
        title: 'Tư vấn chất liệu theo môi trường làm việc',
        desc: 'Khảo sát đặc thù công việc và nhu cầu sử dụng để đề xuất chất liệu phù hợp.',
        outcome: 'Gia tăng sự thoải mái cho người mặc và tối ưu tuổi thọ đồng phục.',
      },
      {
        title: 'Quản lý tiêu chuẩn cho đơn tái đặt',
        desc: 'Lưu trữ thông số kỹ thuật, màu sắc, chất liệu và hồ sơ sản xuất của từng dự án.',
        outcome: 'Duy trì sự đồng nhất giữa các đợt đặt hàng trong suốt quá trình phát triển của doanh nghiệp.',
      },
      {
        title: 'Hỗ trợ doanh nghiệp FDI & công ty đa quốc gia',
        desc: 'Quy trình làm việc minh bạch, tài liệu kỹ thuật rõ ràng và đội ngũ đồng hành xuyên suốt dự án.',
        outcome: 'Kiểm soát chất lượng, tiến độ và triển khai hiệu quả dù làm việc từ xa.',
      },
      {
        title: 'Năng lực sản xuất quy mô lớn',
        desc: 'Nhà xưởng trực tiếp cùng hệ thống sản xuất ổn định, đáp ứng linh hoạt từ vài trăm đến hàng chục nghìn sản phẩm.',
        outcome: 'Đảm bảo chất lượng và tiến độ cho các dự án đồng phục doanh nghiệp.',
      },
    ],
    products: ['Polo dài/ngắn tay kỹ thuật', 'Đồng phục bảo hộ chuyên dụng', 'Áo khoác công xưởng'],
    fabrics: fabricsCongNghiep,
    projects: duAnGiaiPhap1,
  },
  {
    slug: 'van-phong-tap-doan',
    number: '02',
    name: 'Văn phòng & Tập đoàn',
    title: 'Đồng phục Văn phòng & Tập đoàn',
    desc: 'Giải pháp đồng phục chuyên nghiệp giúp doanh nghiệp chuẩn hóa hình ảnh thương hiệu, nâng cao trải nghiệm nhân sự và duy trì sự đồng nhất trong toàn hệ thống từ 100 đến 5.000+ nhân sự.',
    seoTitle: 'Đồng Phục Văn Phòng & Tập Đoàn Chuyên Nghiệp | Tân Phạm Gia',
    seoDescription:
      'Đồng phục văn phòng chuẩn hóa nhận diện thương hiệu cho tập đoàn, ngân hàng, doanh nghiệp dịch vụ. Công nghệ Rập 3D, tỷ lệ vàng, đồng bộ toàn hệ thống.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80',
    audiences: [
      'Tập đoàn & Tổng công ty',
      'Doanh nghiệp dịch vụ',
      'Ngân hàng & Tài chính',
      'Bất động sản',
      'Logistics & Chuỗi văn phòng',
    ],
    problemsTitle: 'Những vấn đề doanh nghiệp thường gặp khi đặt đồng phục',
    problems: [
      {
        title: 'Thiếu tính thời trang, không phù hợp nhiều vóc dáng',
        cause: 'Form dáng rộng, cứng, lỗi thời',
        consequences: [
          'Nhân viên không cảm thấy tự tin khi mặc đồng phục',
          'Hình ảnh doanh nghiệp thiếu chuyên nghiệp',
          'Giảm giá trị thương hiệu trong mắt khách hàng và đối tác',
        ],
      },
      {
        title: 'Một mẫu đồng phục dùng chung cho nhiều vị trí',
        cause: 'Lễ tân, kinh doanh, quản lý, văn phòng sử dụng chung một mẫu',
        consequences: [
          'Trải nghiệm mặc không tối ưu',
          'Khó thể hiện đặc thù từng bộ phận',
          'Hình ảnh đội ngũ thiếu sự chuyên nghiệp',
        ],
      },
      {
        title: 'Đồng phục giữa các đợt đặt hàng không đồng nhất',
        cause: 'Màu sắc, chất liệu hoặc form dáng thay đổi theo thời gian',
        consequences: [
          'Mất tính nhận diện thương hiệu',
          'Thiếu đồng bộ giữa các phòng ban và chi nhánh',
          'Khó quản lý đồng phục khi doanh nghiệp mở rộng',
        ],
      },
      {
        title: 'Đồng phục nhanh xuống cấp sau thời gian ngắn',
        cause: 'Chất liệu & form dáng dễ bai nhão sau nhiều lần giặt',
        consequences: ['Nhân viên mất thiện cảm với đồng phục', 'Tăng chi phí thay mới'],
      },
    ],
    plans: [
      {
        title: 'Phát triển đồng phục theo tư duy thời trang ứng dụng',
        desc: 'Ứng dụng kinh nghiệm hơn 20 năm trong ngành thời trang vào phát triển đồng phục doanh nghiệp.',
        outcome: 'Đồng phục vừa chuyên nghiệp vừa giúp người mặc tự tin hơn trong công việc.',
      },
      {
        title: 'Tư vấn thiết kế & chất liệu phù hợp mục đích sử dụng',
        desc: 'Phân tích vai trò công việc, tần suất sử dụng và môi trường làm việc để xây dựng giải pháp phù hợp thay vì áp một mẫu cho toàn doanh nghiệp.',
        outcome: 'Nâng cao trải nghiệm nhân viên và tối ưu hiệu quả sử dụng trong dài hạn.',
      },
      {
        title: 'Công nghệ Rập 3D & chuẩn hóa form dáng',
        desc: 'Ứng dụng tiêu chuẩn "Tỷ lệ vàng" cùng công nghệ Rập 3D & May trên Mannequin để tạo sản phẩm tôn dáng, thoải mái với nhiều vóc dáng người mặc.',
        outcome: 'Tôn dáng người mặc, tạo nên sự khác biệt tinh tế trong đồng phục.',
      },
      {
        title: 'Lưu trữ hồ sơ kỹ thuật — đồng bộ toàn hệ thống',
        desc: 'Toàn bộ thông số kỹ thuật, mã màu Pantone, mẫu vải và hồ sơ sản xuất đều được lưu trữ, đảm bảo các lần tái đặt chuẩn chất lượng như lô đầu tiên.',
        outcome: 'Hình ảnh đội ngũ nhất quán trên toàn hệ thống.',
      },
    ],
    products: ['Áo sơ mi công sở', 'Áo Polo doanh nghiệp', 'Áo T-Shirt thể thao', 'Áo khoác', 'Quần / Chân váy'],
    fabrics: fabricsCongNghiep,
    projects: duAnGiaiPhap2,
  },
  {
    slug: 'fmcg-chuoi-phan-phoi',
    number: '03',
    name: 'FMCG & Chuỗi phân phối',
    title: 'Đồng phục FMCG & Chuỗi Phân phối',
    desc: 'Giải pháp đồng phục giúp doanh nghiệp FMCG, Sales thị trường và hệ thống phân phối chuẩn hóa hình ảnh thương hiệu, nâng cao độ nhận diện tại điểm bán và quản lý hiệu quả đội ngũ trải dài trên nhiều tỉnh thành.',
    seoTitle: 'Đồng Phục FMCG & Chuỗi Phân Phối | Tân Phạm Gia',
    seoDescription:
      'Đồng phục Sales thị trường, PG/PB và hệ thống phân phối — chuẩn hóa nhận diện tại điểm bán, triển khai linh hoạt nhiều tỉnh thành, sản xuất số lượng lớn.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOKUFLheAUb34f4xZiQpBUrQkm8680rBXAVAzao8_wuHeyIyWND-1cnAQbOA80ZWqijWzCjrT8gQCg3KjzFmJBymeebvX3xAyN1bsI0U7rmrmGsrCXdZem8Gvt-DNISTMBEE0l3VQmRo_xJBZp5yZs4uww3eEz7DQr_tCWj9bUtE2NbhImbI_LOorZXgpwuA9vWl8aOidIp9nNAcBCCDzqHtly-0yVY4MutTrPKvDAl_j0ErFC1I8gCoeb9QJJAMslPyO1ylQAMk',
    audiences: ['FMCG & Hàng tiêu dùng nhanh', 'Hệ thống phân phối', 'Đội ngũ Sales thị trường', 'PG/PB & Activation'],
    problemsTitle: 'Những vấn đề doanh nghiệp FMCG thường gặp',
    problems: [
      {
        title: 'Hình ảnh đội ngũ không đồng nhất giữa các khu vực',
        cause: 'Màu sắc, logo hoặc chất lượng đồng phục khác nhau giữa các đợt triển khai',
        consequences: [
          'Giảm độ nhận diện thương hiệu tại điểm bán',
          'Thiếu tính chuyên nghiệp khi tiếp xúc khách hàng',
          'Khó quản lý hệ thống phân phối trên diện rộng',
        ],
      },
      {
        title: 'Không phù hợp với tính chất di chuyển liên tục',
        cause: 'Nóng, bí, nhanh xuống cấp',
        consequences: [
          'Ảnh hưởng trải nghiệm sử dụng',
          'Giảm sự tự tin của đội ngũ bán hàng',
          'Tăng chi phí thay mới',
        ],
      },
      {
        title: 'Khó quản lý đồng phục khi phát sinh nhân sự mới',
        consequences: [
          'Mất thời gian tổng hợp size',
          'Chậm tiến độ cấp phát',
          'Dễ phát sinh sai lệch giữa các đợt đặt hàng',
        ],
      },
      {
        title: 'Triển khai trên nhiều tỉnh thành gặp khó khăn',
        consequences: [
          'Khó đồng bộ hình ảnh thương hiệu',
          'Phát sinh sai sót trong quá trình giao nhận',
          'Tăng khối lượng công việc cho bộ phận hành chính',
        ],
      },
    ],
    plans: [
      {
        title: 'Chuẩn hóa nhận diện trên toàn hệ thống',
        desc: 'Xây dựng tiêu chuẩn đồng phục thống nhất về màu sắc, logo, chất liệu và quy cách sản xuất.',
        outcome: 'Đảm bảo hình ảnh thương hiệu đồng bộ trên toàn quốc.',
      },
      {
        title: 'Tư vấn thiết kế & chất liệu theo môi trường làm việc',
        desc: 'Phân tích đặc thù công việc và tần suất sử dụng để tư vấn thiết kế, form dáng và chất liệu phù hợp.',
        outcome: 'Gia tăng sự thoải mái cho đội ngũ thường xuyên di chuyển và làm việc ngoài thị trường.',
      },
      {
        title: 'Quản lý hồ sơ kỹ thuật cho đơn tái đặt',
        desc: 'Lưu trữ toàn bộ thông số kỹ thuật, bảng size, màu sắc và hồ sơ sản xuất của từng dự án.',
        outcome: 'Duy trì sự đồng nhất giữa các đợt đặt hàng và các khu vực.',
      },
      {
        title: 'Triển khai linh hoạt cho hệ thống nhiều tỉnh thành',
        desc: 'Hỗ trợ đóng gói, phân loại và giao hàng theo khu vực hoặc theo danh sách nhân sự.',
        outcome: 'Giảm tải công việc cho bộ phận hành chính và đảm bảo tiến độ triển khai.',
      },
      {
        title: 'Năng lực sản xuất số lượng lớn',
        desc: 'Đáp ứng linh hoạt từ vài trăm đến hàng chục nghìn sản phẩm cho các chiến dịch hoặc hoạt động mở rộng hệ thống.',
        outcome: 'Đảm bảo tiến độ và chất lượng trên quy mô lớn.',
      },
    ],
    products: [
      'Áo Polo Sales thị trường',
      'Áo Polo nhận diện thương hiệu',
      'Áo T-Shirt Activation',
      'Đồng phục PG/PB',
      'Nón & Phụ kiện nhận diện thương hiệu',
    ],
    fabrics: [
      {
        name: 'Coolmax Pique',
        composition: '100% Poly thoát nhiệt',
        features: 'Thoáng mát, mau khô, kháng mùi',
        environment: 'Sales field, thị trường ngoài trời',
      },
      {
        name: 'Pique Lacoste',
        composition: '100% Poly cao cấp',
        features: 'Bề mặt đẹp, giữ form, màu chuẩn Pantone',
        environment: 'Hội nghị đại lý, sự kiện thương hiệu',
      },
      {
        name: 'Pique Tici (CVC)',
        composition: '65% Cotton, 35% Poly',
        features: 'Mềm, thấm hút, in màu sắc nét',
        environment: 'Nhân viên chuỗi cửa hàng',
      },
      {
        name: 'Polyester Dri-fit',
        composition: '100% Poly thoát ẩm',
        features: 'Mau khô, thoáng khí, màu tươi bền',
        environment: 'Activation, roadshow, ngoài trời',
      },
    ],
    projects: duAnGiaiPhap3,
  },
  {
    slug: 'y-te-spa-dich-vu',
    number: '04',
    name: 'Y tế, Spa & Dịch vụ',
    title: 'Đồng phục Y tế, Spa & Dịch vụ',
    desc: 'Giải pháp đồng phục chuyên nghiệp giúp nâng cao hình ảnh thương hiệu, gia tăng trải nghiệm khách hàng và đảm bảo sự thoải mái cho đội ngũ nhân sự trong quá trình làm việc.',
    seoTitle: 'Đồng Phục Y Tế, Spa & Dịch Vụ Cao Cấp | Tân Phạm Gia',
    seoDescription:
      'Đồng phục bác sĩ, điều dưỡng, nha khoa và spa — chất liệu kháng khuẩn, phân nhóm theo chức danh, chuẩn hóa hệ thống nhiều chi nhánh.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxP6CFZlp3ggmwGEczcGuTImTcqVax4g1QmQUxHl1DEUyVAHj0mdNbxUD-EqS0F3NQNzNfbQN0ax9SIZ62ID0h1-x0UQyRqMxIcqji0Cu5nzwa_SLGBitLXLnORAxIjqlduZZUPE6upya0xjD-YldIjtwbptXZof83YaJpRItUxQzd9vn77CMyaTSd27VeqXiC6LQ61cE-PDK4tWlWjVlq7PuD1BVQYDnywiA_dC08kRpIMCQiDZhZG7GEehac2rkhi_CnAmr-JWA',
    audiences: [
      'Phòng khám & Trung tâm y tế',
      'Nha khoa',
      'Thẩm mỹ viện & Spa',
      'Chuỗi chăm sóc sức khỏe',
      'Trung tâm đào tạo',
    ],
    problemsTitle: 'Những vấn đề doanh nghiệp y tế, spa & dịch vụ thường gặp',
    problems: [
      {
        title: 'Đồng phục chưa phản ánh đúng hình ảnh thương hiệu',
        cause: 'Form dáng lỗi thời, màu sắc thiếu đồng nhất',
        consequences: [
          'Giảm cảm nhận chuyên nghiệp của khách hàng',
          'Khó tạo sự tin tưởng trong lần tiếp xúc đầu tiên',
          'Ảnh hưởng trải nghiệm dịch vụ tổng thể',
        ],
      },
      {
        title: 'Chất liệu không phù hợp với cường độ sử dụng cao',
        consequences: [
          'Nhân sự không thoải mái khi làm việc trong thời gian dài',
          'Giảm trải nghiệm sử dụng',
          'Tăng tần suất thay mới đồng phục',
        ],
      },
      {
        title: 'Đồng phục giữa các chi nhánh không đồng nhất',
        consequences: [
          'Mất tính nhận diện thương hiệu',
          'Thiếu chuyên nghiệp khi mở rộng hệ thống',
          'Khó quản lý đồng phục lâu dài',
        ],
      },
      {
        title: 'Thiếu sự khác biệt giữa các vị trí nhân sự',
        consequences: [
          'Khách hàng khó nhận biết chức năng từng bộ phận',
          'Giảm trải nghiệm khi sử dụng dịch vụ',
          'Hình ảnh đội ngũ thiếu tính chuyên nghiệp',
        ],
      },
    ],
    plans: [
      {
        title: 'Thiết kế đồng phục theo hình ảnh thương hiệu',
        desc: 'Tư vấn màu sắc, kiểu dáng và chi tiết nhận diện phù hợp với định vị thương hiệu của doanh nghiệp.',
        outcome: 'Gia tăng sự chuyên nghiệp và tạo thiện cảm ngay từ điểm chạm đầu tiên.',
      },
      {
        title: 'Tư vấn thiết kế & chất liệu theo môi trường làm việc',
        desc: 'Phân tích đặc thù công việc và tần suất sử dụng để đề xuất thiết kế, form dáng và chất liệu phù hợp.',
        outcome: 'Đảm bảo sự thoải mái cho nhân sự và tính thẩm mỹ trong quá trình sử dụng.',
      },
      {
        title: 'Phân nhóm đồng phục theo chức danh',
        desc: 'Xây dựng giải pháp đồng phục riêng cho lễ tân, tư vấn viên, điều dưỡng, kỹ thuật viên hoặc quản lý.',
        outcome: 'Giúp khách hàng dễ dàng nhận diện và nâng cao trải nghiệm dịch vụ.',
      },
      {
        title: 'Chuẩn hóa đồng phục cho hệ thống nhiều chi nhánh',
        desc: 'Lưu trữ hồ sơ kỹ thuật, bảng size và tiêu chuẩn sản xuất cho từng dự án.',
        outcome: 'Duy trì tính đồng nhất khi mở rộng hệ thống hoặc bổ sung nhân sự.',
      },
      {
        title: 'Quản lý chất lượng xuyên suốt dự án',
        desc: 'Kiểm soát chất lượng từ nguyên phụ liệu đến thành phẩm trước khi bàn giao.',
        outcome: 'Đảm bảo đồng phục đạt tiêu chuẩn sử dụng và hình ảnh thương hiệu.',
      },
    ],
    products: [
      'Đồng phục bác sĩ',
      'Đồng phục điều dưỡng',
      'Đồng phục nha khoa',
      'Đồng phục spa',
      'Phụ kiện nhận diện thương hiệu',
    ],
    fabrics: [
      {
        name: 'Poly kháng khuẩn nano',
        composition: '100% Poly xử lý nano',
        features: 'Kháng khuẩn, chống bám bụi, mau khô',
        environment: 'Bệnh viện, phòng khám',
      },
      {
        name: 'Poly Spun trắng',
        composition: '100% Poly',
        features: 'Giữ trắng lâu, chống nhăn, dễ là',
        environment: 'Áo blouse bác sĩ',
      },
      {
        name: 'Cotton-Spandex mềm',
        composition: '92% Cotton, 8% Spandex',
        features: 'Mềm mịn, co giãn nhẹ, thoải mái',
        environment: 'Spa, massage, thẩm mỹ',
      },
      {
        name: 'Vải dễ giặt nhanh khô',
        composition: 'Poly pha dệt kháng nước nhẹ',
        features: 'Mau khô, giữ dáng tốt',
        environment: 'Giặt hàng ngày, tần suất cao',
      },
    ],
    projects: duAnGiaiPhap4,
  },
];
