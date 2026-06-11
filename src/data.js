const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const fallbackPortfolioData = {
  navLinks: [
    { href: "#about", label: "Tentang" },
    { href: "#education", label: "Pendidikan" },
    { href: "#skills", label: "Keahlian" },
    { href: "#projects", label: "Proyek" },
    { href: "#certificates", label: "Sertifikat" },
    { href: "#contact", label: "Kontak" },
  ],
  profile: {
    name: "Dimas Kurniawan",
    headline:
      "Mahasiswa Sistem Informasi yang membangun aplikasi web, desktop, automation, dan solusi internal dengan tampilan rapi serta alur kerja yang mudah dipakai.",
    image: asset("images/profile/Profil-saya.jpg"),
    badge: "Frontend + ML",
    email: "dimasqpr23@gmail.com",
    age: 23,
    startYear: "2022",
    summary:
      "Saya tertarik pada pengembangan produk digital yang menyelesaikan kebutuhan nyata: mulai dari dashboard internal, aplikasi desktop, otomasi, sampai eksperimen Machine Learning.",
  },
  aboutItems: [
    {
      title: "Fokus Saat Ini",
      text: "Membangun aplikasi web dan desktop yang rapi, cepat dipahami, dan mudah dikembangkan untuk kebutuhan operasional maupun personal project.",
    },
    {
      title: "Minat Karier",
      text: "Tertarik pada Frontend Development, Laravel, automation, dan Machine Learning, terutama ketika teknologi bisa membantu pekerjaan sehari-hari jadi lebih terstruktur.",
    },
    {
      title: "Cara Kerja",
      text: "Saya terbiasa memulai dari masalah pengguna, merapikan alur utama, lalu membuat tampilan dan fitur yang cukup jelas untuk dipakai tanpa banyak penjelasan.",
    },
  ],
  educationItems: [
    {
      title: "Perguruan Tinggi",
      years: "2022 - Sekarang",
      program: "S1 Sistem Informasi",
      school: "Universitas Muhammadiyah Pontianak",
    },
    {
      title: "Sekolah Menengah Kejuruan",
      years: "2019 - 2021",
      program: "Teknik Pemesinan",
      school: "SMK SMTI Pontianak",
    },
    {
      title: "Sekolah Menengah Pertama",
      years: "2017 - 2019",
      program: "SMP Negeri 1 Sungai Raya",
      school: "",
    },
    {
      title: "Sekolah Dasar",
      years: "2010 - 2017",
      program: "SDN 58 Sungai Raya",
      school: "",
    },
  ],
  skills: [
    { name: "Frontend", icon: "javascript", tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
    { name: "Backend", icon: "laravel", tools: ["Laravel", "PHP", "MySQL", "REST API"] },
    { name: "Desktop App", icon: "python", tools: ["Python", "Tkinter", "Windows Release", "Automation"] },
    { name: "Mobile & Experiment", icon: "flutter", tools: ["Flutter", "Machine Learning", "Data Processing"] },
  ],
  projects: [
    {
      title: "Fintrack",
      eyebrow: "Sistem Internal",
      status: "Lokal Server",
      highlight: "Aplikasi internal untuk pencatatan uang keluar perusahaan secara terstruktur.",
      description:
        "Fintrack adalah aplikasi Laravel + TailwindCSS untuk pencatatan uang keluar perusahaan, histori transaksi, dan laporan kas keluar. Aplikasi ini berjalan di jaringan internal customer sehingga akses publik tidak tersedia.",
      impact: "Membantu pencatatan kas keluar internal agar transaksi, histori, dan laporan lebih mudah ditelusuri oleh admin.",
      tags: ["Laravel", "Tailwind CSS", "MySQL", "Internal App"],
      links: [],
      note: "Aplikasi hanya dapat diakses melalui jaringan internal customer.",
      secondaryAction: {
        label: "Lihat Galeri",
        action: "gallery",
        gallerySet: "fintrack",
        variant: "primary",
      },
      tertiaryAction: {
        label: "Hubungi Saya",
        href: "#contact",
        variant: "secondary",
        internal: true,
      },
    },

    {
      title: "Website Monitoring Cuaca",
      eyebrow: "Monitoring",
      status: "Online",
      highlight: "Aplikasi monitoring cuaca real-time dengan tampilan yang ringan dan jelas.",
      description:
        "Website interaktif untuk menampilkan data cuaca real-time dari API BMKG. Tampilan dibuat ringan agar cepat dibaca dan dipantau.",
      impact: "Memudahkan pemantauan informasi cuaca real-time melalui halaman yang cepat dibuka dan mudah dipahami.",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      links: [
        {
          label: "Lihat Demo",
          href: "https://stamar-pontianak.devbmkg.my.id/monitoring",
          variant: "primary",
        },
      ],
      note: "Source code belum tersedia untuk publik.",
      tertiaryAction: {
        label: "Hubungi Saya",
        href: "#contact",
        variant: "secondary",
        internal: true,
      },
    },

    {
      title: "Web Jadwal Satpam PT Oscarmas",
      eyebrow: "Sistem Internal",
      status: "Online",
      highlight: "Aplikasi jadwal satpam yang cepat dibuka dan mudah diekspor ke PDF.",
      description:
        "Website sederhana untuk menampilkan jadwal satpam di PT Oscarmas. Hasil jadwal bisa diekspor ke PDF untuk kebutuhan internal.",
      impact: "Mengurangi pekerjaan manual dalam membagikan jadwal karena data bisa dilihat online dan diekspor ke PDF.",
      tags: ["HTML", "CSS", "JavaScript", "PDF"],
      links: [
        {
          label: "Lihat Demo",
          href: "https://kurnya.github.io/SISKOWAL/",
          variant: "primary",
        },
        {
          label: "Source Code",
          href: "https://github.com/kurnya/SISKOWAL",
          variant: "secondary",
        },
      ],
    },
    {
      title: "Bot WhatsApp Grup Komunitas",
      eyebrow: "Chat Automation",
      status: "Aktif",
      highlight: "Bot WhatsApp komunitas dengan command yang fleksibel per grup dan otomatis.",
      description:
        "Bot WhatsApp untuk grup komunitas dengan whitelist grup dan menu command otomatis. Fitur ini mencakup stiker, unduhan MP3 ringan, auto reconnect, dan cleanup file sementara.",
      impact: "Membantu admin komunitas menyediakan fitur otomatis tanpa perlu interaksi manual berulang.",
      tags: ["JavaScript", "WhatsApp Bot", "Automation", "Guild"],
      links: [],
      note: "Bot digunakan untuk kebutuhan internal komunitas.",
      tertiaryAction: {
        label: "Hubungi Saya",
        href: "#contact",
        variant: "secondary",
        internal: true,
      },
    },
    {
      title: "Novelku",
      eyebrow: "Web Download",
      status: "Online",
      highlight: "Website unduhan novel fan translation dengan tampilan sederhana dan rapi.",
      description:
        "Novelku adalah website untuk unduhan novel hasil fan translation. Tampilan dibuat sederhana agar pengguna mudah menemukan dan mengakses bacaan.",
      impact: "Menyediakan pengalaman browsing yang sederhana untuk pembaca agar konten lebih cepat ditemukan.",
      tags: ["Website", "HTML", "CSS", "JavaScript"],
      links: [
        {
          label: "Lihat Website",
          href: "https://www.novelku.biz.id/",
          variant: "primary",
        },
        {
          label: "Source Code",
          href: "https://github.com/kurnya/novelku",
          variant: "secondary",
        },
      ],
    },
    {
      title: "Kyron - Auto Clicker",
      eyebrow: "Desktop App",
      status: "Release Tersedia",
      highlight: "Aplikasi autoclicker desktop modern dengan rilis .exe yang siap dipakai.",
      description:
        "Kyron adalah aplikasi autoclicker desktop berbasis Python dengan antarmuka modern. Aplikasi ini memiliki manajemen script, randomizer klik, dan rilis Windows yang siap dipakai.",
      impact: "Membuat proses klik berulang lebih mudah dikontrol lewat script, randomizer, dan paket rilis Windows.",
      tags: ["Python", "Tkinter", "Desktop App", "Automation"],
      links: [
        {
          label: "Download",
          href: "https://github.com/kurnya/Kyron/releases",
          variant: "primary",
        },
        {
          label: "Source Code",
          href: "https://github.com/kurnya/Kyron",
          variant: "secondary",
        },
      ],
    },
    {
      title: "Localix",
      eyebrow: "Desktop App",
      status: "Release Tersedia",
      highlight: "Manajer server lokal Windows dengan dashboard status yang terpusat dan rapi.",
      description:
        "Localix adalah aplikasi desktop Windows untuk mengelola server lokal dengan kontrol Apache dan MySQL. Fitur utamanya mencakup dashboard status, pemindaian project, Virtual Host, dan log viewer.",
      impact: "Menyatukan kontrol server lokal ke satu dashboard agar proses menjalankan project lokal lebih cepat dan terpantau.",
      tags: ["Desktop App", "Local Server", "Apache", "MySQL", "PHP"],
      links: [
        {
          label: "Download",
          href: "https://github.com/kurnya/Localix/releases/tag/v0.1.0",
          variant: "primary",
        },
        {
          label: "Source Code",
          href: "https://github.com/kurnya/Localix",
          variant: "secondary",
        },
      ],
    },
    {
      title: "Klinik Billing System",
      eyebrow: "Full System",
      status: "Lokal Server",
      highlight: "Sistem klinik lengkap dengan tampilan yang siap ditinjau melalui galeri.",
      description:
        "Sistem informasi klinik untuk manajemen data pasien, rekam medis, dan billing. Fitur lengkapnya mendukung kebutuhan operasional klinik sehari-hari.",
      impact: "Merapikan alur data pasien, rekam medis, dan billing dalam satu sistem yang bisa ditinjau lewat galeri.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      links: [],
      note: "Aplikasi berjalan di lokal server. Screenshot ditampilkan di galeri proyek.",
      secondaryAction: {
        label: "Lihat Galeri",
        action: "gallery",
        gallerySet: "clinic",
        variant: "primary",
      },
      tertiaryAction: {
        label: "Hubungi Saya",
        href: "#contact",
        variant: "secondary",
        internal: true,
      },
    },
  ],
  fintrackShots: [
    asset("images/Fintrack/Fintrack (1).png"),
    asset("images/Fintrack/Fintrack (2).png"),
    asset("images/Fintrack/Fintrack (3).png"),
    asset("images/Fintrack/Fintrack (4).png"),
    asset("images/Fintrack/Fintrack (5).png"),
    asset("images/Fintrack/Fintrack (6).png"),
  ],
  clinicShots: [
    asset("images/clinic/Cuplikan layar 2026-03-15 194358.png"),
    asset("images/clinic/Cuplikan layar 2026-03-15 194412.png"),
    asset("images/clinic/Cuplikan layar 2026-03-15 194446.png"),
    asset("images/clinic/Cuplikan layar 2026-03-15 194458.png"),
    asset("images/clinic/Cuplikan layar 2026-03-15 194511.png"),
    asset("images/clinic/Cuplikan layar 2026-03-15 194538.png"),
  ],
  certificates: [
    {
      src: asset("images/certificates/1.jpg"),
      title: "Virtual Exchange Fall Semester",
      issuer: "Asia University, Taiwan",
      year: "2023-2024",
      desc: "Program virtual exchange Fall Semester di Asia University, Taiwan.",
    },
    {
      src: asset("images/certificates/4.jpg"),
      title: "IPK Tertinggi Program Studi",
      issuer: "Sistem Informasi",
      year: "2024",
      desc: "Peraih IPK tertinggi 3.95 Program Studi Sistem Informasi.",
    },
    {
      src: asset("images/certificates/6.jpg"),
      title: "Juara Favorit Gagasan Kreatif",
      issuer: "Pilmapres",
      year: "2024",
      desc: "Penghargaan Juara Favorit Gagasan Kreatif Pilmapres.",
    },
    {
      src: asset("images/certificates/7.jpg"),
      title: "Juara Harapan 1",
      issuer: "Pilmapres",
      year: "2025",
      desc: "Penghargaan Juara Harapan 1 Pilmapres.",
    },
    {
      src: asset("images/certificates/2.jpg"),
      title: "Students Exchange",
      issuer: "i-CATS University College and UNIMAS",
      year: "2025",
      desc: "Program students exchange ke i-CATS University College dan UNIMAS.",
    },
    {
      src: asset("images/certificates/3.jpg"),
      title: "Guest Lecture on IoT in Agriculture",
      issuer: "i-CATS University College",
      year: "2025",
      desc: "Guest lecture bertema IoT in Agriculture di i-CATS University College.",
    },
    {
      src: asset("images/certificates/5.jpg"),
      title: "Mahasiswa Berprestasi",
      issuer: "Universitas Muhammadiyah Pontianak",
      year: "2025",
      desc: "Penghargaan Mahasiswa Berprestasi Universitas Muhammadiyah Pontianak.",
    },
  ],
  contactLinks: [
    { label: "GitHub", href: "https://github.com/kurnya", icon: "github" },
    { label: "WhatsApp", href: "https://wa.me/6289520786464", icon: "whatsapp" },
  ],
};





















