document.addEventListener("DOMContentLoaded", function () {
    // Seadistame nupud lehekülgede ja projektide jaoks
    setupToggleButton('toggle-pages', 'pages', 'Näita lehekülgi', 'Peida leheküljed');
    setupToggleButton('toggle-learning', 'learning-pages', 'Näita Projekte', 'Peida Projekte');

    // Google Translate eelistuste taastamine
    waitForGoogleTranslate();

    // Salvestab valitud keele LocalStorage'i
    document.addEventListener("change", function (event) {
        if (event.target.classList.contains("goog-te-combo")) {
            localStorage.setItem("selectedLang", event.target.value);
        }
    });
});

// Funktsioon, mis määrab nupule vajutamisel sisu nähtavuse
function setupToggleButton(buttonId, sectionId, showText, hideText) {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);

    if (button && section) {
        button.addEventListener('click', function () {
            toggleVisibility(section, button, showText, hideText);
        });
    }
}

// Funktsioon, mis peidab/näitab sektsiooni sujuvalt
function toggleVisibility(section, button, showText, hideText) {
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        setTimeout(() => section.style.opacity = 1, 10);
        button.textContent = hideText;
    } else {
        section.style.opacity = 0;
        setTimeout(() => section.style.display = 'none', 500);
        button.textContent = showText;
    }
}

// Google Translate eelistuste taastamine
function waitForGoogleTranslate() {
    const checkTranslate = setInterval(() => {
        const translateSelect = document.querySelector(".goog-te-combo");
        if (translateSelect) {
            clearInterval(checkTranslate);
            applyLanguagePreference(translateSelect);
        }
    }, 100);
}

// Funktsioon, mis määrab keelevaliku tagasi kui leht laetakse uuesti
function applyLanguagePreference(translateSelect) {
    const selectedLang = localStorage.getItem("selectedLang");
    if (selectedLang && translateSelect) {
        translateSelect.value = selectedLang;
        translateSelect.dispatchEvent(new Event("change"));
    }
}
