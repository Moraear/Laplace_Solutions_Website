(function () {
    const button = document.getElementById("lang-switch");
    if (!button) return;
  
    const path = window.location.pathname;
    const parts = path.split("/").filter(Boolean);
  
    // Detect repo name (GitHub Pages project site)
    const repoOffset =
      parts.length && !["en", "fr"].includes(parts[0]) ? 1 : 0;
  
    const currentLang = parts[repoOffset];
    if (!["en", "fr"].includes(currentLang)) return;
  
    const rest = "/" + parts.slice(repoOffset + 1).join("/");
    const targetLang = currentLang === "en" ? "fr" : "en";
  
    const targetPath =
      "/" +
      (repoOffset ? parts[0] + "/" : "") +
      targetLang +
      (rest === "/" ? "/" : rest);
  
    // Update button label
    button.textContent = targetLang === "fr" ? "Français" : "English";
  
    button.addEventListener("click", function () {
      window.location.pathname = targetPath;
    });
  })();
  