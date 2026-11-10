import { PosItem, ExamQuestion, LeaderboardEntry } from '../types';

export const POS_DATA: PosItem[] = [
  {
    id: 1,
    name: 'Pos Bangun Tidur',
    shortTitle: 'Bangun Tidur',
    iconType: 'bed',
    situationTitle: 'Adab Mengawali Pagi yang Berkah',
    situationDesc: 'Ahmad bangun saat azan Shubuh berkumandang dari Masjid Al Hidayah. Matahari mulai bersinar lembut dan udara sangat segar.',
    situationTag: 'Adab Pagi & Syukur',
    question: 'Ketika baru terbangun dari tidur di pagi hari, apa yang pertama kali diajarkan Rasulullah SAW untuk kita lakukan?',
    options: [
      {
        id: '1a',
        label: 'A',
        text: 'Membaca doa bangun tidur dan bersyukur kepada Allah',
        iconKey: 'hands-praying',
        isCorrect: true,
        feedback: 'Masya Allah! Mengingat Allah dan bersyukur atas nikmat hidup adalah awal hari yang paling berkah.'
      },
      {
        id: '1b',
        label: 'B',
        text: 'Langsung mencari HP untuk bermain game online',
        iconKey: 'gamepad',
        isCorrect: false,
        feedback: 'Kurang tepat ya. Membuka gadget langsung saat bangun tidur tidak baik untuk kesehatan dan melewatkan berkah pagi.'
      },
      {
        id: '1c',
        label: 'C',
        text: 'Menangis, merajuk, dan mengeluh kepada Ibu',
        iconKey: 'frown',
        isCorrect: false,
        feedback: 'Santri yang shalih bangun dengan ceria dan tersenyum menyapa Ayah dan Ibu.'
      }
    ],
    doa: {
      title: 'Doa Bangun Tidur',
      arab: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
      artinya: 'Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami dan kepada-Nya kami kembali',
      perowi: 'HR. Bukhari No. 6312, dari Hudzaifah RA'
    },
    xPercent: 12,
    yPercent: 82
  },
  {
    id: 2,
    name: 'Pos Wudhu',
    shortTitle: 'Wudhu Sempurna',
    iconType: 'tap',
    situationTitle: 'Bersuci Menghadap Sang Pencipta',
    situationDesc: 'Fatimah bersiap mengambil air wudhu di tempat wudhu DTU Al Hidayah sebelum sholat berjamaah.',
    situationTag: 'Adab Bersuci & Thaharah',
    question: 'Saat kita menyalakan keran air di tempat wudhu, bagaimana adab menggunakan air yang dicontohkan Rasulullah SAW?',
    options: [
      {
        id: '2a',
        label: 'A',
        text: 'Membuka keran sebesar-besarnya agar cepat basah',
        iconKey: 'waves',
        isCorrect: false,
        feedback: 'Membuka keran terlalu besar adalah perbuatan boros (israf) yang tidak disukai Allah.'
      },
      {
        id: '2b',
        label: 'B',
        text: 'Hemat air, buka keran secukupnya dan tidak boros',
        iconKey: 'droplet',
        isCorrect: true,
        feedback: 'Alhamdulillah benar! Rasulullah SAW sangat hemat menggunakan air saat berwudhu.'
      },
      {
        id: '2c',
        label: 'C',
        text: 'Memercikkan air ke pakaian teman untuk bercanda',
        iconKey: 'spray-can',
        isCorrect: false,
        feedback: 'Bercanda dengan air wudhu dapat membasahi pakaian ibadah teman dan mengganggu ketertiban.'
      }
    ],
    doa: {
      title: 'Doa Sesudah Wudhu',
      arab: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
      artinya: 'Aku bersaksi tiada Tuhan selain Allah dan Muhammad adalah hamba dan utusan-Nya',
      perowi: 'HR. Muslim No. 234, dari Uqbah bin Amir RA'
    },
    xPercent: 32,
    yPercent: 78
  },
  {
    id: 3,
    name: 'Pos Makan',
    shortTitle: 'Makan & Minum',
    iconType: 'lunchbox',
    situationTitle: 'Menikmati Rezeki dengan Berkah',
    situationDesc: 'Waktu istirahat tiba, para santri membuka kotak bekal makanan yang disiapkan penuh kasih sayang oleh Ibu.',
    situationTag: 'Adab Makan Sesuai Sunnah',
    question: 'Saat menyantap makanan dan minuman, tangan manakah yang Rasulullah SAW perintahkan untuk kita gunakan?',
    options: [
      {
        id: '3a',
        label: 'A',
        text: 'Tangan Kanan sambil duduk dengan tenang',
        iconKey: 'hand-right',
        isCorrect: true,
        feedback: 'Hebat sekali! Rasulullah SAW bersabda: "Makanlah dengan tangan kananmu dan makanlah makanan yang dekat denganmu."'
      },
      {
        id: '3b',
        label: 'B',
        text: 'Tangan Kiri karena sedang memegang sendok',
        iconKey: 'hand-left',
        isCorrect: false,
        feedback: 'Setan makan dan minum dengan tangan kiri, kita santri shalih selalu pakai tangan kanan.'
      },
      {
        id: '3c',
        label: 'C',
        text: 'Kedua tangan dipakai bergantian sambil berjalan',
        iconKey: 'feet-running',
        isCorrect: false,
        feedback: 'Makan sambil berdiri atau berjalan tidak sehat dan bertentangan dengan adab sunnah.'
      }
    ],
    doa: {
      title: 'Doa Sebelum Makan',
      arab: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
      artinya: 'Ya Allah berkahilah kami pada rezeki yang telah Engkau berikan dan lindungilah kami dari azab neraka',
      perowi: 'HR. At-Thabrani dan Ibnu Sunni, dari Abdullah bin Abbas RA'
    },
    bonusDoa: {
      title: 'Doa Sesudah Makan',
      arab: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
      artinya: 'Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami kaum muslimin',
      perowi: 'HR. Abu Dawud No. 3850 dan At-Tirmidzi No. 3456, dari Abu Sa\'id Al-Khudri RA'
    },
    xPercent: 54,
    yPercent: 82
  },
  {
    id: 4,
    name: 'Pos Tidur',
    shortTitle: 'Tidur Malam',
    iconType: 'moon',
    situationTitle: 'Istirahat Malam yang Bernilai Ibadah',
    situationDesc: 'Malam telah larut, bintang-bintang berkelip di langit. Tubuh santri perlu istirahat agar esok kuat mengaji lagi.',
    situationTag: 'Adab Tidur & Istirahat',
    question: 'Sebelum memejamkan mata untuk tidur malam, posisi berbaring manakah yang paling dianjurkan oleh Rasulullah SAW?',
    options: [
      {
        id: '4a',
        label: 'A',
        text: 'Miring ke kanan menghadap kiblat dan menaruh tangan di pipi',
        iconKey: 'bed-double',
        isCorrect: true,
        feedback: 'Masya Allah! Tidur miring ke kanan sangat baik bagi kesehatan jantung dan sesuai sunnah mulia.'
      },
      {
        id: '4b',
        label: 'B',
        text: 'Tengkurap dengan menindih dada dan perut',
        iconKey: 'bed-flat',
        isCorrect: false,
        feedback: 'Posisi tengkurap dimakruhkan dan dilarang karena merupakan cara tidur yang dibenci Allah.'
      },
      {
        id: '4c',
        label: 'C',
        text: 'Menutup seluruh wajah sampai sesak nafas',
        iconKey: 'mask',
        isCorrect: false,
        feedback: 'Menutup muka rapat-rapat saat tidur berbahaya karena mengurangi aliran udara bersih.'
      }
    ],
    doa: {
      title: 'Doa Sebelum Tidur',
      arab: 'بِاسْمِكَ اللَّهُمَّ أَحْيَا وَأَمُوتُ',
      artinya: 'Dengan nama-Mu Ya Allah aku hidup dan aku mati',
      perowi: 'HR. Bukhari No. 6324, dari Hudzaifah RA'
    },
    xPercent: 78,
    yPercent: 74
  },
  {
    id: 5,
    name: 'Pos Teman',
    shortTitle: 'Adab Teman',
    iconType: 'friends',
    situationTitle: 'Persahabatan Sejati Karena Allah',
    situationDesc: 'Saat jam istirahat, Zaid dan Umar bermain tebak huruf hijaiyah di halaman madrasah dengan penuh tawa ramah.',
    situationTag: 'Adab Bergaul & Kejujuran',
    question: 'Ketika kita berbicara atau bermain bersama teman sebaya, sifat terpuji apakah yang wajib selalu kita jaga?',
    options: [
      {
        id: '5a',
        label: 'A',
        text: 'Selalu berkata jujur dan tidak berbohong',
        iconKey: 'smile',
        isCorrect: true,
        feedback: 'Luar biasa! Kejujuran membawa ketenangan hati dan mengantarkan santri ke surga Allah.'
      },
      {
        id: '5b',
        label: 'B',
        text: 'Memanggil teman dengan nama julukan yang mengejek',
        iconKey: 'megaphone-off',
        isCorrect: false,
        feedback: 'Mengolok-olok atau memanggil dengan panggilan buruk dilarang dalam Al-Qur\'an surat Al-Hujurat.'
      },
      {
        id: '5c',
        label: 'C',
        text: 'Bermain curang agar selalu menang sendiri',
        iconKey: 'shield-alert',
        isCorrect: false,
        feedback: 'Curang adalah perbuatan tercela yang merusak persaudaraan sesama santri.'
      }
    ],
    doa: {
      title: 'Hadits Menjaga Kejujuran',
      arab: 'عَلَيْكُمْ بِالصِّدْقِ',
      artinya: 'Hendaklah kalian berlaku jujur',
      perowi: 'HR. Bukhari dan Muslim, dari Abdullah bin Mas\'ud RA'
    },
    xPercent: 84,
    yPercent: 52
  },
  {
    id: 6,
    name: 'Pos Sholat',
    shortTitle: 'Dzikir Sholat',
    iconType: 'star',
    situationTitle: 'Khusyuk Beribadah Kepada Allah',
    situationDesc: 'Imam mengucap salam kedua tanda selesainya sholat fardhu berjamaah di shaf depan DTU Al Hidayah.',
    situationTag: 'Adab Sholat & Dzikir',
    question: 'Selesai salam penutup sholat, kalimat dzikir apa yang pertama kali dicontohkan Rasulullah SAW untuk kita lafalkan 3 kali?',
    options: [
      {
        id: '6a',
        label: 'A',
        text: 'Membaca Istighfar memohon ampun kepada Allah',
        iconKey: 'sparkles',
        isCorrect: true,
        feedback: 'Benar sekali! Rasulullah SAW beristighfar 3 kali segera setelah mengucap salam sholat.'
      },
      {
        id: '6b',
        label: 'B',
        text: 'Langsung berdiri dan berlari keluar ruangan',
        iconKey: 'footprints',
        isCorrect: false,
        feedback: 'Santri yang tertib berdzikir tenang terlebih dahulu dan tidak tergesa-gesa lari.'
      },
      {
        id: '6c',
        label: 'C',
        text: 'Bertepuk tangan dan bersorak gembira',
        iconKey: 'hand-metal',
        isCorrect: false,
        feedback: 'Masjid adalah tempat suci yang dijaga ketenangannya dengan zikir dan doa.'
      }
    ],
    doa: {
      title: 'Dzikir Sesudah Sholat',
      arab: 'أَسْتَغْفِرُ اللَّهَ',
      artinya: 'Aku mohon ampun kepada Allah',
      perowi: 'HR. Muslim No. 591, dari Tsauban RA'
    },
    xPercent: 62,
    yPercent: 44
  },
  {
    id: 7,
    name: 'Pos Orang Tua',
    shortTitle: 'Bakti Orang Tua',
    iconType: 'house',
    situationTitle: 'Birrul Walidain - Memuliakan Orang Tua',
    situationDesc: 'Sepulang mengaji, Ibu sedang menyiapkan teh hangat dan memanggil namamu dari ruang tengah rumah.',
    situationTag: 'Adab Kepada Ayah & Ibu',
    question: 'Bagaimanakah sikap santri yang shalih dan berbakti ketika dipanggil namanya oleh Ayah atau Ibu di rumah?',
    options: [
      {
        id: '7a',
        label: 'A',
        text: 'Segera menjawab dengan santun "Labbaik/Iya Ibu" lalu lekas menghampirinya',
        iconKey: 'heart-handshake',
        isCorrect: true,
        feedback: 'Mumtaz! Menjawab panggilan orang tua dengan cepat dan suara lembut adalah bakti mulia.'
      },
      {
        id: '7b',
        label: 'B',
        text: 'Pura-pura tidak dengar karena sedang sibuk bermain kelereng',
        iconKey: 'ear-off',
        isCorrect: false,
        feedback: 'Mengabaikan panggilan orang tua membuat hati mereka sedih dan kehilangan keberkahan.'
      },
      {
        id: '7c',
        label: 'C',
        text: 'Menjawab dengan kata "Ah" atau membentak keras',
        iconKey: 'angry',
        isCorrect: false,
        feedback: 'Allah melarang kita berkata kasar atau berucap "Ah/Uff" kepada orang tua dalam Al-Qur\'an.'
      }
    ],
    doa: {
      title: 'Doa Untuk Kedua Orang Tua',
      arab: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      artinya: 'Ya Allah ampunilah aku dan kedua orang tuaku, sayangilah mereka seperti mereka menyayangiku di waktu kecil',
      perowi: 'QS. Al-Isra: 24'
    },
    xPercent: 36,
    yPercent: 46
  },
  {
    id: 8,
    name: 'Pos Masjid',
    shortTitle: 'Masuk Masjid',
    iconType: 'book',
    situationTitle: 'Memasuki Rumah Allah yang Dimuliakan',
    situationDesc: 'Langkah kaki santri sampai di serambi Masjid Al Hidayah. Sandal dilepas rapi di rak sepatu yang bersih.',
    situationTag: 'Adab Rumah Allah',
    question: 'Saat melangkahkan kaki melewati pintu masuk ke dalam masjid, kaki manakah yang disunnahkan untuk melangkah lebih dahulu?',
    options: [
      {
        id: '8a',
        label: 'A',
        text: 'Kaki Kanan sambil membaca doa masuk masjid',
        iconKey: 'footprints-right',
        isCorrect: true,
        feedback: 'Bagus sekali! Masuk masjid dengan kaki kanan dan keluar masjid dengan kaki kiri.'
      },
      {
        id: '8b',
        label: 'B',
        text: 'Kaki Kiri sambil terburu-buru meloncat',
        iconKey: 'footprints-left',
        isCorrect: false,
        feedback: 'Kaki kiri digunakan saat masuk ke kamar mandi atau saat keluar dari masjid.'
      },
      {
        id: '8c',
        label: 'C',
        text: 'Melompat dengan dua kaki sekaligus',
        iconKey: 'jump',
        isCorrect: false,
        feedback: 'Masuk masjid dilakukan dengan tenang, berjalan penuh wibawa dan adab.'
      }
    ],
    doa: {
      title: 'Doa Masuk Masjid',
      arab: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
      artinya: 'Ya Allah bukakanlah untukku pintu-pintu rahmat-Mu',
      perowi: 'HR. Muslim No. 713, dari Abu Usaid RA'
    },
    xPercent: 18,
    yPercent: 34
  },
  {
    id: 9,
    name: 'Pos Belajar',
    shortTitle: 'Adab Menuntut Ilmu',
    iconType: 'mosque',
    situationTitle: 'Menuntut Ilmu Bersama Guru Mulia',
    situationDesc: 'Ustadz DTU Al Hidayah membuka kitab adab di depan kelas. Suasana kelas hening dan penuh rasa hormat.',
    situationTag: 'Adab Santri & Ustadz',
    question: 'Ketika Ustadz atau Ustadzah sedang menerangkan pelajaran di depan kelas DTA, adab terbaik seorang santri adalah?',
    options: [
      {
        id: '9a',
        label: 'A',
        text: 'Menyimak dengan tertib, duduk rapi, dan mencatat faedah ilmu',
        iconKey: 'book-open',
        isCorrect: true,
        feedback: 'Ahsant! Menghormati guru adalah kunci utama ilmu menjadi berkah dan mudah dipahami.'
      },
      {
        id: '9b',
        label: 'B',
        text: 'Mengobrol dan melempar pesawat kertas ke teman',
        iconKey: 'send',
        isCorrect: false,
        feedback: 'Mengobrol saat guru menerangkan tidak sopan dan menghilangkan keberkahan ilmu.'
      },
      {
        id: '9c',
        label: 'C',
        text: 'Tertidur pulas di atas meja kelas',
        iconKey: 'coffee',
        isCorrect: false,
        feedback: 'Jika mengantuk saat belajar, santri berwudhu agar segar kembali menuntut ilmu.'
      }
    ],
    doa: {
      title: 'Doa Memohon Tambahan Ilmu',
      arab: 'رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا',
      artinya: 'Ya Allah tambahkanlah ilmu kepadaku dan berikanlah aku pemahaman',
      perowi: 'HR. At-Thabrani, dari Ibnu Abbas RA'
    },
    xPercent: 42,
    yPercent: 22
  },
  {
    id: 10,
    name: 'Pos Ujian Sultan Adab',
    shortTitle: 'Ujian Sultan',
    iconType: 'trophy',
    situationTitle: 'Ujian Pamungkas Santri Teladan',
    situationDesc: 'Selamat! Kamu telah menempuh sembilan pos petualangan adab. Kini saatnya membuktikan hafalan dan pemahamanmu untuk meraih gelar agung SULTAN ADAB DTU AL HIDAYAH!',
    situationTag: 'Evaluasi Akhir & Wisuda',
    question: 'Ujian Sultan Adab berisi 10 pertanyaan komprehensif dari seluruh pos adab. Raih nilai minimal 80 untuk menyandang gelar Sultan Adab dan mendapatkan Sertifikat Resmi Digital!',
    options: [],
    doa: {
      title: 'Doa Syukur Kelulusan',
      arab: 'الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ',
      artinya: 'Segala puji bagi Allah yang dengan nikmat-Nya sempurnalah segala kebaikan',
      perowi: 'HR. Ibnu Majah No. 3803'
    },
    xPercent: 70,
    yPercent: 12
  }
];

