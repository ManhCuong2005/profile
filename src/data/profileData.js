/**
 * FILE CẤU HÌNH DỮ LIỆU PROFILE CÁ NHÂN (DIGITAL CV)
 *
 * Thông tin cá nhân của Nguyễn Mạnh Cường
 */

export const profileData = {
  // Thông tin cá nhân cơ bản
  personal: {
    fullName: "Nguyễn Mạnh Cường",
    title: "Software Engineer | Fullstack & Systems Developer",
    subtitle:
      "Sinh viên Kỹ sư Công nghệ Thông tin đam mê xây dựng hệ thống mạng Realtime, ứng dụng Thương mại điện tử tích hợp AI & Blockchain.",
    avatar:
      "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/474058570_1278342513436206_7702882073675870558_n.jpg?stp=dst-jpg_tt6&cstp=mx1509x1497&ctp=s1509x1497&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeED5qfSe8CfF_iqLk3k1MscOQMSKjtEjzQ5AxIqO0SPNC-p3Rxc6DO6nFvUOqBv8EC7pxB0lroJgidctQ9xzGYJ&_nc_ohc=1bVVTuJRBw4Q7kNvwEBIRCY&_nc_oc=AdrXP_lFb-FXOzwYKYl7NZS7UuKIDIfBEjmMfduqYb73A1iFpR94MVWt3iJjM_C85Lk&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=aJHm3GIImG929J4DUYUjvQ&_nc_ss=7b2a8&oh=00_AQH8-h7MB4apCJKFJ24OlQqNrwthgWJJrU0TbfruvGI2JQ&oe=6A95B73B",
    openToWork: true, // Trạng thái sẵn sàng nhận việc
    workStatusText: "Sẵn sàng cho cơ hội Thực tập & Dự án mới",
    location: "Đà Nẵng, Việt Nam",
    email: "manhcuongnguyen2205@gmail.com",
    phone: "0977148627",
    dateOfBirth: "22/05/2005",
    website: "https://cuonglocnuoc.vercel.app",
    github: "https://github.com/manhcuong2005",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com/manhcuong2205",
    telegram: "https://t.me/0977148627",
    summary: `Tôi là sinh viên ngành Kỹ sư Công nghệ Thông tin (2023 - 2028) với niềm đam mê sâu sắc về lập trình hệ thống, phát triển ứng dụng mạng đa luồng và các công nghệ mới như AI, Blockchain. Tôi có nền tảng vững chắc về Java, Spring Boot, C++, Python, JavaScript cùng kinh nghiệm thiết kế cơ sở dữ liệu PostgreSQL, MySQL và xây dựng các sản phẩm thực tế từ ứng dụng Desktop socket đa luồng đến hệ thống E-commerce hiện đại.`,
  },

  // Các con số thống kê nổi bật
  stats: [
    { label: "GPA Hiện tại", value: "3.1", suffix: "/4.0" },
    { label: "Dự án Nổi bật", value: "3+", suffix: "" },
    { label: "Ngôn ngữ Lập trình", value: "5+", suffix: "" },
    { label: "Công nghệ & DB", value: "8+", suffix: "" },
  ],

  // Các dịch vụ / Lĩnh vực chuyên môn
  services: [
    {
      icon: "Server",
      title: "Backend & Systems Development",
      description:
        "Xây dựng dịch vụ backend mạnh mẽ, bảo mật và mở rộng với Java Spring Boot, Node.js, C++ và thiết kế cơ sở dữ liệu quan hệ PostgreSQL / MySQL tối ưu hóa truy vấn.",
    },
    {
      icon: "Network",
      title: "Network & Realtime Applications",
      description:
        "Lập trình socket truyền thông mạng TCP/UDP đa luồng (Multi-threading), xây dựng ứng dụng nhắn tin và truyền dẫn âm thanh/video thời gian thực trên môi trường Desktop.",
    },
    {
      icon: "Cpu",
      title: "AI & Computer Vision Integration",
      description:
        "Nghiên cứu và tích hợp các mô hình trí tuệ nhân tạo (AI), nhận diện khuôn mặt (Face Recognition) và thị giác máy tính vào các ứng dụng thực tế với Python.",
    },
    {
      icon: "Coins",
      title: "Blockchain & Payment Solutions",
      description:
        "Tích hợp các giải pháp thanh toán thông minh hiện đại: giao dịch qua mạng lưới Blockchain và cổng thanh toán điện tử (ZaloPay Sandbox ảo, VNPay).",
    },
  ],

  // Kỹ năng chuyên môn
  skillCategories: [
    {
      name: "Ngôn ngữ Lập trình (Core Languages)",
      skills: [
        { name: "Java (Core & OOP)", level: 88, icon: "Code" },
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
      name: "Backend Frameworks & Cơ sở dữ liệu",
      skills: [
        { name: "Spring Boot / Java Web", level: 85, icon: "Server" },
        { name: "PostgreSQL", level: 82, icon: "Database" },
        { name: "MySQL", level: 85, icon: "Database" },
        { name: "RESTful API Architecture", level: 86, icon: "Network" },
        { name: "Node.js / Express", level: 78, icon: "Server" },
      ],
    },
    {
      name: "Mạng máy tính & Công nghệ Mới",
      skills: [
        {
          name: "Socket TCP / UDP & Multi-threading",
          level: 86,
          icon: "Network",
        },
        { name: "AI / Face Recognition (Python)", level: 78, icon: "Cpu" },
        { name: "Blockchain & Web3 Payment", level: 75, icon: "Coins" },
        {
          name: "Payment Gateways (ZaloPay Sandbox)",
          level: 85,
          icon: "CreditCard",
        },
      ],
    },
    {
      name: "Công cụ & Kỹ năng Mềm",
      skills: [
        { name: "Git & GitHub Version Control", level: 88, icon: "GitBranch" },
        {
          name: "Tư duy Thuật toán & Giải quyết vấn đề",
          level: 85,
          icon: "Lightbulb",
        },
        {
          name: "Làm việc nhóm & Giao tiếp kỹ thuật",
          level: 85,
          icon: "Users",
        },
        { name: "Tự nghiên cứu công nghệ mới", level: 90, icon: "Sparkles" },
      ],
    },
  ],

  // Quá trình học tập & Hoạt động
  experiences: [
    {
      period: "2023 - 2028 (Dự kiến)",
      role: "Sinh viên Kỹ sư Công nghệ Thông tin",
      company: "Trường Đại học Việt Hàn",
      location: "Đà Nẵng, Việt Nam",
      description:
        "Tập trung nghiên cứu sâu về Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng, Mạng máy tính, Hệ thống cơ sở dữ liệu và Phát triển phần mềm.",
      achievements: [
        "Duy trì điểm GPA tích lũy ấn tượng: 3.1 / 4.0.",
        "Xây dựng thành công 3+ dự án thực tế tích hợp các công nghệ phức tạp (Socket đa luồng, AI nhận diện khuôn mặt, Blockchain).",
        "Tích cực tham gia các kỳ thi học thuật và đạt chứng nhận chuyên môn từ các tập đoàn công nghệ lớn.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "C++",
        "Python",
        "PostgreSQL",
        "MySQL",
        "TCP/UDP",
      ],
    },
    {
      period: "2024",
      role: "Pass cuộc thi Java Web",
      company: "FPT Software",
      location: "Đà Nẵng / Toàn quốc",
      description:
        "Tham gia tranh tài và hoàn thành xuất sắc các bài toán lập trình Backend, thiết kế cơ sở dữ liệu và xây dựng ứng dụng Java Web theo chuẩn doanh nghiệp.",
      achievements: [
        "Vượt qua các vòng đánh giá chuyên môn khắt khe và nhận chứng chỉ Pass cuộc thi Java Web của FPT Software.",
        "Áp dụng kiến trúc Clean Architecture và tối ưu hóa xử lý truy vấn dữ liệu.",
      ],
      techStack: [
        "Java",
        "Spring Framework",
        "JSP/Servlet",
        "MySQL",
        "REST API",
      ],
    },
  ],

  // Học vấn & Bằng cấp
  education: [
    {
      period: "2023 - 2028",
      degree: "Kỹ sư Công nghệ Thông tin",
      school:
        "Khoa Khoa học máy tính - Đại học Công nghệ thông tin và truyền thông Việt Hàn",
      grade: "GPA Hiện tại: 3.1 / 4.0",
      description:
        "Chương trình đào tạo Kỹ sư Công nghệ Thông tin chính quy, nghiên cứu chuyên sâu về Kiến trúc hệ thống, Lập trình mạng, Trí tuệ nhân tạo và Cơ sở dữ liệu phân tán.",
    },
  ],

  // Chứng chỉ tiêu biểu
  certifications: [
    {
      name: "Chứng chỉ Hoàn thành Cuộc thi Java Web",
      issuer: "FPT Software",
      year: "2024",
      link: "#",
    },
    {
      name: "Chứng nhận Kỹ năng Lập trình Hướng đối tượng & Thuật toán",
      issuer: "University IT Department",
      year: "2023",
      link: "#",
    },
  ],

  // Dự án tiêu biểu
  projects: [
    {
      id: 1,
      title: "Ứng dụng Nhắn tin & Gọi điện Desktop Realtime (TCP / UDP)",
      category: "web",
      categoryLabel: "Desktop & Network",
      tagline:
        "Hệ thống truyền thông đa luồng realtime qua giao thức mạng TCP và UDP",
      description:
        "Ứng dụng Desktop cho phép người dùng nhắn tin tức thời qua giao thức TCP đảm bảo độ tin cậy dữ liệu, cùng tính năng gọi thoại/gọi điện thoại realtime tốc độ cao bằng giao thức UDP kết hợp kiến trúc xử lý đa luồng (Multi-threading Socket Programming).",
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
      title:
        "Hệ sinh thái E-Commerce tích hợp AI Face Recognition & Blockchain",
      category: "web",
      categoryLabel: "Fullstack & AI Web3",
      tagline:
        "Thương mại điện tử thông minh với nhận diện khuôn mặt và thanh toán hiện đại",
      description:
        "Nền tảng thương mại điện tử hiện đại tích hợp mô hình AI nhận diện khuôn mặt người dùng (Face Recognition) để đăng nhập và xác thực, hỗ trợ phương thức thanh toán an toàn qua hợp đồng thông minh Blockchain và tích hợp cổng thanh toán ZaloPay Sandbox ảo.",
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
      title: "CuongLocNuoc Web Platform",
      category: "web",
      categoryLabel: "Web Application",
      tagline: "Website giới thiệu và quản lý sản phẩm thực tế",
      description:
        "Website chính thức giới thiệu dịch vụ và sản phẩm lọc nước tối ưu hóa giao diện người dùng, responsive trên mọi thiết bị di động và triển khai trên Vercel.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["JavaScript", "CSS3", "Vite", "Tailwind CSS", "Vercel"],
      liveUrl: "https://cuonglocnuoc.vercel.app",
      githubUrl: "https://github.com/manhcuong2005",
      featured: true,
    },
  ],
};
