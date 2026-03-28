export const navLinks = [
  { label: 'Our Story', target: 'our-story' },
  { label: 'Marketplace', target: 'marketplace' },
  { label: 'Consulting', target: 'consulting' },
  { label: 'Logistics', target: 'logistics' },
  { label: 'Contact', target: 'contact' },
];

export const images = {
  logo: new URL('../../logo_egypt.jpg', import.meta.url).href,
  hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB_tBpS9fvTeQkbtgvkxjLu-Rc2gopbMjmf4f065hJKDnAPkhjidbglYr7RqhR1XuXaoRCMGjHzyOvdmiG8qmkodxTEk3920AOkmfxW3ibjk1CtpEeLPKptDJ7K-lTQzdkgzVBAZgHisnn64Wq8HrvdrvAY7-kgXAbtqWla_GaJK_B3Vgmc7LHXhmZ410gZOcrNbQoULAgFYbU3NrUYwJHoG8-J6fkFey4tFY4VPW3bqhoDexV5icqALuMg_NQC0JZRHk-RDIWKn-Q',
  heroSide:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBL9-ISPneyOTuoZj2zeP9MmEBplKA1deKY64kFy_GvPcQU0daeZL93F0ibYoX0KHOOZ59Kc068cKfn9b_FKWvmhZSUz2LYsLZsTeiYClcBUAzs02XJnXn3ZQyhk8rjEKP7uqqLz4boaAf2GL4tNW5wFM2FcyTEpisXmhgia_-Fg7uS1RpUrJCJIVY28xGMlvGvCnuKOusZ5FtisKkJa6SxdAbwmRlWlROZ_wZXfgzl1oDe8zedeCmmPJaP-ulIEg0dvUD4UsrZBdc',
  intro: new URL('../../images/sanxuat7.jpg', import.meta.url).href,
  whyChoose:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBSCa2eUz0zdlfbVsl5RefQ0dP05IC4H198usE4rNsNUrZPGhjSB0qrE1Fi4apHWPA1cX_RCEJCXacqAYLtiyIzzQcqM5Lbnm7tofHFsI-LXM4_cnjb3ImtcV7uk65zhQ560Df6w3-qNXO9gA2Cm41d-L37pWau2lkp-k3EsaeI03PJ15b8-sMCVD2T3XO8V_7mHQiu7i9wqCA-qtcQ3_AzKWRsX4WPERzkT7Wcd4ajgJVpbE7J0_5VP8sCzZ1M5_aiYRhJ5xZ1x54',
};

const galleryImageMap = import.meta.glob('../../images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const getImageOrder = (path) => {
  const fileName = path.split('/').pop()?.toLowerCase() || '';
  const numericPart = fileName.match(/(\d+)/)?.[1];
  return numericPart ? Number(numericPart) : 0;
};

const byNaturalOrder = ([a], [b]) => getImageOrder(a) - getImageOrder(b);

export const productGalleryImages = Object.entries(galleryImageMap)
  .filter(([path]) => /thucpham|thucphham/i.test(path))
  .sort(byNaturalOrder)
  .map(([, src]) => src);

export const factoryGalleryImages = Object.entries(galleryImageMap)
  .filter(([path]) => /sanxuat/i.test(path))
  .sort(byNaturalOrder)
  .map(([, src]) => src);

export const heroContacts = [
  { icon: 'call', text: '+84 90 692 7780' },
  { icon: 'chat', text: 'Chat Zalo / WhatsApp' },
];

export const painPoints = [
  ['search_off', 'Không biết tìm nguồn hàng Ai Cập uy tín'],
  ['gavel', 'Lo ngại thủ tục pháp lý phức tạp'],
  ['hourglass_bottom', 'Hàng bị giữ tại cảng, phát sinh chi phí'],
  ['verified_user', 'Không rõ tiêu chuẩn Halal & kiểm định'],
];