export const EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    posId: 1,
    posName: 'Pos Bangun Tidur',
    question: 'Apa ucapan pertama yang kita baca sebagai wujud syukur saat membuka mata di pagi hari?',
    options: [
      { id: 'a', label: 'A', text: 'Doa bangun tidur: Alhamdulillahilladzi ahyana...', isCorrect: true },
      { id: 'b', label: 'B', text: 'Mengeluh karena masih ingin tidur', isCorrect: false },
      { id: 'c', label: 'C', text: 'Mencari lagu untuk didengarkan', isCorrect: false }
    ]
  },
  {
    id: 2,
    posId: 2,
    posName: 'Pos Wudhu',
    question: 'Bagaimana sunnah Rasulullah SAW mengenai penggunaan air saat berwudhu?',
    options: [
      { id: 'a', label: 'A', text: 'Membuka keran deras agar sejuk', isCorrect: false },
      { id: 'b', label: 'B', text: 'Menghemat air secukupnya dan tidak berlebih-lebihan', isCorrect: true },
      { id: 'c', label: 'C', text: 'Menyiram seluruh lantai tempat wudhu', isCorrect: false }
    ]
  },
  {
    id: 3,
    posId: 3,
    posName: 'Pos Makan',
    question: 'Ketika menyantap makanan atau minum, tangan yang Rasulullah SAW perintahkan adalah?',
    options: [
      { id: 'a', label: 'A', text: 'Tangan Kiri', isCorrect: false },
      { id: 'b', label: 'B', text: 'Tangan Kanan', isCorrect: true },
      { id: 'c', label: 'C', text: 'Kedua tangan bersamaan', isCorrect: false }
    ]
  },
  {
    id: 4,
    posId: 4,
    posName: 'Pos Tidur',
    question: 'Posisi tidur yang dianjurkan sesuai petunjuk Rasulullah SAW adalah?',
    options: [
      { id: 'a', label: 'A', text: 'Tengkurap menghadap ke bawah', isCorrect: false },
      { id: 'b', label: 'B', text: 'Miring ke kanan dengan tenang', isCorrect: true },
      { id: 'c', label: 'C', text: 'Duduk tegak semalaman', isCorrect: false }
    ]
  },
  {
    id: 5,
    posId: 5,
    posName: 'Pos Teman',
    question: 'Rasulullah bersabda: "Alaykum bis-shidqi", yang artinya hendaklah kalian berlaku apa?',
    options: [
      { id: 'a', label: 'A', text: 'Jujur', isCorrect: true },
      { id: 'b', label: 'B', text: 'Sombong', isCorrect: false },
      { id: 'c', label: 'C', text: 'Curang', isCorrect: false }
    ]
  },
  {
    id: 6,
    posId: 6,
    posName: 'Pos Sholat',
    question: 'Dzikir pertama yang dibaca setelah selesai sholat fardhu adalah istighfar, bunyinya:',
    options: [
      { id: 'a', label: 'A', text: 'Subhanallah', isCorrect: false },
      { id: 'b', label: 'B', text: 'Astaghfirullah', isCorrect: true },
      { id: 'c', label: 'C', text: 'Allahu Akbar', isCorrect: false }
    ]
  },
  {
    id: 7,
    posId: 7,
    posName: 'Pos Orang Tua',
    question: 'Ketika orang tua memanggil nama kita di rumah, santri beradab akan:',
    options: [
      { id: 'a', label: 'A', text: 'Segera menjawab dengan sopan dan menghampirinya', isCorrect: true },
      { id: 'b', label: 'B', text: 'Menjawab dengan berteriak kesal', isCorrect: false },
      { id: 'c', label: 'C', text: 'Menutup telinga dan pergi keluar', isCorrect: false }
    ]
  },
  {
    id: 8,
    posId: 8,
    posName: 'Pos Masjid',
    question: 'Saat melangkahkan kaki masuk ke dalam Masjid Al Hidayah, kita mendahulukan:',
    options: [
      { id: 'a', label: 'A', text: 'Kaki Kiri', isCorrect: false },
      { id: 'b', label: 'B', text: 'Kaki Kanan sambil berdoa', isCorrect: true },
      { id: 'c', label: 'C', text: 'Kedua kaki meloncat', isCorrect: false }
    ]
  },
  {
    id: 9,
    posId: 9,
    posName: 'Pos Belajar',
    question: 'Doa memohon tambahan ilmu berbunyi: "Rabbi zidnii \'ilman wa...", sambungannya adalah:',
    options: [
      { id: 'a', label: 'A', text: 'warzuqnii fahman', isCorrect: true },
      { id: 'b', label: 'B', text: 'wa laa taqul lahumma', isCorrect: false },
      { id: 'c', label: 'C', text: 'wa iyyaka nasta\'in', isCorrect: false }
    ]
  },
  {
    id: 10,
    posId: 3,
    posName: 'Pos Makan',
    question: 'Sebelum mulai makan, doa yang kita panjatkan memohon berkah rezeki dan perlindungan dari apa?',
    options: [
      { id: 'a', label: 'A', text: 'Azab Neraka (wa qina \'adzaban-nar)', isCorrect: true },
      { id: 'b', label: 'B', text: 'Rasa kenyang', isCorrect: false },
      { id: 'c', label: 'C', text: 'Teman yang lapar', isCorrect: false }
    ]
  }
];

export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  { id: 'ld-1', name: 'Ahmad Fathurrahman', stars: 10, isSultan: true, avatar: 'boy', date: 'Hari ini' },
  { id: 'ld-2', name: 'Fatimah Az-Zahra', stars: 10, isSultan: true, avatar: 'girl', date: 'Kemarin' },
  { id: 'ld-3', name: 'Yusuf Habibi', stars: 9, isSultan: false, avatar: 'boy', date: '2 hari lalu' },
  { id: 'ld-4', name: 'Aisyah Humaira', stars: 9, isSultan: false, avatar: 'girl', date: '3 hari lalu' },
  { id: 'ld-5', name: 'Bilal Al-Ghifari', stars: 8, isSultan: false, avatar: 'boy', date: '4 hari lalu' },
];
