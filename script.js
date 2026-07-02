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
const allowedFileExtensions = ["CSV", "TXT", "MD"];
const readableFileExtensions = ["CSV", "TXT", "MD"];
const fileTextStorageLimit = 200000;
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
  successIllustration: "./assets/figma/e9372950-0ea9-4443-ba9b-f8dcaac4a7be.png",
  actionEdit: "./assets/figma/8f0182a1-8ece-4af8-a126-3e51affac45a.svg",
  actionUpload: "./assets/figma/6a9dcfaa-3dd0-48ea-bced-f092bca79f60.svg",
  actionDelete: "./assets/figma/f20d0d51-3db3-4268-8900-269a2182417a.svg",
  aiDownload: "./assets/ai-download-icon.svg",
  aiDownloadMobile: "./assets/ai-download-mobile-icon.svg",
  painHigh: "./assets/figma/97c0813e-ec42-4659-b3bd-b226f60aaf09.png",
  painMed: "./assets/figma/256fc5a9-7c07-467a-b219-baadc5f54da0.png",
  painLow: "./assets/figma/a9b92a07-8e3a-4e8b-8c94-1795a98d3fb8.png",
  chatIcon: "./assets/figma/05d1b17a-8163-4f86-b17b-bbf5ff6dd005.svg",
  personaChatCloseIcon: "./assets/figma/c96122c6-9636-485e-8dde-0ff2b8ebf8b8.svg",
  personaChatInfoIcon: "./assets/figma/d898fba5-521f-4c0e-86f2-b55461d943fa.png",
  personaChatPromptIcon: "./assets/figma/a164c8b8-cda8-4ddd-9222-2f99ba79dee5.png",
  personaChatSendActiveIcon: "./assets/figma/d43555f4-2488-4f6f-8e5e-2ffe59365341.svg",
  personaChatSendDisabledIcon: "./assets/figma/3584b587-c381-4440-b14d-9c164a89aeaa.svg",
  vocSummaryTitleIcon: "./assets/figma/6b1c0319-f8d8-430f-b30d-240b1ca55a0f.svg",
  problemStatusHigh: "./assets/figma/b1117371-6e2b-4bc4-81f7-5168063f3747.svg",
  problemStatusMed: "./assets/figma/6bbd0a95-1ce2-4a3d-86b6-e75bc057a914.svg",
  problemStatusLow: "./assets/figma/809c5a95-50eb-469e-a64b-820570581297.svg",
  projectFolder: "./assets/figma/46432eab-0206-4ba9-9ff1-59c9431f28ac.svg",
  vocChevronUp: "./assets/figma/b5ec92e5-c4b4-41f4-a8c2-487fe0676406.svg",
  vocChevronDown: "./assets/figma/1f9adb24-52c3-4fe6-8109-77c69b47fd35.svg",
  opportunityProblemIcon: "./assets/figma/ff89e19a-c7aa-474d-9951-19dc2a2042da.svg",
  opportunityDividerIcon: "./assets/figma/bd737de5-b059-4b75-aaaf-57e1b755d96a.svg",
  opportunityMainIcon: "./assets/figma/d4f1a21f-d889-40e6-8981-88e1e61915bb.svg",
  deleteProjectIllustration: "./assets/figma/01957197-ffd9-404f-a275-e1a1db1cc2fe.png",
  editProjectIllustration: "./assets/figma/38e9d413-be35-4d33-b919-c1ace174e249.png",
};
const projectToastStorageKey = "hyply-project-toast";
const personaAvatarVariants = [
  "./assets/figma/68114838-5884-47b1-b642-6fdffd38c33a.png",
  "./assets/figma/9bbd7963-058f-4cd9-bc9f-3163f44369b5.png",
  "./assets/figma/ae5dd604-eb84-4142-a482-9453f1b5e9ed.png",
  "./assets/figma/b7da12d2-ff2e-4a3f-a7f4-7e915d11fcd3.png",
  "./assets/figma/41e72d66-5dd2-4189-b021-cc71b16fa92c.png",
  "./assets/figma/008e5318-8c42-4fb7-8162-ab58aac387b6.png",
  "./assets/figma/d746422c-b11e-440a-91f6-0d298e4b8ee6.png",
  "./assets/figma/38f6e7d3-3981-482c-8315-eb541e2af1b6.png",
  "./assets/figma/2e497d99-4b72-4b21-894a-b990e3b25cbb.png",
  "./assets/figma/c68cb52e-0ce3-4697-b485-cb697b6ee5e5.png",
  "./assets/figma/9d8af27a-1177-4aed-9473-7a01ea60133b.png",
  "./assets/figma/3d4ca1bb-b068-4838-ade6-078285b3f96d.png",
  "./assets/figma/ce3079c2-256f-4080-897d-b92fbf2deb21.png",
  "./assets/figma/8d730598-b45c-4eb6-afa7-c13da0b7f7a3.png",
  "./assets/figma/e5bb4749-6981-48fd-bc0b-8921522f573e.png",
  "./assets/figma/89857dce-fcfe-477d-ab62-9071ea4a815c.png",
  "./assets/figma/b881e59e-7a52-40b1-a3db-5c1613ceea8f.png",
  "./assets/figma/f07013d0-3b7a-4769-9d7c-7c8da9d4621e.png",
  "./assets/figma/8291a33c-b0b3-4b8e-a47a-6d74fd8d5d15.png",
  "./assets/figma/05d0f48e-0a49-4f31-af36-3e6d60c4daf8.png",
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
    voiceProfile: {
      archetype: "Прагматична Product Manager",
      tone: "зібрана, ясна, трохи іронічна, без зайвої драматизації",
      speechPattern: "говорить коротко, часто каже 'я б спершу...', 'чесно?', 'мені треба бачити патерн, а не шум'",
      humor: "іронізує про roadmap, Slack, пріоритети, нескінченні таблиці й 'маленькі правки'",
      dailyDetails: "живе в календарях, синках, тасках, feedback-таблицях і рішеннях, які треба пояснити команді",
      decisionStyle: "шукає просте рішення, доказ, пріоритет і наступний крок",
    },
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
    voiceProfile: {
      archetype: "Швидкий Founder / CEO",
      tone: "енергійний, прямий, підприємницький, трохи нетерплячий до туману",
      speechPattern: "говорить через ризик, фокус, швидкість, runway, 'що це дає бізнесу?'",
      humor: "жартує про інвесторські апдейти, burn rate, пітчі й рішення на вчора",
      dailyDetails: "живе між дзвінками, демо, інвесторами, командою і постійним вибором, що робити першим",
      decisionStyle: "шукає сигнал, який допомагає швидко зробити ставку або вбити слабку гіпотезу",
    },
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
    voiceProfile: {
      archetype: "Уважна UX Researcher",
      tone: "спостережлива, тепла, точна, з м'якою іронією",
      speechPattern: "говорить через нюанси, цитати, патерни, 'я б не поспішала з висновком'",
      humor: "жартує про Miro, sticky notes, інтерв'ю, нотатки й звіти, які ніхто не відкриває",
      dailyDetails: "живе в інтерв'ю, транскриптах, цитатах, кластерах і спробах донести інсайт команді",
      decisionStyle: "спершу шукає evidence, контекст і повторюваність, а вже потім формулює висновок",
    },
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

const getPersonaVoiceProfile = (persona = {}) => {
  if (persona.voiceProfile?.tone) {
    return persona.voiceProfile;
  }

  const descriptor = `${persona.name || ""} ${persona.profession || ""} ${persona.field || ""} ${persona.summary || ""}`.toLowerCase();

  if (/founder|ceo|фаундер|заснов|startup|стартап/.test(descriptor)) {
    return {
      archetype: "Швидкий Founder / CEO",
      tone: "енергійний, прямий, підприємницький, трохи нетерплячий до туману",
      speechPattern: "говорить через ризик, фокус, швидкість, runway, 'що це дає бізнесу?'",
      humor: "жартує про інвесторські апдейти, burn rate, пітчі й рішення на вчора",
      dailyDetails: "живе між дзвінками, демо, інвесторами, командою і постійним вибором, що робити першим",
      decisionStyle: "шукає сигнал, який допомагає швидко зробити ставку або вбити слабку гіпотезу",
    };
  }

  if (/research|ux|дослід|інтерв|agency|агенц/.test(descriptor)) {
    return {
      archetype: "Уважна UX Researcher",
      tone: "спостережлива, тепла, точна, з м'якою іронією",
      speechPattern: "говорить через нюанси, цитати, патерни, 'я б не поспішала з висновком'",
      humor: "жартує про Miro, sticky notes, інтерв'ю, нотатки й звіти, які ніхто не відкриває",
      dailyDetails: "живе в інтерв'ю, транскриптах, цитатах, кластерах і спробах донести інсайт команді",
      decisionStyle: "спершу шукає evidence, контекст і повторюваність, а вже потім формулює висновок",
    };
  }

  return {
    archetype: "Прагматична Product Manager",
    tone: "зібрана, ясна, трохи іронічна, без зайвої драматизації",
    speechPattern: "говорить коротко, часто каже 'я б спершу...', 'чесно?', 'мені треба бачити патерн, а не шум'",
    humor: "іронізує про roadmap, Slack, пріоритети, нескінченні таблиці й 'маленькі правки'",
    dailyDetails: "живе в календарях, синках, тасках, feedback-таблицях і рішеннях, які треба пояснити команді",
    decisionStyle: "шукає просте рішення, доказ, пріоритет і наступний крок",
  };
};

const getPersonaLocalVoiceLines = (persona = {}) => {
  const profile = getPersonaVoiceProfile(persona);
  const archetype = profile.archetype || "";

  if (archetype.includes("Founder")) {
    return {
      personalTaste:
        "Я б обрав щось максимально без зайвого менеджменту: пасту, тости або доставку без довгого ресерчу меню. У мене в голові й так достатньо відкритих вкладок, щоб ще й вечерю перетворювати на стратегію. Ти питаєш про побут чи хочеш перевірити, як я приймаю дрібні рішення під навантаженням?",
      sensitive:
        "Я не буду вигадувати собі приватні факти, бо це поганий pitch навіть для AI-персони. У даних цього немає, тож чесно: не знаю. Можу натомість відповісти, як я обирав би між двома продуктовими ставками.",
      defaultAnswer:
        persona.chatAnswer ||
        "Я дивлюсь на це дуже прямо: чи є повторюваний сигнал, чи болить достатньо сильно, і чи варто команді витрачати на це час зараз. Дай мені конкретний сценарій або гіпотезу, і я скажу, де бачу ризик.",
    };
  }

  if (archetype.includes("Researcher")) {
    return {
      personalTaste:
        "Я б, мабуть, обрала щось просте й тепле, бо після дня з інтерв'ю мозок уже не хоче ще одного складного сценарію. Мені важливо не ідеально, а щоб було трохи тихіше й людяніше. Ти питаєш про побутову деталь чи хочеш зрозуміти мій стиль рішень?",
      sensitive:
        "Я б не поспішала домальовувати факт, якого немає в даних. У research це як погана інтерпретація цитати: звучить впевнено, але довіру псує. Можу краще сказати, які сигнали мені потрібні, щоб відповісти чесніше.",
      defaultAnswer:
        persona.chatAnswer ||
        "Я б спершу подивилась, чи це одинична емоція, чи повторюваний патерн у цитатах. Для мене важливо не просто красиво сформулювати інсайт, а показати, на чому він тримається. Який саме момент хочеш перевірити?",
    };
  }

  return {
    personalTaste:
      "Хм, мабуть, щось дуже просте. Якщо день був важкий, моя улюблена страва - це та, яку не треба довго готувати. А ще краще - яку приготував хтось інший, бо іноді хочеться не ще одного рішення, а просто видихнути. Ти питаєш це, щоб зрозуміти мій побутовий контекст чи швидше стиль прийняття рішень?",
    sensitive:
      "Я не можу надійно відповісти на це питання. У даних немає інформації, яка дозволяє зробити навіть обережне припущення. Можеш краще спитати мене про досвід із продуктом або про те, де я застрягаю?",
    defaultAnswer:
      persona.chatAnswer ||
      "Я б сказала, що мені найважливіше швидше бачити повторювані патерни у feedback і не губити докази під час продуктових рішень. Про який момент хочеш поговорити детальніше?",
  };
};
const createdProjectsStorageKey = "hyply-created-projects";
const projectFilesStorageKey = "hyply-project-files";
const projectAnalysisStorageKey = "hyply-project-analysis";
const profileStorageKey = "hyply-profile";
const profileReturnStorageKey = "hyply-profile-return-url";
const authStorageKey = "hyply-is-logged-in";
const hyplyApiEndpoint = "https://hyply-api.kavjarnja.workers.dev/analyze";
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

const readFileTextForAnalysis = async (file) => {
  const type = getFileExtension(file.name);

  if (!readableFileExtensions.includes(type)) {
    return {
      extractionStatus: "unsupported",
      text: "",
      textLength: 0,
      textTruncated: false,
      type,
    };
  }

  try {
    const text = await file.text();

    return {
      extractionStatus: "ready",
      text: text.slice(0, fileTextStorageLimit),
      textLength: text.length,
      textTruncated: text.length > fileTextStorageLimit,
      type,
    };
  } catch {
    return {
      extractionStatus: "failed",
      text: "",
      textLength: 0,
      textTruncated: false,
      type,
    };
  }
};

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

const clearUploadDomState = (root) => {
  const uploadInput = root?.querySelector('input[type="file"]');
  const uploadedFiles = root?.querySelector(".uploaded-files");

  if (uploadInput) {
    uploadInput.value = "";
  }

  if (uploadedFiles) {
    uploadedFiles.replaceChildren();
    uploadedFiles.hidden = true;
  }
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
    extractionStatus: "metadata-only",
    name: fileRow.querySelector("strong")?.textContent.trim() || "uploaded-file.txt",
    size: 0,
    text: "",
    textLength: 0,
    textTruncated: false,
    type: getFileExtension(fileRow.querySelector("strong")?.textContent.trim() || "uploaded-file.txt"),
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
    extractionStatus: file.extractionStatus || "metadata-only",
    name: file.name,
    size: file.size || 0,
    text: file.text || "",
    textLength: file.textLength || file.text?.length || 0,
    textTruncated: Boolean(file.textTruncated),
    type: file.type || getFileExtension(file.name),
    uploadedAt: file.uploadedAt || new Date().toISOString(),
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
      <a href="./legal-info.html">Правова інформація</a>
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
            <input id="output-feedback-files" type="file" accept=".csv,.txt,.md,text/csv,text/plain,text/markdown,text/x-markdown" multiple />
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
            <small>CSV, TXT, MD - до 50 МБ кожен</small>
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
              <span>MD</span>
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

const createAiDownloadButton = () => `
  <details class="ai-download-menu ai-download-menu-desktop">
    <summary class="ai-download-button" aria-label="Завантажити AI-висновки">
      <img src="${figmaAssets.aiDownload}" alt="" />
      <span>Завантажити AI-висновки</span>
    </summary>
    <div class="ai-download-options" role="menu" aria-label="Формат експорту">
      <button type="button" data-export-ai-insights="csv" role="menuitem">
        <span class="ai-download-format">CSV</span>
        <span>Скачати .csv</span>
      </button>
      <button type="button" data-export-ai-insights="txt" role="menuitem">
        <span class="ai-download-format">TXT</span>
        <span>Скачати .txt</span>
      </button>
      <button type="button" data-export-ai-insights="md" role="menuitem">
        <span class="ai-download-format">MD</span>
        <span>Скачати .md</span>
      </button>
    </div>
  </details>
`;

const createMobileAiDownloadButton = () => `
  <details class="ai-download-menu ai-download-menu-mobile">
    <summary class="output-icon-button mobile-ai-download-button" aria-label="Завантажити AI-висновки">
      <img src="${figmaAssets.aiDownloadMobile}" alt="" />
    </summary>
    <div class="ai-download-options" role="menu" aria-label="Формат експорту">
      <button type="button" data-export-ai-insights="csv" role="menuitem">
        <span class="ai-download-format">CSV</span>
        <span>Скачати .csv</span>
      </button>
      <button type="button" data-export-ai-insights="txt" role="menuitem">
        <span class="ai-download-format">TXT</span>
        <span>Скачати .txt</span>
      </button>
      <button type="button" data-export-ai-insights="md" role="menuitem">
        <span class="ai-download-format">MD</span>
        <span>Скачати .md</span>
      </button>
    </div>
  </details>
`;

const createMoreIcon = () => `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" fill="#190B5A" />
    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="#190B5A" />
    <path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" fill="#190B5A" />
  </svg>
`;

const createOutputTabs = (activeTab = "Personas") => {
  const outputData = currentOutputData || createDemoOutputData();
  const tabs = [
    ["Personas", outputData.personas.length],
    ["Voice of Customer", outputData.vocProblems.length],
    ["Opportunities", outputData.opportunityCards.length],
    ["Hypotheses", outputData.hypothesisCards.length],
    ["Evidence Library", outputData.evidenceLibraryItems.length],
  ];

  return `
  <nav class="output-tabs" aria-label="Структура результатів аналізу">
    ${tabs
      .map(
        ([label, count]) => `
          <button class="${label === activeTab ? "is-active" : ""}" type="button" data-output-tab="${label}">
            <span class="output-tab-pill">
              <span class="output-tab-label">${label}</span>
              <small>${count}</small>
            </span>
          </button>
        `,
      )
      .join("")}
  </nav>
`;
};

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
              <p>${persona.goals?.[0] || "Знаходити ключові інсайти з customer feedback без витрат часу на ручний аналіз"}</p>
            </section>
            <section>
              <h4>Ключові болі</h4>
              <ul>
                ${(persona.pains?.length ? persona.pains : [
                  "Мало часу для аналізу великих обсягів feedback",
                  "Важко переконати команду без конкретних даних",
                  "Feedback розкиданий по різних каналах",
                ])
                  .slice(0, 4)
                  .map((pain) => `<li>${pain}</li>`)
                  .join("")}
              </ul>
            </section>
            <section>
              <h4>Мотивації</h4>
              <div class="persona-tags">
                ${(persona.motivations?.length ? persona.motivations : [
                  "Ефективність роботи",
                  "Визнаний team lead",
                  "Чіткі продуктові пріоритети",
                ])
                  .slice(0, 4)
                  .map((motivation) => `<span>${motivation}</span>`)
                  .join("")}
              </div>
            </section>
            <section>
              <h4>Типові цитати</h4>
              ${(persona.quotes?.length ? persona.quotes : [
                "Я витрачаю мінімум 3 години на тиждень на аналіз відгуків вручну.",
                "Мені потрібна система, яка показує патерни, а не просто список коментарів.",
              ])
                .slice(0, 3)
                .map((quote) => `<blockquote><span aria-hidden="true">${quoteIconSvg}</span>${quote}</blockquote>`)
                .join("")}
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

const personaChatAnswerMeta = {
  evidence_based: {
    className: "persona-chat-evidence-confirmed",
    confidence: "high",
    helper: "",
    label: "Підтверджено даними",
    sectionTitle: "Підтверджуючі цитати:",
  },
  hypothetical: {
    className: "persona-chat-evidence-hypothetical",
    confidence: "low",
    helper: "Це припущення, а не факт із даних.",
    label: "Гіпотетична відповідь",
    sectionTitle: "Пов'язані сигнали:",
  },
  insufficient_data: {
    className: "persona-chat-evidence-insufficient",
    confidence: "low",
    helper: "У завантажених матеріалах немає сигналів, на основі яких можна дати надійну відповідь.",
    label: "Недостатньо даних",
    sectionTitle: "",
  },
};

const personaChatConfidenceLabels = {
  high: "Висока впевненість",
  low: "Низька впевненість",
  medium: "Середня впевненість",
};

const pickPersonaChatVariant = (variants, variantIndex = 0) => variants[Math.abs(variantIndex) % variants.length];

const getPersonaChatAddressedName = (question, firstName) => {
  const trimmedQuestion = String(question || "").trim();
  const normalizedQuestion = trimmedQuestion.toLowerCase();
  const normalizedFirstName = firstName.toLowerCase();
  const knownNames = [
    "валентина",
    "валентино",
    "валентину",
    "олег",
    "олега",
    "артем",
    "артеме",
    "марія",
    "маріє",
    "олена",
    "олено",
    "максим",
    "максиме",
    "іріна",
    "іріно",
    "ірина",
    "ірино",
    "сергій",
    "сергію",
    "андрію",
    "андрій",
    "наталя",
    "наталю",
    "катерина",
    "катерино",
    "юля",
    "юлю",
    "дмитро",
    "дмитре",
    "анна",
    "анно",
  ];
  const candidates = [
    normalizedQuestion.match(/(?:привіт|вітаю|добрий день|доброго дня|хей|hello|hi)[,!\s]+([а-яіїєґa-z'-]+)/i)?.[1],
    normalizedQuestion.match(/^([а-яіїєґa-z'-]{2,})[,!\s]+(?:привіт|вітаю|добрий день|доброго дня|хей|hello|hi)\b/i)?.[1],
    knownNames.find((name) => normalizedQuestion === name || normalizedQuestion.startsWith(`${name},`) || normalizedQuestion.startsWith(`${name}!`)),
  ].filter(Boolean);
  const addressedName = candidates.find((name) => name !== normalizedFirstName);

  return addressedName || "";
};

const getPersonaChatDisplayName = (name) => {
  const displayNames = {
    валентино: "Валентина",
    валентину: "Валентина",
    олега: "Олег",
    артеме: "Артем",
    маріє: "Марія",
    олено: "Олена",
    максиме: "Максим",
    іріно: "Ірина",
    ірино: "Ірина",
    сергію: "Сергій",
    андрію: "Андрій",
    наталю: "Наталя",
    катерино: "Катерина",
    юлю: "Юля",
    дмитре: "Дмитро",
    анно: "Анна",
  };
  return displayNames[name] || `${name[0].toUpperCase()}${name.slice(1)}`;
};

const createPersonaChatShortcutAnswerData = (persona, question, variantIndex = 0) => {
  const normalizedQuestion = question.toLowerCase();
  const firstName = persona.name.split(" ")[0];
  const mentionedName = getPersonaChatAddressedName(question, firstName);
  const isSimpleGreeting = /^(?:привіт|вітаю|добрий день|доброго дня|хей|hello|hi)[!.\s]*$/i.test(normalizedQuestion);
  const asksFoodAdvice = /порадь.*(пригот|вечер|обід|снідан|їсти|страва)|що.*(пригот|з'їсти|їсти).*вечер|що.*на вечер/.test(
    normalizedQuestion,
  );
  const asksSensitiveChoice = /голосув|вибор|кандидат|парті|президент|політик|за кого|обери між|вибери між|кого б ти обрал/.test(
    normalizedQuestion,
  );
  const asksIdentityOrMeta = /ти (справжн|реальн|людина|бот|штучн|вигадан)|хто ти|що ти таке|ти існуєш|це рольова/.test(normalizedQuestion);
  const asksFutureOrMagic = /передбач|спрогноз|майбутн|лотере|курс валют|акці|крипт|що буде завтра|виграю/.test(normalizedQuestion);
  const asksEmotionalSupport = /мені (сумно|страшно|важко|тривожно|погано)|я втомил|я вигор|підтримай|заспокой/.test(normalizedQuestion);
  const isComplaintOrInsult = /дурн|туп|безглузд|не подобаєш|ти поган|фігня|бісиш|дратуєш|ненавид/.test(normalizedQuestion);
  const isCompliment = /класн|супер|дякую|дяка|молодець|ти крута|ти класна|гарна відповідь|подобається/.test(normalizedQuestion);
  const asksJoke = /пожарт|жарт|смішн|анекдот|розсміши/.test(normalizedQuestion);

  if (mentionedName && mentionedName !== firstName.toLowerCase()) {
    const wrongName = getPersonaChatDisplayName(mentionedName);
    const answer = pickPersonaChatVariant(
      [
        `Привіт. Я не ${wrongName}, я ${firstName}. ${wrongName} сьогодні не на зміні, здається. Можеш питати мене про мій досвід, сумніви, болі або очікування - з чого хочеш почати?`,
        `Ой, майже, але ні: я ${firstName}, не ${wrongName}. З таким звертанням це була б уже інша розмова, а я відповідаю з того, що знаю про свій досвід. Що хочеш у мене розкопати?`,
        `Привіт. ${wrongName} звучить переконливо, але в цьому чаті я ${firstName}. Можу говорити про свої болі, мотивації й очікування - куди копаємо?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "evidence_based",
      confidence: "high",
      disclaimer: "",
      relatedSignals: [{ signal: `Ім'я персони: ${persona.name}`, source: "Профіль персони" }],
      supportingQuotes: [],
    };
  }

  if (isSimpleGreeting) {
    const answer = pickPersonaChatVariant(
      [
        `Привіт. Я ${firstName}. Можемо поговорити про те, що мене дратує, що мотивує або де я, чесно, починаю втрачати терпіння. Про який сценарій хочеш мене розпитати?`,
        `Привіт. Я ${firstName}. Я тут не для світської бесіди на три години, але для чесної розмови про досвід - цілком. Що хочеш перевірити через мене?`,
        `Привіт. Я ${firstName}. Якщо коротко: можу бути корисною там, де треба зрозуміти реакцію, сумнів або біль користувача. З чого почнемо?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "evidence_based",
      confidence: "high",
      disclaimer: "",
      relatedSignals: [{ signal: `Ім'я персони: ${persona.name}`, source: "Профіль персони" }],
      supportingQuotes: [],
    };
  }

  if (asksSensitiveChoice) {
    const answer = pickPersonaChatVariant(
      [
        `Ох, політичний бюлетень у мої feedback-дані не завантажували. Я не буду вдавати, що знаю, за кого голосувала б, навіть якщо ти даєш мені два варіанти - це вже занадто точний особистий факт. Але можу сказати, як я зазвичай обирала б між двома продуктами чи рішеннями: менше шуму, більше ясності, і щоб потім не довелося розгрібати наслідки. Хочеш переформулювати це як вибір між двома продуктовими рішеннями?`,
        `Я б тут красиво викрутилась, але не буду вигадувати собі політичну біографію. У даних немає мого голосування, країни чи політичних поглядів, тож чесна відповідь: не знаю. Зате можу зіграти чесного користувача й обрати між двома фічами або пропозиціями - даси варіанти?`,
        `Якби в мене був бюлетень, я б спершу попросила нормальний онбординг до кандидатів. Але серйозно: у даних немає політичних сигналів, тому я не можу обрати кандидата як факт. Можу натомість пояснити, які критерії довіри для мене важливі, якщо це допоможе?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "insufficient_data",
      confidence: "low",
      disclaimer: personaChatAnswerMeta.insufficient_data.helper,
      relatedSignals: [
        { signal: "Політичні погляди або голосування не присутні в завантажених feedback-даних.", source: "Межі даних" },
      ],
      supportingQuotes: [],
    };
  }

  if (asksIdentityOrMeta) {
    const answer = pickPersonaChatVariant(
      [
        `Я не реальна людина, але й не просто табличка з висновками. Я AI-персона, зібрана з feedback-патернів, тому можу говорити живо, але мої "спогади" мають межі. Хочеш перевірити мене на конкретному сценарії?`,
        `Чесно? Я така собі напівжива проєкція користувацького досвіду: голос є, паспорт не видали. Можу відповідати як персона, але якщо факту немає в даних - я позначу це як припущення. Про що спитаєш?`,
        `Я не людина з кавою в руці, хоча іноді хотілося б. Я AI-персона на основі feedback, тож можу допомогти зрозуміти реакції, сумніви й очікування. Який продуктовий момент розберемо?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "evidence_based",
      confidence: "high",
      disclaimer: "",
      relatedSignals: [{ signal: "AI-персона сформована з customer feedback, а не є реальною людиною.", source: "Системне обмеження" }],
      supportingQuotes: [],
    };
  }

  if (asksFutureOrMagic) {
    const answer = pickPersonaChatVariant(
      [
        `Я б із радістю дістала кришталеву кулю, але її, здається, не додали в тариф. Я не можу передбачати майбутнє як факт, зате можу оцінити, що виглядає ризиковано або привабливо з точки зору такої персони, як я. Що саме хочеш перевірити як гіпотезу?`,
        `Майбутнє я не бачу, максимум - патерни й слабкі сигнали. Якщо коротко: можу сказати, що мене переконало б або насторожило, але не ворожити. Даси конкретний сценарій?`,
        `Ох, прогнозування - це небезпечна територія, там навіть люди з графіками іноді ковзають. Я краще відповім як користувачка: що мені здалося б зрозумілим, корисним або зайвим. Про яке рішення говоримо?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "insufficient_data",
      confidence: "low",
      disclaimer: personaChatAnswerMeta.insufficient_data.helper,
      relatedSignals: [{ signal: "У даних немає підстав для точного прогнозу майбутніх подій.", source: "Межі даних" }],
      supportingQuotes: [],
    };
  }

  if (asksEmotionalSupport) {
    const answer = pickPersonaChatVariant(
      [
        `Ох, звучить так, ніби день уже трохи перегнув палицю. Я не терапевт, але по-людськи сказала б: зменшити шум, вибрати один маленький наступний крок і не вимагати від себе героїзму. Хочеш, я подивлюся на це як користувачка і скажу, що саме зараз найбільше тисне?`,
        `Мені знайоме це відчуття "ще одне рішення - і я зависну". Я б почала не з великого плану, а з дуже маленького кроку, який повертає контроль. Хочеш розкласти ситуацію на простіше?`,
        `Я б сказала: спочатку видихнути, потім уже оптимізувати світ. Якщо зараз усе здається занадто великим, давай знайдемо одну річ, яку можна спростити. Про що саме йдеться?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "hypothetical",
      confidence: "low",
      disclaimer: personaChatAnswerMeta.hypothetical.helper,
      relatedSignals: [
        { signal: (persona.pains || [])[0] || "Персона чутлива до перевантаження і зайвих рішень.", source: "Поведінковий патерн" },
      ],
      supportingQuotes: [],
    };
  }

  if (isComplaintOrInsult) {
    const answer = pickPersonaChatVariant(
      [
        `Окей, прийняла без бантика. Якщо я відповіла повз, краще ткни мене в конкретне місце - я не ображусь, я ж із даних, у мене его на мінімалках. Що саме було не так: тон, зміст чи я не туди звернула?`,
        `Справедливо, могла промахнутись. Я краще уточню, ніж робитиму вигляд, що все прекрасно. Ти хочеш більш пряму, більш живу чи більш доказову відповідь?`,
        `Ай, боляче, але корисно. Давай перезберемо: що саме ти хотіла почути від мене як від персони?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "hypothetical",
      confidence: "medium",
      disclaimer: personaChatAnswerMeta.hypothetical.helper,
      relatedSignals: [{ signal: "Користувач дає реакцію на якість відповіді, а не питає про факт із даних.", source: "Контекст діалогу" }],
      supportingQuotes: [],
    };
  }

  if (isCompliment) {
    const answer = pickPersonaChatVariant(
      [
        `Дякую. Я б почервоніла, але в мене немає відповідного UI-стану. Хочеш тепер копнути глибше в мої болі або перевірити якусь гіпотезу?`,
        `О, приємно. Значить, ще не дарма мене зібрали з feedback і трохи характеру. Що наступне перевіряємо?`,
        `Дякую, це звучить краще, ніж "перепиши ще раз". Хочеш поставити мені складніше питання?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "hypothetical",
      confidence: "medium",
      disclaimer: personaChatAnswerMeta.hypothetical.helper,
      relatedSignals: [{ signal: "Small talk відповідь сформована з personality layer, а не з прямої цитати.", source: "Контекст діалогу" }],
      supportingQuotes: [],
    };
  }

  if (asksJoke) {
    const answer = pickPersonaChatVariant(
      [
        `Мій улюблений жарт: "Ми швиденько розберемо feedback вручну". І десь у цей момент у когось відкривається п'ята таблиця. Хочеш, я краще пожартую про конкретний продуктовий біль?`,
        `Жарт із мого світу: користувач сказав "усе нормально", а потім залишив 14 коментарів у support. Класика жанру. Про що хочеш поговорити серйозніше?`,
        `Можу пожартувати, але попереджаю: мій гумор теж evidence-based. Найсмішніше тут те, як часто "маленька правка" перетворюється на окремий roadmap. Який біль розбираємо?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "hypothetical",
      confidence: "low",
      disclaimer: personaChatAnswerMeta.hypothetical.helper,
      relatedSignals: [{ signal: "Гумор сформований із контексту продуктового feedback, а не з прямої цитати.", source: "Persona personality layer" }],
      supportingQuotes: [],
    };
  }

  if (asksFoodAdvice) {
    const answer = pickPersonaChatVariant(
      [
        `Хм, я б не йшла в кулінарний подвиг. Я б обрала щось дуже просте: пасту з тим, що є під рукою, омлет із салатом або гречку/рис із чимось теплим зверху. Після насиченого дня мій критерій такий: мінімум рішень, мінімум посуду, максимум шансів не пошкодувати. Ти хочеш варіант "за 15 хвилин" чи щось трохи приємніше, але все ще без героїзму?`,
        `Я б сказала: щось, що не вимагає ще одного мініпроєкту ввечері. Наприклад, тости з яйцем, теплий салат або паста з соусом, який не треба захищати на продуктовому комітеті. Тобі треба дуже швидко чи щоб виглядало ніби ти старався?`,
        `Чесно? Я б пішла шляхом "смачно, але без драми": омлет, паста або рис із овочами. Якщо день був хаотичний, вечеря має бути не випробуванням характеру, а кнопкою "видихнути". Хочеш варіант для холодильника, де майже нічого немає?`,
      ],
      variantIndex,
    );

    return {
      answer,
      answerType: "hypothetical",
      confidence: "low",
      disclaimer: personaChatAnswerMeta.hypothetical.helper,
      relatedSignals: [
        { signal: persona.summary, source: "Профіль персони" },
        {
          signal: (persona.pains || [])[0] || "Персона тяжіє до рішень, які зменшують навантаження і кількість зайвих виборів.",
          source: "Поведінковий патерн",
        },
      ],
      supportingQuotes: [],
    };
  }

  return null;
};

const looksLikePersonaSummaryAnswer = (persona, answerData, question) => {
  const answer = String(answerData?.answer || "").trim().toLowerCase();
  const summary = String(persona.summary || "").trim().toLowerCase();
  const normalizedQuestion = String(question || "").toLowerCase();
  const asksLifestyleOrAdvice = /порадь|пригот|вечер|обід|снідан|страва|їжа|любиш|улюблен|хобі|вихідн|відпоч|звичк|побут|настр|емоці/.test(
    normalizedQuestion,
  );

  if (!answer || !asksLifestyleOrAdvice) {
    return false;
  }

  const hasFirstPerson = /\b(я|мені|мною|моє|моя|мій|мене|я б|чесно|мабуть|хм)\b/i.test(answer);
  const isCloseToSummary = summary && (answer === summary || answer.includes(summary.slice(0, 60)));
  const looksLikeStaticDescription =
    /^[а-яіїєґa-z ,'-]+, яка |^[а-яіїєґa-z ,'-]+, який |^[а-яіїєґa-z ,'-]+, що /i.test(answer) && !answer.includes("?");

  return !hasFirstPerson && (isCloseToSummary || looksLikeStaticDescription);
};

const normalizePersonaChatAnswer = (persona, answerData = null) => {
  const answerType =
    ["evidence_based", "hypothetical", "insufficient_data"].includes(answerData?.answerType)
      ? answerData.answerType
      : "evidence_based";
  const meta = personaChatAnswerMeta[answerType];
  const legacyQuotes = answerData?.quotes?.length ? answerData.quotes : persona.chatQuotes || [];
  const supportingQuotes = Array.isArray(answerData?.supportingQuotes)
    ? answerData.supportingQuotes.map((item) =>
        typeof item === "string"
          ? { quote: item, source: "Uploaded feedback", artifactId: "" }
          : {
              artifactId: item?.artifactId || "",
              quote: item?.quote || "",
              source: item?.source || "Uploaded feedback",
            },
      )
    : legacyQuotes.map((quote) => ({ artifactId: "", quote, source: "Uploaded feedback" }));
  const relatedSignals = Array.isArray(answerData?.relatedSignals)
    ? answerData.relatedSignals.map((item) =>
        typeof item === "string"
          ? { signal: item, source: "Persona context" }
          : { signal: item?.signal || "", source: item?.source || "Persona context" },
      )
    : [];
  const sources = answerData?.sources?.length
    ? answerData.sources
    : supportingQuotes.length
      ? [...new Set(supportingQuotes.map((item) => item.source).filter(Boolean))]
      : ["Persona context"];

  return {
    answer: answerData?.answer || persona.chatAnswer,
    answerType,
    confidence: answerData?.confidence || meta.confidence,
    disclaimer: answerData?.disclaimer || meta.helper,
    relatedSignals,
    sources,
    supportingQuotes,
  };
};

const createLocalPersonaChatAnswerData = (persona, question, variantIndex = 0) => {
  const normalizedQuestion = question.toLowerCase();
  const shortcutAnswer = createPersonaChatShortcutAnswerData(persona, question, variantIndex);
  const firstName = persona.name.split(" ")[0];
  const localVoice = getPersonaLocalVoiceLines(persona);
  const asksPersonalTaste = /страва|їжа|любиш|улюблен|хобі|вихідн|відпоч|звичк|побут|настр|емоці/.test(normalizedQuestion);
  const asksSensitiveFact = /голосув|політик|адрес|телефон|дохід|зарплат|діагноз|здоров|вік|сімейн|дітей|релігі/.test(
    normalizedQuestion,
  );

  if (shortcutAnswer) {
    return shortcutAnswer;
  }

  if (asksSensitiveFact) {
    return {
      answer: localVoice.sensitive,
      answerType: "insufficient_data",
      confidence: "low",
      disclaimer: personaChatAnswerMeta.insufficient_data.helper,
      relatedSignals: [],
      supportingQuotes: [],
    };
  }

  if (asksPersonalTaste) {
    return {
      answer: localVoice.personalTaste,
      answerType: "hypothetical",
      confidence: "low",
      disclaimer: personaChatAnswerMeta.hypothetical.helper,
      relatedSignals: [
        { signal: persona.summary, source: "Профіль персони" },
        { signal: (persona.pains || [])[0] || "Повторюється потреба зменшити когнітивне навантаження.", source: "Патерни болей" },
        {
          signal: (persona.motivations || [])[0] || "Персона цінує швидкість, ясність і менше ручної роботи.",
          source: "Мотивації",
        },
      ],
      supportingQuotes: [],
    };
  }

  return {
    answer: localVoice.defaultAnswer,
    answerType: "evidence_based",
    confidence: "high",
    disclaimer: "",
    relatedSignals: [],
    supportingQuotes: (persona.chatQuotes || []).map((quote) => ({
      artifactId: "",
      quote,
      source: "Uploaded feedback",
    })),
  };
};

const createPersonaChatAnswer = (persona, answerData = null) => {
  const normalizedAnswer = normalizePersonaChatAnswer(persona, answerData);
  const meta = personaChatAnswerMeta[normalizedAnswer.answerType];
  const confidenceLabel = personaChatConfidenceLabels[normalizedAnswer.confidence] || personaChatConfidenceLabels.low;
  const evidenceContent =
    normalizedAnswer.answerType === "insufficient_data"
      ? `<p>${escapeHTML(normalizedAnswer.disclaimer)}</p>`
      : normalizedAnswer.answerType === "hypothetical"
        ? `
          <p>${escapeHTML(normalizedAnswer.disclaimer || meta.helper)}</p>
          ${
            normalizedAnswer.relatedSignals.length
              ? `<h3>${meta.sectionTitle}</h3>
                ${normalizedAnswer.relatedSignals
                  .map(
                    (item) =>
                      `<blockquote>${escapeHTML(item.signal)}${item.source ? ` <span>${escapeHTML(item.source)}</span>` : ""}</blockquote>`,
                  )
                  .join("")}`
              : ""
          }
        `
        : `
          <div class="persona-chat-source-tags">
            ${normalizedAnswer.sources.map((source) => `<span>${escapeHTML(source)}</span>`).join("")}
          </div>
          ${
            normalizedAnswer.supportingQuotes.length
              ? `<h3>${meta.sectionTitle}</h3>
                ${normalizedAnswer.supportingQuotes
                  .map(
                    (item) =>
                      `<blockquote>"${escapeHTML(item.quote)}"${item.source ? ` <span>${escapeHTML(item.source)}</span>` : ""}</blockquote>`,
                  )
                  .join("")}`
              : normalizedAnswer.relatedSignals.length
                ? `${normalizedAnswer.relatedSignals
                    .map(
                      (item) =>
                        `<blockquote>${escapeHTML(item.signal)}${item.source ? ` <span>${escapeHTML(item.source)}</span>` : ""}</blockquote>`,
                    )
                    .join("")}`
                : ""
          }
        `;

  return `
  <div class="persona-chat-row persona-chat-row-ai">
    <span class="persona-chat-message-avatar">
      <img src="${persona.avatar}" alt="" />
    </span>
    <div class="persona-chat-response">
      <div class="persona-chat-bubble persona-chat-bubble-ai">
        <span class="persona-chat-answer-label persona-chat-answer-label-${normalizedAnswer.answerType}">
          ${meta.label}
        </span>
        <p>${escapeHTML(normalizedAnswer.answer)}</p>
      </div>
      <div class="persona-chat-evidence ${meta.className}">
        <div class="persona-chat-evidence-head">
          <h3>${meta.label}</h3>
          <span>${confidenceLabel}</span>
        </div>
        ${evidenceContent}
      </div>
    </div>
  </div>
`;
};

const createPersonaChatPayload = (persona, question, projectName = "") => ({
  context: {
    evidenceLibrary: (currentOutputData?.evidenceLibraryItems || []).slice(0, 12),
    projectName,
    voiceOfCustomer: (currentOutputData?.vocProblems || []).slice(0, 8),
  },
  persona: {
    barriers: persona.barriers || [],
    evidence: persona.evidence,
    field: persona.field,
    goals: persona.goals || [],
    motivations: persona.motivations || [],
    name: persona.name,
    pains: persona.pains || [],
    profession: persona.profession,
    quotes: persona.quotes || persona.chatQuotes || [],
    summary: persona.summary,
    voiceProfile: getPersonaVoiceProfile(persona),
  },
  question,
  responseGuidelines: {
    answerTypes: ["evidence_based", "hypothetical", "insufficient_data"],
    instruction:
      "Answer as a vivid evidence-backed AI persona. Use feedback as the source of truth. Support small talk through the persona personality. If the answer is inferred but not directly present, mark it as hypothetical and show a disclaimer. Ask one short follow-up question. Never invent precise personal facts without evidence.",
    language: "uk",
  },
});

const askPersonaWithApi = async (persona, question, projectName = "") => {
  if (!hyplyApiEndpoint) {
    return null;
  }

  const personaChatEndpoint = hyplyApiEndpoint.replace(/\/analyze$/, "/persona-chat");
  const { auth } = initFirebaseServices();
  const token = await auth?.currentUser?.getIdToken?.();
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 18000);
  let response;

  try {
    response = await fetch(personaChatEndpoint, {
      body: JSON.stringify(createPersonaChatPayload(persona, question, projectName)),
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      method: "POST",
      signal: controller.signal,
    });
  } finally {
    window.clearTimeout(timeoutId);
  }

  if (!response.ok) {
    throw new Error(`Persona Chat API failed with status ${response.status}`);
  }

  const result = await response.json();

  if (!result?.ok) {
    throw new Error(result?.error || result?.mode || "Persona Chat API returned an empty answer");
  }

  return result;
};

const setupPersonaChatModal = (overlay, persona, projectName = "") => {
  const input = overlay.querySelector(".persona-chat-form input");
  const form = overlay.querySelector("[data-persona-chat-form]");
  const sendButton = form.querySelector("button");
  const sendIcon = form.querySelector("[data-send-icon]");
  const messages = overlay.querySelector("[data-persona-chat-messages]");
  const emptyState = overlay.querySelector("[data-persona-chat-empty]");
  let answerTimer = null;
  const shortcutUsage = new Map();
  const shortcutVariantSeed = Math.floor(Math.random() * 3);

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

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const message = input.value.trim();

    if (!message) {
      return;
    }

    const shortcutKey = message.toLowerCase().replace(/\s+/g, " ").trim();
    const shortcutUseCount = shortcutUsage.get(shortcutKey) || 0;
    const shortcutVariantIndex = shortcutVariantSeed + shortcutUseCount;
    shortcutUsage.set(shortcutKey, shortcutUseCount + 1);

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

    answerTimer = window.setTimeout(async () => {
      let answerData = null;

      try {
        answerData = await askPersonaWithApi(persona, message, projectName);
        if (looksLikePersonaSummaryAnswer(persona, answerData, message)) {
          answerData = createLocalPersonaChatAnswerData(persona, message, shortcutVariantIndex);
        }
      } catch (error) {
        console.warn("Persona Chat API is unavailable, showing local persona answer", error);
        answerData = createLocalPersonaChatAnswerData(persona, message, shortcutVariantIndex);
      }

      overlay.querySelector("[data-persona-typing]")?.remove();
      messages.insertAdjacentHTML("beforeend", createPersonaChatAnswer(persona, answerData));
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

const openPersonaChat = (persona, projectName = "") => {
  document.querySelector("[data-persona-chat-overlay]")?.remove();
  document.body.insertAdjacentHTML("beforeend", createPersonaChatModal(persona));
  setupPersonaChatModal(document.querySelector("[data-persona-chat-overlay]"), persona, projectName);
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

const createVoiceOfCustomerScreen = (activeVocIndex = null) => {
  const outputData = currentOutputData || createDemoOutputData();

  return `
    <div class="output-scroll">
      <section class="voc-summary" aria-labelledby="voc-summary-title">
        <h2 id="voc-summary-title">
          <span class="voc-summary-title-icon" aria-hidden="true"></span>
          AI Підсумок
        </h2>
        <div class="voc-summary-grid">
          ${outputData.vocSummaryCards
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
        ${outputData.vocProblems.map((problem, index) => createVoiceOfCustomerCard(problem, index, activeVocIndex)).join("")}
      </section>
    </div>
  `;
};

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
      ${(currentOutputData || createDemoOutputData()).opportunityCards
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
  const cards = (currentOutputData || createDemoOutputData()).opportunityCards;

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
        ${cards
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
      <p data-opportunity-active-title>${(currentOutputData || createDemoOutputData()).opportunityCards[0]?.title || "Opportunity"}</p>
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
              <span>${label}<b data-opportunity-value="${metric}">${(currentOutputData || createDemoOutputData()).opportunityCards[0]?.[metric] || 5}</b></span>
              <input type="range" min="1" max="10" value="${(currentOutputData || createDemoOutputData()).opportunityCards[0]?.[metric] || 5}" data-opportunity-metric="${metric}" />
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
        ${(currentOutputData || createDemoOutputData()).opportunityCards.map((card, index) => createOpportunityCard(card, index)).join("")}
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
      ${(currentOutputData || createDemoOutputData()).hypothesisCards.map((hypothesis, index) => createHypothesisCard(hypothesis, index, activeHypothesisIndex)).join("")}
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
      ${(currentOutputData || createDemoOutputData()).evidenceLibraryItems.map(createEvidenceLibraryCard).join("")}
    </section>
  </div>
`;

const createPersonasScreen = (activePersonaIndex = null) => {
  const outputData = currentOutputData || createDemoOutputData();

  return `
    <div class="output-scroll">
      <section class="pain-section" aria-labelledby="pain-title">
        <div class="pain-section-head">
          <h2 id="pain-title">Основні болі персон</h2>
          <span>${outputData.personaPains.length} проблем</span>
        </div>
        <div class="pain-grid">
          ${outputData.personaPains.map(createPainCard).join("")}
        </div>
      </section>
      <section class="personas-grid" aria-label="Сформовані персони">
        ${outputData.personas.map((persona, index) => createPersonaCard(persona, index, activePersonaIndex)).join("")}
      </section>
    </div>
  `;
};

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
          <a class="output-back" href="./cabinet-no-projects.html" aria-label="Назад">
            ${createBackIcon()}
          </a>
          <h1>${projectName}</h1>
          <details class="output-action-menu">
            <summary class="output-more-button" aria-label="Дії з проєктом">
              ${createMoreIcon()}
            </summary>
            <div class="output-actions">
              ${createIconButton(figmaAssets.actionEdit, "Редагувати назву проєкту", "edit")}
              ${createIconButton(figmaAssets.actionUpload, "Дозавантажити дані", "upload")}
              ${createIconButton(figmaAssets.actionDelete, "Видалити проєкт", "delete")}
              ${createMobileAiDownloadButton()}
            </div>
          </details>
        </div>
        ${createAiDownloadButton()}
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

  const state = (currentOutputData || createDemoOutputData()).opportunityCards.map((card) => ({ ...card }));
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
  currentOutputData = createOutputDataFromAnalysis(projectName);

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
      openPersonaChat((currentOutputData || createDemoOutputData()).personas[Number(button.dataset.personaChat)], projectName);
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

  cabinetMain.querySelectorAll("[data-export-ai-insights]").forEach((button) => {
    button.addEventListener("click", () => {
      exportAiInsights(projectName, button.dataset.exportAiInsights);
      button.closest(".ai-download-menu")?.removeAttribute("open");
      button.closest(".output-action-menu")?.removeAttribute("open");
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

const readProjectAnalysisMap = () => {
  try {
    const analysisMap = JSON.parse(window.localStorage.getItem(projectAnalysisStorageKey) || "{}");

    return analysisMap && typeof analysisMap === "object" && !Array.isArray(analysisMap) ? analysisMap : {};
  } catch {
    return {};
  }
};

const writeProjectAnalysis = (projectName, analysis) => {
  if (!projectName || !analysis) {
    return;
  }

  const analysisMap = readProjectAnalysisMap();

  analysisMap[projectName] = analysis;
  window.localStorage.setItem(projectAnalysisStorageKey, JSON.stringify(analysisMap));
};

const getStoredProjectAnalysis = (projectName) => {
  const stored = readProjectAnalysisMap()[projectName];

  if (!stored) {
    return null;
  }

  return stored.analysis || stored;
};

const clampScore = (value, fallback = 5) => {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return fallback;
  }

  return Math.max(1, Math.min(10, Math.round(number)));
};

const normalizeSeverity = (severity = "med") => {
  const value = String(severity).toLowerCase();

  if (value.includes("high") || value.includes("вис")) {
    return "high";
  }

  if (value.includes("low") || value.includes("низ")) {
    return "low";
  }

  return "med";
};

const getSeverityLabel = (severity) =>
  ({
    high: "Високий",
    low: "Низький",
    med: "Середній",
  })[normalizeSeverity(severity)];

const getPersonaInitials = (name = "") => {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);

  if (!parts.length) {
    return "AI";
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

const createDemoOutputData = () => ({
  evidenceLibraryItems,
  hypothesisCards,
  opportunityCards,
  personaPains,
  personas,
  vocProblems,
  vocSummaryCards,
});

const createOutputDataFromAnalysis = (projectName) => {
  const analysis = getStoredProjectAnalysis(projectName);

  if (!analysis?.personas?.length && !analysis?.voiceOfCustomer?.length) {
    return createDemoOutputData();
  }

  const normalizedPersonas = (analysis.personas || []).map((persona, index) => {
    const quotes = Array.isArray(persona.quotes) ? persona.quotes.filter(Boolean) : [];
    const pains = Array.isArray(persona.pains) ? persona.pains.filter(Boolean) : [];
    const goals = Array.isArray(persona.goals) ? persona.goals.filter(Boolean) : [];
    const motivations = Array.isArray(persona.motivations) ? persona.motivations.filter(Boolean) : [];
    const barriers = Array.isArray(persona.barriers) ? persona.barriers.filter(Boolean) : [];

    const normalizedPersona = {
      avatar: personaAvatarVariants[index % personaAvatarVariants.length],
      barriers,
      chatAnswer:
        persona.summary ||
        "Ця AI-персона сформована з патернів, цитат і повторюваних сигналів у завантажених даних.",
      chatQuotes: quotes.slice(0, 3),
      evidence: `${Number(persona.evidenceCount || quotes.length || pains.length || 1)} evidence`,
      evidenceCount: Number(persona.evidenceCount || quotes.length || pains.length || 1),
      field: persona.field || "Customer feedback",
      goals,
      insights: `${Math.max(1, quotes.length + pains.length)} insights`,
      motivations,
      name: persona.name || `Персона ${index + 1}`,
      pains,
      profession: persona.profession || "Користувач продукту",
      quotes,
      summary: persona.summary || "Сформована на основі повторюваних сигналів із завантажених файлів.",
    };

    return {
      ...normalizedPersona,
      voiceProfile: persona.voiceProfile || getPersonaVoiceProfile(normalizedPersona),
    };
  });

  const normalizedVoc = (analysis.voiceOfCustomer || []).map((problem, index) => {
    const severity = normalizeSeverity(problem.severity);
    const quotes = Array.isArray(problem.quotes) ? problem.quotes.filter(Boolean) : [];
    const affectedPersonas = Array.isArray(problem.affectedPersonas) ? problem.affectedPersonas.filter(Boolean) : [];

    return {
      count: Number(problem.mentions || quotes.length || index + 1),
      mentions: `${Number(problem.mentions || quotes.length || 1)} згадок`,
      personas: affectedPersonas.map((name) => [getPersonaInitials(name), name]),
      quotes,
      segments: Array.isArray(problem.segments) ? problem.segments.filter(Boolean) : [],
      severity,
      severityLabel: getSeverityLabel(severity),
      sources: Array.isArray(problem.sources) ? problem.sources.filter(Boolean) : [],
      title: problem.problem || `Проблема ${index + 1}`,
    };
  });

  const normalizedOpportunities = (analysis.opportunities || []).map((opportunity, index) => {
    const impact = clampScore(opportunity.impact, 7);
    const confidence = clampScore(opportunity.confidence, 7);
    const effort = clampScore(opportunity.effort, 4);
    const reach = clampScore(opportunity.reach, 6);
    const evidenceCount = Number(opportunity.evidenceCount || 1);
    const severity = impact >= 8 ? "high" : impact >= 5 ? "med" : "low";

    return {
      confidence,
      effort,
      evidence: `${evidenceCount} evidence`,
      impact,
      opportunity: opportunity.opportunity || `Можливість ${index + 1}`,
      personas: (opportunity.relatedPersonas || []).map(getPersonaInitials),
      problem: opportunity.problem || "Проблема з customer feedback",
      reach,
      severity,
      severityLabel: getSeverityLabel(severity),
      title: opportunity.opportunity || `Можливість ${index + 1}`,
    };
  });

  const normalizedHypotheses = (analysis.hypotheses || []).map((hypothesis, index) => {
    const confidence = Math.max(1, Math.min(100, Math.round(Number(hypothesis.confidenceScore || 65))));
    const evidence = Array.isArray(hypothesis.supportingEvidence) ? hypothesis.supportingEvidence.filter(Boolean) : [];

    return {
      because: hypothesis.because || "це випливає з повторюваних сигналів у feedback",
      confidence,
      confidenceTone: confidence >= 80 ? "success" : "warning",
      evidence: `${evidence.length || 1} evidence`,
      id: `H-${String(index + 1).padStart(2, "0")}`,
      ifText: hypothesis.if || `ми реалізуємо можливість ${index + 1}`,
      leadingMetric: hypothesis.leadingMetric || "Активність у фічі",
      persona: hypothesis.targetPersona || normalizedPersonas[0]?.name || "Користувач",
      personaInitials: getPersonaInitials(hypothesis.targetPersona || normalizedPersonas[0]?.name),
      quotes: evidence,
      sources: evidence.length ? ["Uploaded feedback"] : ["AI analysis"],
      successMetric: hypothesis.successMetric || "Покращення ключового продуктового показника",
      thenText: hypothesis.then || "користувачі швидше отримають цінність",
      title: `IF ${hypothesis.if || `ми реалізуємо можливість ${index + 1}`}`,
    };
  });

  const normalizedEvidence = (analysis.evidenceLibrary || []).map((item, index) => ({
    hypothesis: item.relatedHypotheses?.[0] || `H-${String((index % Math.max(1, normalizedHypotheses.length)) + 1).padStart(2, "0")}`,
    mentions: `${Number(item.mentions || 1)} згадок`,
    persona: item.relatedPersonas?.[0] || normalizedPersonas[0]?.name || "Користувач",
    personaInitials: getPersonaInitials(item.relatedPersonas?.[0] || normalizedPersonas[0]?.name),
    quote: item.quote || "Цитата з завантажених даних",
    source: item.source || "Uploaded feedback",
    tags: (item.relatedProblems || []).slice(0, 2).map((tag) => `#${String(tag).split(" ")[0].toLowerCase()}`),
  }));

  const normalizedPains = normalizedVoc.slice(0, 5).map((problem) => ({
    emoji: {
      high: figmaAssets.painHigh,
      low: figmaAssets.painLow,
      med: figmaAssets.painMed,
    }[problem.severity],
    mentions: problem.mentions,
    status: problem.severity,
    title: problem.title,
  }));

  const summarySource = normalizedVoc.length ? normalizedVoc : vocProblems;
  const normalizedSummary = summarySource.slice(0, 6).map((problem) => ({
    emoji:
      problem.severity === "high"
        ? "🔥"
        : problem.severity === "low"
          ? "💬"
          : "💡",
    text: `${problem.title} - ${problem.mentions}`,
  }));

  return {
    evidenceLibraryItems: normalizedEvidence.length ? normalizedEvidence : evidenceLibraryItems,
    hypothesisCards: normalizedHypotheses.length ? normalizedHypotheses : hypothesisCards,
    opportunityCards: normalizedOpportunities.length ? normalizedOpportunities : opportunityCards,
    personaPains: normalizedPains.length ? normalizedPains : personaPains,
    personas: normalizedPersonas.length ? normalizedPersonas : personas,
    vocProblems: normalizedVoc.length ? normalizedVoc : vocProblems,
    vocSummaryCards: normalizedSummary.length ? normalizedSummary : vocSummaryCards,
  };
};

let currentOutputData = createDemoOutputData();

const cleanReportValue = (value) => String(value ?? "").replace(/\s+/g, " ").trim();

const createReportFileName = (projectName, extension) => {
  const slug =
    cleanReportValue(projectName)
      .toLowerCase()
      .replace(/["'«»“”]/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "hyply-project";

  return `${slug}-ai-insights.${extension}`;
};

const downloadTextFile = (fileName, content, mimeType) => {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
};

const markdownList = (items, fallback = "Немає даних") =>
  items?.length ? items.map((item) => `- ${cleanReportValue(item)}`).join("\n") : `- ${fallback}`;

const markdownQuotes = (quotes, fallback = "Немає цитат") =>
  quotes?.length ? quotes.map((quote) => `> ${cleanReportValue(quote)}`).join("\n\n") : `> ${fallback}`;

const buildMarkdownReport = (projectName, data = createDemoOutputData()) => {
  const generatedAt = new Date().toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return `# Hyply AI-висновки

## Проєкт
Назва: ${cleanReportValue(projectName)}
Дата експорту: ${generatedAt}

---

# 1. Executive Summary

## Ключові висновки
${markdownList((data.vocSummaryCards || []).map((card) => card.text))}

## Основні болі персон
${markdownList((data.personaPains || []).map((pain) => `${pain.title} — ${pain.mentions} (${pain.status})`))}

---

# 2. Personas

${(data.personas || [])
  .map(
    (persona, index) => `## Persona ${index + 1}: ${cleanReportValue(persona.name)}
Роль: ${cleanReportValue(persona.profession)}
Сфера: ${cleanReportValue(persona.field)}
Evidence: ${cleanReportValue(persona.evidence)}

### Короткий опис
${cleanReportValue(persona.summary)}

### Головна ціль
${markdownList(persona.goals)}

### Ключові болі
${markdownList(persona.pains)}

### Мотивації
${markdownList(persona.motivations)}

### Бар'єри
${markdownList(persona.barriers)}

### Типові цитати
${markdownQuotes(persona.quotes || persona.chatQuotes)}
`,
  )
  .join("\n---\n\n")}

# 3. Voice of Customer Map

${(data.vocProblems || [])
  .map(
    (problem, index) => `## Проблема ${index + 1}: ${cleanReportValue(problem.title)}
Severity: ${cleanReportValue(problem.severityLabel)}
Mentions: ${cleanReportValue(problem.mentions)}
Affected personas: ${cleanReportValue((problem.personas || []).map((persona) => persona[1]).join(", "))}

### Приклади цитат
${markdownQuotes(problem.quotes)}

### Джерела
${markdownList(problem.sources)}

### Сегменти
${markdownList(problem.segments)}
`,
  )
  .join("\n---\n\n")}

# 4. Opportunity Map

${(data.opportunityCards || [])
  .map(
    (opportunity, index) => `## Opportunity ${index + 1}: ${cleanReportValue(opportunity.title)}
Проблема: ${cleanReportValue(opportunity.problem)}
Можливість: ${cleanReportValue(opportunity.opportunity)}
Потенційний вплив: ${cleanReportValue(opportunity.severityLabel)}
Evidence: ${cleanReportValue(opportunity.evidence)}
Пов'язані персони: ${cleanReportValue((opportunity.personas || []).join(", "))}

### ICE / RICE score
Impact: ${opportunity.impact}
Confidence: ${opportunity.confidence}
Ease: ${11 - Number(opportunity.effort || 1)}
Reach: ${opportunity.reach}
Effort: ${opportunity.effort}
`,
  )
  .join("\n---\n\n")}

# 5. Hypothesis Pack

${(data.hypothesisCards || [])
  .map(
    (hypothesis) => `## ${cleanReportValue(hypothesis.id)} — ${cleanReportValue(hypothesis.title)}

**IF** ${cleanReportValue(hypothesis.ifText)}

**THEN** ${cleanReportValue(hypothesis.thenText)}

**BECAUSE** ${cleanReportValue(hypothesis.because)}

Target Persona: ${cleanReportValue(hypothesis.persona)}
Success Metric: ${cleanReportValue(hypothesis.successMetric)}
Leading Metric: ${cleanReportValue(hypothesis.leadingMetric)}
Confidence Score: ${hypothesis.confidence}%
Evidence: ${cleanReportValue(hypothesis.evidence)}

### Supporting Evidence
${markdownQuotes(hypothesis.quotes)}
`,
  )
  .join("\n---\n\n")}

# 6. Evidence Library

${(data.evidenceLibraryItems || [])
  .map(
    (item, index) => `## Evidence ${index + 1}
Цитата:
> ${cleanReportValue(item.quote)}

Джерело: ${cleanReportValue(item.source)}
Кількість згадок: ${cleanReportValue(item.mentions)}
Пов'язана персона: ${cleanReportValue(item.persona)}
Пов'язана гіпотеза: ${cleanReportValue(item.hypothesis)}
Теги: ${cleanReportValue((item.tags || []).join(", "))}
`,
  )
  .join("\n---\n\n")}
`;
};

const buildTextReport = (projectName, data = createDemoOutputData()) =>
  buildMarkdownReport(projectName, data)
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*/g, "")
    .replace(/^>\s?/gm, "Цитата: ");

const csvEscape = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;

const buildCsvReport = (projectName, data = createDemoOutputData()) => {
  const rows = [["section", "title", "type", "metric", "details"]];

  (data.personas || []).forEach((persona) => {
    rows.push(["Personas", persona.name, persona.profession, persona.evidence, persona.summary]);
  });

  (data.vocProblems || []).forEach((problem) => {
    rows.push(["Voice of Customer", problem.title, problem.severityLabel, problem.mentions, (problem.quotes || []).join(" | ")]);
  });

  (data.opportunityCards || []).forEach((opportunity) => {
    rows.push(["Opportunities", opportunity.title, opportunity.severityLabel, opportunity.evidence, opportunity.opportunity]);
  });

  (data.hypothesisCards || []).forEach((hypothesis) => {
    rows.push(["Hypotheses", hypothesis.id, `${hypothesis.confidence}%`, hypothesis.evidence, `IF ${hypothesis.ifText} THEN ${hypothesis.thenText} BECAUSE ${hypothesis.because}`]);
  });

  (data.evidenceLibraryItems || []).forEach((item) => {
    rows.push(["Evidence Library", item.source, item.persona, item.mentions, item.quote]);
  });

  return rows.map((row) => row.map(csvEscape).join(",")).join("\n");
};

const exportAiInsights = (projectName, format = "md") => {
  const data = currentOutputData || createOutputDataFromAnalysis(projectName);
  const formats = {
    csv: {
      content: buildCsvReport(projectName, data),
      extension: "csv",
      mime: "text/csv",
    },
    txt: {
      content: buildTextReport(projectName, data),
      extension: "txt",
      mime: "text/plain",
    },
    md: {
      content: buildMarkdownReport(projectName, data),
      extension: "md",
      mime: "text/markdown",
    },
  };
  const exportFormat = formats[format] || formats.md;

  downloadTextFile(createReportFileName(projectName, exportFormat.extension), exportFormat.content, exportFormat.mime);
};

const createAnalysisPayload = (projectName, files) => ({
  files: files.map((file) => ({
    extractionStatus: file.extractionStatus || "metadata-only",
    name: file.name,
    size: file.size || 0,
    text: file.text || "",
    textLength: file.textLength || file.text?.length || 0,
    textTruncated: Boolean(file.textTruncated),
    type: file.type || getFileExtension(file.name),
  })),
  projectName,
  requestedOutputs: ["personas", "voiceOfCustomer", "opportunities", "hypotheses", "evidenceLibrary"],
});

const analyzeProjectWithApi = async (projectName, files) => {
  if (!hyplyApiEndpoint) {
    throw new Error("Analysis API endpoint is not configured");
  }

  const { auth } = initFirebaseServices();
  const token = await auth?.currentUser?.getIdToken?.();
  const response = await fetch(hyplyApiEndpoint, {
    body: JSON.stringify(createAnalysisPayload(projectName, files)),
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Analysis API failed with status ${response.status}`);
  }

  const result = await response.json();

  if (!result?.ok || !result?.analysis) {
    throw new Error(result?.error || result?.mode || "Analysis API returned no analysis");
  }

  return result;
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
    window.setTimeout(async () => {
      try {
        const analysisResult = await analyzeProjectWithApi(projectName, analyzedProjectFiles);

        writeProjectAnalysis(projectName, analysisResult);
        writeProjectFiles(projectName, analyzedProjectFiles);
        addCreatedProject(projectName);
        renderSidebarProjects();
        showThankYouView(projectName);
      } catch (error) {
        console.error("Analysis API failed", error);
        document.body.classList.remove("is-analysis-running");
        window.sessionStorage.setItem(
          projectToastStorageKey,
          "Не вдалося проаналізувати файли. Перевірте API або спробуйте ще раз.",
        );
        window.location.href = "./cabinet-no-projects.html";
      }
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
    if (projectInput && !projectNameOverride) {
      projectInput.value = "";
    }
    renderUploadedFiles(uploadedFiles, uploadedFilesState, removeUploadedFile);
    updateAnalyzeButton();
  });

  if (initializeFromExisting) {
    renderUploadedFiles(uploadedFiles, uploadedFilesState, removeUploadedFile);
  } else {
    renderUploadedFiles(uploadedFiles, uploadedFilesState, removeUploadedFile);
  }

  const setUploadedFilesWithRemove = async (files) => {
    const allowedFiles = Array.from(files).filter(isAllowedFile);

    if (allowedFiles.length === 0) {
      uploadInput.value = "";
      return;
    }

    analyzeButton.disabled = true;
    analyzeButton.classList.remove("button-active");

    const nextFiles = await Promise.all(
      allowedFiles.map(async (file) => {
        const textData = await readFileTextForAnalysis(file);

        return {
          ...textData,
          displaySize: formatFileSize(file.size),
          isNew: true,
          name: file.name,
          size: file.size,
          uploadedAt: new Date().toISOString(),
        };
      }),
    );

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

const createProjectFileSummaries = (files) =>
  files.map((file) => ({
    displaySize: file.displaySize || formatFileSize(file.size),
    extractionStatus: file.extractionStatus || "metadata-only",
    hasExtractedText: Boolean(file.text),
    name: file.name,
    size: file.size || 0,
    textLength: file.textLength || file.text?.length || 0,
    textTruncated: Boolean(file.textTruncated),
    type: file.type || getFileExtension(file.name),
    uploadedAt: file.uploadedAt || new Date().toISOString(),
  }));

const saveProjectToFirestore = async (projectName) => {
  const projectsCollection = getUserProjectCollection();

  if (!projectsCollection || !projectName) {
    return;
  }

  const files = readProjectFiles(projectName);

  try {
    await projectsCollection.doc(getFirebaseProjectDocId(projectName)).set(
      {
        files: createProjectFileSummaries(files),
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

const setupMobileCabinetMenu = () => {
  const toggle = document.querySelector("[data-cabinet-menu-toggle]");
  const panel = document.querySelector("[data-cabinet-sidebar-panel]");

  if (!toggle || !panel) {
    return;
  }

  const closeMenu = () => {
    document.body.classList.remove("is-cabinet-menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Відкрити меню");
  };

  const openMenu = () => {
    document.body.classList.add("is-cabinet-menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Закрити меню");
  };

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("is-cabinet-menu-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  panel.querySelectorAll("a, button").forEach((control) => {
    control.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("is-cabinet-menu-open")) {
      return;
    }

    if (panel.contains(event.target) || toggle.contains(event.target)) {
      return;
    }

    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
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
  setupMobileCabinetMenu();
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
      const uploadFlowRoot = uploadProjectModal?.querySelector(".project-upload-modal");

      clearUploadDomState(uploadFlowRoot);
      uploadFlowRoot?.dispatchEvent(new CustomEvent("reset-upload-flow"));
      modalUploadProjectInput.value = projectName;
      createProjectInput.value = "";
      closeModal(createProjectModal);
      openModal(uploadProjectModal);
    });
  }

  const requestedProjectName = getProjectNameFromUrl();

  if (document.body.classList.contains("cabinet-has-projects") && requestedProjectName) {
    renderSidebarProjects();
    showOutputView(requestedProjectName);
  }
}
