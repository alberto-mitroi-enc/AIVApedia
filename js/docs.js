function getCurrentDocId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("doc") || agentDocs[0].id;
}

function getSortedDocs() {
  return [...agentDocs].sort((a, b) => a.order - b.order);
}

function getDocById(docId) {
  return agentDocs.find((doc) => doc.id === docId) || agentDocs[0];
}

function renderSidebar(activeDocId) {
  const sidebar = document.getElementById("docs-sidebar");
  if (!sidebar) return;

  const sortedDocs = getSortedDocs();

  sidebar.innerHTML = sortedDocs
    .map((doc) => {
      const isActive = doc.id === activeDocId;
      return `
        <a
          href="docs.html?doc=${doc.id}"
          class="sidebar-link ${isActive ? "active" : ""}"
        >
          ${doc.order.toString().padStart(2, "0")}. ${doc.title}
        </a>
      `;
    })
    .join("");
}

function renderPrevNextLinks(currentDocId) {
  const sortedDocs = getSortedDocs();
  const currentIndex = sortedDocs.findIndex((doc) => doc.id === currentDocId);

  const prevDoc = currentIndex > 0 ? sortedDocs[currentIndex - 1] : null;
  const nextDoc =
    currentIndex < sortedDocs.length - 1 ? sortedDocs[currentIndex + 1] : null;

  const prevLink = document.getElementById("prev-doc-link");
  const prevTitle = document.getElementById("prev-doc-title");
  const nextLink = document.getElementById("next-doc-link");
  const nextTitle = document.getElementById("next-doc-title");

  if (prevDoc) {
    prevLink.href = `docs.html?doc=${prevDoc.id}`;
    prevTitle.textContent = prevDoc.title;
    prevLink.classList.remove("pointer-events-none", "opacity-50");
  } else {
    prevLink.href = "#";
    prevTitle.textContent = "No previous document";
    prevLink.classList.add("pointer-events-none", "opacity-50");
  }

  if (nextDoc) {
    nextLink.href = `docs.html?doc=${nextDoc.id}`;
    nextTitle.textContent = nextDoc.title;
    nextLink.classList.remove("pointer-events-none", "opacity-50");
  } else {
    nextLink.href = "#";
    nextTitle.textContent = "No next document";
    nextLink.classList.add("pointer-events-none", "opacity-50");
  }
}

function addCopyButtons() {
  const codeBlocks = document.querySelectorAll(".docs-prose pre");

  codeBlocks.forEach((block) => {
    if (block.querySelector(".copy-button")) return;

    const button = document.createElement("button");
    button.innerText = "Copy";
    button.className = "copy-button";

    button.addEventListener("click", async () => {
      const code = block.querySelector("code");
      const text = code ? code.innerText : block.innerText;

      try {
        await navigator.clipboard.writeText(text);

        button.innerText = "Copied!";
        button.classList.add("success");

        setTimeout(() => {
          button.innerText = "Copy";
          button.classList.remove("success");
        }, 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    });

    block.appendChild(button);
  });
}

function slugifyHeading(text, index) {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^\w]+/g, "-")
      .replace(/^-+|-+$/g, "") + `-${index}`
  );
}

function generateTOC() {
  const content = document.getElementById("docs-content");
  const toc = document.getElementById("toc");
  const promptToc = document.getElementById("prompt-toc");

  if (!content || !toc || !promptToc) return;

  const headings = content.querySelectorAll("h2, h3");
  toc.innerHTML = "";
  promptToc.innerHTML = "";

  let insidePromptLibrary = false;

  headings.forEach((heading, index) => {
    const text = heading.textContent.trim();
    const id = slugifyHeading(text, index);
    heading.id = id;

    if (heading.tagName === "H2" && text.toLowerCase() === "prompt library") {
      insidePromptLibrary = true;
      return;
    }

    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = text;
    link.classList.add("toc-link");

    if (heading.tagName === "H3") {
      link.classList.add("toc-h3");
    }

    if (insidePromptLibrary) {
      promptToc.appendChild(link);
    } else {
      toc.appendChild(link);
    }
  });

  if (!promptToc.children.length) {
    promptToc.innerHTML = `<p class="text-encoraGrayText text-sm">No prompt sections in this document.</p>`;
  }
}

async function renderDocument(doc) {
  const titleEl = document.getElementById("page-title");
  const contentEl = document.getElementById("docs-content");

  titleEl.textContent = doc.title;
  contentEl.innerHTML = "<p>Loading documentation...</p>";

  try {
    const response = await fetch(doc.file);

    if (!response.ok) {
      throw new Error(`Could not load ${doc.file}`);
    }

    const markdown = await response.text();
    const html = marked.parse(markdown);
    contentEl.innerHTML = html;
    addCopyButtons();
    generateTOC();

    const target = document.getElementById("current-doc-header");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      titleEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } catch (error) {
    contentEl.innerHTML = `
      <div class="bg-white rounded-[1.5rem]">
        <h2 class="text-2xl font-bold mb-4">Document not found</h2>
        <p class="text-encoraGrayText">
          The requested document could not be loaded.
        </p>
        <p class="text-encoraGrayText mt-2">
          File: <code>${doc.file}</code>
        </p>
      </div>
    `;
  }
}

async function initializeDocsPage() {
  renderTopNavbar("docs");

  const currentDocId = getCurrentDocId();
  const currentDoc = getDocById(currentDocId);

  renderSidebar(currentDoc.id);
  renderPrevNextLinks(currentDoc.id);
  await renderDocument(currentDoc);
  lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", initializeDocsPage);
