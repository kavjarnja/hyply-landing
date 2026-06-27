const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const trigger = item.querySelector(".accordion-trigger");
  const panel = item.querySelector(".accordion-panel");

  trigger.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    accordionItems.forEach((currentItem) => {
      currentItem.classList.remove("is-open");
      currentItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
      currentItem.querySelector(".accordion-panel").hidden = true;
    });

    if (!isOpen) {
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      panel.hidden = false;
    }
  });
});

const defaultProjectName = "Проєкт #1";
const allowedFileExtensions = ["CSV", "TXT", "DOCX"];
const quoteIconSvg = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 7C10.3978 7 10.7792 7.15815 11.0605 7.43945C11.3419 7.72076 11.5 8.10218 11.5 8.5V13.5C11.5 14.4283 11.131 15.3182 10.4746 15.9746C9.81823 16.631 8.92826 17 8 17C7.73478 17 7.48051 16.8946 7.29297 16.707C7.10543 16.5195 7 16.2652 7 16V15C7 14.7348 7.10543 14.4805 7.29297 14.293C7.48051 14.1054 7.73478 14 8 14C8.13261 14 8.25975 13.9473 8.35352 13.8535C8.44728 13.7597 8.5 13.6326 8.5 13.5V13C8.10218 13 7.72076 12.8419 7.43945 12.5605C7.15815 12.2792 7 11.8978 7 11.5V8.5C7 8.10218 7.15815 7.72076 7.43945 7.43945C7.72076 7.15815 8.10218 7 8.5 7H10ZM15.5 7C15.8978 7 16.2792 7.15815 16.5605 7.43945C16.8419 7.72076 17 8.10218 17 8.5V13.5C17 14.4283 16.631 15.3182 15.9746 15.9746C15.3182 16.631 14.4283 17 13.5 17C13.2348 17 12.9805 16.8946 12.793 16.707C12.6054 16.5195 12.5 16.2652 12.5 16V15C12.5 14.7348 12.6054 14.4805 12.793 14.293C12.9805 14.1054 13.2348 14 13.5 14C13.6326 14 13.7597 13.9473 13.8535 13.8535C13.9473 13.7597 14 13.6326 14 13.5V13C13.6022 13 13.2208 12.8419 12.9395 12.5605C12.6581 12.2792 12.5 11.8978 12.5 11.5V8.5C12.5 8.10218 12.6581 7.72076 12.9395 7.43945C13.2208 7.15815 13.6022 7 14 7H15.5ZM8.5 8C8.36739 8 8.24025 8.05272 8.14648 8.14648C8.05272 8.24025 8 8.36739 8 8.5V11.5C8 11.6326 8.05272 11.7597 8.14648 11.8535C8.24025 11.9473 8.36739 12 8.5 12C8.76522 12 9.0195 12.1054 9.20703 12.293C9.39457 12.4805 9.5 12.7348 9.5 13V13.5C9.5 13.8978 9.34185 14.2792 9.06055 14.5605C8.77924 14.8419 8.39782 15 8 15V16C8.66304 16 9.29874 15.7364 9.76758 15.2676C10.2364 14.7987 10.5 14.163 10.5 13.5V8.5C10.5 8.36739 10.4473 8.24025 10.3535 8.14648C10.2597 8.05272 10.1326 8 10 8H8.5ZM14 8C13.8674 8 13.7403 8.05272 13.6465 8.14648C13.5527 8.24025 13.5 8.36739 13.5 8.5V11.5C13.5 11.6326 13.5527 11.7597 13.6465 11.8535C13.7403 11.9473 13.8674 12 14 12C14.2652 12 14.5195 12.1054 14.707 12.293C14.8946 12.4805 15 12.7348 15 13V13.5C15 13.8978 14.8419 14.2792 14.5605 14.5605C14.2792 14.8419 13.8978 15 13.5 15V16C14.163 16 14.7987 15.7364 15.2676 15.2676C15.7364 14.7987 16 14.163 16 13.5V8.5C16 8.36739 15.9473 8.24025 15.8535 8.14648C15.7597 8.05272 15.6326 8 15.5 8H14Z" fill="#6342F8"/>
  </svg>
