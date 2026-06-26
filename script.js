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
  personaChatPromptIcon: "https://www.figma.com/api/mcp/asset/5a9bef4a-264e-4e49-86e4-2cd80cff592e",
  personaChatSendActiveIcon: "https://www.figma.com/api/mcp/asset/d43555f4-2488-4f6f-8e5e-2ffe59365341",
  personaChatSendDisabledIcon: "https://www.figma.com/api/mcp/asset/3584b587-c381-4440-b14d-9c164a89aeaa",
};
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
const outputTabs = [
  ["Personas", 3],
  ["Voice of Customer", 4],
  ["Opportunities", 3],
  ["Hypotheses", 3],
  ["Evidence Library", 3],
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

const getExistingUploadedFiles = (uploadedFiles) =>
  Array.from(uploadedFiles.querySelectorAll(".uploaded-file")).map((fileRow) => ({
    displaySize: fileRow.querySelector("small")?.textContent.trim() || "22 KB",
    name: fileRow.querySelector("strong")?.textContent.trim() || "uploaded-file.txt",
    size: 0,
  }));

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

const createIconButton = (asset, label) => `
  <button class="output-icon-button" type="button" aria-label="${label}">
    <img src="${asset}" alt="" />
  </button>
`;

const createOutputTabs = () => `
  <nav class="output-tabs" aria-label="Структура результатів аналізу">
    ${outputTabs
      .map(
        ([label, count], index) => `
          <button class="${index === 0 ? "is-active" : ""}" type="button">
            <span>${label}</span>
            <small>${count}</small>
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
    <span class="pain-status"><span>${painStatusLabels[pain.status]}</span></span>
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
              <blockquote>"Я витрачаю мінімум 3 години на тиждень на аналіз відгуків вручну."</blockquote>
              <blockquote>"Мені потрібна система, яка показує патерни, а не просто список коментарів."</blockquote>
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

const createOutputScreen = (projectName, activePersonaIndex = 0) => `
  <section class="output-view" aria-label="Результати аналізу">
    <header class="output-header">
      <div class="output-title-row">
        <a class="output-back" href="./cabinet-have-projects.html" aria-label="Назад">
          ${createBackIcon()}
        </a>
        <h1>${projectName}</h1>
        <div class="output-actions">
          ${createIconButton(figmaAssets.actionEdit, "Редагувати назву проєкту")}
          ${createIconButton(figmaAssets.actionUpload, "Дозавантажити дані")}
          ${createIconButton(figmaAssets.actionDelete, "Видалити проєкт")}
        </div>
      </div>
      <button class="ai-finds-button" type="button">
        ${createAiFindsIcon()}
        Топ AI-знахідок
      </button>
    </header>
    ${createOutputTabs()}
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
  </section>
`;

const renderOutputView = (cabinetMain, projectName, activePersonaIndex = 0) => {
  cabinetMain.innerHTML = createOutputScreen(projectName, activePersonaIndex);

  cabinetMain.querySelectorAll("[data-persona-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      renderOutputView(cabinetMain, projectName, Number(button.dataset.personaToggle));
    });
  });

  cabinetMain.querySelectorAll("[data-persona-chat]").forEach((button) => {
    button.addEventListener("click", () => {
      openPersonaChat(personas[Number(button.dataset.personaChat)]);
    });
  });
};

const showOutputView = (projectName) => {
  const cabinetMain = document.querySelector(".cabinet-main");

  if (!cabinetMain) {
    return;
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

const setupUploadFlow = (root, { initializeFromExisting = false } = {}) => {
  if (!root) {
    return;
  }

  const uploadInput = root.querySelector('input[type="file"]');
  const projectInput = root.querySelector(".project-form input");
  const analyzeButton = root.querySelector(".project-form button");
  const dropZone = root.querySelector(".drop-zone");
  const uploadedFiles = root.querySelector(".uploaded-files");
  let uploadedFilesState = [];

  if (!uploadInput || !projectInput || !analyzeButton || !dropZone || !uploadedFiles) {
    return;
  }

  if (initializeFromExisting) {
    uploadedFilesState = getExistingUploadedFiles(uploadedFiles);
  }

  const updateAnalyzeButton = () => {
    const hasFiles = uploadedFilesState.length > 0;

    analyzeButton.disabled = !hasFiles;
    analyzeButton.classList.toggle("button-active", hasFiles);
  };

  const removeUploadedFile = (index) => {
    uploadedFilesState.splice(index, 1);
    uploadInput.value = "";
    renderUploadedFiles(uploadedFiles, uploadedFilesState, removeUploadedFile);
    updateAnalyzeButton();
  };

  const setUploadedFilesWithRemove = (files) => {
    uploadedFilesState = Array.from(files)
      .filter(isAllowedFile)
      .map((file) => ({
        name: file.name,
        size: file.size,
      }));

    renderUploadedFiles(uploadedFiles, uploadedFilesState, removeUploadedFile);
    updateAnalyzeButton();

    if (uploadedFilesState.length > 0) {
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

  projectInput.addEventListener("input", updateAnalyzeButton);
  analyzeButton.addEventListener("click", () => {
    if (!analyzeButton.disabled) {
      if (!projectInput.value.trim()) {
        projectInput.value = defaultProjectName;
      }

      analyzeButton.dataset.projectName = projectInput.value.trim();
      startAnalysisView(projectInput.value.trim());
    }
  });

  updateAnalyzeButton();
};

if (document.body.classList.contains("cabinet-body")) {
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

      modalUploadProjectInput.value = projectName;
      createProjectInput.value = "";
      closeModal(createProjectModal);
      openModal(uploadProjectModal);
    });
  }
}
