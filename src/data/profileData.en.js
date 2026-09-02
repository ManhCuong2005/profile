/**
 * FILE CẤU HÌNH DỮ LIỆU PROFILE CÁ NHÂN (DIGITAL CV) - ENGLISH VERSION
 *
 * Thông tin cá nhân của Nguyễn Mạnh Cường
 */

export const profileData = {
  // Thông tin cá nhân cơ bản
  personal: {
    fullName: "Nguyễn Mạnh Cường",
    title: "Software Engineer | Fullstack & Systems Developer",
    subtitle:
      "IT Engineering student (2023–2028) passionate about Realtime Network Systems, AI & Blockchain-integrated E-Commerce, with real-world experience in TikTok Shop & Affiliate Marketing.",
    avatar:
      "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/486269939_1320799155857208_4315338073025820117_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEINXye-I3s4gRo_0h08bCUZt-FYPCNaNlm34Vg8I1o2dAXNCbPle3RNM7Yip5zGzslHMFWHXuivPGRW-JNF1rV&_nc_ohc=Qq_6QcjihFQQ7kNvwH6fSfQ&_nc_oc=Adp3m71LccKEk0_fGWWLblL9XBBzx4yu-AWa-tOO8afAasxOVdi76Cmg_qBJPIoLOy_S1k7IumnffE8cbX0IKG7t&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=n8-auHEOkrvCHL9y2-MJGA&_nc_ss=7b2a8&oh=00_AQKtlCDqderVgjrGa5qiz_w4pcIc9XDpWHF-czwyQOTtBA&oe=6A9DB677",
    openToWork: true,
    workStatusText: "Open to Internship & New Projects",
    location: "Đà Nẵng, Việt Nam",
    email: "manhcuongnguyen2205@gmail.com",
    phone: "0977148627",
    dateOfBirth: "22/05/2005",
    website: "https://cuonglocnuoc.vercel.app",
    github: "https://github.com/manhcuong2005",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com/manhcuong2205",
    telegram: "https://t.me/0977148627",
    summary: `I am an IT Engineering student (2023–2028) with deep passion for system programming, multithreaded networking, and emerging technologies like AI and Blockchain. Alongside that, I have real-world experience in online business — from Affiliate Marketing to TikTok Shop — combined with video creation skills.`,
  },

  // Các con số thống kê nổi bật
  stats: [
    { label: "Current GPA", value: "3.1", suffix: "/4.0" },
    { label: "Featured Projects", value: "5+", suffix: "" },
    { label: "Affiliate Revenue", value: "2.5B", suffix: "VND" },
    { label: "Shop Rating", value: "4.8★", suffix: "" },
  ],

  // Các dịch vụ / Lĩnh vực chuyên môn
  services: [
    {
      icon: "Server",
      title: "Backend & Systems Development",
      description:
        "Building robust backends with Java Spring Boot, Node.js and designing relational databases (PostgreSQL/MySQL). Experience in multithreaded TCP/UDP socket programming for Realtime apps.",
    },
    {
      icon: "Cpu",
      title: "AI & Blockchain Integration",
      description:
        "Integrating AI face recognition models (Python/OpenCV), Blockchain smart contract payments, and ZaloPay Sandbox into real-world E-Commerce systems.",
    },
    {
      icon: "Coins",
      title: "Affiliate Marketing & E-Commerce",
      description:
        "Operating multi-channel affiliate marketing with an estimated revenue of ~2.5B VND. Running TikTok Shop (achieved Star Shop), 500+ orders, 4.8★ rating, ~35M VND revenue.",
    },
    {
      icon: "Video",
      title: "Content Creation & Video Editing",
      description:
        "Professional video recording and editing for brand promotion, Affiliate products, and TikTok Shop. Mastering content production workflow to boost conversion rates.",
    },
  ],

  // Kỹ năng chuyên môn
  skillCategories: [
    {
      name: "Core Languages",
      skills: [
        { name: "Java (Core, OOP, Advanced)", level: 88, icon: "Code" },
        {
          name: "C / C++ (Data Structures & Sockets)",
          level: 82,
          icon: "Code",
        },
        { name: "Python (AI & Scripting)", level: 80, icon: "FileCode" },
        { name: "JavaScript / TypeScript", level: 85, icon: "FileCode" },
        { name: "HTML5 / CSS3 / Tailwind", level: 88, icon: "Palette" },
      ],
    },
    {
      name: "Backend Frameworks & Databases",
      skills: [
        { name: "Spring Boot / Java Web", level: 85, icon: "Server" },
        { name: "PostgreSQL", level: 82, icon: "Database" },
        { name: "MySQL", level: 85, icon: "Database" },
        { name: "RESTful API Architecture", level: 86, icon: "Network" },
        { name: "Node.js / Express", level: 78, icon: "Server" },
      ],
    },
    {
      name: "Network & Emerging Tech",
      skills: [
        {
          name: "Socket TCP / UDP & Multi-threading",
          level: 86,
          icon: "Network",
        },
        { name: "AI / Face Recognition (Python)", level: 78, icon: "Cpu" },
        { name: "Blockchain & Web3 Payment", level: 75, icon: "Coins" },
        { name: "ZaloPay Sandbox Integration", level: 85, icon: "CreditCard" },
      ],
    },
    {
      name: "Business & Content Creation",
      skills: [
        {
          name: "Affiliate Marketing (Đa kênh)",
          level: 90,
          icon: "TrendingUp",
        },
        { name: "TikTok Shop Operations", level: 88, icon: "ShoppingBag" },
        {
          name: "Quay & Dựng Video (Premiere/Capcut)",
          level: 85,
          icon: "Video",
        },
        { name: "Content Strategy & SEO", level: 80, icon: "Lightbulb" },
      ],
    },
  ],

  // Kinh nghiệm lập trình CNTT
  experiences: [
    {
      period: "2023 – 2026",
      role: "IT Engineering Student – Programming Projects",
      company: "University",
      location: "Đà Nẵng, Việt Nam",
      description:
        "Learning and simultaneously working on real programming projects from basic to advanced throughout university years.",
      achievements: [
        "2023 – Built a Food Delivery app and a basic messaging app using Java Core & OOP.",
        "2025 – Developed an advanced messaging app with Java: TCP/UDP multi-threaded sockets, Realtime calling, and data synchronization.",
        "2026 – Built an e-commerce ecosystem integrated with AI face recognition and Blockchain payments.",
      ],
      techStack: [
        "Java",
        "C++",
        "Python",
        "Spring Boot",
        "PostgreSQL",
        "MySQL",
        "TCP/UDP",
        "Blockchain",
      ],
    },
  ],

  // Kinh nghiệm thương mại điện tử & kinh doanh
  businessExperiences: [
    {
      period: "10/2024 – 09/2026",
      role: "Affiliate Marketer – Multi-channel",
      company: "Self-employed (Freelance)",
      location: "Nationwide (Online)",
      type: "affiliate",
      description:
        "Operated a multi-channel affiliate marketing system across social media and e-commerce platforms, reaching and converting thousands of potential customers.",
      achievements: [
        "Estimated affiliate revenue reached ~2.5 billion VND over 2 years of operation.",
        "Built a content funnel optimizing conversion rates across multiple channels.",
        "Combined video marketing and SEO to sustainably increase organic traffic.",
      ],
      techStack: [
        "Affiliate Networks",
        "TikTok Ads",
        "Facebook Ads",
        "Content Marketing",
        "SEO",
      ],
    },
    {
      period: "05/2025 – 09/2026",
      role: "Shop Owner – TikTok Shop Seller",
      company: "TikTok Shop",
      location: "Đà Nẵng / Nationwide",
      type: "tiktok",
      description:
        "Self-operated a TikTok Shop from sourcing products and recording product videos to processing orders and providing customer care.",
      achievements: [
        "Achieved 500+ successful orders with ~35M VND in revenue.",
        "Earned ⭐ Star Shop badge with a 4.8/5 customer rating.",
        "Maintained low return rates and achieved a 95%+ customer response rate.",
      ],
      techStack: [
        "TikTok Shop",
        "Video Marketing",
        "Livestream",
        "Order Management",
        "Customer Care",
      ],
    },
    {
      period: "10/2024 – 09/2026",
      role: "Video Editor & Content Creator",
      company: "Self-employed – Affiliate & TikTok Channel",
      location: "Đà Nẵng, Việt Nam",
      type: "video",
      description:
        "Produced, filmed, and edited all product promotional videos for Affiliate campaigns and TikTok Shop.",
      achievements: [
        "Produced dozens of product promo videos reaching thousands of organic views.",
        "Mastered commercial video editing workflow using CapCut.",
        "Built a consistent content style, boosting personal brand awareness.",
      ],
      techStack: ["CapCut", "TikTok Creator Tools", "Canva"],
    },
  ],

  // Học vấn & Bằng cấp
  education: [
    {
      period: "2023 – 2028",
      degree: "Bachelor of Information Technology Engineering",
      school: "Faculty of Information Technology",
      grade: "Current GPA: 3.1 / 4.0",
      description:
        "Full-time accredited IT Engineering program with deep focus on System Architecture, Network Programming, AI, and Distributed Database systems.",
    },
  ],

  // Chứng chỉ tiêu biểu
  certifications: [
    {
      name: "Java Web Competition Completion – Spring Boot",
      issuer: "FPT Software",
      year: "2025",
      description:
        "Competed in building a dynamic web app with Spring Boot offline (no WiFi), coded from scratch, passed based on grading criteria.",
      link: "#",
    },
    {
      name: "⭐ Star Shop – TikTok Shop",
      issuer: "TikTok Shop Vietnam",
      year: "2025",
      description:
        "Achieved Star Shop badge with 500+ orders, ~35M VND revenue, 4.8/5 star rating.",
      link: "#",
    },
  ],

  // Dự án tiêu biểu
  projects: [
    {
      id: 1,
      title: "Realtime Desktop Messaging & Calling App (TCP / UDP)",
      category: "web",
      categoryLabel: "Desktop & Network",
      tagline:
        "Realtime multi-threaded communication system — TCP messaging, UDP calling",
      description:
        "Desktop app allowing instant messaging via reliable TCP and realtime high-speed voice calling via UDP, utilizing Multi-threading Socket Programming architecture.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      tags: [
        "Java",
        "C++",
        "TCP/UDP Sockets",
        "Multi-threading",
        "Network Audio",
      ],
      liveUrl: "https://github.com/manhcuong2005",
      githubUrl: "https://github.com/manhcuong2005",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Ecosystem with AI & Blockchain",
      category: "web",
      categoryLabel: "Fullstack & AI Web3",
      tagline:
        "Smart E-Commerce — AI Recognition, Blockchain & ZaloPay Payments",
      description:
        "Modern e-commerce platform integrating AI face recognition login (Python/OpenCV), Blockchain smart contract payments, and virtual ZaloPay Sandbox.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      tags: [
        "Spring Boot",
        "Python AI",
        "Blockchain",
        "PostgreSQL",
        "ZaloPay Sandbox",
        "Vue.js",
      ],
      liveUrl: "https://cuonglocnuoc.vercel.app",
      githubUrl: "https://github.com/manhcuong2005",
      featured: true,
    },
    {
      id: 3,
      title: "Food Ordering & Basic Messaging App (Java Core)",
      category: "web",
      categoryLabel: "Java Desktop App",
      tagline:
        "First project — food ordering & basic messaging with Java OOP",
      description:
        "Desktop app for food ordering (menu, order management) and basic messaging built with Java Core, applying OOP principles and data structures.",
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop",
      tags: ["Java Core", "OOP", "JavaSwing / JavaFX", "MySQL"],
      liveUrl: "https://github.com/manhcuong2005",
      githubUrl: "https://github.com/manhcuong2005",
      featured: false,
    },
    {
      id: 4,
      title: "CuongLocNuoc Web Platform",
      category: "web",
      categoryLabel: "Web Application",
      tagline: "Official website for products and services",
      description:
        "Official website introducing water filtration services and products, featuring a complete responsive design, deployed on Vercel.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["JavaScript", "CSS3", "Tailwind CSS", "Vercel"],
      liveUrl: "https://cuonglocnuoc.vercel.app",
      githubUrl: "https://github.com/manhcuong2005",
      featured: false,
    },
  ],
};
