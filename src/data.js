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
      title: "Website Monitoring Cuaca",
      eyebrow: "Monitoring",
      status: "Online",
      highlight: "Pemantauan cuaca real-time dengan tampilan yang cepat dibaca.",
      description:
        "Website interaktif untuk menampilkan data cuaca real-time dari API BMKG dengan fitur pemantauan cuaca.",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      links: [
        {
          label: "Lihat Demo",
          href: "https://stamar-pontianak.devbmkg.my.id/monitoring",
          variant: "primary",
        },
      ],
      note: "Source code belum tersedia untuk publik.",
      secondaryAction: {
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
      highlight: "Jadwal satpam yang bisa diakses cepat dan diekspor ke PDF.",
      description:
        "Website sederhana untuk menampilkan jadwal satpam di PT Oscarmas dengan kemampuan ekspor ke format PDF.",
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
      highlight: "Bot WhatsApp khusus grup komunitas dengan command yang bisa diatur per grup.",
      description:
        "Bot WhatsApp untuk grup komunitas dengan whitelist grup, menu command otomatis, fitur stiker, unduhan MP3 YouTube ringan, panduan guild, intro member baru, respon karakter Fuuka, auto reconnect, health server, dan cleanup file sementara.",
      tags: ["JavaScript", "WhatsApp Bot", "Automation", "Guild"],
      links: [],
      note: "Bot digunakan untuk kebutuhan internal komunitas.",
      secondaryAction: {
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
      highlight: "Website untuk mengunduh novel hasil fan translation.",
      description:
        "Novelku adalah website yang menyediakan halaman unduhan novel hasil fan translation dengan tampilan sederhana agar pengguna mudah menemukan dan mengakses bacaan.",
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
      highlight: "Aplikasi autoclicker desktop modern dengan file .exe yang siap diunduh.",
      description:
        "Kyron adalah aplikasi autoclicker desktop berbasis Python dengan antarmuka modern, manajemen script, randomizer klik dan delay, serta rilis Windows yang siap dipakai.",
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
      title: "Klinik Billing System",
      eyebrow: "Full System",
      status: "Lokal Server",
      highlight: "Sistem klinik lengkap dengan screenshot tampilan yang bisa ditinjau.",
      description:
        "Sistem informasi klinik untuk manajemen data pasien, rekam medis, dan billing dengan fitur lengkap untuk kebutuhan operasional klinik.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      links: [],
      note: "Aplikasi berjalan di lokal server. Screenshot ditampilkan di galeri proyek.",
      secondaryAction: {
        label: "Lihat Galeri",
        action: "gallery",
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
