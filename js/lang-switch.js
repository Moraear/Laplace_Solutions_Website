(function () {
    const button = document.getElementById("lang-switch");
    if (!button) {
        console.error("Language switch button not found!");
        return;
    }
  
    const fullPath = window.location.pathname;
    const parts = fullPath.split("/").filter(Boolean);
    
    console.log("Current pathname:", fullPath);
    console.log("Path parts:", parts);
  
    // Detect current language from URL
    let currentLang = "en"; // default
    let langIndex = -1;
    
    // Find which part of the path contains the language
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === "en" || parts[i] === "fr") {
            currentLang = parts[i];
            langIndex = i;
            break;
        }
    }
    
    console.log("Detected language:", currentLang);
    console.log("Language index:", langIndex);
    
    // Determine target language
    const targetLang = currentLang === "en" ? "fr" : "en";
    
    // Build new path
    let newPath;
    if (langIndex === -1) {
        // No language in path, add it
        newPath = "/" + targetLang + "/" + parts.join("/");
    } else {
        // Replace current language with target language
        const newParts = [...parts];
        newParts[langIndex] = targetLang;
        newPath = "/" + newParts.join("/");
    }
    
    // Ensure path ends with / or .html
    if (!newPath.endsWith("/") && !newPath.includes(".html")) {
        newPath += "/";
    }
    
    console.log("Target path:", newPath);
  
    // Update button text to show target language
    button.textContent = targetLang.toUpperCase();
  
    // Navigate on click
    button.addEventListener("click", function () {
        console.log("Navigating to:", newPath);
        window.location.href = newPath;
    });
})();