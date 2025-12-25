import { ImageAsset, Review } from './types';

export const CONTACT_INFO = {
  address: "الموصل، كورنيش الجسر العتيق، على ضفاف نهر دجلة",
  phones: ["07755888355", "07855800088"],
  email: "albaron.hotel@gmail.com",
  whatsapp: "9647755888355",
  facebook: "https://www.facebook.com/profile.php?id=61552929373381&mibextid=ZbWKwL",
  instagram: "https://www.instagram.com/albaron.hotel",
  locationMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.564756857648!2d43.1444!3d36.3406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4007950000000001%3A0x0!2sAl%20Baron%20Hotel!5e0!3m2!1sen!2siq!4v1700000000000!5m2!1sen!2siq" 
};

export const IMAGES = {
  HERO: "https://scontent.fosm4-2.fna.fbcdn.net/v/t39.30808-6/481255282_122192997356097645_5186179767549520495_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEv9vrUvX0uR79Vx1Zx0bNKNkUN8vxcA4o2RQ3y_FwDioGUmstXOadFI9C1l7a55bhd5nOpMCScqm1LbqDhfH_G&_nc_ohc=iHKpXhsMLE4Q7kNvwGZEOHr&_nc_oc=AdmbFpw8xcxFVz-gNmZxS3tBvA0Ec1d1M55sgJF7Hr6RgKOr3ocG7IbrMQwCASgIndI&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-2.fna&_nc_gid=lPvD-FI9k4GqHxwWgBc5bw&oh=00_AfmdGziFUsO5nfru5QZXtc_0Bs7TVS1lnPp5XjetLOGlRw&oe=6952C277",
  LOGO: "https://scontent.fosm4-3.fna.fbcdn.net/v/t39.30808-6/448792346_122157068786097645_4790295406797630604_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFU_95HytMHF9uoHbpx8kljUyL61VUIpb9TIvrVVQilvxh_TW2oZ3j29ZBjG2OB4YMEnun8V4N1z6Ca-LodVISa&_nc_ohc=f4cN9HRic7MQ7kNvwG8KrrK&_nc_oc=Adl8J5faTllzWOdIbkNRDqcKKAr5xIVefNPwrW4ibZlgvUR_tAt8Ti6sguZijM6kDM8&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-3.fna&_nc_gid=5Q-x-i5Qlg6wMRU-Li0kNg&oh=00_AfmktcM4wBPCW-GYfs_rLw-HVHgbD-UYqeVcnqPwRgwGEw&oe=6952C91E",
};