export const products = [
  {
    name: 'Cheeses',
    sub: 'Các dòng phô mai cao cấp phù hợp phân phối và OEM.',
    image: new URL('../../images/CHEESES.png', import.meta.url).href,
    className: 'is-hero',
  },
  {
    name: 'Pasta Ai Cập (Regina)',
    sub: 'Thương hiệu pasta phổ biến tại Trung Đông.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjKz2rVr29czjTfzSvgNBZi10vcze0qQQWGiP0oVMwcMa1gSRbAf12_TX-W6nK2Hd1GcnPI3mU12SNWmPLanJCM3PmGSN46jhxaCv5IdWA22Vb4Et0pfqYOoEzkhoLXlvun6lvK49NB5LfcIy80AW8C8hOitx7zw4vy__uVx53GGgYFwhk7UczpZqxk9HNiPWt_ymrpxmommT2LO99uGGr5BE4OTwRXNUbv8ZS2SNDADG2ml73nWBqx1YVnTXyArMCNYFrrperPA0',
  },
  {
    name: 'Đậu & Gia vị',
    sub: 'Nguồn gia vị chuẩn vị Trung Đông.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfBoWnEU2qeKZYFDH5B1pZDC2xULuZZy3bd-vtiVrNT59QU8AacBZRfJ2LNZwjmL3cnq7dKRaoegJ5w-jeUPcTLAi2GDbKQsFmnSsmVZ7cfFFs_Npphtt6DnNlpWZfOATQpTWHouyz_wUqCkAw3kMzA6_f5hK5JcYp8G_JF7iWAcBHEtlfA9kTO22ikqbSix0m9v1oiQh-Ziat1DLs2qRccJOPIqZFqo9U0AB5Qiu3uGJf_ox8659DQbfz7yNBwyzqj0Y0t8vJmg8',
  },
  {
    name: 'Nguyên liệu Halal',
    sub: 'Nguyên liệu đạt chuẩn phục vụ thị trường Halal.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLdzntUBFYXbvF0LdqnG5GqTXRiFJRPsEP1QiBO4NWfBDzqTSKB7_Ep1dbsi8_aWDxe6VMRXlxhOywoJy0-rLOxotEIeOhWsGw3xLwRjeyXhIbsicZAEbIQJNFOOwdNWkX5LKBfdAyEO17A125KU8WWKqzyzimsDt-DnxTaCtj4pUKJBtISSwr6jeDnb6im--JPncEcbIAfR5vINSZnx1cENwWM9EfbVJcE8-nI-pDhQ14jkZA5xi3eEoJQoHQ6Y-F76gq-lm1_ic',
  },
  {
    name: 'Tahini',
    sub: 'Bơ mè nguyên chất từ nhà máy Ai Cập.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnWfpQ8ab2IZmlRcoigT0ZFS0ZZuEq0fEx_rAFgDFGTidcH1VkgVEDlugTIr7poQb_RZPPYW9CoJy0er01mcZBHUfyaEawrSiE1DVTfkLmg2apWdPfx7578TTdiTP7Z9Gey34O9O_mxYaCDawQBO1I_DFAfYCU7jtfuDiP3CSwBHjQJ6H-FLpzvzka63BLgLIZuS84tMCyj8g2MKkHPLi64rGER5bOLOGs8AsiOqTaU1Y3ktytedOBiLTkS2--f7pQY64ABXzW9ws',
  },
  {
    name: 'OEM theo yêu cầu',
    sub: 'Sản xuất theo thương hiệu riêng của bạn.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSGYoGiQVfntCAxVlR9dml2jyFJFTIyYMJgkwZuueFIVtuuwnrw5VNC3LjPZ8lRH1azQQIw3pG8ikB3xlpMfVEqw3MOARY0BliHp04ddo2lg-Ihp-qECooTZzjGMEzlDr2ZmgejpW0XaArdZAk3Htcnqko5LXERsJPFKzZ3gHJyDNNyw5qy7GVmNVI8V8Q5XouwIJuHaw19jFWdqoK6-bqYn79UuvXHhiyoQajieaLR5owoAt17jf1f8zGsnt-arzeWzAWK0FF-pc',
  },
];

