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
      "Mahasiswa Sistem Informasi yang fokus pada Frontend Development dan Machine Learning, dengan pendekatan yang rapi, responsif, dan nyaman digunakan.",
    image: asset("images/profile/Profil-saya.jpg"),
    badge: "Frontend + ML",
    email: "dimasqpr23@gmail.com",
    age: 23,
    startYear: "2022",
    summary:
      "Mahasiswa Sistem Informasi yang suka mengubah ide menjadi produk digital yang jelas dan enak dipakai.",
    heroMetrics: [
      { value: "5+", label: "Project" },
      { value: "7", label: "Sertifikat" },
      { value: "23", label: "Usia" },
    ],
  },
  aboutItems: [
    {
      title: "Pendidikan",
      text: "Mahasiswa Sistem Informasi di Universitas Muhammadiyah Pontianak. Lahir di Pontianak pada 3 Maret 2003 sebagai anak pertama dari dua bersaudara.",
    },
    {
      title: "Minat & Karier",
      text: "Tertarik pada Machine Learning dan Frontend Development. Perjalanan saya ke dunia teknologi dimulai serius saat pandemi COVID-19.",
    },
    {
      title: "Perjalanan",
      text: "Saya terus belajar membangun aplikasi dan website yang tidak hanya berfungsi, tetapi juga nyaman digunakan dan mudah dikembangkan.",
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
    { name: "HTML", level: 90, icon: "html" },
    { name: "CSS", level: 80, icon: "css" },
    { name: "JavaScript", level: 80, icon: "javascript" },
    { name: "Python", level: 85, icon: "python" },
    { name: "Laravel", level: 82, icon: "laravel" },
    { name: "Flutter", level: 74, icon: "flutter" },
  ],
  projects: [
    {
      title: "Fintrack",
      eyebrow: "Sistem Internal",
      status: "Lokal Server",
      highlight: "Aplikasi internal untuk pencatatan uang keluar perusahaan secara terstruktur.",
      description:
        "Fintrack adalah aplikasi Laravel + TailwindCSS untuk pencatatan uang keluar perusahaan, histori transaksi, dan laporan kas keluar. Aplikasi ini berjalan di jaringan internal customer sehingga akses publik tidak tersedia.",
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
      desc: "Virtual Exchange Fall Semester Program 2023-2024 di Asia University, Taiwan.",
    },
    {
      src: asset("images/certificates/4.jpg"),
      desc: "Peraih IPK tertinggi 3.95 Program Studi Sistem Informasi tahun 2024.",
    },
    {
      src: asset("images/certificates/6.jpg"),
      desc: "Juara Favorit Gagasan Kreatif Pilmapres 2024.",
    },
    {
      src: asset("images/certificates/7.jpg"),
      desc: "Juara Harapan 1 Pilmapres 2025.",
    },
    {
      src: asset("images/certificates/2.jpg"),
      desc: "Students Exchange to i-CATS University College and UNIMAS 2025.",
    },
    {
      src: asset("images/certificates/3.jpg"),
      desc: "Guest Lecture on IoT in Agriculture at I-CATS University College 2025.",
    },
    {
      src: asset("images/certificates/5.jpg"),
      desc: "Mahasiswa Berprestasi Universitas Muhammadiyah Pontianak 2025.",
    },
  ],
  contactLinks: [
    { label: "GitHub", href: "https://github.com/kurnya", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/dimas-kurniawan", icon: "linkedin" },
    { label: "WhatsApp", href: "https://wa.me/6289520786464", icon: "whatsapp" },
  ],
};





















