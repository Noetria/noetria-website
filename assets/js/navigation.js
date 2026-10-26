document.addEventListener("click", (event) => {
  document.querySelectorAll(".nav-menu, .mobile-menu").forEach((menu) => {
    if (!menu.contains(event.target) || event.target.closest("a")) {
      menu.open = false;
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  const openMenus = document.querySelectorAll(".nav-menu[open], .mobile-menu[open]");
  openMenus.forEach((menu) => {
    menu.open = false;
    menu.querySelector("summary")?.focus();
  });
});