export const services = [
  {
    icon: 'sailing',
    title: 'Nhập khẩu trọn gói',
    items: ['Tìm nguồn nhà máy uy tín', 'Đàm phán giá tốt nhất', 'Kiểm tra chất lượng hàng hóa', 'Vận chuyển quốc tế'],
    summary: 'Giúp bạn nhập hàng an toàn – tối ưu chi phí – không rủi ro.',
  },
  {
    icon: 'description',
    title: 'Pháp lý & Công bố',
    items: ['Công bố thực phẩm (NĐ15 / NĐ46)', 'Kiểm nghiệm sản phẩm', 'Thiết kế tem nhãn phụ chuẩn quy định', 'Hỗ trợ hồ sơ nhập khẩu'],
    summary: 'Đảm bảo sản phẩm được phép lưu hành 100% tại Việt Nam.',
  },
  {
    icon: 'badge',
    title: 'Tư vấn Halal',
    items: ['Tư vấn tiêu chuẩn Halal', 'Kết nối tổ chức chứng nhận (Indonesia)', 'Hỗ trợ hồ sơ & audit'],
    summary: 'Mở rộng thị trường Hồi giáo & xuất khẩu quốc tế.',
  },
];

export const workflow = [
  ['1', 'Tiếp nhận nhu cầu', 'Ghi nhận sản phẩm, số lượng và mục tiêu thị trường'],
  ['2', 'Tìm & đề xuất NCC', 'Đề xuất nhà cung cấp phù hợp và thẩm định năng lực'],
  ['3', 'Gửi mẫu – báo giá', 'Gửi mẫu kiểm tra và báo giá chi tiết'],
  ['4', 'Nhập khẩu & kiểm định', 'Tổ chức vận chuyển, hồ sơ và kiểm định'],
  ['5', 'Giao hàng tận nơi', 'Thông quan và bàn giao hàng đúng cam kết'],
];

export const partnerMarket = [
  'Kết nối trực tiếp với nhà máy tại Ai Cập',
  'Phân phối tại Việt Nam & khu vực',
  'Hiểu rõ thị trường Trung Đông & Halal',
];

export const trustStats = [
  ['100+', 'Khách hàng DN'],
  ['500+', 'Đơn hàng'],
  ['5+', 'Năm kinh nghiệm'],
];

export const reasons = [
  ['diamond', 'Nguồn hàng trực tiếp', 'Không qua trung gian, kiểm soát chất lượng ngay từ đầu.'],
  ['payments', 'Giá cạnh tranh', 'Tối ưu giá vốn, gia tăng lợi nhuận kinh doanh.'],
  ['account_balance', 'Am hiểu pháp lý Việt Nam', 'Tư vấn đúng quy định cho từng nhóm sản phẩm.'],
  ['public', 'Kinh nghiệm Ai Cập – Trung Đông', 'Hiểu đặc thù thị trường và chuẩn giao thương khu vực.'],
  ['support_agent', 'Hỗ trợ A-Z', 'Từ nhập khẩu đến bán hàng, luôn có đội ngũ đồng hành.'],
];

export const caseStudies = [
  ['Nhập khẩu thành công', 'Tahini từ Ai Cập vào thị trường Việt Nam', 'Tối ưu chi phí và xây dựng kênh phân phối ổn định.'],
  ['Pháp lý nhanh gọn', 'Hoàn tất công bố sản phẩm trong thời gian ngắn', 'Rút ngắn thời gian đưa hàng ra thị trường.'],
  ['Kết nối nhà máy chuẩn quốc tế', 'Thiết lập mạng lưới nhà máy đủ chuẩn xuất khẩu', 'Sẵn sàng mở rộng dài hạn cho doanh nghiệp Việt.'],
];

export const footerLinks = ['Privacy Policy', 'Terms of Service', 'Global Offices'];

export const footerServices = ['Nhập khẩu trọn gói', 'Chứng nhận Halal', 'Sourcing nhà máy'];