`;
const clockIconSvg = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.3335C4.32 1.3335 1.33334 4.32016 1.33334 8.00016C1.33334 11.6802 4.32 14.6668 8 14.6668C11.68 14.6668 14.6667 11.6802 14.6667 8.00016C14.6667 4.32016 11.68 1.3335 8 1.3335ZM8.66667 8.3335C8.66667 8.68628 8.52619 9.02435 8.27614 9.2744C8.0261 9.52445 7.68803 9.66683 7.33334 9.66683H5.33334C5.15652 9.66683 4.98696 9.59659 4.86193 9.47157C4.73691 9.34654 4.66667 9.17697 4.66667 9.00016C4.66667 8.82335 4.73691 8.65378 4.86193 8.52876C4.98696 8.40373 5.15652 8.3335 5.33334 8.3335H7.33334V4.66683C7.33334 4.49002 7.40357 4.32045 7.5286 4.19543C7.65362 4.0704 7.82319 4.00016 8 4.00016C8.17682 4.00016 8.34639 4.0704 8.47141 4.19543C8.59643 4.32045 8.66667 4.49002 8.66667 4.66683V8.3335Z" fill="#A19EB2"/>
  </svg>
`;
const figmaAssets = {
  successIllustration: "https://www.figma.com/api/mcp/asset/e9372950-0ea9-4443-ba9b-f8dcaac4a7be",
  actionEdit: "https://www.figma.com/api/mcp/asset/8f0182a1-8ece-4af8-a126-3e51affac45a",
  actionUpload: "https://www.figma.com/api/mcp/asset/6a9dcfaa-3dd0-48ea-bced-f092bca79f60",
  actionDelete: "https://www.figma.com/api/mcp/asset/f20d0d51-3db3-4268-8900-269a2182417a",
  painHigh: "https://www.figma.com/api/mcp/asset/97c0813e-ec42-4659-b3bd-b226f60aaf09",
  painMed: "https://www.figma.com/api/mcp/asset/256fc5a9-7c07-467a-b219-baadc5f54da0",
  painLow: "https://www.figma.com/api/mcp/asset/a9b92a07-8e3a-4e8b-8c94-1795a98d3fb8",
  chatIcon: "https://www.figma.com/api/mcp/asset/05d1b17a-8163-4f86-b17b-bbf5ff6dd005",
  personaChatCloseIcon: "https://www.figma.com/api/mcp/asset/c96122c6-9636-485e-8dde-0ff2b8ebf8b8",
  personaChatInfoIcon: "https://www.figma.com/api/mcp/asset/d898fba5-521f-4c0e-86f2-b55461d943fa",
  personaChatPromptIcon: "https://www.figma.com/api/mcp/asset/a164c8b8-cda8-4ddd-9222-2f99ba79dee5",
  personaChatSendActiveIcon: "https://www.figma.com/api/mcp/asset/d43555f4-2488-4f6f-8e5e-2ffe59365341",
  personaChatSendDisabledIcon: "https://www.figma.com/api/mcp/asset/3584b587-c381-4440-b14d-9c164a89aeaa",
  vocSummaryTitleIcon: "https://www.figma.com/api/mcp/asset/6b1c0319-f8d8-430f-b30d-240b1ca55a0f",
  problemStatusHigh: "https://www.figma.com/api/mcp/asset/b1117371-6e2b-4bc4-81f7-5168063f3747",
  problemStatusMed: "https://www.figma.com/api/mcp/asset/6bbd0a95-1ce2-4a3d-86b6-e75bc057a914",
  problemStatusLow: "https://www.figma.com/api/mcp/asset/809c5a95-50eb-469e-a64b-820570581297",
  projectFolder: "https://www.figma.com/api/mcp/asset/46432eab-0206-4ba9-9ff1-59c9431f28ac",
  vocChevronUp: "https://www.figma.com/api/mcp/asset/b5ec92e5-c4b4-41f4-a8c2-487fe0676406",
  vocChevronDown: "https://www.figma.com/api/mcp/asset/1f9adb24-52c3-4fe6-8109-77c69b47fd35",
  opportunityProblemIcon: "https://www.figma.com/api/mcp/asset/ff89e19a-c7aa-474d-9951-19dc2a2042da",
  opportunityDividerIcon: "https://www.figma.com/api/mcp/asset/bd737de5-b059-4b75-aaaf-57e1b755d96a",
  opportunityMainIcon: "https://www.figma.com/api/mcp/asset/d4f1a21f-d889-40e6-8981-88e1e61915bb",
  deleteProjectIllustration: "https://www.figma.com/api/mcp/asset/01957197-ffd9-404f-a275-e1a1db1cc2fe",
  editProjectIllustration: "https://www.figma.com/api/mcp/asset/38e9d413-be35-4d33-b919-c1ace174e249",
};
const projectToastStorageKey = "hyply-project-toast";
const personaAvatarVariants = [
  "https://www.figma.com/api/mcp/asset/68114838-5884-47b1-b642-6fdffd38c33a",
  "https://www.figma.com/api/mcp/asset/9bbd7963-058f-4cd9-bc9f-3163f44369b5",
  "https://www.figma.com/api/mcp/asset/ae5dd604-eb84-4142-a482-9453f1b5e9ed",
  "https://www.figma.com/api/mcp/asset/b7da12d2-ff2e-4a3f-a7f4-7e915d11fcd3",
  "https://www.figma.com/api/mcp/asset/41e72d66-5dd2-4189-b021-cc71b16fa92c",
  "https://www.figma.com/api/mcp/asset/008e5318-8c42-4fb7-8162-ab58aac387b6",
  "https://www.figma.com/api/mcp/asset/d746422c-b11e-440a-91f6-0d298e4b8ee6",
  "https://www.figma.com/api/mcp/asset/38f6e7d3-3981-482c-8315-eb541e2af1b6",
  "https://www.figma.com/api/mcp/asset/2e497d99-4b72-4b21-894a-b990e3b25cbb",
  "https://www.figma.com/api/mcp/asset/c68cb52e-0ce3-4697-b485-cb697b6ee5e5",
  "https://www.figma.com/api/mcp/asset/9d8af27a-1177-4aed-9473-7a01ea60133b",
  "https://www.figma.com/api/mcp/asset/3d4ca1bb-b068-4838-ade6-078285b3f96d",
  "https://www.figma.com/api/mcp/asset/ce3079c2-256f-4080-897d-b92fbf2deb21",
  "https://www.figma.com/api/mcp/asset/8d730598-b45c-4eb6-afa7-c13da0b7f7a3",
  "https://www.figma.com/api/mcp/asset/e5bb4749-6981-48fd-bc0b-8921522f573e",
  "https://www.figma.com/api/mcp/asset/89857dce-fcfe-477d-ab62-9071ea4a815c",
  "https://www.figma.com/api/mcp/asset/b881e59e-7a52-40b1-a3db-5c1613ceea8f",
  "https://www.figma.com/api/mcp/asset/f07013d0-3b7a-4769-9d7c-7c8da9d4621e",
  "https://www.figma.com/api/mcp/asset/8291a33c-b0b3-4b8e-a47a-6d74fd8d5d15",
  "https://www.figma.com/api/mcp/asset/05d0f48e-0a49-4f31-af36-3e6d60c4daf8",
];
const analysisStages = [
  {
    label: "Завантаження файлів",
    message: "Завантажуємо файли",
    progress: 12,
  },
  {
    label: "Аналізуємо customer feedback",
    message: "Аналізуємо customer feedback",
    progress: 29,
  },
  {
    label: "Шукаємо повторювані патерни",
    message: "Шукаємо повторювані патерни",
    progress: 47,
  },
  {
    label: "Формуємо персони",
    message: "Формуємо персони",
    progress: 63,
  },
  {
    label: "Будуємо карту можливостей",
    message: "Будуємо карту можливостей",
    progress: 75,
  },
  {
    label: "Генеруємо продуктові гіпотези",
    message: "Генеруємо продуктові гіпотези",
    progress: 86,
  },
  {
    label: "Готуємо результати",
    message: "Готуємо результати",
    progress: 96,
  },
];
const personaPains = [
  {
    emoji: figmaAssets.painHigh,
    mentions: "23 згадки",
    status: "high",
    title: "Ручний аналіз",
  },
  {
    emoji: figmaAssets.painHigh,
    mentions: "19 згадок",
    status: "high",
    title: "Розкиданий feedback",
  },
  {
    emoji: figmaAssets.painMed,
    mentions: "15 згадок",
    status: "med",
    title: "Немає доказів",
  },
  {
    emoji: figmaAssets.painMed,
    mentions: "12 згадок",
    status: "med",
    title: "Довгий синтез",
  },
  {
    emoji: figmaAssets.painMed,
    mentions: "15 згадок",
    status: "med",
    title: "Немає доказів",
  },
  {
    emoji: figmaAssets.painLow,
    mentions: "8 згадок",
    status: "low",
    title: "Загублені інсайти",
  },
];
const personas = [
  {
    avatar: personaAvatarVariants[0],
    evidence: "47 evidence",
    field: "B2B SaaS",
    gender: "female",
    insights: "12 insights",
    name: "Олена Коваль",
    profession: "Product Manager",
    chatAnswer:
      "У даних для цієї персони головний патерн - потреба знаходити ключові інсайти з customer feedback без витрат часу на ручний аналіз. Найчастіше повторюється біль про нестачу часу на аналіз великих обсягів feedback.",
    chatQuotes: [
      "Я витрачаю мінімум 3 години на тиждень на аналіз відгуків вручну.",
      "Мені потрібна система, яка показує патерни, а не просто список коментарів.",
      "Feedback приходить з різних каналів, і команда швидко втрачає контекст.",
    ],
    summary: "Керує розробкою продукту. Прагне до швидкого та обґрунтованого прийняття рішень на основі реальних даних.",
  },
  {
    avatar: personaAvatarVariants[1],
    evidence: "31 evidence",
    field: "Startup",
    gender: "male",
    insights: "8 insights",
    name: "Артем Бондар",
    profession: "Founder / CEO",
    chatAnswer:
      "У даних для цієї персони видно потребу швидко отримувати сигнали з реальних даних, щоб зрозуміти, які проблеми варто пріоритизувати. У feedback повторюється запит на короткий доказовий зріз, який можна показати команді або інвесторам.",
    chatQuotes: [
      "Мені треба швидко зрозуміти, чи проблема повторюється у різних користувачів.",
      "Без доказів дуже складно пояснити, чому саме ця гіпотеза важлива зараз.",
      "Я хочу бачити не просто список фідбеку, а рішення, що з ним робити далі.",
    ],
    summary: "Будує продукт з нуля. Потребує чітких даних для стратегічних рішень та обґрунтування перед інвесторами.",
  },
  {
    avatar: personaAvatarVariants[2],
    evidence: "58 evidence",
    field: "Product Agency",
    gender: "female",
    insights: "15 insights",
    name: "Марія Шевченко",
    profession: "UX Researcher",
    chatAnswer:
      "У даних для цієї персони головна цінність пов'язана з перетворенням розрізненого user research на структуровані патерни. Найчастіше звучить біль про втрату інсайтів між інтерв'ю, нотатками та продуктовими рішеннями.",
    chatQuotes: [
      "Після інтерв'ю команда часто пам'ятає емоції, але не бачить повторюваних патернів.",
      "Мені потрібно швидко підтягувати цитати, коли ми обговорюємо пріоритети.",
      "Research має бути живим джерелом рішень, а не документом, який ніхто не відкриває.",
    ],
    summary: "Систематизує user research та шукає підтвердження для гіпотез. Хоче, щоб команда бачила інсайти, а не читала звіти.",
  },
];
const painStatusLabels = {
  high: "HIGH",
  low: "low",
  med: "Med",
};
const painStatusAssets = {
  high: figmaAssets.problemStatusHigh,
  low: figmaAssets.problemStatusLow,
  med: figmaAssets.problemStatusMed,
};
const createdProjectsStorageKey = "hyply-created-projects";
const projectFilesStorageKey = "hyply-project-files";
const profileStorageKey = "hyply-profile";
const profileReturnStorageKey = "hyply-profile-return-url";
const authStorageKey = "hyply-is-logged-in";
const firebaseConfig = {
  apiKey: "AIzaSyBOESLOTAvFgeEjOCfmwk44pMDDZHOe8zI",
  authDomain: "hyply-ai.firebaseapp.com",
  projectId: "hyply-ai",
  storageBucket: "hyply-ai.firebasestorage.app",
  messagingSenderId: "1055628830692",
  appId: "1:1055628830692:web:a0002001e746a99165c9f1",
  measurementId: "G-JTEHXS135L",
};
let hyplyFirebaseApp = null;
let hyplyFirebaseAuth = null;
let hyplyFirestore = null;
let analyzedProjectFiles = [];
const vocSummaryCards = [
  {
    emoji: "🧩",
    text: "Найчастіший запит - централізувати customer feedback та автоматично його групувати",
  },
  {
    emoji: "⏱️",
    text: "Ручний аналіз customer feedback забирає 3+ години щотижня",
  },
  {
    emoji: "💡",
    text: "Найперспективніша можливість - рішення, підкріплені доказами",
  },
  {
    emoji: "🗂️",
    text: "Найбільший бар'єр - дані розкидані між 5+ джерелами",
  },
  {
    emoji: "🔎",
    text: "Команди втрачають контекст між інтерв'ю, review та support tickets",
  },
  {
    emoji: "💬",
    text: "Найсильніший сигнал - потреба швидко підтягувати цитати до рішень",
  },
  {
    emoji: "👥",
    text: "Повторювані проблеми найбільше проявляються у PM та UX Researcher сегментах",
  },
];
const vocProblems = [
  {
    count: 23,
    mentions: "23 згадок",
    title: "Ручний аналіз feedback займає забагато часу",
    severity: "high",
    severityLabel: "Високий",
    sources: ["App Store Reviews", "User Interviews"],
    segments: ["PM", "UX Researcher"],
    personas: [
      ["OK", "Олена Коваль"],
      ["МШ", "Марія Шевченко"],
      ["ММ", "Максим Мельник"],
    ],
    quotes: [
      "Я витрачаю мінімум 3 години на тиждень на аналіз відгуків вручну.",
      "Мені потрібна система, яка показує патерни, а не просто список коментарів.",
      "Після інтерв'ю команда часто пам'ятає емоції, але не бачить повторюваних патернів.",
      "Feedback приходить з різних каналів, і команда швидко втрачає контекст.",
    ],
  },
  {
    count: 19,
    mentions: "19 згадок",
    title: "Feedback розкиданий по різних платформах",
    severity: "high",
    severityLabel: "Високий",
    sources: ["Support Tickets", "Interviews"],
    segments: ["PM", "Customer Success"],
    personas: [
      ["OK", "Олена Коваль"],
      ["АБ", "Артем Бондар"],
    ],
    quotes: [
      "Ми бачимо частину сигналів у support, частину у reviews, але разом це ніхто не збирає.",
      "Контекст губиться, коли feedback живе у різних інструментах.",
      "Перед плануванням доводиться вручну переносити коментарі у таблицю.",
    ],
  },
  {
    count: 15,
    mentions: "15 згадок",
    title: "Важко обґрунтувати рішення конкретними даними",
    severity: "med",
    severityLabel: "Високий",
    sources: ["NPS Comments", "Interviews"],
    segments: ["Founder", "Product Lead"],
    personas: [
      ["АБ", "Артем Бондар"],
      ["OK", "Олена Коваль"],
    ],
    quotes: [
      "Без доказів дуже складно пояснити, чому саме ця гіпотеза важлива зараз.",
      "Я хочу бачити цитати поруч із пріоритетом, а не шукати їх окремо.",
      "Команді легше погодитись, коли є конкретні фрази користувачів.",
    ],
  },
  {
    count: 12,
    mentions: "12 згадок",
    title: "Синтез результатів досліджень не автоматизований",
    severity: "low",
    severityLabel: "Середній",
    sources: ["User Interviews"],
    segments: ["UX Researcher"],
    personas: [
      ["МШ", "Марія Шевченко"],
      ["OK", "Олена Коваль"],
    ],
    quotes: [
      "Research має бути живим джерелом рішень, а не документом, який ніхто не відкриває.",
      "Після серії інтерв'ю найбільше часу йде на синтез і групування.",
      "Мені потрібно швидко підтягувати цитати, коли ми обговорюємо пріоритети.",
    ],
  },
];
const opportunityCards = [
  {
    confidence: 8,
    effort: 3,
    evidence: "47 evidence",
    impact: 9,
    opportunity: "Автоматичне визначення повторюваних патернів у customer feedback",
    personas: ["МШ", "ММ"],
    problem: "Ручний аналіз feedback займає забагато часу",
    reach: 8,
    severity: "high",
    severityLabel: "Високий",
    title: "Автоматичне визначення повторюваних патернів у customer feedback",
  },
  {
    confidence: 7,
    effort: 4,
    evidence: "39 evidence",
    impact: 8,
    opportunity: "Evidence-linked decisions для продуктових пріоритетів",
    personas: ["OK", "АБ"],
    problem: "Важко обґрунтувати рішення конкретними даними",
    reach: 7,
    severity: "high",
    severityLabel: "Високий",
    title: "Evidence-linked decisions",
  },
  {
    confidence: 7,
    effort: 5,
    evidence: "31 evidence",
    impact: 7,
    opportunity: "Карта можливостей із дослідницьких нотаток та цитат",
    personas: ["МШ"],
    problem: "Синтез результатів досліджень не автоматизований",
    reach: 6,
    severity: "med",
    severityLabel: "Середній",
    title: "Research synthesis map",
  },
  {
    confidence: 6,
    effort: 3,
    evidence: "28 evidence",
    impact: 6,
    opportunity: "Швидкий пріоритизатор сигналів перед roadmap planning",
    personas: ["АБ", "OK"],
    problem: "Feedback розкиданий по різних платформах",
    reach: 5,
    severity: "low",
    severityLabel: "Низький",
    title: "Roadmap signal prioritizer",
  },
];
const hypothesisCards = [
  {
    because:
      "більшість часу зараз іде на читання та категоризацію, а не на прийняття рішень",
    confidence: 82,
    confidenceTone: "success",
    evidence: "23 evidence",
    id: "H-01",
    ifText: "ми автоматизуємо визначення патернів у customer feedback",
    leadingMetric: "К-сть AI-запитів на тиждень",
    persona: "Олена Коваль",
    personaInitials: "OK",
    quotes: [
      "Я витрачаю мінімум 3 години на тиждень тільки на читання відгуків.",
      "Мені не потрібні всі коментарі - тільки ті, що повторюються.",
    ],
    sources: ["App Store Reviews (12)", "User Interviews (8)", "Support Tickets (3)"],
    successMetric: "Час на синтез feedback <= 30 хв/тиждень",
    thenText: "PM витрачатимуть на 70% менше часу на ручний аналіз",
    title: "IF ми автоматизуємо визначення патернів у customer feedback",
  },
  {
    because: "команди швидше погоджуються з пріоритетами, коли бачать конкретні докази з feedback",
    confidence: 75,
    confidenceTone: "warning",
    evidence: "15 evidence",
    id: "H-02",
    ifText: "ми покажемо evidence-підтвердження для кожної продуктової гіпотези",
    leadingMetric: "К-сть відкритих evidence blocks",
    persona: "Артем Бондар",
    personaInitials: "АБ",
    quotes: [
      "Без доказів дуже складно пояснити, чому саме ця гіпотеза важлива зараз.",
      "Я хочу бачити цитати поруч із пріоритетом, а не шукати їх окремо.",
    ],
    sources: ["NPS Comments (6)", "User Interviews (5)", "Support Tickets (4)"],
    successMetric: "Час на погодження roadmap-рішення <= 1 день",
    thenText: "команда швидше погоджуватиме продуктові рішення",
    title: "IF ми покажемо evidence-підтвердження для кожної продуктової гіпотези",
  },
  {
    because: "research insights часто губляться між нотатками, звітами та продуктовими рішеннями",
    confidence: 88,
    confidenceTone: "success",
    evidence: "31 evidence",
    id: "H-03",
    ifText: "ми автоматизуємо синтез user interviews",
    leadingMetric: "К-сть синтезованих інтерв'ю",
    persona: "Марія Шевченко",
    personaInitials: "МШ",
    quotes: [
      "Після інтерв'ю команда часто пам'ятає емоції, але не бачить повторюваних патернів.",
      "Мені потрібно швидко підтягувати цитати, коли ми обговорюємо пріоритети.",
    ],
    sources: ["User Interviews (18)", "Research Notes (9)", "App Store Reviews (4)"],
    successMetric: "Синтез 10 інтерв'ю <= 20 хв",
    thenText: "UX Researcher швидше перетворюватиме інтерв'ю на actionable insights",
    title: "IF ми автоматизуємо синтез user interviews",
  },
];
const evidenceLibraryItems = [
  {
    hypothesis: "H-01",
    mentions: "8 згадок",
    persona: "Олена Коваль",
    personaInitials: "ОК",
    quote:
      '"Я витрачаю мінімум 3 години на тиждень на аналіз відгуків вручну. Це повний абсурд, бо я мала б витрачати цей час на рішення, а не на читання."',
    source: "User Interview",
    tags: ["#analysis", "#time"],
  },
  {
    hypothesis: "H-02",
    mentions: "6 згадок",
    persona: "Олена Коваль",
    personaInitials: "ОК",
    quote:
      '"Feedback приходить з 5 різних каналів, і це хаос. Slack, Intercom, App Store, email... І для кожного треба окремий логін."',
    source: "Support Ticket",
    tags: ["#channels", "#fragmentation"],
  },
  {
    hypothesis: "H-02",
    mentions: "5 згадок",
    persona: "Артем Бондар",
    personaInitials: "АБ",
    quote:
      '"Мені потрібні конкретні цифри, щоб переконати команду змінити напрям. Користувачі скаржились не рахується аргументом."',
    source: "User Interview",
    tags: ["#evidence", "#decisions"],
  },
  {
    hypothesis: "H-03",
    mentions: "7 згадок",
    persona: "Марія Шевченко",
    personaInitials: "МШ",
    quote:
      '"Синтез одного дослідження займає в мене 2-3 дні. Більше часу витрачаю на форматування результатів, ніж на сам аналіз."',
    source: "User Interview",
    tags: ["#synthesis", "#time"],
  },
  {
    hypothesis: "H-03",
    mentions: "4 згадки",
    persona: "Марія Шевченко",
    personaInitials: "МШ",
    quote:
      '"Хочу, щоб команда бачила інсайти, а не читала 40-сторінковий звіт. Ніхто не читає довгі звіти - це факт."',
    source: "NPS Comment",
    tags: ["#reporting", "#insights"],
  },
  {
    hypothesis: "H-01",
    mentions: "8 згадок",
    persona: "Олена Коваль",
    personaInitials: "ОК",
    quote:
      '"Я витрачаю мінімум 3 години на тиждень на аналіз відгуків вручну. Це повний абсурд, бо я мала б витрачати цей час на рішення, а не на читання."',
    source: "User Interview",
    tags: ["#analysis", "#time"],
  },
];
const outputTabs = [
  ["Personas", () => personas.length],
  ["Voice of Customer", () => vocProblems.length],
  ["Opportunities", () => opportunityCards.length],
  ["Hypotheses", () => hypothesisCards.length],
  ["Evidence Library", () => evidenceLibraryItems.length],
];

