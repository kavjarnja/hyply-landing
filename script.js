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
