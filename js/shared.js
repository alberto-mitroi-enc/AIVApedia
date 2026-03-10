function renderTopNavbar(activePage = "home") {
  const container = document.getElementById("top-navbar");
  if (!container) return;

  const docsActiveClass =
    activePage === "docs"
      ? "text-encoraLime"
      : "text-white/80 hover:text-white transition-colors";

  const homeActiveClass =
    activePage === "home"
      ? "text-encoraLime"
      : "text-white/80 hover:text-white transition-colors";

  container.innerHTML = `
    <header
      class="absolute top-0 left-0 w-full z-50 px-6 sm:px-12 lg:px-80 py-8 flex justify-between items-center"
    >
      <a href="AIVApedia.html" class="flex items-center gap-2">
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 70 C 20 40, 50 20, 80 40"
            stroke="#DDF82A"
            stroke-width="12"
            stroke-linecap="round"
            fill="none"
          />
          <path
            d="M30 50 L 50 80 L 70 50"
            stroke="#DDF82A"
            stroke-width="12"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
        <span class="text-encoraLime font-bold text-3xl tracking-tight">
          AIVApedia
        </span>
      </a>

      <nav class="hidden md:flex items-center gap-8 text-lg font-semibold tracking-wide">
        <a href="AIVApedia.html" class="${homeActiveClass}">Home</a>
        <a href="docs.html" class="${docsActiveClass}">Docs</a>
      </nav>
    </header>
  `;
}