const getFileExtension = (fileName) => {
  const extension = fileName.split(".").pop();
  return extension ? extension.toUpperCase() : "FILE";
};

const formatFileSize = (size) => {
  if (!size) {
    return "22 KB";
  }

  if (size < 1024 * 1024) {
    return `${Math.max(1, Math.round(size / 1024))} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

const isAllowedFile = (file) => allowedFileExtensions.includes(getFileExtension(file.name));

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });

const createRemoveIcon = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");

  ["M6.344 6.344L17.656 17.656", "M17.656 6.344L6.344 17.656"].forEach((pathData) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("stroke", "#696580");
    path.setAttribute("stroke-width", "1.6");
    path.setAttribute("stroke-linecap", "round");
    svg.append(path);
  });

  return svg;
};

const renderUploadedFiles = (uploadedFiles, files, onRemove) => {
  if (!uploadedFiles) {
    return;
  }

  uploadedFiles.replaceChildren();
  uploadedFiles.hidden = files.length === 0;

  files.forEach((file, index) => {
    const row = document.createElement("div");
    row.className = "uploaded-file";
    row.dataset.fileIndex = String(index);

    const badge = document.createElement("span");
    badge.className = "doc-badge";
    badge.textContent = getFileExtension(file.name);

    const name = document.createElement("strong");
    name.textContent = file.name;

    const size = document.createElement("small");
    size.textContent = file.displaySize || formatFileSize(file.size);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `Видалити ${file.name}`);
    removeButton.append(createRemoveIcon());
    removeButton.addEventListener("click", () => onRemove(index));

    row.append(badge, name, size, removeButton);
    uploadedFiles.append(row);
  });
};

const scrollToUploadedFiles = (uploadedFiles) => {
  if (!uploadedFiles || uploadedFiles.hidden) {
    return;
  }

  requestAnimationFrame(() => {
    uploadedFiles.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
};

const resetCabinetContentScroll = (cabinetMain) => {
  requestAnimationFrame(() => {
    cabinetMain.scrollTop = 0;
    cabinetMain.closest(".cabinet-app")?.scrollTo({ top: 0 });
  });
};

const getExistingUploadedFiles = (uploadedFiles) =>
  Array.from(uploadedFiles.querySelectorAll(".uploaded-file")).map((fileRow) => ({
    displaySize: fileRow.querySelector("small")?.textContent.trim() || "22 KB",
    name: fileRow.querySelector("strong")?.textContent.trim() || "uploaded-file.txt",
    size: 0,
  }));

const readProjectFilesMap = () => {
  try {
    const filesMap = JSON.parse(window.localStorage.getItem(projectFilesStorageKey) || "{}");

    return filesMap && typeof filesMap === "object" && !Array.isArray(filesMap) ? filesMap : {};
  } catch {
    return {};
  }
};

const readProjectFiles = (projectName) => {
  const files = readProjectFilesMap()[projectName];

  return Array.isArray(files) ? files.filter((file) => file?.name) : [];
};

const writeProjectFiles = (projectName, files) => {
  const filesMap = readProjectFilesMap();

  filesMap[projectName] = files.map((file) => ({
    displaySize: file.displaySize || formatFileSize(file.size),
    name: file.name,
    size: file.size || 0,
  }));
  window.localStorage.setItem(projectFilesStorageKey, JSON.stringify(filesMap));
};

const renameProjectFiles = (projectName, nextProjectName) => {
  const filesMap = readProjectFilesMap();

  if (filesMap[projectName]) {
    filesMap[nextProjectName] = filesMap[projectName];
    delete filesMap[projectName];
    window.localStorage.setItem(projectFilesStorageKey, JSON.stringify(filesMap));
  }
};

const deleteProjectFiles = (projectName) => {
  const filesMap = readProjectFilesMap();

  if (filesMap[projectName]) {
    delete filesMap[projectName];
    window.localStorage.setItem(projectFilesStorageKey, JSON.stringify(filesMap));
  }
};

const createAnalysisScreen = (projectName) => `
  <section class="analysis-view" aria-label="Аналіз проєкту">
    <article class="analysis-card">
      <div class="analysis-content">
        <section class="analysis-status" aria-live="polite">
          <div class="analysis-ring" style="--analysis-progress: 0">
            <div class="analysis-ring-inner">
              <strong data-analysis-percent>0%</strong>
              <span>аналіз</span>
            </div>
          </div>
          <h1 data-analysis-message>Завантажуємо файли</h1>
          <span class="analysis-dots" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <div class="analysis-progress" aria-hidden="true">
            <span data-analysis-bar></span>
          </div>
        </section>
        <div class="analysis-divider" aria-hidden="true"></div>
        <section class="analysis-steps" aria-label="Етапи аналізу">
          <h2>Етапи аналізу</h2>
          <ol>
            ${analysisStages
              .map(
                (stage, index) => `
                  <li data-analysis-step="${index}">
                    <span class="analysis-step-icon" aria-hidden="true"></span>
                    <span>${stage.label}</span>
                  </li>
                `,
              )
              .join("")}
          </ol>
        </section>
      </div>
      <footer class="analysis-footer">
        <button type="button" data-cancel-analysis>Скасувати аналіз</button>
      </footer>
    </article>
    <span class="analysis-project-name" hidden>${projectName}</span>
  </section>
`;

const createCabinetFooter = () => `
  <footer class="cabinet-footer" aria-label="Футер кабінету">
    <p>© 2026 Hyply.ai · Перетворюємо feedback на рішення</p>
    <nav class="cabinet-footer-links" aria-label="Навігація футера">
      <a href="./index.html">Головна</a>
      <a href="#privacy">Конфіденційність</a>
      <a href="#terms">Умови</a>
      <a href="#contacts">Контакти</a>
    </nav>
  </footer>
`;

const appendCabinetFooter = () => {
  const cabinetApp = document.querySelector(".cabinet-app");

  if (!cabinetApp || document.querySelector(".cabinet-footer")) {
    return;
  }

  cabinetApp.insertAdjacentHTML("afterend", createCabinetFooter());
};

const createThankYouScreen = () => `
  <section class="analysis-success-view" aria-label="Аналіз завершено">
    <article class="analysis-success-card">
      <img class="analysis-success-illustration" src="${figmaAssets.successIllustration}" alt="" />
      <h1>Аналіз завершено!</h1>
      <p>Результати готові. Переходимо до дашборду...</p>
      <span class="analysis-dots success-dots" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </article>
  </section>
`;

const createAnalyzeIcon = () => `
  <span aria-hidden="true">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.5C12.2761 6.5 12.5 6.72386 12.5 7V17.667C12.4998 17.943 12.276 18.167 12 18.167C11.724 18.167 11.5002 17.943 11.5 17.667V7C11.5 6.72386 11.7239 6.5 12 6.5Z" fill="white" />
      <path d="M16 10.167C16.2761 10.167 16.5 10.3908 16.5 10.667V17.334C16.4996 17.6098 16.2759 17.834 16 17.834C15.7241 17.834 15.5004 17.6098 15.5 17.334V10.667C15.5 10.3908 15.7239 10.167 16 10.167Z" fill="white" />
      <path d="M8 12.833C8.27614 12.833 8.5 13.0569 8.5 13.333V17.333C8.5 17.6092 8.27614 17.833 8 17.833C7.72386 17.833 7.5 17.6092 7.5 17.333V13.333C7.5 13.0569 7.72386 12.833 8 12.833Z" fill="white" />
    </svg>
  </span>
`;

const createUploadedFilesMarkup = (files, isRemovable = true) =>
  files
    .map(
      (file, index) => `
        <div class="uploaded-file" data-file-index="${index}">
          <span class="doc-badge">${getFileExtension(file.name)}</span>
          <strong>${escapeHTML(file.name)}</strong>
          <small>${file.displaySize || formatFileSize(file.size)}</small>
          ${
            isRemovable
              ? `<button type="button" aria-label="Видалити ${escapeHTML(file.name)}">
                  ${createRemoveIcon().outerHTML}
                </button>`
              : ""
          }
        </div>
      `,
    )
    .join("");

const createEditProjectModal = (projectName) => `
  <div class="project-modal-overlay output-project-overlay" data-output-project-modal>
    <section class="create-project-modal edit-project-modal" role="dialog" aria-modal="true" aria-labelledby="edit-project-title">
      <button class="modal-icon-button modal-close" type="button" data-close-output-modal aria-label="Закрити">
        <img src="${figmaAssets.personaChatCloseIcon}" alt="" />
      </button>
      <img class="edit-project-illustration" src="${figmaAssets.editProjectIllustration}" alt="" />
      <h2 id="edit-project-title">Редагувати назву</h2>
      <form class="create-project-form" data-edit-project-form>
        <label for="edit-project-name">Назва проєкту</label>
        <input id="edit-project-name" type="text" value="${escapeHTML(projectName)}" />
        <div class="create-project-actions">
          <button class="modal-secondary-button" type="button" data-close-output-modal>Скасувати</button>
          <button class="modal-primary-button" type="submit">Зберегти</button>
        </div>
      </form>
    </section>
  </div>
`;

const createUploadProjectModal = (projectName) => {
  const projectFiles = readProjectFiles(projectName);

  return `
  <div class="project-modal-overlay output-project-overlay" data-output-project-modal>
    <section class="project-upload-modal" role="dialog" aria-modal="true" aria-labelledby="output-upload-title">
      <header class="project-upload-header">
        <div>
          <h2 id="output-upload-title">Завантажити дані</h2>
          <p>Завантажте файли з відгуками клієнтів для аналізу</p>
        </div>
        <button class="modal-icon-button" type="button" data-close-output-modal aria-label="Закрити">
          <img src="${figmaAssets.personaChatCloseIcon}" alt="" />
        </button>
      </header>
      <div class="project-upload-body">
        <div class="upload-files-column">
          <label class="drop-zone modal-drop-zone" for="output-feedback-files">
            <input id="output-feedback-files" type="file" accept=".csv,.txt,.docx,text/csv,text/plain,application/vnd.openxmlformats-officedocument.wordprocessingml.document" multiple />
            <span class="drop-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M12 4v11" />
                <path d="M8 8l4-4 4 4" />
                <path d="M5 15v4h14v-4" />
              </svg>
            </span>
            <span class="drop-title">
              <strong>Перетягніть файли сюди або</strong>
              <span>Завантажити файли</span>
            </span>
            <small>CSV, TXT, DOCX - до 50 МБ кожен</small>
          </label>
          <div class="uploaded-files modal-uploaded-files" aria-label="Завантажені файли" ${projectFiles.length ? "" : "hidden"}>
            ${createUploadedFilesMarkup(projectFiles)}
          </div>
        </div>
        <footer class="upload-info modal-upload-info">
          <section class="recommended-sources" aria-labelledby="output-sources-title">
            <h2 id="output-sources-title">Рекомендовані джерела</h2>
            <div>
              <ul>
                <li>User interviews</li>
                <li>Support tickets</li>
                <li>App Store reviews</li>
              </ul>
              <ul>
                <li>NPS comments</li>
                <li>Sales call notes</li>
              </ul>
            </div>
          </section>
          <section class="supported-formats" aria-labelledby="output-formats-title">
            <h2 id="output-formats-title">Підтримувані формати</h2>
            <div>
              <span>CSV</span>
              <span>TXT</span>
              <span>DOCX</span>
            </div>
          </section>
        </footer>
        <div class="project-form modal-project-form output-upload-actions-only">
          <button type="button" disabled>
            ${createAnalyzeIcon()}
            Проаналізувати
          </button>
        </div>
      </div>
    </section>
  </div>
`;
};

const createDeleteProjectModal = () => `
  <div class="project-modal-overlay output-project-overlay" data-output-project-modal>
    <section class="delete-project-modal" role="dialog" aria-modal="true" aria-labelledby="delete-project-title">
      <button class="modal-icon-button modal-close" type="button" data-close-output-modal aria-label="Закрити">
        <img src="${figmaAssets.personaChatCloseIcon}" alt="" />
      </button>
      <img class="delete-project-illustration" src="${figmaAssets.deleteProjectIllustration}" alt="" />
      <h2 id="delete-project-title">Видалити проєкт?</h2>
      <p>Цю дію не можна скасувати. Усі дані проєкту буде втрачено</p>
      <div class="delete-project-actions">
        <button class="modal-secondary-button" type="button" data-close-output-modal>Скасувати</button>
        <button class="modal-primary-button" type="button" data-confirm-delete-project>Видалити проєкт</button>
      </div>
    </section>
  </div>
`;

const createIconButton = (asset, label, action) => `
  <button class="output-icon-button" type="button" aria-label="${label}" data-project-action="${action}">
    <img src="${asset}" alt="" />
  </button>
`;

const createOutputTabs = (activeTab = "Personas") => `
  <nav class="output-tabs" aria-label="Структура результатів аналізу">
    ${outputTabs
      .map(
        ([label, getCount]) => `
          <button class="${label === activeTab ? "is-active" : ""}" type="button" data-output-tab="${label}">
            <span class="output-tab-pill">
              <span class="output-tab-label">${label}</span>
              <small>${getCount()}</small>
            </span>
          </button>
        `,
      )
      .join("")}
  </nav>
`;

const createPainCard = (pain) => `
  <article class="pain-card pain-${pain.status}">
    <span class="pain-emoji" aria-hidden="true">
      <img src="${pain.emoji}" alt="" />
    </span>
    <div>
      <strong>${pain.title}</strong>
      <small>${pain.mentions}</small>
    </div>
  </article>
`;

const createBackIcon = () => `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.00169 11.621C3.90066 11.8655 3.90066 12.1401 4.00169 12.3846C4.05046 12.5059 4.12253 12.6164 4.21382 12.7099L11.2849 19.781C11.4724 19.9685 11.7268 20.0739 11.992 20.0739C12.2572 20.0739 12.5116 19.9685 12.6991 19.781C12.8866 19.5934 12.992 19.3391 12.992 19.0739C12.992 18.8087 12.8866 18.5543 12.6991 18.3668L7.33216 12.9998L19.0631 13.0069C19.1951 13.0074 19.3259 12.9818 19.4479 12.9316C19.57 12.8813 19.6809 12.8074 19.7743 12.714C19.8676 12.6207 19.9416 12.5098 19.9918 12.3877C20.0421 12.2656 20.0677 12.1348 20.0672 12.0028C20.0677 11.8708 20.0421 11.74 19.9918 11.6179C19.9416 11.4959 19.8676 11.3849 19.7743 11.2916C19.6809 11.1983 19.57 11.1243 19.448 11.074C19.3259 11.0238 19.1951 10.9982 19.0631 10.9987L7.33216 11.0058L12.6991 5.63885C12.8866 5.45131 12.992 5.19695 12.992 4.93174C12.992 4.66652 12.8866 4.41217 12.6991 4.22463C12.5116 4.0371 12.2572 3.93174 11.992 3.93174C11.7268 3.93174 11.4724 4.0371 11.2849 4.22463L4.21382 11.2957C4.12253 11.3892 4.05046 11.4997 4.00169 11.621Z" fill="#190B5A"/>
  </svg>
`;

const createPersonaToggleIcon = (isExpanded) =>
  isExpanded
    ? `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9997 13.4098L12.7097 9.16982C12.6167 9.07609 12.5061 9.0017 12.3843 8.95093C12.2624 8.90016 12.1317 8.87402 11.9997 8.87402C11.8677 8.87402 11.737 8.90016 11.6151 8.95093C11.4933 9.0017 11.3827 9.07609 11.2897 9.16982L7.0497 13.4098C6.95598 13.5028 6.88158 13.6134 6.83081 13.7352C6.78004 13.8571 6.75391 13.9878 6.75391 14.1198C6.75391 14.2518 6.78004 14.3825 6.83081 14.5044C6.88158 14.6263 6.95598 14.7369 7.0497 14.8298C7.23707 15.0161 7.49052 15.1206 7.7547 15.1206C8.01889 15.1206 8.27234 15.0161 8.4597 14.8298L11.9997 11.2898L15.5397 14.8298C15.726 15.0146 15.9774 15.1187 16.2397 15.1198C16.3713 15.1206 16.5018 15.0954 16.6236 15.0456C16.7454 14.9958 16.8563 14.9225 16.9497 14.8298C17.0468 14.7402 17.1251 14.6322 17.1802 14.5122C17.2353 14.3921 17.2661 14.2623 17.2708 14.1302C17.2754 13.9982 17.2539 13.8666 17.2073 13.7429C17.1608 13.6193 17.0902 13.506 16.9997 13.4098Z" fill="#6342F8"/>
      </svg>
    `
    : `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9997 9.1697C16.8123 8.98345 16.5589 8.87891 16.2947 8.87891C16.0305 8.87891 15.7771 8.98345 15.5897 9.1697L11.9997 12.7097L8.4597 9.1697C8.27234 8.98345 8.01889 8.87891 7.7547 8.87891C7.49052 8.87891 7.23707 8.98345 7.0497 9.1697C6.95598 9.26266 6.88158 9.37326 6.83081 9.49512C6.78004 9.61698 6.75391 9.74769 6.75391 9.8797C6.75391 10.0117 6.78004 10.1424 6.83081 10.2643C6.88158 10.3861 6.95598 10.4967 7.0497 10.5897L11.2897 14.8297C11.3827 14.9234 11.4933 14.9978 11.6151 15.0486C11.737 15.0994 11.8677 15.1255 11.9997 15.1255C12.1317 15.1255 12.2624 15.0994 12.3843 15.0486C12.5061 14.9978 12.6167 14.9234 12.7097 14.8297L16.9997 10.5897C17.0934 10.4967 17.1678 10.3861 17.2186 10.2643C17.2694 10.1424 17.2955 10.0117 17.2955 9.8797C17.2955 9.74769 17.2694 9.61698 17.2186 9.49512C17.1678 9.37326 17.0934 9.26266 16.9997 9.1697Z" fill="#6342F8"/>
      </svg>
    `;

const createAiFindsIcon = () => `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1172 2.00488C12.3915 2.02734 12.6545 2.12763 12.875 2.29492C13.0955 2.46216 13.2628 2.68833 13.3584 2.94629L13.3955 3.05957L13.4004 3.0791L14.8232 8.60059C14.859 8.73883 14.9313 8.86483 15.0322 8.96582C15.1333 9.0669 15.26 9.1391 15.3984 9.1748H15.3975L20.9189 10.5977C20.9244 10.5991 20.9301 10.601 20.9355 10.6025C21.2413 10.6869 21.5109 10.8689 21.7031 11.1211C21.8954 11.3736 22 11.6826 22 12C22 12.3174 21.8954 12.6264 21.7031 12.8789C21.5109 13.1311 21.2413 13.3131 20.9355 13.3975C20.9301 13.399 20.9244 13.4009 20.9189 13.4023L15.3975 14.8242L15.3984 14.8252C15.26 14.8609 15.1333 14.9331 15.0322 15.0342C14.9313 15.1352 14.859 15.2612 14.8232 15.3994L13.3994 20.9209C13.3977 20.9274 13.3963 20.934 13.3945 20.9404C13.3092 21.2452 13.1261 21.5138 12.874 21.7051C12.622 21.8963 12.3144 22 11.998 22C11.6817 22 11.3741 21.8962 11.1221 21.7051C10.87 21.5138 10.6868 21.2452 10.6016 20.9404C10.5998 20.934 10.5984 20.9274 10.5967 20.9209L9.17383 15.3994C9.13814 15.2612 9.06572 15.1352 8.96484 15.0342C8.86377 14.9331 8.73704 14.8609 8.59863 14.8252L3.07715 13.4014C3.06941 13.3994 3.0614 13.3967 3.05371 13.3945C2.75035 13.3083 2.48311 13.1256 2.29297 12.874C2.12667 12.6539 2.02723 12.3915 2.00488 12.1182L2 12L2.00488 11.8818C2.02723 11.6085 2.12667 11.3461 2.29297 11.126L2.36816 11.0352C2.55081 10.8304 2.78821 10.6809 3.05371 10.6055L3.07715 10.5986L8.59863 9.17383C8.73696 9.13816 8.86378 9.06678 8.96484 8.96582C9.06592 8.86481 9.13806 8.73796 9.17383 8.59961L10.5977 3.0791L10.6025 3.05957C10.6878 2.75499 10.8701 2.48615 11.1221 2.29492C11.3742 2.10368 11.6826 2 11.999 2L12.1172 2.00488ZM5 15C5.55228 15 6 15.4477 6 16C6.55228 16 7 16.4477 7 17C7 17.5523 6.55228 18 6 18C6 18.5523 5.55228 19 5 19C4.44772 19 4 18.5523 4 18C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16C4 15.4477 4.44772 15 5 15ZM11.1104 9.09961V9.10059C10.9851 9.5848 10.7317 10.0264 10.3779 10.3799C10.0243 10.7332 9.58269 10.9854 9.09863 11.1104L5.65137 11.999L9.09863 12.8887C9.58296 13.0137 10.0252 13.2664 10.3789 13.6201C10.7325 13.9739 10.9854 14.416 11.1104 14.9004L11.998 18.3457L12.8867 14.9004L12.9395 14.7207C13.0763 14.3067 13.3086 13.9297 13.6182 13.6201C13.9719 13.2663 14.414 13.0137 14.8984 12.8887L18.3467 12L14.8984 11.1113C14.414 10.9863 13.9719 10.7337 13.6182 10.3799C13.3086 10.0703 13.0763 9.69334 12.9395 9.2793L12.8867 9.09961L11.998 5.65332L11.1104 9.09961ZM19 3C19.5523 3 20 3.44772 20 4V5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H20V8C20 8.55228 19.5523 9 19 9C18.4477 9 18 8.55228 18 8V7H17C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5H18V4C18 3.44772 18.4477 3 19 3Z" fill="white"/>
  </svg>
`;

const createRadarChart = () => `
  <div class="persona-radar" aria-label="Persona Radar">
    <svg viewBox="0 0 130 130" role="img">
      <polygon class="radar-grid" points="65,14 109,39 109,91 65,116 21,91 21,39" />
      <polygon class="radar-grid" points="65,30 95,47 95,83 65,100 35,83 35,47" />
      <polygon class="radar-grid" points="65,45 82,55 82,75 65,85 48,75 48,55" />
      <line x1="65" y1="14" x2="65" y2="116" />
      <line x1="21" y1="39" x2="109" y2="91" />
      <line x1="109" y1="39" x2="21" y2="91" />
      <polygon class="radar-shape" points="65,28 94,49 88,88 65,96 39,81 39,47" />
      <text x="65" y="10">Decision</text>
      <text x="97" y="38">Research</text>
      <text x="96" y="97">AI adoption</text>
      <text x="65" y="126">Analytical</text>
      <text x="22" y="97">Collab</text>
      <text x="18" y="38">Influence</text>
    </svg>
  </div>
`;

const createPersonaCard = (persona, index, activePersonaIndex) => {
  const isExpanded = index === activePersonaIndex;

  return `
  <article class="persona-card ${isExpanded ? "is-expanded" : ""}">
    <div class="persona-card-body">
      <header class="persona-head">
        <span class="persona-avatar">
          <img src="${persona.avatar}" alt="" />
        </span>
        <div>
          <h3>${persona.name}</h3>
          <strong>${persona.profession}</strong>
          <small>${persona.field}</small>
        </div>
      </header>
      ${createRadarChart()}
      <p class="persona-summary">${persona.summary}</p>
      <div class="persona-labels">
        <span>${persona.evidence}</span>
        <span>${persona.insights}</span>
      </div>
    </div>
    <footer class="persona-actions">
      <button type="button" data-persona-chat="${index}">
        <img src="${figmaAssets.chatIcon}" alt="" />
        Поспілкуватись
      </button>
      <button class="persona-toggle" type="button" aria-label="${isExpanded ? "Згорнути" : "Розгорнути"}" aria-expanded="${isExpanded}" data-persona-toggle="${index}">
        ${createPersonaToggleIcon(isExpanded)}
      </button>
    </footer>
    ${
      isExpanded
        ? `
          <div class="persona-details">
            <section>
              <h4>Головна ціль</h4>
              <p>Знаходити ключові інсайти з customer feedback без витрат часу на ручний аналіз</p>
            </section>
            <section>
              <h4>Ключові болі</h4>
              <ul>
                <li>Мало часу для аналізу великих обсягів feedback</li>
                <li>Важко переконати команду без конкретних даних</li>
                <li>Feedback розкиданий по різних каналах</li>
              </ul>
            </section>
            <section>
              <h4>Мотивації</h4>
              <div class="persona-tags">
                <span>Ефективність роботи</span>
                <span>Визнаний team lead</span>
                <span>Чіткі продуктові пріоритети</span>
              </div>
            </section>
            <section>
              <h4>Типові цитати</h4>
              <blockquote><span aria-hidden="true">${quoteIconSvg}</span>Я витрачаю мінімум 3 години на тиждень на аналіз відгуків вручну.</blockquote>
              <blockquote><span aria-hidden="true">${quoteIconSvg}</span>Мені потрібна система, яка показує патерни, а не просто список коментарів.</blockquote>
            </section>
          </div>
        `
        : ""
    }
  </article>
`;
};

const createPersonaChatModal = (persona) => `
  <div class="persona-chat-overlay" role="presentation" data-persona-chat-overlay>
    <section class="persona-chat-modal" role="dialog" aria-modal="true" aria-labelledby="persona-chat-title">
      <header class="persona-chat-header">
        <span class="persona-chat-avatar">
          <img src="${persona.avatar}" alt="" />
        </span>
        <div>
          <h2 id="persona-chat-title">${persona.name}</h2>
          <p>${persona.profession}</p>
        </div>
        <button class="persona-chat-close" type="button" aria-label="Закрити чат" data-close-persona-chat>
          <img src="${figmaAssets.personaChatCloseIcon}" alt="" />
        </button>
      </header>
      <div class="persona-chat-note">
        <img src="${figmaAssets.personaChatInfoIcon}" alt="" />
        <p><strong>Важливо:</strong> Це AI-персона, сформована з реальних даних користувачів</p>
      </div>
      <div class="persona-chat-messages" data-persona-chat-messages>
        <div class="persona-chat-empty" data-persona-chat-empty>
          <img src="${figmaAssets.personaChatPromptIcon}" alt="" />
          <p>Поставте питання ${persona.name.split(" ")[0]} про її потреби, болі або очікування</p>
        </div>
      </div>
      <form class="persona-chat-form" data-persona-chat-form>
        <input type="text" name="personaMessage" placeholder="Запитай ${persona.name.split(" ")[0]}..." autocomplete="off" />
        <button type="submit" aria-label="Надіслати повідомлення" disabled>
          <img src="${figmaAssets.personaChatSendDisabledIcon}" alt="" data-send-icon />
        </button>
      </form>
    </section>
  </div>
`;

const createPersonaChatAnswer = (persona) => `
  <div class="persona-chat-row persona-chat-row-ai">
    <span class="persona-chat-message-avatar">
      <img src="${persona.avatar}" alt="" />
    </span>
    <div class="persona-chat-response">
      <div class="persona-chat-bubble persona-chat-bubble-ai">
        <p>${persona.chatAnswer}</p>
      </div>
      <div class="persona-chat-evidence">
        <h3>Побудовано на основі:</h3>
        <div class="persona-chat-source-tags">
          <span>User Interviews</span>
          <span>Support Tickets</span>
          <span>App Store Reviews</span>
        </div>
        <h3>Підтверджуючі цитати:</h3>
        ${persona.chatQuotes.map((quote) => `<blockquote>"${quote}"</blockquote>`).join("")}
      </div>
    </div>
  </div>
`;

const setupPersonaChatModal = (overlay, persona) => {
  const input = overlay.querySelector(".persona-chat-form input");
  const form = overlay.querySelector("[data-persona-chat-form]");
  const sendButton = form.querySelector("button");
  const sendIcon = form.querySelector("[data-send-icon]");
  const messages = overlay.querySelector("[data-persona-chat-messages]");
  const emptyState = overlay.querySelector("[data-persona-chat-empty]");
  let answerTimer = null;

  const closeChat = () => {
    window.clearTimeout(answerTimer);
    document.body.classList.remove("has-open-modal");
    overlay.remove();
    document.removeEventListener("keydown", handleEscape);
  };

  function handleEscape(event) {
    if (event.key === "Escape") {
      closeChat();
    }
  }

  const updateSendState = () => {
    const hasValue = input.value.trim().length > 0;

    sendButton.disabled = !hasValue;
    sendIcon.src = hasValue ? figmaAssets.personaChatSendActiveIcon : figmaAssets.personaChatSendDisabledIcon;
  };

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = input.value.trim();

    if (!message) {
      return;
    }

    emptyState?.remove();
    messages.insertAdjacentHTML(
      "beforeend",
      `<div class="persona-chat-row persona-chat-row-user">
        <div class="persona-chat-bubble persona-chat-bubble-user">${escapeHTML(message)}</div>
      </div>`,
    );
    messages.insertAdjacentHTML(
      "beforeend",
      `<div class="persona-chat-row persona-chat-row-ai persona-chat-typing" data-persona-typing>
        <span class="persona-chat-message-avatar">
          <img src="${persona.avatar}" alt="" />
        </span>
        <div class="persona-chat-typing-bubble" aria-label="${persona.name} набирає відповідь">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>`,
    );

    input.value = "";
    updateSendState();
    scrollToBottom();

    answerTimer = window.setTimeout(() => {
      overlay.querySelector("[data-persona-typing]")?.remove();
      messages.insertAdjacentHTML("beforeend", createPersonaChatAnswer(persona));
      scrollToBottom();
    }, 1150);
  });

  input.addEventListener("input", updateSendState);
  overlay.querySelector("[data-close-persona-chat]").addEventListener("click", closeChat);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeChat();
    }
  });
  document.addEventListener("keydown", handleEscape);
  document.body.classList.add("has-open-modal");
  input.focus();
  updateSendState();
};

const openPersonaChat = (persona) => {
  document.querySelector("[data-persona-chat-overlay]")?.remove();
  document.body.insertAdjacentHTML("beforeend", createPersonaChatModal(persona));
  setupPersonaChatModal(document.querySelector("[data-persona-chat-overlay]"), persona);
};

const createVocSeverityBadge = (problem) => `
  <span class="voc-severity voc-severity-${problem.severity}">${problem.severityLabel}</span>
`;

const createVocSourceTags = (sources) => `
  <span class="voc-sources">
    ${sources.map((source) => `<span>${source}</span>`).join("")}
  </span>
`;

const createVoiceOfCustomerCard = (problem, index, activeVocIndex) => {
  const isExpanded = index === activeVocIndex;

  return `
    <article class="voc-card ${isExpanded ? "is-expanded" : ""}">
      <div class="voc-card-head">
        <span class="voc-count">${problem.count}</span>
        <span class="voc-card-copy">
          <strong>${problem.title}</strong>
          <span class="voc-meta">
            ${createVocSeverityBadge(problem)}
            <span>${problem.mentions}</span>
            ${createVocSourceTags(problem.sources)}
          </span>
        </span>
        <button class="voc-toggle" type="button" data-voc-toggle="${index}" aria-label="${isExpanded ? "Згорнути проблему" : "Розкрити проблему"}" aria-expanded="${isExpanded}">
          <img src="${isExpanded ? figmaAssets.vocChevronUp : figmaAssets.vocChevronDown}" alt="" />
        </button>
      </div>
      ${
        isExpanded
          ? `
            <div class="voc-details">
              <div class="voc-detail-column">
                <section>
                  <h3>СЕГМЕНТИ</h3>
                  <div class="voc-tags">
                    ${problem.segments.map((segment) => `<span>${segment}</span>`).join("")}
                  </div>
                </section>
                <section>
                  <h3>ПОВ'ЯЗАНІ ПЕРСОНИ</h3>
                  <div class="voc-personas">
                    ${problem.personas
                      .map(
                        ([initials, name]) => `
                          <span>
                            <b>${initials}</b>
                            ${name}
                          </span>
                        `,
                      )
                      .join("")}
                  </div>
                </section>
              </div>
              <section class="voc-quotes">
                <h3>ЦИТАТИ</h3>
                ${problem.quotes.map((quote) => `<blockquote><span aria-hidden="true">${quoteIconSvg}</span>${quote}</blockquote>`).join("")}
              </section>
            </div>
          `
          : ""
      }
    </article>
  `;
};

const createVoiceOfCustomerScreen = (activeVocIndex = null) => `
  <div class="output-scroll">
    <section class="voc-summary" aria-labelledby="voc-summary-title">
      <h2 id="voc-summary-title">
        <span class="voc-summary-title-icon" aria-hidden="true"></span>
        AI Підсумок
      </h2>
      <div class="voc-summary-grid">
        ${vocSummaryCards
          .map(
            (card) => `
              <article class="voc-summary-card">
                <span aria-hidden="true">${card.emoji}</span>
                <p>${card.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="voc-list" aria-label="Проблеми користувачів">
      ${vocProblems.map((problem, index) => createVoiceOfCustomerCard(problem, index, activeVocIndex)).join("")}
    </section>
  </div>
`;

const createMethodInfo = (label, text) => `
  <span class="method-info">
    <button class="method-info-button" type="button" aria-label="${label}">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 14.333A6.333 6.333 0 1 0 8 1.667a6.333 6.333 0 0 0 0 12.666Z" stroke="#A19EB2" stroke-width="1.333"/>
        <path d="M8 7.333v3.334" stroke="#A19EB2" stroke-width="1.333" stroke-linecap="round"/>
        <path d="M8 5.333h.007" stroke="#A19EB2" stroke-width="1.667" stroke-linecap="round"/>
      </svg>
    </button>
    <span class="method-info-popover" role="tooltip">${text}</span>
  </span>
`;

const createIceMatrix = () => `
  <section class="opportunity-chart opportunity-ice" aria-labelledby="ice-title">
    <div class="opportunity-chart-head">
      <div class="opportunity-chart-title">
        <h2 id="ice-title">ICE Matrix</h2>
        ${createMethodInfo(
          "Що таке ICE Matrix",
          "ICE допомагає вибрати, за що братися спочатку. Кожна точка - це ідея. Чим вище точка, тим більший вплив. Чим правіше, тим легше зробити.",
        )}
      </div>
      <span>Impact / Ease</span>
    </div>
    <div class="ice-matrix" aria-label="ICE Matrix">
      <span class="ice-tick ice-tick-y ice-tick-0">0</span>
      <span class="ice-tick ice-tick-y ice-tick-3">3</span>
      <span class="ice-tick ice-tick-y ice-tick-6">6</span>
      <span class="ice-tick ice-tick-y ice-tick-10">10</span>
      <span class="ice-tick ice-tick-x ice-tick-0">0</span>
      <span class="ice-tick ice-tick-x ice-tick-3">3</span>
      <span class="ice-tick ice-tick-x ice-tick-6">6</span>
      <span class="ice-tick ice-tick-x ice-tick-10">10</span>
      <span class="ice-axis ice-axis-y">Impact</span>
      <span class="ice-axis ice-axis-x">Ease →</span>
      ${opportunityCards
        .map((card, index) => {
          const ease = 11 - card.effort;
          const left = Math.max(8, Math.min(92, ease * 10));
          const bottom = Math.max(12, Math.min(88, card.impact * 10));

          return `
            <button class="ice-point ice-point-${index + 1} ${index === 0 ? "is-active" : ""}" type="button" data-opportunity-select="${index}" style="left:${left}%; bottom:${bottom}%;" title="${card.title}" aria-label="${card.title}">
              <span>${index + 1}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  </section>
`;

const createRiceVisual = () => {
  return `
    <section class="opportunity-chart opportunity-rice" aria-labelledby="rice-title">
      <div class="opportunity-chart-head">
        <div class="opportunity-chart-title">
          <h2 id="rice-title">RICE Scores</h2>
          ${createMethodInfo(
            "Що таке RICE Scores",
            "RICE рахує силу ідеї за чотирма речами: скількох людей зачепить, наскільки це важливо, наскільки ми впевнені, і скільки зусиль потрібно.",
          )}
        </div>
        <span>Reach / Impact / Confidence / Effort</span>
      </div>
      <div class="rice-list">
        ${opportunityCards
          .map((card, index) => {
            const score = Math.round((card.reach * card.impact * card.confidence) / card.effort);

            return `
              <button class="rice-row ${index === 0 ? "is-active" : ""}" type="button" data-opportunity-select="${index}" aria-label="${card.title}, RICE ${score}">
                <i class="rice-row-number" aria-hidden="true">${index + 1}</i>
                <span>${card.title}</span>
                <div>
                  <div class="rice-bar" aria-hidden="true">
                    <i class="rice-segment rice-reach" style="--segment:${card.reach};"></i>
                    <i class="rice-segment rice-impact" style="--segment:${card.impact};"></i>
                    <i class="rice-segment rice-confidence" style="--segment:${card.confidence};"></i>
                    <i class="rice-segment rice-effort" style="--segment:${card.effort};"></i>
                  </div>
                </div>
                <b>${score}</b>
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="rice-legend" aria-hidden="true">
        <span><i class="rice-reach"></i>Reach</span>
        <span><i class="rice-impact"></i>Impact</span>
        <span><i class="rice-confidence"></i>Confidence</span>
        <span><i class="rice-effort"></i>Effort (inv.)</span>
      </div>
    </section>
  `;
};

const createOpportunityCard = (card, index) => `
  <article class="opportunity-card ${index === 0 ? "is-active" : ""}" data-opportunity-card="${index}" role="button" tabindex="0" aria-label="Обрати можливість ${index + 1}: ${card.title}">
    <div class="opportunity-problem-row">
      <span class="opportunity-problem-icon" aria-hidden="true">
        <img src="${figmaAssets.opportunityProblemIcon}" alt="" />
      </span>
      <p>${card.problem}</p>
    </div>
    <div class="opportunity-divider-row" aria-hidden="true">
      <span></span>
      <b>
        <img src="${figmaAssets.opportunityDividerIcon}" alt="" />
      </b>
      <span></span>
    </div>
    <div class="opportunity-main-row">
      <span class="opportunity-main-number" aria-hidden="true">${index + 1}</span>
      <h3>${card.opportunity}</h3>
    </div>
    <footer class="opportunity-card-footer">
      <div>
        <span class="opportunity-severity opportunity-severity-${card.severity}">${card.severityLabel}</span>
        <small>${card.evidence}</small>
      </div>
      <div class="opportunity-personas">
        ${card.personas.map((persona) => `<em>${persona}</em>`).join("")}
      </div>
    </footer>
  </article>
`;

const createOpportunityControls = () => `
  <section class="opportunity-controls" aria-labelledby="opportunity-controls-title">
    <div>
      <h2 id="opportunity-controls-title">Налаштування score</h2>
      <p data-opportunity-active-title>${opportunityCards[0].title}</p>
    </div>
    <div class="opportunity-sliders">
      ${[
        ["reach", "Reach"],
        ["impact", "Impact"],
        ["confidence", "Confidence"],
        ["effort", "Effort"],
      ]
        .map(
          ([metric, label]) => `
            <label>
              <span>${label}<b data-opportunity-value="${metric}">${opportunityCards[0][metric]}</b></span>
              <input type="range" min="1" max="10" value="${opportunityCards[0][metric]}" data-opportunity-metric="${metric}" />
            </label>
          `,
        )
        .join("")}
    </div>
  </section>
`;

const createOpportunitiesScreen = () => `
  <div class="output-scroll">
    <section class="opportunity-layout" aria-label="Opportunity Dashboard">
      <section class="opportunity-score-panel" aria-label="Score dashboard">
        ${createOpportunityControls()}
        <div class="opportunity-charts">
          ${createIceMatrix()}
          ${createRiceVisual()}
        </div>
      </section>
      <section class="opportunity-list" aria-label="Product opportunities">
        ${opportunityCards.map((card, index) => createOpportunityCard(card, index)).join("")}
      </section>
    </section>
  </div>
`;

const createHypothesisMetricCard = (label, value) => `
  <article class="hypothesis-metric-card">
    <h4>${label}</h4>
    <p>${value}</p>
  </article>
`;

const createHypothesisCard = (hypothesis, index, activeHypothesisIndex) => {
  const isExpanded = index === activeHypothesisIndex;

  return `
    <article class="hypothesis-card ${isExpanded ? "is-expanded" : ""}">
      <div class="hypothesis-summary">
        <span class="hypothesis-id">${hypothesis.id}</span>
        <span class="hypothesis-copy">
          <strong><b>IF</b> ${hypothesis.ifText}</strong>
          <span class="hypothesis-meta">
            <span class="hypothesis-persona-chip">${hypothesis.personaInitials}</span>
            <span>${hypothesis.persona}</span>
            <i aria-hidden="true">•</i>
            <span>${hypothesis.evidence}</span>
            <span class="hypothesis-confidence hypothesis-confidence-${hypothesis.confidenceTone}">
              <em><i style="width:${hypothesis.confidence}%"></i></em>
              <b>${hypothesis.confidence}%</b>
            </span>
          </span>
        </span>
        <button class="voc-toggle hypothesis-toggle" type="button" data-hypothesis-toggle="${index}" aria-label="${isExpanded ? "Згорнути гіпотезу" : "Розкрити гіпотезу"}" aria-expanded="${isExpanded}">
          <img src="${isExpanded ? figmaAssets.vocChevronUp : figmaAssets.vocChevronDown}" alt="" />
        </button>
      </div>
      ${
        isExpanded
          ? `
            <div class="hypothesis-details">
              <div class="hypothesis-formula">
                <p><span class="hypothesis-formula-badge hypothesis-formula-if">IF</span>${hypothesis.ifText}</p>
                <p><span class="hypothesis-formula-badge hypothesis-formula-then">THEN</span>${hypothesis.thenText}</p>
                <p><span class="hypothesis-formula-badge hypothesis-formula-because">BECAUSE</span>${hypothesis.because}</p>
              </div>
              <div class="hypothesis-metrics">
                ${createHypothesisMetricCard("Success Metric", hypothesis.successMetric)}
                ${createHypothesisMetricCard("Leading Metric", hypothesis.leadingMetric)}
              </div>
              <section class="hypothesis-confidence-card">
                <div>
                  <h4>Confidence Score</h4>
                  <span>${hypothesis.evidence} points</span>
                </div>
                <em class="hypothesis-confidence-${hypothesis.confidenceTone}"><i style="width:${hypothesis.confidence}%"></i></em>
                <b class="hypothesis-confidence-value hypothesis-confidence-${hypothesis.confidenceTone}">${hypothesis.confidence}%</b>
              </section>
              <section class="hypothesis-evidence">
                <h4>Supporting Evidence</h4>
                <div class="hypothesis-source-tags">
                  ${hypothesis.sources.map((source) => `<span>${source}</span>`).join("")}
                </div>
                ${hypothesis.quotes
                  .map(
                    (quote) => `
                      <blockquote>
                        <span aria-hidden="true">${quoteIconSvg}</span>
                        ${quote}
                      </blockquote>
                    `,
                  )
                  .join("")}
              </section>
            </div>
          `
          : ""
      }
    </article>
  `;
};

const createHypothesesScreen = (activeHypothesisIndex = 0) => `
  <div class="output-scroll">
    <section class="hypotheses-list" aria-label="Hypothesis Pack">
      ${hypothesisCards.map((hypothesis, index) => createHypothesisCard(hypothesis, index, activeHypothesisIndex)).join("")}
    </section>
  </div>
`;

const createEvidenceLibraryCard = (item) => `
  <article class="evidence-card">
    <div class="evidence-quote">
      <span class="evidence-quote-icon" aria-hidden="true">
        ${quoteIconSvg}
      </span>
      <p>${item.quote}</p>
    </div>
    <footer class="evidence-meta-row">
      <div class="evidence-meta-main">
        <span class="evidence-source-tag">${item.source}</span>
        <span class="evidence-persona">
          <b>${item.personaInitials}</b>
          ${item.persona}
        </span>
        <span class="evidence-dot" aria-hidden="true">•</span>
        <span class="evidence-mentions">${item.mentions}</span>
      </div>
      <div class="evidence-links">
        <span class="evidence-hypothesis">${item.hypothesis}</span>
        ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </footer>
  </article>
`;

const createEvidenceLibraryScreen = () => `
  <div class="output-scroll">
    <section class="evidence-library-list" aria-label="Evidence Library">
      ${evidenceLibraryItems.map(createEvidenceLibraryCard).join("")}
    </section>
  </div>
`;

const createPersonasScreen = (activePersonaIndex = null) => `
  <div class="output-scroll">
    <section class="pain-section" aria-labelledby="pain-title">
      <div class="pain-section-head">
        <h2 id="pain-title">Основні болі персон</h2>
        <span>5 проблем</span>
      </div>
      <div class="pain-grid">
        ${personaPains.map(createPainCard).join("")}
      </div>
    </section>
    <section class="personas-grid" aria-label="Сформовані персони">
      ${personas.map((persona, index) => createPersonaCard(persona, index, activePersonaIndex)).join("")}
    </section>
  </div>
`;

const createOutputContent = (activeTab, activePersonaIndex, activeVocIndex, activeHypothesisIndex) => {
  if (activeTab === "Voice of Customer") {
    return createVoiceOfCustomerScreen(activeVocIndex);
  }

  if (activeTab === "Opportunities") {
    return createOpportunitiesScreen();
  }

  if (activeTab === "Hypotheses") {
    return createHypothesesScreen(activeHypothesisIndex);
  }

  if (activeTab === "Evidence Library") {
    return createEvidenceLibraryScreen();
  }

  return createPersonasScreen(activePersonaIndex);
};

const createOutputScreen = (
  projectName,
  activeTab = "Personas",
  activePersonaIndex = null,
  activeVocIndex = null,
  activeHypothesisIndex = 0,
) => `
  <section class="output-view" aria-label="Результати аналізу">
    <div class="output-sticky-shell">
      <header class="output-header">
        <div class="output-title-row">
          <a class="output-back" href="./cabinet-have-projects.html" aria-label="Назад">
            ${createBackIcon()}
          </a>
          <h1>${projectName}</h1>
          <div class="output-actions">
            ${createIconButton(figmaAssets.actionEdit, "Редагувати назву проєкту", "edit")}
            ${createIconButton(figmaAssets.actionUpload, "Дозавантажити дані", "upload")}
            ${createIconButton(figmaAssets.actionDelete, "Видалити проєкт", "delete")}
          </div>
        </div>
        <button class="ai-finds-button" type="button">
          ${createAiFindsIcon()}
          Топ AI-знахідок
        </button>
      </header>
      ${createOutputTabs(activeTab)}
    </div>
    ${createOutputContent(activeTab, activePersonaIndex, activeVocIndex, activeHypothesisIndex)}
  </section>
`;

const setupOpportunityInteractions = (root) => {
  const opportunityRoot = root.querySelector(".opportunity-layout");

  if (!opportunityRoot) {
    return;
  }

  const state = opportunityCards.map((card) => ({ ...card }));
  const selectors = Array.from(opportunityRoot.querySelectorAll("[data-opportunity-select]"));
  const cards = Array.from(opportunityRoot.querySelectorAll("[data-opportunity-card]"));
  const sliders = Array.from(opportunityRoot.querySelectorAll("[data-opportunity-metric]"));
  const activeTitle = opportunityRoot.querySelector("[data-opportunity-active-title]");
  let activeIndex = 0;

  const getRiceScore = (card) => Math.round((card.reach * card.impact * card.confidence) / card.effort);

  const updateCharts = () => {
    const maxScore = Math.max(...state.map(getRiceScore));

    state.forEach((card, index) => {
      const ease = 11 - card.effort;
      const icePoint = opportunityRoot.querySelector(`.ice-point[data-opportunity-select="${index}"]`);
      const riceRow = opportunityRoot.querySelector(`.rice-row[data-opportunity-select="${index}"]`);

      if (icePoint) {
        icePoint.style.left = `${Math.max(8, Math.min(92, ease * 10))}%`;
        icePoint.style.bottom = `${Math.max(12, Math.min(88, card.impact * 10))}%`;
      }

      if (riceRow) {
        riceRow.querySelector("b").textContent = getRiceScore(card);
        riceRow.querySelector(".rice-reach").style.setProperty("--segment", card.reach);
        riceRow.querySelector(".rice-impact").style.setProperty("--segment", card.impact);
        riceRow.querySelector(".rice-confidence").style.setProperty("--segment", card.confidence);
        riceRow.querySelector(".rice-effort").style.setProperty("--segment", card.effort);
        riceRow.style.setProperty("--rice-ratio", getRiceScore(card) / maxScore);
      }
    });
  };

  const setActiveOpportunity = (index) => {
    activeIndex = index;
    const activeCard = state[activeIndex];

    selectors.forEach((element) => {
      element.classList.toggle("is-active", Number(element.dataset.opportunitySelect) === activeIndex);
    });

    cards.forEach((card) => {
      card.classList.toggle("is-active", Number(card.dataset.opportunityCard) === activeIndex);
    });

    sliders.forEach((slider) => {
      const metric = slider.dataset.opportunityMetric;
      slider.value = activeCard[metric];
      opportunityRoot.querySelector(`[data-opportunity-value="${metric}"]`).textContent = activeCard[metric];
    });

    if (activeTitle) {
      activeTitle.textContent = activeCard.title;
    }
  };

  selectors.forEach((element) => {
    element.addEventListener("click", () => {
      setActiveOpportunity(Number(element.dataset.opportunitySelect));
    });
  });

  cards.forEach((card) => {
    const selectCard = () => {
      setActiveOpportunity(Number(card.dataset.opportunityCard));
    };

    card.addEventListener("click", selectCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectCard();
      }
    });
  });

  sliders.forEach((slider) => {
    slider.addEventListener("input", () => {
      const metric = slider.dataset.opportunityMetric;

      state[activeIndex][metric] = Number(slider.value);
      opportunityRoot.querySelector(`[data-opportunity-value="${metric}"]`).textContent = slider.value;
      updateCharts();
    });
  });

  updateCharts();
  setActiveOpportunity(0);
};

const renderOutputView = (
  cabinetMain,
  projectName,
  activeTab = "Personas",
  activePersonaIndex = null,
  activeVocIndex = null,
  activeHypothesisIndex = 0,
  shouldResetScroll = false,
) => {
  cabinetMain.innerHTML = createOutputScreen(
    projectName,
    activeTab,
    activePersonaIndex,
    activeVocIndex,
    activeHypothesisIndex,
  );

  cabinetMain.querySelectorAll("[data-output-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      renderOutputView(cabinetMain, projectName, button.dataset.outputTab, null, null, 0, true);
    });
  });

  cabinetMain.querySelectorAll("[data-persona-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.personaToggle);
      const nextIndex = activePersonaIndex === index ? null : index;

      renderOutputView(cabinetMain, projectName, activeTab, nextIndex, activeVocIndex, activeHypothesisIndex);
    });
  });

  cabinetMain.querySelectorAll("[data-persona-chat]").forEach((button) => {
    button.addEventListener("click", () => {
      openPersonaChat(personas[Number(button.dataset.personaChat)]);
    });
  });

  cabinetMain.querySelectorAll("[data-voc-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.vocToggle);
      const nextIndex = activeVocIndex === index ? null : index;

      renderOutputView(cabinetMain, projectName, activeTab, activePersonaIndex, nextIndex, activeHypothesisIndex);
    });
  });

  cabinetMain.querySelectorAll("[data-hypothesis-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.hypothesisToggle);
      const nextIndex = activeHypothesisIndex === index ? null : index;

      renderOutputView(cabinetMain, projectName, activeTab, activePersonaIndex, activeVocIndex, nextIndex);
    });
  });

  setupOpportunityInteractions(cabinetMain);
  setupOutputProjectActions(cabinetMain, projectName, activeTab, activePersonaIndex, activeVocIndex, activeHypothesisIndex);
  appendCabinetFooter(cabinetMain);

  if (shouldResetScroll) {
    resetCabinetContentScroll(cabinetMain);
  }
};

