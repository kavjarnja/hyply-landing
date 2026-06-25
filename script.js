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

const cabinetUploadInput = document.querySelector(".cabinet-body #feedback-files");
const cabinetProjectInput = document.querySelector(".cabinet-body #project-name");
const cabinetAnalyzeButton = document.querySelector(".cabinet-body .project-form button");
const cabinetDropZone = document.querySelector(".cabinet-body .drop-zone");
const cabinetUploadedFiles = document.querySelector(".cabinet-body .uploaded-files");
const defaultProjectName = "Проєкт #1";

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

const renderUploadedFiles = (files, { removable = false } = {}) => {
  if (!cabinetUploadedFiles) {
    return;
  }

  cabinetUploadedFiles.replaceChildren();
  cabinetUploadedFiles.hidden = files.length === 0;

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

    if (removable) {
      removeButton.addEventListener("click", () => {
        uploadedFilesState.splice(index, 1);
        renderUploadedFiles(uploadedFilesState, { removable: true });
        updateAnalyzeButton();
      });
    }

    row.append(badge, name, size, removeButton);
    cabinetUploadedFiles.append(row);
  });
};

let uploadedFilesState = [];

const scrollToUploadedFiles = () => {
  if (!cabinetUploadedFiles || cabinetUploadedFiles.hidden) {
    return;
  }

  requestAnimationFrame(() => {
    cabinetUploadedFiles.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
};

if (cabinetUploadInput && cabinetProjectInput && cabinetAnalyzeButton && !document.body.classList.contains("cabinet-has-projects")) {
  const updateAnalyzeButton = () => {
    const hasFiles = uploadedFilesState.length > 0;

    cabinetAnalyzeButton.disabled = !hasFiles;
    cabinetAnalyzeButton.classList.toggle("button-active", hasFiles);
  };

  const setUploadedFiles = (files) => {
    uploadedFilesState = Array.from(files).map((file) => ({
      name: file.name,
      size: file.size,
    }));

    renderUploadedFiles(uploadedFilesState, { removable: true });
    updateAnalyzeButton();

    if (uploadedFilesState.length > 0) {
      scrollToUploadedFiles();
    }
  };

  cabinetUploadInput.addEventListener("change", () => {
    setUploadedFiles(cabinetUploadInput.files);
  });

  if (cabinetDropZone) {
    ["dragenter", "dragover"].forEach((eventName) => {
      cabinetDropZone.addEventListener(eventName, (event) => {
        event.preventDefault();
        cabinetDropZone.classList.add("is-dragover");
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      cabinetDropZone.addEventListener(eventName, () => {
        cabinetDropZone.classList.remove("is-dragover");
      });
    });

    cabinetDropZone.addEventListener("drop", (event) => {
      event.preventDefault();
      setUploadedFiles(event.dataTransfer.files);
    });
  }

  cabinetProjectInput.addEventListener("input", updateAnalyzeButton);
  cabinetAnalyzeButton.addEventListener("click", () => {
    if (!cabinetAnalyzeButton.disabled) {
      if (!cabinetProjectInput.value.trim()) {
        cabinetProjectInput.value = defaultProjectName;
      }

      cabinetAnalyzeButton.dataset.projectName = cabinetProjectInput.value.trim();
    }
  });

  updateAnalyzeButton();
}
