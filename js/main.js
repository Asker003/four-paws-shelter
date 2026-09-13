document.addEventListener("DOMContentLoaded", () => {
  // 1. Swiper Slider Initsializatsiyasi
  const swiper = new Swiper(".animalSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });

  // 2. Filtr tugmalariga Event Listener ulashtirish
  document.getElementById('filter-all').addEventListener('click', () => filterAnimals('all'));
  document.getElementById('filter-dog').addEventListener('click', () => filterAnimals('dog'));
  document.getElementById('filter-cat').addEventListener('click', () => filterAnimals('cat'));

  // 3. Til almashish (RU, UZ, EN)
  document.getElementById('btn-ru').addEventListener('click', () => switchLang('ru'));
  document.getElementById('btn-uz').addEventListener('click', () => switchLang('uz'));
  document.getElementById('btn-en').addEventListener('click', () => switchLang('en'));
});

// Karta raqamlarini nusxalash
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Скопировано / Nusxalandi / Copied: " + text);
  }).catch(err => {
    console.error('Xatolik:', err);
  });
}

// Jonivorlarni filtr qilish
function filterAnimals(type) {
  const cards = document.querySelectorAll('.animal-card');
  const btns = document.querySelectorAll('.filter-btn');

  btns.forEach(btn => {
    btn.classList.remove('bg-emerald-600', 'text-white', 'shadow-sm');
    btn.classList.add('bg-gray-100', 'text-gray-700');
  });

  if (type === 'all') {
    document.getElementById('filter-all').className = "filter-btn active px-6 py-2.5 rounded-full text-sm font-semibold bg-emerald-600 text-white shadow-sm transition";
    cards.forEach(card => card.style.display = 'block');
  } else if (type === 'dog') {
    document.getElementById('filter-dog').className = "filter-btn px-6 py-2.5 rounded-full text-sm font-semibold bg-emerald-600 text-white shadow-sm transition";
    cards.forEach(card => {
      card.style.display = card.classList.contains('dog') ? 'block' : 'none';
    });
  } else if (type === 'cat') {
    document.getElementById('filter-cat').className = "filter-btn px-6 py-2.5 rounded-full text-sm font-semibold bg-emerald-600 text-white shadow-sm transition";
    cards.forEach(card => {
      card.style.display = card.classList.contains('cat') ? 'block' : 'none';
    });
  }
}