const removeOutputProjectModal = () => {
  document.querySelector("[data-output-project-modal]")?.remove();
  document.body.classList.remove("has-open-modal");
  document.removeEventListener("keydown", handleOutputProjectModalEscape);
};

function handleOutputProjectModalEscape(event) {
  if (event.key === "Escape") {
    removeOutputProjectModal();
  }
}

const openOutputProjectModal = (markup, onReady) => {
  removeOutputProjectModal();
  document.body.insertAdjacentHTML("beforeend", markup);
  const modal = document.querySelector("[data-output-project-modal]");

  document.body.classList.add("has-open-modal");
  document.addEventListener("keydown", handleOutputProjectModalEscape);

  modal.querySelectorAll("[data-close-output-modal]").forEach((button) => {
    button.addEventListener("click", removeOutputProjectModal);
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      removeOutputProjectModal();
    }
  });

  onReady?.(modal);
};

const setupOutputProjectActions = (
  cabinetMain,
  projectName,
  activeTab,
  activePersonaIndex,
  activeVocIndex,
  activeHypothesisIndex,
) => {
  cabinetMain.querySelectorAll("[data-project-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.projectAction;

      if (action === "edit") {
        openOutputProjectModal(createEditProjectModal(projectName), (modal) => {
          const input = modal.querySelector("#edit-project-name");
          const form = modal.querySelector("[data-edit-project-form]");

          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);

          form.addEventListener("submit", (event) => {
            event.preventDefault();
            const nextProjectName = input.value.trim() || defaultProjectName;
            const projects = readCreatedProjects();
            const nextProjects = projects.includes(projectName)
              ? projects.map((project) => (project === projectName ? nextProjectName : project))
              : [nextProjectName, ...projects];

            writeCreatedProjects([...new Set(nextProjects)].slice(0, 12));
            renameProjectInFirestore(projectName, nextProjectName);
            renameProjectFiles(projectName, nextProjectName);
            renderSidebarProjects();
            removeOutputProjectModal();
            if (window.location.pathname.endsWith("cabinet-have-projects.html")) {
              window.history.replaceState(null, "", getProjectUrl(nextProjectName));
            }
            renderOutputView(cabinetMain, nextProjectName, activeTab, activePersonaIndex, activeVocIndex, activeHypothesisIndex);
          });
        });
      }

      if (action === "upload") {
        openOutputProjectModal(createUploadProjectModal(projectName), (modal) => {
          setupUploadFlow(modal, {
            initializeFromExisting: true,
            projectNameOverride: projectName,
            requireNewFilesForAnalyze: true,
          });
        });
      }

      if (action === "delete") {
        openOutputProjectModal(createDeleteProjectModal(), (modal) => {
          modal.querySelector("[data-confirm-delete-project]").addEventListener("click", () => {
            const projects = readCreatedProjects().filter((project) => project !== projectName);

            writeCreatedProjects(projects);
            deleteProjectFromFirestore(projectName);
            deleteProjectFiles(projectName);
            window.sessionStorage.setItem(projectToastStorageKey, `Проєкт "${projectName}" видалено`);
            window.location.href = "./cabinet-no-projects.html";
          });
        });
      }
    });
  });
};

