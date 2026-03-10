function renderAgents() {
  const agentsGrid = document.getElementById("agents-grid");
  if (!agentsGrid) return;

  agentsGrid.innerHTML = agents
    .map((agent) => {
      return `
        <a
          href="docs.html?doc=${agent.docId}"
          class="${agent.bgClass} ${agent.textClass} rounded-[1.5rem] p-10 flex flex-col justify-between min-h-[300px] ${agent.spanClass || ""} hover:scale-[1.01] transition-transform"
        >
          <div>
            <h3 class="text-5xl md:text-[4rem] font-extrabold tracking-encora mb-4">
              ${agent.number}
            </h3>
            <h4 class="text-xl md:text-2xl font-bold mb-2">
              ${agent.title}
            </h4>
          </div>
          <p class="text-lg font-medium ${agent.descriptionClass} ${agent.descriptionWrapperClass || ""}">
            ${agent.description}
          </p>
        </a>
      `;
    })
    .join("");
}

function renderFAQs() {
  const faqContainer = document.getElementById("faq-container");
  if (!faqContainer) return;

  faqContainer.innerHTML = faqs
    .map((faq) => {
      const isExpanded = faq.expanded;
      const titleColorClass = isExpanded
        ? "text-encoraBlueText"
        : "text-encoraNavy group-hover:text-encoraBlueText";
      const contentExpandedClass = isExpanded ? "expanded" : "";
      const iconName = isExpanded ? "x" : "plus";
      const iconButtonClass = isExpanded
        ? "text-encoraBlueText"
        : "text-encoraNavy group-hover:text-encoraBlueText";

      return `
        <div class="accordion-item border-b border-[#D1D1D1] py-8">
          <div class="flex justify-between items-start cursor-pointer group accordion-header">
            <h3
              class="text-xl md:text-2xl font-medium transition-colors accordion-title w-1/3 md:w-1/3 ${titleColorClass}"
            >
              ${faq.question}
            </h3>
            <div class="w-2/3 md:w-[60%] accordion-content ${contentExpandedClass} ml-auto md:ml-0">
              <p class="text-encoraGrayText text-sm md:text-base leading-relaxed pr-8">
                ${faq.answer}
              </p>
            </div>
            <button
              class="ml-4 focus:outline-none accordion-icon self-start mt-1 ${iconButtonClass}"
              type="button"
            >
              <i data-lucide="${iconName}" class="w-6 h-6 stroke-[1.5]"></i>
            </button>
          </div>
        </div>
      `;
    })
    .join("");
}

function initializeAccordion() {
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const content = item.querySelector(".accordion-content");
      const title = item.querySelector(".accordion-title");
      const iconBtn = item.querySelector(".accordion-icon");
      const icon = iconBtn.querySelector("i");
      const isExpanded = content.classList.contains("expanded");

      document
        .querySelectorAll(".accordion-content")
        .forEach((c) => c.classList.remove("expanded"));
      document.querySelectorAll(".accordion-title").forEach((t) => {
        t.classList.remove("text-encoraBlueText");
        t.classList.add("text-encoraNavy");
      });
      document.querySelectorAll(".accordion-icon i").forEach((i) => {
        i.setAttribute("data-lucide", "plus");
        i.parentElement.classList.remove("text-encoraBlueText");
        i.parentElement.classList.add("text-encoraNavy");
      });

      if (!isExpanded) {
        content.classList.add("expanded");
        title.classList.remove("text-encoraNavy");
        title.classList.add("text-encoraBlueText");
        iconBtn.classList.remove("text-encoraNavy");
        iconBtn.classList.add("text-encoraBlueText");
        icon.setAttribute("data-lucide", "x");
      } else {
        icon.setAttribute("data-lucide", "plus");
      }

      lucide.createIcons();
    });
  });
}

function initializeApp() {
  renderTopNavbar("home");
  renderAgents();
  renderFAQs();
  lucide.createIcons();
  initializeAccordion();
}

document.addEventListener("DOMContentLoaded", initializeApp);