export const i18n = {
  vi: {
    navLinks: [
      { label: 'Câu chuyện', target: 'our-story' },
      { label: 'Sản phẩm', target: 'marketplace' },
      { label: 'Dịch vụ', target: 'consulting' },
      { label: 'Quy trình', target: 'logistics' },
      { label: 'Liên hệ', target: 'contact' },
    ],
    navbar: {
      ctaFull: 'Hợp tác cùng chúng tôi',
      ctaCompact: 'Hợp tác',
      languageLabel: 'Ngôn ngữ',
    },
    hero: {
      tag: 'Hành lang thương mại: Ai Cập - Việt Nam',
      titlePrefix: 'Kết nối nguồn hàng Ai Cập – ',
      titleEmphasis: 'Nhập khẩu nhanh, pháp lý chuẩn, giá tận gốc',
      description:
        'Chuyên cung cấp thực phẩm, nông sản & sản phẩm Halal từ Ai Cập về Việt Nam – trọn gói từ sourcing, kiểm định đến phân phối.',
      primaryCta: 'Nhận báo giá ngay',
      secondaryCta: 'Tư vấn miễn phí 1:1',
      imageAlt: 'Toàn cảnh thương mại Ai Cập',
      contacts: [
        { icon: 'call', text: '+84 90 692 7780' },
        { icon: 'chat', text: 'Chat Zalo / WhatsApp' },
      ],
    },
    consultation: {
      title: 'Nhận tư vấn & báo giá miễn phí',
      subtitle: 'Điền thông tin để được hỗ trợ nhanh nhất. Đội ngũ chuyên gia sẽ liên hệ trong vòng 24h.',
      labels: {
        name: 'Họ & tên',
        company: 'Công ty',
        phone: 'Số điện thoại',
        email: 'Email',
        service: 'Nhu cầu (Nhập khẩu / Halal / Công bố sản phẩm)',
        message: 'Lời nhắn thêm',
      },
      placeholders: {
        name: 'Nguyễn Văn A',
        company: 'Công ty Xuất Nhập Khẩu...',
        phone: '090 xxx xxxx',
        email: 'partner@company.com',
        message: 'Ví dụ: Tôi cần nhập khẩu Tahini và hỗ trợ công bố sản phẩm...',
      },
      options: {
        default: '-- Chọn nhu cầu --',
        import: 'Nhập khẩu',
        halal: 'Halal',
        declaration: 'Công bố sản phẩm',
      },
      submitIdle: '🔥 Nhận báo giá ngay hôm nay',
      submitLoading: 'Đang gửi...',
      validationError: 'Vui lòng nhập Họ tên, Email và chọn Nhu cầu.',
      successMessage: 'Đăng ký thành công! Chúng tôi sẽ liên hệ bạn trong 24h.',
      fallbackError: 'Có lỗi xảy ra, vui lòng thử lại.',
      invalidJsonError: 'Response từ API không phải JSON hợp lệ. Vui lòng kiểm tra log PHP.',
      submitError: 'Không gửi được biểu mẫu. Vui lòng thử lại.',
      companyFallback: 'Không cung cấp',
      leadSubjectPrefix: 'Lead mới từ EgyptViet -',
    },
    painPoints: {
      title: 'Bạn đang gặp khó khăn khi nhập khẩu hàng?',
      items: painPoints,
      cta: '👉 EgyptViet giúp bạn giải quyết toàn bộ từ A-Z',
    },
    intro: {
      title: 'EgyptViet – Đối tác nhập khẩu hàng Ai Cập đáng tin cậy',
      description:
        'Chúng tôi giúp doanh nghiệp Việt tiếp cận trực tiếp nhà sản xuất tại Ai Cập, tối ưu chi phí và đảm bảo đầy đủ pháp lý khi đưa sản phẩm ra thị trường. Kinh nghiệm thực chiến trong nhập khẩu thực phẩm, công bố sản phẩm theo quy định Việt Nam và tư vấn tiêu chuẩn Halal quốc tế.',
      quote:
        '👉 EgyptViet không chỉ là đơn vị nhập khẩu – mà là đối tác chiến lược giúp bạn mở rộng thị trường Trung Đông.',
      imageAlt: 'Nhà máy sản xuất',
    },
    productsSection: {
      headingTitle: 'Sản phẩm chủ lực',
      headingSubtitle: 'Nguồn hàng chất lượng – giá trực tiếp từ nhà máy Ai Cập',
      items: products,
      ctaTitle: 'Nhận catalogue & báo giá chi tiết ngay hôm nay',
      ctaText: 'Danh mục linh hoạt cho nhập khẩu, phân phối và OEM theo yêu cầu.',
      ctaButton: 'Yêu cầu báo giá sản phẩm',
    },
    mediaGallerySection: {
      sectionId: 'gallery',
      headingTitle: '📸 Hình ảnh sản phẩm',
      headingSubtitle: 'Sản phẩm cao cấp và hình ảnh sản xuất thực tế tại nhà máy',
      initialVisible: 6,
      showMore: 'Xem thêm ảnh',
      showLess: 'Thu gọn',
      groups: {
        products: {
          title: 'Sản phẩm cao cấp',
          description: '',
          altPrefix: 'Sản phẩm hoàn chỉnh',
        },
        factory: {
          title: 'Hình ảnh tại nhà máy',
          description: '',
          altPrefix: 'Nhà máy sản xuất',
        },
      },
      productItems: productGalleryImages,
      factoryItems: factoryGalleryImages,
    },
    servicesSection: {
      headingTitle: 'Dịch vụ cốt lõi',
      items: services,
    },
    workflowSection: {
      headingTitle: 'Quy trình làm việc minh bạch',
      subtitle: 'Chỉ 5 bước để nhập hàng từ Ai Cập về Việt Nam',
      items: workflow,
      cta: '👉 Bạn chỉ cần tập trung bán hàng – chúng tôi lo phần còn lại',
    },
    partnerMarketSection: {
      title: '🤝 Đối tác & Thị trường',
      items: partnerMarket,
      cta: '👉 Xây dựng chuỗi cung ứng bền vững – lâu dài – minh bạch',
    },
    whyChooseSection: {
      headingTitle: '💎 Vì sao chọn EgyptViet?',
      stats: trustStats,
      reasons,
      cta: '👉 Không chỉ nhập hàng – chúng tôi giúp bạn kinh doanh thành công',
      imageAlt: 'Vận tải hàng hóa',
    },
    caseStudySection: {
      headingTitle: '📊 Nghiên cứu điển hình / Kết quả',
      headingSubtitle: 'Hàng trăm khách hàng đã lựa chọn EgyptViet',
      items: caseStudies,
    },
    finalCta: {
      title: 'Bạn đang tìm nguồn hàng Ai Cập uy tín?',
      quote: '"Đừng mất thời gian thử sai – hãy để EgyptViet giúp bạn đi nhanh và đúng ngay từ đầu."',
      hotline: '📞 Hotline: +84 90 692 7780',
      email: '📩 Email: info@egyptviet.com',
      button: 'Liên hệ ngay để nhận tư vấn chiến lược nhập khẩu',
    },
    footer: {
      companyName: 'CÔNG TY TNHH EGYPTVIET',
      address: 'Địa chỉ: 6-8 Đoàn Văn Bơ, TP. Hồ Chí Minh',
      email: 'Email: info@egyptviet.com',
      website: 'Website: egyptviet.com',
      copyright: '© 2024 EgyptViet Trade Corridor. All rights reserved.',
    },
  },
  en: {
    navLinks: [
      { label: 'Our Story', target: 'our-story' },
      { label: 'Marketplace', target: 'marketplace' },
      { label: 'Services', target: 'consulting' },
      { label: 'Workflow', target: 'logistics' },
      { label: 'Contact', target: 'contact' },
    ],
    navbar: {
      ctaFull: 'Partner With Us',
      ctaCompact: 'Partner',
      languageLabel: 'Language',
    },
    hero: {
      tag: 'Trade Corridor: Egypt - Vietnam',
      titlePrefix: 'Connect Egyptian supply sources – ',
      titleEmphasis: 'Fast import, compliant legal process, direct pricing',
      description:
        'We provide food, agricultural products, and Halal goods from Egypt to Vietnam with end-to-end support from sourcing and inspection to distribution.',
      primaryCta: 'Get a Quote Now',
      secondaryCta: 'Free 1:1 Consultation',
      imageAlt: 'Egypt trade skyline',
      contacts: [
        { icon: 'call', text: '+84 90 692 7780' },
        { icon: 'chat', text: 'Chat on Zalo / WhatsApp' },
      ],
    },
    consultation: {
      title: 'Get Free Consultation & Quotation',
      subtitle: 'Submit your details for the fastest support. Our specialists will contact you within 24 hours.',
      labels: {
        name: 'Full name',
        company: 'Company',
        phone: 'Phone number',
        email: 'Email',
        service: 'Need (Import / Halal / Product Declaration)',
        message: 'Additional message',
      },
      placeholders: {
        name: 'John Doe',
        company: 'Import Export Company...',
        phone: '+84 xxx xxx xxx',
        email: 'partner@company.com',
        message: 'Example: I need to import Tahini and support for product declaration...',
      },
      options: {
        default: '-- Select your need --',
        import: 'Import',
        halal: 'Halal',
        declaration: 'Product Declaration',
      },
      submitIdle: '🔥 Get Your Quote Today',
      submitLoading: 'Sending...',
      validationError: 'Please fill in Full name, Email and select your need.',
      successMessage: 'Registration successful! We will contact you within 24 hours.',
      fallbackError: 'An error occurred. Please try again.',
      invalidJsonError: 'API response is not valid JSON. Please check PHP logs.',
      submitError: 'Could not submit the form. Please try again.',
      companyFallback: 'Not provided',
      leadSubjectPrefix: 'New lead from EgyptViet -',
    },
    painPoints: {
      title: 'Are you facing import challenges?',
      items: [
        ['search_off', 'Unsure how to find reliable suppliers in Egypt'],
        ['gavel', 'Concerned about complex legal procedures'],
        ['hourglass_bottom', 'Cargo delays at port causing extra costs'],
        ['verified_user', 'Unclear about Halal and product compliance standards'],
      ],
      cta: '👉 EgyptViet helps you solve everything end-to-end',
    },
    intro: {
      title: 'EgyptViet – Your trusted Egypt import partner',
      description:
        'We help Vietnamese businesses connect directly with Egyptian manufacturers, optimize costs, and ensure full legal compliance before products enter the market. Practical experience in food import, product declaration under Vietnamese regulations, and international Halal consulting.',
      quote:
        '👉 EgyptViet is not just an importer – we are your strategic partner for Middle East expansion.',
      imageAlt: 'Manufacturing facility',
    },
    productsSection: {
      headingTitle: 'Key Products',
      headingSubtitle: 'Quality supply with direct factory pricing from Egypt',
      items: [
        {
          name: 'Cheeses',
          sub: 'Premium cheese lines suitable for distribution and OEM.',
          image: new URL('../../images/CHEESES.png', import.meta.url).href,
          className: 'is-hero',
        },
        {
          name: 'Egyptian Pasta (Regina)',
          sub: 'A well-known pasta brand in the Middle East.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAjKz2rVr29czjTfzSvgNBZi10vcze0qQQWGiP0oVMwcMa1gSRbAf12_TX-W6nK2Hd1GcnPI3mU12SNWmPLanJCM3PmGSN46jhxaCv5IdWA22Vb4Et0pfqYOoEzkhoLXlvun6lvK49NB5LfcIy80AW8C8hOitx7zw4vy__uVx53GGgYFwhk7UczpZqxk9HNiPWt_ymrpxmommT2LO99uGGr5BE4OTwRXNUbv8ZS2SNDADG2ml73nWBqx1YVnTXyArMCNYFrrperPA0',
        },
        {
          name: 'Beans & Spices',
          sub: 'Middle Eastern flavor profile with stable quality.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDfBoWnEU2qeKZYFDH5B1pZDC2xULuZZy3bd-vtiVrNT59QU8AacBZRfJ2LNZwjmL3cnq7dKRaoegJ5w-jeUPcTLAi2GDbKQsFmnSsmVZ7cfFFs_Npphtt6DnNlpWZfOATQpTWHouyz_wUqCkAw3kMzA6_f5hK5JcYp8G_JF7iWAcBHEtlfA9kTO22ikqbSix0m9v1oiQh-Ziat1DLs2qRccJOPIqZFqo9U0AB5Qiu3uGJf_ox8659DQbfz7yNBwyzqj0Y0t8vJmg8',
        },
        {
          name: 'Halal Ingredients',
          sub: 'Certified ingredients for Halal-focused markets.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBLdzntUBFYXbvF0LdqnG5GqTXRiFJRPsEP1QiBO4NWfBDzqTSKB7_Ep1dbsi8_aWDxe6VMRXlxhOywoJy0-rLOxotEIeOhWsGw3xLwRjeyXhIbsicZAEbIQJNFOOwdNWkX5LKBfdAyEO17A125KU8WWKqzyzimsDt-DnxTaCtj4pUKJBtISSwr6jeDnb6im--JPncEcbIAfR5vINSZnx1cENwWM9EfbVJcE8-nI-pDhQ14jkZA5xi3eEoJQoHQ6Y-F76gq-lm1_ic',
        },
        {
          name: 'Tahini',
          sub: 'Pure sesame paste from certified Egyptian factories.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCnWfpQ8ab2IZmlRcoigT0ZFS0ZZuEq0fEx_rAFgDFGTidcH1VkgVEDlugTIr7poQb_RZPPYW9CoJy0er01mcZBHUfyaEawrSiE1DVTfkLmg2apWdPfx7578TTdiTP7Z9Gey34O9O_mxYaCDawQBO1I_DFAfYCU7jtfuDiP3CSwBHjQJ6H-FLpzvzka63BLgLIZuS84tMCyj8g2MKkHPLi64rGER5bOLOGs8AsiOqTaU1Y3ktytedOBiLTkS2--f7pQY64ABXzW9ws',
        },
        {
          name: 'OEM on Demand',
          sub: 'Private-label production tailored to your brand.',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBSGYoGiQVfntCAxVlR9dml2jyFJFTIyYMJgkwZuueFIVtuuwnrw5VNC3LjPZ8lRH1azQQIw3pG8ikB3xlpMfVEqw3MOARY0BliHp04ddo2lg-Ihp-qECooTZzjGMEzlDr2ZmgejpW0XaArdZAk3Htcnqko5LXERsJPFKzZ3gHJyDNNyw5qy7GVmNVI8V8Q5XouwIJuHaw19jFWdqoK6-bqYn79UuvXHhiyoQajieaLR5owoAt17jf1f8zGsnt-arzeWzAWK0FF-pc',
        },
      ],
      ctaTitle: 'Get catalogue & detailed quotation today',
      ctaText: 'Flexible product categories for import, distribution, and custom OEM.',
      ctaButton: 'Request Product Quote',
    },
    mediaGallerySection: {
      sectionId: 'gallery',
      headingTitle: '📸 Real Visual Gallery',
      headingSubtitle: 'Premium products and actual factory production scenes',
      initialVisible: 6,
      showMore: 'View more photos',
      showLess: 'Show less',
      groups: {
        products: {
          title: 'Premium product',
          description: 'High-quality product shots ready for sales and marketing use.',
          altPrefix: 'Finished product',
        },
        factory: {
          title: 'Factory Production',
          description: 'Real factory process images to increase trust and sourcing transparency.',
          altPrefix: 'Factory production',
        },
      },
      productItems: productGalleryImages,
      factoryItems: factoryGalleryImages,
    },
    servicesSection: {
      headingTitle: 'Core Services',
      items: [
        {
          icon: 'sailing',
          title: 'End-to-End Import',
          items: ['Reliable factory sourcing', 'Best-price negotiation', 'Product quality inspection', 'International shipping'],
          summary: 'Import safely, optimize costs, and minimize risk.',
        },
        {
          icon: 'description',
          title: 'Legal & Product Declaration',
          items: ['Food declaration support', 'Product testing', 'Compliant supplementary labels', 'Import dossier support'],
          summary: 'Ensure full legal circulation in Vietnam.',
        },
        {
          icon: 'badge',
          title: 'Halal Consulting',
          items: ['Halal standard consulting', 'Certification partner connection', 'Audit & document support'],
          summary: 'Expand into Muslim and international markets.',
        },
      ],
    },
    workflowSection: {
      headingTitle: 'Transparent Workflow',
      subtitle: 'Just 5 steps to import from Egypt to Vietnam',
      items: [
        ['1', 'Requirement Intake', 'Collect product, volume, and market goals'],
        ['2', 'Supplier Sourcing', 'Recommend and evaluate suitable suppliers'],
        ['3', 'Samples & Quotation', 'Provide samples and a detailed quote'],
        ['4', 'Import & Compliance', 'Handle shipping, paperwork, and inspection'],
        ['5', 'Final Delivery', 'Clear customs and deliver as committed'],
      ],
      cta: '👉 Focus on selling — we handle the rest',
    },
    partnerMarketSection: {
      title: '🤝 Partners & Markets',
      items: [
        'Direct connection with Egyptian factories',
        'Distribution in Vietnam & regional markets',
        'Deep understanding of Middle East & Halal market dynamics',
      ],
      cta: '👉 Build a long-term, transparent, and sustainable supply chain',
    },
    whyChooseSection: {
      headingTitle: '💎 Why EgyptViet?',
      stats: [
        ['100+', 'Business Clients'],
        ['500+', 'Orders'],
        ['5+', 'Years of Experience'],
      ],
      reasons: [
        ['diamond', 'Direct Sourcing', 'No middleman. Quality controlled from the origin.'],
        ['payments', 'Competitive Pricing', 'Optimize cost of goods and improve margin.'],
        ['account_balance', 'Local Compliance Expertise', 'Accurate legal advisory by product category.'],
        ['public', 'Egypt & Middle East Experience', 'Strong understanding of regional trade standards.'],
        ['support_agent', 'A-Z Support', 'From import to market launch, we stay with you.'],
      ],
      cta: '👉 Beyond importing — we help your business grow',
      imageAlt: 'Cargo logistics',
    },
    caseStudySection: {
      headingTitle: '📊 Case Studies / Results',
      headingSubtitle: 'Hundreds of clients have chosen EgyptViet',
      items: [
        ['Successful Import', 'Tahini imported from Egypt to Vietnam', 'Optimized cost and stable distribution setup.'],
        ['Fast Legal Process', 'Completed product declaration in short time', 'Reduced time-to-market for new products.'],
        ['Global-standard Factory Network', 'Built a network of export-qualified factories', 'Ready for long-term growth of Vietnamese businesses.'],
      ],
    },
    finalCta: {
      title: 'Looking for reliable Egyptian suppliers?',
      quote: '"Don’t lose time on trial-and-error — let EgyptViet help you move fast and right from day one."',
      hotline: '📞 Hotline: +84 90 692 7780',
      email: '📩 Email: info@egyptviet.com',
      button: 'Contact us now for strategic import consultation',
    },
    footer: {
      companyName: 'EGYPTVIET CO., LTD',
      address: 'Address: 6-8 Doan Van Bo, Ho Chi Minh City',
      email: 'Email: info@egyptviet.com',
      website: 'Website: egyptviet.com',
      copyright: '© 2024 EgyptViet Trade Corridor. All rights reserved.',
    },
  },
};