const showOutputView = (projectName) => {
  const cabinetMain = document.querySelector(".cabinet-main");

  if (!cabinetMain) {
    return;
  }

  if (window.location.pathname.endsWith("cabinet-have-projects.html")) {
    window.history.replaceState(null, "", getProjectUrl(projectName));
  }

  document.body.classList.remove("is-analysis-running", "is-analysis-success");
  document.body.classList.add("is-output-view");
  renderOutputView(cabinetMain, projectName);
};

const showThankYouView = (projectName) => {
  const cabinetMain = document.querySelector(".cabinet-main");

  if (!cabinetMain) {
    return;
  }

  document.body.classList.remove("is-analysis-running");
  document.body.classList.add("is-analysis-success");
  cabinetMain.innerHTML = createThankYouScreen();
  appendCabinetFooter(cabinetMain);

  window.setTimeout(() => {
    showOutputView(projectName);
  }, 3000);
};

const startAnalysisView = (projectName) => {
  const cabinetMain = document.querySelector(".cabinet-main");

  if (!cabinetMain) {
    return;
  }

  document.querySelectorAll(".project-modal-overlay").forEach((modal) => {
    modal.hidden = true;
  });
  document.body.classList.remove("has-open-modal");
  document.body.classList.add("is-analysis-running");
  cabinetMain.innerHTML = createAnalysisScreen(projectName);
  appendCabinetFooter(cabinetMain);

  const ring = cabinetMain.querySelector(".analysis-ring");
  const percentText = cabinetMain.querySelector("[data-analysis-percent]");
  const progressBar = cabinetMain.querySelector("[data-analysis-bar]");
  const message = cabinetMain.querySelector("[data-analysis-message]");
  const steps = Array.from(cabinetMain.querySelectorAll("[data-analysis-step]"));
  const cancelButton = cabinetMain.querySelector("[data-cancel-analysis]");
  let currentStage = 0;
  let currentProgress = 0;

  const setProgress = (value) => {
    currentProgress = Math.min(value, analysisStages[analysisStages.length - 1].progress);
    ring.style.setProperty("--analysis-progress", currentProgress);
    percentText.textContent = `${currentProgress}%`;
    progressBar.style.width = `${currentProgress}%`;
  };

  const setStage = (stageIndex) => {
    currentStage = Math.min(stageIndex, analysisStages.length - 1);
    const stage = analysisStages[currentStage];

    message.textContent = stage.message;
    steps.forEach((step, index) => {
      step.classList.toggle("is-complete", index < currentStage);
      step.classList.toggle("is-current", index === currentStage);
      step.classList.toggle("is-upcoming", index > currentStage);
    });
  };

  const tick = () => {
    const stage = analysisStages[currentStage];

    if (currentProgress < stage.progress) {
      setProgress(currentProgress + 1);
      return;
    }

    if (currentStage < analysisStages.length - 1) {
      setStage(currentStage + 1);
      return;
    }

    window.clearInterval(analysisTimer);
    window.setTimeout(() => {
      showThankYouView(projectName);
    }, 700);
  };

  setStage(0);
  setProgress(0);
  const analysisTimer = window.setInterval(tick, 110);

  cancelButton.addEventListener("click", () => {
    window.clearInterval(analysisTimer);
    window.location.reload();
  });
};

