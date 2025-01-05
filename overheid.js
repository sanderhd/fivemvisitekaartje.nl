document.addEventListener('DOMContentLoaded', function() {
    const roepnummerInput = document.getElementById('roepnummer');
    const roepnummerColorDropdown = document.getElementById('roepnummer-color-dropdown');

    const nameInput = document.getElementById('name');
    const nameColorDropdown = document.getElementById('name-color-dropdown');

    const nameOutput = document.getElementById('naamoutput');
    const outputField = document.getElementById('output-field');
    const copyButton = document.getElementById('copy-button');

    const keyInput = document.getElementById('key-input');
    const f8OutputField = document.getElementById('f8-output-field');

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

    keyInput.addEventListener('input', updateF8Code);
    outputField.addEventListener('input', updateF8Code);
    f8OutputField.addEventListener('input', updateF8Code);

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

        updateF8Code();
    }

    function updateF8Code() {
        const key = keyInput.value.trim();
        const text = outputField.value.trim();
        const f8Code = key ? `bind keyboard ${key} "me ${text}"` : '';
        f8OutputField.value = f8Code;
    }

    copyButton.addEventListener('click', function() {
        outputField.select();
        document.execCommand('copy');
        alert('Tekst gekopieerd naar klembord!');
    });

    // Initial call to update the F8 code preview
    updateF8Code();
});