// Tarjimalar lug'ati (RU, UZ, EN)
const translations = {
  ru: {
    "nav-logo": "Четыре Лапы",
    "nav-about": "История",
    "nav-family": "Семья Дудниковых",
    "nav-animals": "Животные приюта",
    "nav-donate": "Помочь",
    "nav-requisites": "Реквизиты",
    "nav-reports": "Нужды и Долги",
    "nav-contact": "Контакты",
    "nav-help-btn": "Помочь",
    "hero-subtitle": "Частный приют в Янгиюльском районе",
    "hero-title": "Приют для бездомных животных «Четыре Лапы»",
    "hero-desc": "Более 1000 собак, 6 осликов, десятки котят и щенков нашли здесь спасение от смерти.",
    "hero-btn-primary": "Помочь приюту (Картой)",
    "hero-btn-secondary": "Наша история",
    "about-title": "История создания приюта",
    "about-p1": "История берет свое начало в 2017-2018 годах из простого неравнодушия семьи Дудниковых.",
    "about-p2": "Так как в черте города Ташкента строительство приютов запрещено, Андрею предложили участок в Янгиюльском районе.",
    "about-p3": "Все это время приют строится с нуля практически только руками Андрея.",
    "stat-dogs": "Собак в приюте",
    "stat-puppies": "Щенков и котят в доме",
    "stat-donkeys": "Спасенных осликов",
    "stat-workers": "Смотрителя в приюте",
    "fam-title": "Семья Дудниковых — Сердце Приюта",
    "fam-desc": "Приют держится на любви и труде одной семьи.",
    "fam-card-title": "Семья Дудниковых",
    "fam-card-subtitle": "Основатели приюта «Четыре Лапы»",
    "fam-card-p1": "<strong>Андрей и Виктория Дудниковы</strong> — основатели приюта.",
    "fam-card-p2": "Их три дочери мечтают спасать животных.",
    "fam-card-p3": "Помогает и <strong>бабушка Тамара</strong>.",
    "anim-title": "Животные, проживающие в приюте",
    "anim-desc": "Познакомьтесь с подопечными, которые нашли здесь заботу и защиту",
    "f-all": "Все",
    "f-dogs": "Собаки",
    "f-cats": "Кошки",
    "anim-card1-title": "Собаки в вольерах",
    "anim-card1-desc": "Более 1000 собак, спасенных с улиц и отловов.",
    "anim-card3-title": "Щенки и Котята в доме",
    "anim-card3-desc": "Около 100 малышей живут прямо в доме семьи.",
    "slider-title": "Наши подопечные",
    "slider-subtitle": "У каждого из них своя история",
    "sl-dog1": "Собака • 2 года",
    "sl-cat1": "Кошка • 1 год",
    "sl-dog2": "Собака • 3 года",
    "sl-cat2": "Кошка • 6 мес",
    "don-title": "Приюту жизненно необходима ваша помощь!",
    "don-desc": "Вы можете перевести пожертвование, отсканировав QR-код приложения.",
    "don-app-note": "Также «Четыре лапы» есть в приложениях:",
    "don-app-section": "в разделе «Благотворительность»",
    "req-badge": "Финансовая помощь",
    "req-title": "Реквизиты для помощи приюту «Четыре лапы» Ташкент",
    "req-subtitle": "Пожалуйста, указывайте пометку <strong>«БЛАГОТВОРИТЕЛЬНОСТЬ»</strong> при переводе",
    "req-andrey-desc": "Сбор на питание и мелкие расходы",
    "req-viktoriya-desc": "На лечение собак и ветеринарию",
    "req-yana-desc": "Карта для помощи приюту",
    "req-paysend-desc": "Для переводов из-за границы на карту Uzcard",
    "req-note": "Пометка: <strong>«БЛАГОТВОРИТЕЛЬНОСТЬ»</strong>",
    "rep-title": "Ежедневные нужды и долги",
    "rep-desc": "С ростом количества животных расходы растут.",
    "rep-c1-title": "Еда и Спецпитание",
    "rep-c1-desc": "Огромные закупки корма.",
    "rep-c2-title": "Лечение и Прививки",
    "rep-c2-desc": "Оплата ветклиник, лекарства.",
    "rep-c3-title": "Строительство вольеров",
    "rep-c3-desc": "Покупка стройматериалов.",
    "rep-c4-title": "Зарплата и Коммуналка",
    "rep-c4-desc": "Оплата труда смотрителей.",
    "foot-desc": "Частный приют для бездомных животных семьи Дудниковых.",
    "foot-loc-title": "Локация",
    "foot-loc-desc": "Ташкентская область, Янгиюльский район.",
    "foot-soc-title": "Мы в соцсетях",
    "foot-soc-desc": "Следите за жизнью приюта:"
  },
  uz: {
    "nav-logo": "To'rt Oyaq",
    "nav-about": "Tarix",
    "nav-family": "Dudnikovlar Oilasi",
    "nav-animals": "Priyut hayvonlari",
    "nav-donate": "Yordam berish",
    "nav-requisites": "Rekvizitlar",
    "nav-reports": "Ehtiyoj va Qarzdorlik",
    "nav-contact": "Aloqa",
    "nav-help-btn": "Yordam berish",
    "hero-subtitle": "Yangiyo'l tumanidagi xususiy priyut",
    "hero-title": "«To'rt Oyaq» uysiz jonivorlar priyuti",
    "hero-desc": "1000 dan ziyod itlar, 6 ta eshak, o'nlarcha kuchukcha va mushuklar qutqarib qolindi.",
    "hero-btn-primary": "Priyutga yordam berish (Karta orqali)",
    "hero-btn-secondary": "Bizning tarix",
    "about-title": "Priyutning tashkil topish tarixi",
    "about-p1": "Priyut tarixi Dudnikovlar oilasining yuksak mehri tufayli boshlangan.",
    "about-p2": "Toshkent shahri ichida priyut qurish taqiqlangani sababli Yangiyo'ldan yer ajratildi.",
    "about-p3": "Shu vaqtdan beri priyut Andreyning o'z qo'llari bilan qurilmoqda.",
    "stat-dogs": "Priyutdagi itlar",
    "stat-puppies": "Uyda parvarishdagi jonivorlar",
    "stat-donkeys": "Qutqarilgan eshaklar",
    "stat-workers": "Priyutdagi qarovchilar",
    "fam-title": "Dudnikovlar Oilasi — Priyut Yuragi",
    "fam-desc": "Priyut bitta oilaning mehri evaziga faoliyat yuritmoqda.",
    "fam-card-title": "Dudnikovlar Oilasi",
    "fam-card-subtitle": "Priyut asoschilari",
    "fam-card-p1": "<strong>Andrey va Viktoriya Dudnikovlar</strong> — priyut asoschilari.",
    "fam-card-p2": "Qizlari jonivorlarni qutqarishni orzu qilishgan.",
    "fam-card-p3": "Ularga <strong>Buvi Tamara</strong> ham yordam beradi.",
    "anim-title": "Priyutda yashaydigan hayvonlar",
    "anim-desc": "Bu yerda g'amxo'rlik va panoh topgan jonivorlarimiz bilan tanishing",
    "f-all": "Barchasi",
    "f-dogs": "Itlar",
    "f-cats": "Mushuklar",
    "anim-card1-title": "Valyerlardagi itlar",
    "anim-card1-desc": "1000 dan ziyod qutqarilgan itlar.",
    "anim-card3-title": "Uyda yashayotgan kichintoylar",
    "anim-card3-desc": "100 ga yaqin kichik jonivorlar oilaning o'z uyida davolanmoqda.",
    "slider-title": "Bizning jonivorlarimiz",
    "slider-subtitle": "Har birining o'z taqdiri bor",
    "sl-dog1": "It • 2 yosh",
    "sl-cat1": "Mushuk • 1 yosh",
    "sl-dog2": "It • 3 yosh",
    "sl-cat2": "Mushuk • 6 oy",
    "don-title": "Priyutga sizning yordamingiz juda zarur!",
    "don-desc": "Ilova orqali QR-kodni skanerlab xayriya qilishingiz mumkin.",
    "don-app-note": "Shuningdek priyutimizni ilovalardan topishingiz mumkin:",
    "don-app-section": "«Xayriya» bo'limida",
    "req-badge": "Moliyaviy yordam",
    "req-title": "Toshkent «To'rt Oyaq» priyutiga yordam rekvizitlari",
    "req-subtitle": "O'tkazma vaqtida izohga <strong>«БЛАГОТВОРИТЕЛЬНОСТЬ» (XAYRIYA)</strong> deb yozing",
    "req-andrey-desc": "Yem-xashak va kunlik xarajatlar uchun",
    "req-viktoriya-desc": "Jonivorlarni davolash xarajatlari uchun",
    "req-yana-desc": "Priyutga yordam kartasi",
    "req-paysend-desc": "Chet eldan Uzcard kartasiga pul o'tkazish uchun",
    "req-note": "Izoh: <strong>«БЛАГОТВОРИТЕЛЬНОСТЬ»</strong>",
    "rep-title": "Kunlik ehtiyojlar va qarzdorliklar",
    "rep-desc": "Jonivorlar soni ortgani sari xarajatlar ham o'sib bormoqda.",
    "rep-c1-title": "Oziq-ovqat va Maxsus yem",
    "rep-c1-desc": "1000 dan ortiq itlar uchun oziq-ovqat xaridi.",
    "rep-c2-title": "Davolash va Vaksinalar",
    "rep-c2-desc": "Vetklinika xarajatlari va dorilar.",
    "rep-c3-title": "Valyerlar qurilishi",
    "rep-c3-desc": "Yangi valyerlar qurishga xaridlar.",
    "rep-c4-title": "Maosh va Kommunal",
    "rep-c4-desc": "2 ta qarovchining maoshi, kommunal to'lovlar.",
    "foot-desc": "Dudnikovlar oilasining uysiz jonivorlar uchun xususiy priyuti.",
    "foot-loc-title": "Joylashuv",
    "foot-loc-desc": "Toshkent viloyati, Yangiyo'l tumani.",
    "foot-soc-title": "Ijtimoiy tarmoqlar",
    "foot-soc-desc": "Priyut hayotini kuzatib boring:"
  },
  en: {
    "nav-logo": "Four Paws",
    "nav-about": "History",
    "nav-family": "Dudnikov Family",
    "nav-animals": "Shelter Animals",
    "nav-donate": "Donate",
    "nav-requisites": "Details",
    "nav-reports": "Needs & Debts",
    "nav-contact": "Contacts",
    "nav-help-btn": "Donate",
    "hero-subtitle": "Private Shelter in Yangiyul District",
    "hero-title": "Shelter for Homeless Animals «Four Paws»",
    "hero-desc": "Over 1000 dogs, 6 donkeys, dozens of kittens and puppies saved here.",
    "hero-btn-primary": "Help Shelter (Card)",
    "hero-btn-secondary": "Our History",
    "about-title": "History of the Shelter",
    "about-p1": "The story began in 2017-2018 from the compassion of the Dudnikov family.",
    "about-p2": "Since building shelters within Tashkent city limits is prohibited, land was allocated in Yangiyul district.",
    "about-p3": "The shelter is built from scratch almost entirely by Andrey's hands.",
    "stat-dogs": "Dogs in shelter",
    "stat-puppies": "Puppies & kittens at home",
    "stat-donkeys": "Rescued donkeys",
    "stat-workers": "Caretakers at shelter",
    "fam-title": "Dudnikov Family — Heart of Shelter",
    "fam-desc": "The shelter relies on the love and dedication of one family.",
    "fam-card-title": "Dudnikov Family",
    "fam-card-subtitle": "Founders of «Four Paws» Shelter",
    "fam-card-p1": "<strong>Andrey & Victoria Dudnikov</strong> — founders of the shelter.",
    "fam-card-p2": "Their three daughters dreamt of saving animals.",
    "fam-card-p3": "Helped by <strong>Grandma Tamara</strong>.",
    "anim-title": "Animals living in the shelter",
    "anim-desc": "Meet our rescues who found care and protection here",
    "f-all": "All",
    "f-dogs": "Dogs",
    "f-cats": "Cats",
    "anim-card1-title": "Dogs in Enclosures",
    "anim-card1-desc": "Over 1000 dogs rescued from streets and catches.",
    "anim-card3-title": "Puppies & Kittens at Home",
    "anim-card3-desc": "About 100 babies live directly in the family home.",
    "slider-title": "Our Animals",
    "slider-subtitle": "Each has their own story",
    "sl-dog1": "Dog • 2 yrs",
    "sl-cat1": "Cat • 1 yr",
    "sl-dog2": "Dog • 3 yrs",
    "sl-cat2": "Cat • 6 mos",
    "don-title": "The shelter urgently needs your help!",
    "don-desc": "You can donate by scanning the QR code in your app.",
    "don-app-note": "Also find «Four Paws» in mobile apps:",
    "don-app-section": "under «Charity» section",
    "req-badge": "Financial Assistance",
    "req-title": "Bank Details for «Four Paws» Shelter Tashkent",
    "req-subtitle": "Please mark transfers as <strong>«БЛАГОТВОРИТЕЛЬНОСТЬ»</strong> (Charity)",
    "req-andrey-desc": "For food and minor expenses",
    "req-viktoriya-desc": "For medical treatment and vet care",
    "req-yana-desc": "General shelter support card",
    "req-paysend-desc": "For international transfers to Uzcard",
    "req-note": "Note: <strong>«БЛАГОТВОРИТЕЛЬНОСТЬ»</strong>",
    "rep-title": "Daily Needs & Debts",
    "rep-desc": "Expenses grow rapidly as animal numbers increase.",
    "rep-c1-title": "Food & Special Feeding",
    "rep-c1-desc": "Large scale food purchases.",
    "rep-c2-title": "Medical Care & Vaccines",
    "rep-c2-desc": "Vet bills, sterilization, medicines.",
    "rep-c3-title": "Building Enclosures",
    "rep-c3-desc": "Construction materials purchase.",
    "rep-c4-title": "Salaries & Utilities",
    "rep-c4-desc": "Wages for 2 caretakers, utility bills.",
    "foot-desc": "Private shelter for homeless animals by the Dudnikov family.",
    "foot-loc-title": "Location",
    "foot-loc-desc": "Tashkent Region, Yangiyul District.",
    "foot-soc-title": "Social Networks",
    "foot-soc-desc": "Follow our shelter updates:"
  }
};

// Til almashtirish
function switchLang(lang) {
  Object.keys(translations[lang]).forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      el.innerHTML = translations[lang][key];
    }
  });

  const qrTexts = document.querySelectorAll('.qr-scan-text');
  qrTexts.forEach(el => {
    if (lang === 'ru') el.innerText = "Отсканируйте в приложении";
    else if (lang === 'uz') el.innerText = "Ilovada skanerlang";
    else el.innerText = "Scan in your app";
  });

  // Tugma ranglarini yangilash
  ['ru', 'uz', 'en'].forEach(l => {
    const btn = document.getElementById(`btn-${l}`);
    if (l === lang) {
      btn.className = "px-2 py-1 rounded-lg bg-amber-600 text-white transition font-bold";
    } else {
      btn.className = "px-2 py-1 rounded-lg text-gray-600 hover:text-gray-900 transition font-bold";
    }
  });
}