const setupUploadFlow = (
  root,
  { initializeFromExisting = false, projectNameOverride = "", requireNewFilesForAnalyze = false } = {},
) => {
  if (!root) {
    return;
  }

  const uploadInput = root.querySelector('input[type="file"]');
  const projectInput = root.querySelector(".project-form input");
  const analyzeButton = root.querySelector(".project-form button");
  const dropZone = root.querySelector(".drop-zone");
  const uploadedFiles = root.querySelector(".uploaded-files");
  let uploadedFilesState = [];

  if (!uploadInput || !analyzeButton || !dropZone || !uploadedFiles) {
    return;
  }

  if (initializeFromExisting) {
    uploadedFilesState = getExistingUploadedFiles(uploadedFiles).map((file) => ({ ...file, isNew: false }));
  }

  const updateAnalyzeButton = () => {
    const hasFiles = uploadedFilesState.length > 0;
    const hasNewFiles = uploadedFilesState.some((file) => file.isNew);
    const canAnalyze = hasFiles && (!requireNewFilesForAnalyze || hasNewFiles);

    analyzeButton.disabled = !canAnalyze;
    analyzeButton.classList.toggle("button-active", canAnalyze);
  };

  const removeUploadedFile = (index) => {
    uploadedFilesState.splice(index, 1);
    uploadInput.value = "";
    renderUploadedFiles(uploadedFiles, uploadedFilesState, removeUploadedFile);
    updateAnalyzeButton();
  };

  root.addEventListener("reset-upload-flow", () => {
    uploadedFilesState = [];
    uploadInput.value = "";
    renderUploadedFiles(uploadedFiles, uploadedFilesState, removeUploadedFile);
    updateAnalyzeButton();
  });

  if (initializeFromExisting) {
    renderUploadedFiles(uploadedFiles, uploadedFilesState, removeUploadedFile);
  }

  const setUploadedFilesWithRemove = (files) => {
    const nextFiles = Array.from(files)
      .filter(isAllowedFile)
      .map((file) => ({
        displaySize: formatFileSize(file.size),
        isNew: true,
        name: file.name,
        size: file.size,
      }));

    uploadedFilesState = [...uploadedFilesState, ...nextFiles];
    uploadInput.value = "";
    renderUploadedFiles(uploadedFiles, uploadedFilesState, removeUploadedFile);
    updateAnalyzeButton();

    if (nextFiles.length > 0) {
      scrollToUploadedFiles(uploadedFiles);
    }
  };

  uploadInput.addEventListener("change", () => {
    setUploadedFilesWithRemove(uploadInput.files);
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropZone.classList.add("is-dragover");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, () => {
      dropZone.classList.remove("is-dragover");
    });
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    setUploadedFilesWithRemove(event.dataTransfer.files);
  });

  projectInput?.addEventListener("input", updateAnalyzeButton);
  analyzeButton.addEventListener("click", () => {
    if (!analyzeButton.disabled) {
      if (projectInput && !projectInput.value.trim()) {
        projectInput.value = defaultProjectName;
      }

      const projectName = projectInput?.value.trim() || projectNameOverride || defaultProjectName;

      analyzeButton.dataset.projectName = projectName;
      analyzedProjectFiles = uploadedFilesState.map(({ isNew, ...file }) => ({ ...file }));
      writeProjectFiles(projectName, analyzedProjectFiles);
      addCreatedProject(projectName);
      renderSidebarProjects();
      startAnalysisView(projectName);
    }
  });

  updateAnalyzeButton();
};

