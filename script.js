document.addEventListener('DOMContentLoaded', function() {
    const roepnummerInput = document.getElementById('roepnummer');
    const roepnummerColorDropdown = document.getElementById('roepnummer-color-dropdown');

    const nameInput = document.getElementById('name');
    const nameColorDropdown = document.getElementById('name-color-dropdown');

    const nameOutput = document.getElementById('naamoutput');
    const outputField = document.getElementById('output-field');
    const copyButton = document.getElementById('copy-button');
    const themeToggleButton = document.getElementById('theme-toggle-button');

    const colorMap = {
        'Red': '~r~',
        'Blue': '~b~',
        'Green': '~g~',
        'Yellow': '~y~',
        'Purple': '~p~',
        'Grey': '~c~',
        'Dark Grey': '~m~',
        'Black': '~u~',
        'Orange': '~o~'
    };

    const colorStyles = {
        '~r~': 'color: red;',
        '~b~': 'color: blue;',
        '~g~': 'color: green;',
        '~y~': 'color: yellow;',
        '~p~': 'color: purple;',
        '~c~': 'color: grey;',
        '~m~': 'color: darkgrey;',
        '~u~': 'color: black;',
        '~o~': 'color: orange;',
        '~s~': 'color: initial;',
        '~h~': 'font-weight: bold;',
        '~n~': '<br>'
    };

    roepnummerInput.addEventListener('input', updatePreview);
    roepnummerColorDropdown.addEventListener('change', updatePreview);
    nameInput.addEventListener('input', updatePreview);
    nameColorDropdown.addEventListener('change', updatePreview);

    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    function applyStyles(text) {
        return text.replace(/~[rbygpcmuohs]~/g, match => {
            return `<span style="${colorStyles[match]}">`;
        }).replace(/~n~/g, '<br>').replace(/~s~/g, '</span>');
    }

    function updatePreview() {
        const roepnummer = roepnummerInput.value || 'Geen Roepnummer Ingevuld';
        const roepnummerColor = colorMap[roepnummerColorDropdown.value] || '';
        const formattedRoepnummer = `${roepnummerColor}${roepnummer}~s~`;

        const name = nameInput.value || 'Geen Naam Ingevuld';
        const nameColor = colorMap[nameColorDropdown.value] || '';
        const formattedName = `${nameColor}${name}~s~`;

        const formattedOutput = [formattedRoepnummer, formattedName].filter(Boolean).join(' | ');
        nameOutput.innerHTML = applyStyles(formattedOutput);
        outputField.value = formattedOutput;
    }

    copyButton.addEventListener('click', function() {
        outputField.select();
        document.execCommand('copy');
        alert('Tekst gekopieerd naar klembord!');
    });
});
