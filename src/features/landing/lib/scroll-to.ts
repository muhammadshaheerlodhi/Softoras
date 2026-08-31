export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function scrollToHero() {
  const hero = document.getElementById("hero");
  if (hero) {
    hero.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", "/");
    return;
  }
  window.location.href = "/";
}