const initFirebaseServices = () => {
  if (hyplyFirebaseApp || !window.firebase?.initializeApp) {
    return {
      auth: hyplyFirebaseAuth,
      db: hyplyFirestore,
    };
  }

  try {
    hyplyFirebaseApp = window.firebase.apps?.length
      ? window.firebase.app()
      : window.firebase.initializeApp(firebaseConfig);
    hyplyFirebaseAuth = window.firebase.auth?.() || null;
    hyplyFirestore = window.firebase.firestore?.() || null;
  } catch (error) {
    console.warn("Firebase initialization failed", error);
  }

  return {
    auth: hyplyFirebaseAuth,
    db: hyplyFirestore,
  };
};

const getFirebaseUser = () => initFirebaseServices().auth?.currentUser || null;

const getFirebaseProjectDocId = (projectName) => encodeURIComponent(projectName).replace(/\./g, "%2E");

const getUserProjectCollection = () => {
  const { db } = initFirebaseServices();
  const user = getFirebaseUser();

  if (!db || !user) {
    return null;
  }

  return db.collection("users").doc(user.uid).collection("projects");
};

const readCreatedProjects = () => {
  try {
    const projects = JSON.parse(window.localStorage.getItem(createdProjectsStorageKey) || "[]");

    return Array.isArray(projects) ? projects.filter(Boolean) : [];
  } catch {
    return [];
  }
};

const writeCreatedProjects = (projects) => {
  window.localStorage.setItem(createdProjectsStorageKey, JSON.stringify(projects));
};