export const GALLERY_IMAGES: ImageAsset[] = [
  {
    src: "https://scontent.fosm4-2.fna.fbcdn.net/v/t39.30808-6/600570380_122231296970097645_6576785429887895826_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGC77cl1OQPjbhQ-7nK0NVzTlYK3sW22g5OVgrexbbaDmyokF28o9O2uP1FQDM8ck8iZ5p6gKH6kbAwEic1lPAy&_nc_ohc=g6Y4UaQOxqIQ7kNvwEzJUVu&_nc_oc=AdnTNuGCNS_NSbMxAaXmb3RruVIBRl7d3gBknCCrPsBENIKoWu5kWWTs1pRp5_2_bPE&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-2.fna&_nc_gid=1MR12qqXDyXujjIo-dvbJw&oh=00_Afn6ZdS5UiV5QAisCgIWKdaIwkN7w1ciw2Kt8pS4hDYIjQ&oe=6952CC60",
    alt: "غرف نوم فاخرة",
    category: "room"
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPxQFbeaUsL_CdKzRuoHzA7-Z9PB9gqus6bW_0X=w408-h510-k-no",
    alt: "واجهة الفندق الخارجية",
    category: "exterior"
  },
  {
    src: "https://scontent.fosm4-2.fna.fbcdn.net/v/t39.30808-6/602894670_122231532632097645_6772383821383334065_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGsEVhZvxTxK-miwhAlL7qhZGgwmTTM-W9kaDCZNMz5by2Ok87M8HxI_7U-hufc5WVSiM-ztu0wbVMZWns1jLGp&_nc_ohc=7MZ2PFVFVzEQ7kNvwH85xvc&_nc_oc=Adm7HWV8pSgiwikjN06Gwr4jTA8SBIw8usJfCLVom_cGmbZzScAyuClQfJgu-aKP44w&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-2.fna&_nc_gid=8tAvkr-xhcXNdeQPASBiwA&oh=00_AfmTyBILJ_-iem0nU9_GmqHcnpcCm5Jz0nNNh8qKF4R-fw&oe=6952F268",
    alt: "الاستقبال والردهة",
    category: "lobby"
  },
  {
    src: "https://scontent.fosm4-2.fna.fbcdn.net/v/t39.30808-6/586376251_122228138528097645_7288102402578960829_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG-ODEmb8gzUbLRQfIkPL-VSRtRUXmIXr1JG1FReYhevRb9hAjWRqAIVmanld-IB39cFWzIHBNXehJIpY3Xvfg4&_nc_ohc=yH35upIBukEQ7kNvwGsg5yY&_nc_oc=AdmHjB1Rl1L_gdLBrwGFN40fcT6EBGEMPEqLxQpjJMcgBXT8_68no3mwjF50g1e-V5U&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-2.fna&_nc_gid=8Bm8WEKHJim4RtaK_sCuVQ&oh=00_AfmdgRmR1maf0V9zE7lJZEw9u_g2iqhE0wViiL9Y7Hndaw&oe=6952C2CB",
    alt: "المطعم والبوفيه",
    category: "interior"
  },
  {
    src: "https://scontent.fosm4-3.fna.fbcdn.net/v/t39.30808-6/593408155_122229791540097645_3782225082647941419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGta2aDhlfDob2e1QQ9StWJbAPBofg3EcFsA8Gh-DcRwaiGdDEa953dT3UM1LgRC-fiA8zxcTArq7hQa0dnEDSB&_nc_ohc=tE7zIXJ7ynAQ7kNvwEM6ZCZ&_nc_oc=Adk-03s9LCUP3XHHCBmVUpnE5Vtx0vVMlBSKAXmrBj13IRQamE3yOZbKp-Y_D6VLLyk&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-3.fna&_nc_gid=EbPBvg5alxolh-6kCoXqdQ&oh=00_Afnepej7I3-hsLtpLp0K_-bXmg1pPcLhqfK0EAR-Ic6qpQ&oe=6952E214",
    alt: "جناح ملكي",
    category: "room"
  },
  {
    src: "https://scontent.fosm4-3.fna.fbcdn.net/v/t39.30808-6/583164179_122227212788097645_2193333401168522035_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGjVSGkKU58nW0TiyzWYtgmd0rbp-55alp3Stun7nlqWqso8BYQKGblUhhHsccbJY7X9uP1jLINURxHHRDdcGs3&_nc_ohc=_rOHQPKtssMQ7kNvwFvMpKL&_nc_oc=AdnEpqaf_aX-gK2_j4csOGWNKweYtetsfSoZ6lA85N_lJkfY6UdAwxs2_alkYK4T1nI&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-3.fna&_nc_gid=sCyhyckdY9bHNxOzLNYpKA&oh=00_AflO8_zHK66RxD5fTu3cQLfLkqfpNRxE8hFoHQlQgQjcdg&oe=6952C77F",
    alt: "إطلالة على النهر",
    category: "exterior"
  },
  {
    src: "https://scontent.fosm4-3.fna.fbcdn.net/v/t39.30808-6/580855693_122226870302097645_5370855309992005385_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGhaJPK97LpSYdqa-n_iKeQSArqqIGrvABICuqogau8ANU0Joc7AJSPqbM_JlU8kBaxCHnv60g4G7SDuQ1Hho8x&_nc_ohc=QxIVi37h46wQ7kNvwGWAEcj&_nc_oc=AdkmZZIEhmZGchIqeToK4TuRdbtJk-tGL7PiRtFKRuygNQ8vSJPVZ-yN0W0MP6D1uhE&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-3.fna&_nc_gid=P6FfNiJAmXWMs8OhcKqTMQ&oh=00_AfkWF-lAYzMn89QO_kbAMCB8zW_jny1L0dFcDeff66mV1A&oe=6952E2AA",
    alt: "جلسات هادئة",
    category: "interior"
  },
  {
    src: "https://scontent.fosm4-3.fna.fbcdn.net/v/t39.30808-6/577059437_122226563312097645_8664757520591209940_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHMjjI0lSoCemsspWc9YTOc-QsJWIC5LF_5CwlYgLksX40IHhYdLLdPFeotIhv11bm3Ro1VqVm9_sgNF_mMjsbV&_nc_ohc=gNWj30Ci-scQ7kNvwE-6b1l&_nc_oc=AdmerntCghY7mlKLnsb-W9EsrZHCWFwS0AcE-J_YZjzrh8XC4uBh1GOjslRBncG5YbE&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fosm4-3.fna&_nc_gid=YerFfne0YeoYPKgK2-xIMA&oh=00_AfkaKkxZWdm4e5Dl77Piga-YARf-qfQX5ac93T3YlMkljw&oe=6952F257",
    alt: "ديكورات عصرية",
    category: "interior"
  }
];

export const REVIEWS: Review[] = [
  {
    author: "Tim",
    rating: 5,
    content: "Pleasantly surprised by this new hotel in Mosul. It's super clean, modern and the AC works wonders across the building. Food is good and the breakfast hall has a great view on the Tigris river just like our room did. Staff is friendly, price is correct and the room was comfortable and super clean.",
    source: "Google",
    date: "قبل 3 أشهر"
  },
  {
    author: "Melad Muhammad",
    rating: 5,
    content: "I spent 3 beautiful nights at this clean hotel. The service guys were great and polite. Had a great view on Tigris and the old bridge. The breakfast buffet was fine and had many variable dishes. The location is in the right coast of Mosul. BTW I forgot my gold earrings when checked out... the service guys brought them for me 😭😭 really thank you I love you🙏❤️❤️",
    source: "Google",
    date: "قبل شهرين"
  },
  {
    author: "Manar Hamed",
    rating: 5,
    content: "ماشالله فندق حيل نضيف خدمات متكامله انترنت قوي تدفئه وتبريد مركزي حمامات جداً نضيفه غرفه كامله معقمه وتخبل مكان حيل مريح وهادئ 🤍🤍",
    source: "Google",
    date: "قبل شهرين"
  },
  {
    author: "Ray",
    rating: 4,
    content: "الموقع استراتيجي، قريب من سوك النبي يونس وسوك السراي، الاسعار منطقيّة بالنسبة لجمال الغرف والفندق. المنظر حلو مطل على نهر دجلة. والخدمة ممتازه",
    source: "Google",
    date: "قبل 7 أشهر"
  }
];

export const NAV_ITEMS = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن الفندق', href: '#about' },
  { label: 'الخدمات', href: '#services' },
  { label: 'المعرض', href: '#gallery' },
  { label: 'آراء النزلاء', href: '#testimonials' },
  { label: 'الموقع والاتصال', href: '#contact' },
];