const saveProjectToFirestore = async (projectName) => {
  const projectsCollection = getUserProjectCollection();

  if (!projectsCollection || !projectName) {
    return;
  }

  try {
    await projectsCollection.doc(getFirebaseProjectDocId(projectName)).set(
      {
        name: projectName,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  } catch (error) {
    console.warn("Project was saved locally but not synced to Firestore", error);
  }
};

const deleteProjectFromFirestore = async (projectName) => {
  const projectsCollection = getUserProjectCollection();

  if (!projectsCollection || !projectName) {
    return;
  }

  try {
    await projectsCollection.doc(getFirebaseProjectDocId(projectName)).delete();
  } catch (error) {
    console.warn("Project was deleted locally but not synced to Firestore", error);
  }
};

const renameProjectInFirestore = async (oldProjectName, nextProjectName) => {
  if (oldProjectName && oldProjectName !== nextProjectName) {
    await deleteProjectFromFirestore(oldProjectName);
  }

  await saveProjectToFirestore(nextProjectName);
};

const loadProjectsFromFirestore = async () => {
  const projectsCollection = getUserProjectCollection();

  if (!projectsCollection) {
    return;
  }

  try {
    const snapshot = await projectsCollection.orderBy("updatedAt", "desc").get();
    const projects = snapshot.docs
      .map((doc) => doc.data()?.name)
      .filter(Boolean);

    writeCreatedProjects([...new Set(projects)].slice(0, 12));
    renderSidebarProjects();
  } catch (error) {
    console.warn("Projects were not loaded from Firestore", error);
  }
};

const getProfileState = () => {
  const fallback = {
    avatar: "",
    email: "valentyna@gmail.com",
    name: "Валентина Милашевська",
  };

  try {
    return { ...fallback, ...JSON.parse(window.localStorage.getItem(profileStorageKey) || "{}") };
  } catch {
    return fallback;
  }
};

const getInitials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "ВМ";

const getFirebaseAvatarUrl = (user) =>
  user?.photoURL || user?.providerData?.find((provider) => provider.photoURL)?.photoURL || "";

const renderAvatarContent = (avatar, name) =>
  avatar ? `<img src="${avatar}" alt="" referrerpolicy="no-referrer" />` : escapeHTML(getInitials(name));

const applyProfileState = () => {
  const profile = getProfileState();

  document.querySelectorAll("[data-profile-avatar]").forEach((avatar) => {
    avatar.innerHTML = renderAvatarContent(profile.avatar, profile.name);
    avatar.classList.toggle("has-image", Boolean(profile.avatar));
  });

  document.querySelectorAll("[data-profile-name]").forEach((element) => {
    element.textContent = profile.name;
  });

  document.querySelectorAll("[data-profile-email]").forEach((element) => {
    element.textContent = profile.email;
  });

  document.querySelectorAll("[data-profile-name-input]").forEach((input) => {
    input.value = profile.name;
  });

  document.querySelectorAll("[data-profile-email-input]").forEach((input) => {
    input.value = profile.email;
  });
};

const loadProfileFromFirestore = async (user) => {
  const { db } = initFirebaseServices();

  if (!db || !user) {
    return null;
  }

  try {
    const profileSnapshot = await db.collection("users").doc(user.uid).get();

    return profileSnapshot.exists ? profileSnapshot.data() : null;
  } catch (error) {
    console.warn("Profile was not loaded from Firestore", error);
    return null;
  }
};

const syncFirebaseProfile = async (user) => {
  if (!user) {
    return;
  }

  const fallbackProfile = getProfileState();
  const savedProfile = await loadProfileFromFirestore(user);
  const firebaseAvatar = getFirebaseAvatarUrl(user);
  const savedAvatar = savedProfile?.avatar || "";
  const savedAvatarSource = savedProfile?.avatarSource || "";
  const avatar = savedAvatar || firebaseAvatar || "";
  const profile = {
    avatar,
    avatarSource: savedAvatarSource || (firebaseAvatar ? "google" : ""),
    email: user.email || savedProfile?.email || fallbackProfile.email,
    name: savedProfile?.name || user.displayName || fallbackProfile.name,
  };

  window.localStorage.setItem(profileStorageKey, JSON.stringify(profile));
  applyProfileState();

  const { db } = initFirebaseServices();

  if (!db) {
    return;
  }

  try {
    await db.collection("users").doc(user.uid).set(
      {
        avatar: profile.avatar,
        avatarSource: profile.avatarSource,
        email: profile.email,
        name: profile.name,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  } catch (error) {
    console.warn("Profile was updated locally but not synced to Firestore", error);
  }
};

const saveProfileToFirestore = async (profile) => {
  const { db } = initFirebaseServices();
  const user = getFirebaseUser();

  if (!db || !user) {
    return;
  }

  try {
    await db.collection("users").doc(user.uid).set(
      {
        avatar: profile.avatar,
        avatarSource: profile.avatarSource || "",
        email: profile.email,
        name: profile.name,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  } catch (error) {
    console.warn("Profile was saved locally but not synced to Firestore", error);
  }
};

const getProjectUrl = (projectName) => `./cabinet-have-projects.html?project=${encodeURIComponent(projectName)}`;

const getProjectNameFromUrl = () => {
  const projectName = new URLSearchParams(window.location.search).get("project");

  return projectName ? projectName.trim() : "";
};

const addCreatedProject = (projectName) => {
  const projects = readCreatedProjects();

  if (!projects.includes(projectName)) {
    projects.unshift(projectName);
    writeCreatedProjects(projects.slice(0, 12));
  }

  saveProjectToFirestore(projectName);
};

const createSidebarProjectLink = (projectName) => `
  <a href="${getProjectUrl(projectName)}" class="cabinet-project-link">
    <span aria-hidden="true">
      <img src="${figmaAssets.projectFolder}" alt="" />
    </span>
    ${escapeHTML(projectName)}
  </a>
`;

const createRecentProjectCard = (projectName, index) => `
  <a class="recent-project-card" href="${getProjectUrl(projectName)}">
    <span class="recent-project-icon" aria-hidden="true">
      <img src="${figmaAssets.projectFolder}" alt="" />
    </span>
    <strong>${escapeHTML(projectName)}</strong>
    <small>
      ${clockIconSvg}
      ${index === 0 ? "щойно" : `${index + 1} дні тому`}
    </small>
  </a>
`;

const renderRecentProjects = () => {
  const cabinetMain = document.querySelector(".cabinet-main");

  if (!cabinetMain || document.body.classList.contains("is-output-view")) {
    return;
  }

  const projects = readCreatedProjects();
  let recentSection = cabinetMain.querySelector(".recent-projects");

  if (projects.length <= 3) {
    recentSection?.remove();
    return;
  }

  if (!recentSection) {
    const uploadCard = cabinetMain.querySelector(".upload-card");

    if (!uploadCard) {
      return;
    }

    uploadCard.insertAdjacentHTML(
      "beforebegin",
      `
        <section class="recent-projects" aria-labelledby="recent-title">
          <h1 id="recent-title">Останні проєкти</h1>
          <div class="recent-projects-scroll"></div>
        </section>
      `,
    );
    recentSection = cabinetMain.querySelector(".recent-projects");
  }

  recentSection.querySelector(".recent-projects-scroll").innerHTML = projects
    .slice(0, 5)
    .map(createRecentProjectCard)
    .join("");
};

const renderSidebarProjects = () => {
  const projectSection = document.querySelector(".cabinet-projects");

  if (!projectSection) {
    return;
  }

  const createdProjects = readCreatedProjects();
  const projects = [...new Set(createdProjects)];
  let list = projectSection.querySelector(".cabinet-project-list");
  let emptyState = projectSection.querySelector(".cabinet-projects-empty");

  if (!emptyState) {
    const paragraph = projectSection.querySelector(":scope > p");

    if (paragraph) {
      paragraph.classList.add("cabinet-projects-empty");
      emptyState = paragraph;
    }
  }

  if (!list) {
    list = document.createElement("nav");
    list.className = "cabinet-project-list";
    list.setAttribute("aria-label", "Створені проєкти");
    projectSection.insertBefore(list, projectSection.querySelector(".cabinet-create"));
  }

  list.innerHTML = projects.map(createSidebarProjectLink).join("");
  list.hidden = projects.length === 0;

  if (emptyState) {
    emptyState.hidden = projects.length > 0;
  }

  renderRecentProjects();
};

const showProjectToast = (message) => {
  if (!message) {
    return;
  }

  document.querySelector(".project-toast")?.remove();

  const toast = document.createElement("div");
  toast.className = "project-toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.append(toast);

  window.setTimeout(() => {
    toast.classList.add("is-hiding");
    window.setTimeout(() => toast.remove(), 220);
  }, 3600);
};

const showPendingProjectToast = () => {
  const message = window.sessionStorage.getItem(projectToastStorageKey);

  if (!message) {
    return;
  }

  window.sessionStorage.removeItem(projectToastStorageKey);
  showProjectToast(message);
};

const setupProfileNavigation = () => {
  document.querySelectorAll("[data-profile-link]").forEach((button) => {
    button.addEventListener("click", (event) => {
      window.sessionStorage.setItem(
        profileReturnStorageKey,
        `${window.location.pathname.split("/").pop() || "cabinet-no-projects.html"}${window.location.search}`,
      );

      if (button.getAttribute("href") === "./profile.html") {
        return;
      }

      event.preventDefault();
      window.location.href = "./profile.html";
    });
  });

  document.querySelectorAll("[data-profile-back]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = window.sessionStorage.getItem(profileReturnStorageKey) || "./cabinet-no-projects.html";
    });
  });
};

const signOutFirebase = async () => {
  const { auth } = initFirebaseServices();

  window.localStorage.removeItem(authStorageKey);

  try {
    await auth?.signOut();
  } catch (error) {
    console.warn("Firebase sign out failed", error);
  }
};

const setupGoogleLogin = () => {
  const { auth } = initFirebaseServices();

  document.querySelectorAll("[data-google-login], .google-button").forEach((button) => {
    button.addEventListener("click", async (event) => {
      if (!auth || !window.firebase?.auth?.GoogleAuthProvider) {
        return;
      }

      event.preventDefault();
      const provider = new window.firebase.auth.GoogleAuthProvider();

      try {
        const result = await auth.signInWithPopup(provider);

        window.localStorage.setItem(authStorageKey, "true");
        await syncFirebaseProfile(result.user);
        await loadProjectsFromFirestore();
        window.location.href = "./cabinet-no-projects.html";
      } catch (error) {
        console.warn("Google login failed", error);
        showProjectToast("Не вдалося увійти через Google. Спробуйте ще раз.");
      }
    });
  });
};

const setupFirebaseAuthState = () => {
  const { auth } = initFirebaseServices();

  if (!auth) {
    return;
  }

  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      return;
    }

    window.localStorage.setItem(authStorageKey, "true");
    await syncFirebaseProfile(user);
    await loadProjectsFromFirestore();
    setupLoggedInLandingHeader();
  });
};

const setupLoggedInLandingHeader = () => {
  if (!document.querySelector(".site-header")) {
    return;
  }

  const navActions = document.querySelector(".nav-actions");

  if (!navActions || window.localStorage.getItem(authStorageKey) !== "true") {
    return;
  }

  navActions.innerHTML = `
    <a class="login-link" href="./index.html" data-logout-link>Вийти</a>
    <a class="button button-primary" href="./cabinet-no-projects.html">До кабінету</a>
  `;

  navActions.querySelector("[data-logout-link]")?.addEventListener("click", async (event) => {
    event.preventDefault();
    await signOutFirebase();
    window.location.href = "./index.html";
  });
};

const setupProfilePage = () => {
  const form = document.querySelector("[data-profile-form]");
  const avatarInput = document.querySelector("[data-profile-avatar-input]");
  const cropModal = document.querySelector("[data-avatar-crop-modal]");
  const cropImage = document.querySelector("[data-avatar-crop-image]");
  const cropZoom = document.querySelector("[data-avatar-crop-zoom]");
  let pendingAvatar = "";

  const createCroppedAvatar = () => {
    if (!cropImage?.naturalWidth || !cropImage?.naturalHeight) {
      return pendingAvatar;
    }

    const zoom = Number(cropZoom?.value || 1);
    const sourceSize = Math.min(cropImage.naturalWidth, cropImage.naturalHeight) / zoom;
    const sourceX = (cropImage.naturalWidth - sourceSize) / 2;
    const sourceY = (cropImage.naturalHeight - sourceSize) / 2;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 512;
    canvas.height = 512;
    context.drawImage(cropImage, sourceX, sourceY, sourceSize, sourceSize, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL("image/jpeg", 0.9);
  };

  if (!form) {
    return;
  }

  document.querySelector("[data-profile-avatar-trigger]")?.addEventListener("click", () => {
    avatarInput?.click();
  });

  avatarInput?.addEventListener("change", () => {
    const file = avatarInput.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      pendingAvatar = String(reader.result || "");
      cropImage.src = pendingAvatar;
      cropImage.style.transform = "scale(1)";
      cropZoom.value = "1";
      cropModal.hidden = false;
      document.body.classList.add("has-open-modal");
    });
    reader.readAsDataURL(file);
  });

  cropZoom?.addEventListener("input", () => {
    cropImage.style.transform = `scale(${cropZoom.value})`;
  });

  cropModal?.querySelectorAll("[data-close-avatar-crop]").forEach((button) => {
    button.addEventListener("click", () => {
      cropModal.hidden = true;
      document.body.classList.remove("has-open-modal");
      avatarInput.value = "";
    });
  });

  cropModal?.querySelector("[data-save-avatar-crop]")?.addEventListener("click", () => {
    const previewAvatar = document.querySelector(".profile-page-avatar");

    if (previewAvatar && pendingAvatar) {
      pendingAvatar = createCroppedAvatar();
      previewAvatar.innerHTML = `<img src="${pendingAvatar}" alt="" />`;
      previewAvatar.classList.add("has-image");
    }
    cropModal.hidden = true;
    document.body.classList.remove("has-open-modal");
    avatarInput.value = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const profile = getProfileState();
    const name = form.querySelector("[data-profile-name-input]")?.value.trim() || profile.name;
    const avatar = pendingAvatar || profile.avatar;
    const nextProfile = {
      ...profile,
      avatar,
      avatarSource: pendingAvatar ? "custom" : profile.avatarSource || "",
      name,
    };

    window.localStorage.setItem(profileStorageKey, JSON.stringify(nextProfile));
    pendingAvatar = "";
    applyProfileState();
    saveProfileToFirestore(nextProfile);
    showProjectToast("Зміни профілю збережено");
  });
};

setupGoogleLogin();
setupFirebaseAuthState();
setupLoggedInLandingHeader();

document.querySelectorAll(".cabinet-logout").forEach((logoutLink) => {
  logoutLink.addEventListener("click", async (event) => {
    event.preventDefault();
    await signOutFirebase();
    window.location.href = "./index.html";
  });
});

if (document.body.classList.contains("cabinet-body")) {
  if (!initFirebaseServices().auth) {
    window.localStorage.setItem(authStorageKey, "true");
  }
  applyProfileState();
  setupProfileNavigation();
  renderSidebarProjects();
  showPendingProjectToast();
  setupProfilePage();
  appendCabinetFooter();

  setupUploadFlow(document.querySelector(".cabinet-main"), {
    initializeFromExisting: document.body.classList.contains("cabinet-has-projects"),
  });

  document.querySelectorAll(".project-upload-modal").forEach(setupUploadFlow);

  const createProjectModal = document.querySelector('[data-modal="create-project"]');
  const uploadProjectModal = document.querySelector('[data-modal="upload-project"]');
  const createProjectForm = document.querySelector(".create-project-form");
  const createProjectInput = document.querySelector("#modal-project-name");
  const modalUploadProjectInput = document.querySelector("#modal-upload-project-name");
  let activeModal = null;

  const openModal = (modal) => {
    if (!modal) {
      return;
    }

    document.querySelectorAll(".project-modal-overlay").forEach((currentModal) => {
      currentModal.hidden = true;
    });

    modal.hidden = false;
    activeModal = modal;
    document.body.classList.add("has-open-modal");

    const firstInput = modal.querySelector("input:not([type='file'])");
    if (firstInput) {
      firstInput.focus();
    }
  };

  const closeModal = (modal = activeModal) => {
    if (!modal) {
      return;
    }

    modal.hidden = true;
    activeModal = null;

    if (!document.querySelector(".project-modal-overlay:not([hidden])")) {
      document.body.classList.remove("has-open-modal");
    }
  };

  document.querySelectorAll(".create-project-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openModal(createProjectModal);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      closeModal(button.closest(".project-modal-overlay"));
    });
  });

  document.querySelectorAll(".project-modal-overlay").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeModal) {
      closeModal(activeModal);
    }
  });

  if (createProjectForm && createProjectInput && modalUploadProjectInput) {
    createProjectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const projectName = createProjectInput.value.trim() || defaultProjectName;

      addCreatedProject(projectName);
      renderSidebarProjects();
      modalUploadProjectInput.value = projectName;
      createProjectInput.value = "";
      uploadProjectModal?.dispatchEvent(new CustomEvent("reset-upload-flow"));
      closeModal(createProjectModal);
      openModal(uploadProjectModal);
    });
  }

  const requestedProjectName = getProjectNameFromUrl();

  if (document.body.classList.contains("cabinet-has-projects") && requestedProjectName) {
    addCreatedProject(requestedProjectName);
    renderSidebarProjects();
    showOutputView(requestedProjectName);
  }
}
