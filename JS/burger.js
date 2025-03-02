document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const nameColorDropdown = document.getElementById('name-color-dropdown');

    const phoneInput = document.getElementById('telefoon');
    const phoneColorDropdown = document.getElementById('phone-color-dropdown');

    const deepwebInput = document.getElementById('deepweb');
    const deepwebColorDropdown = document.getElementById('deepweb-color-dropdown');

    const nameOutput = document.getElementById('naamoutput');
    const outputField = document.getElementById('output-field');
    const copyButton = document.getElementById('copy-button'); // Ensure this element exists in the HTML

    const keyInput = document.getElementById('key-input');
    const f8OutputField = document.getElementById('f8-output-field');
    const copyF8Button = document.getElementById('copy-f8-button');

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

    nameInput.addEventListener('input', updatePreview);
    nameColorDropdown.addEventListener('change', updatePreview);
    phoneInput.addEventListener('input', updatePreview);
    phoneColorDropdown.addEventListener('change', updatePreview);
    deepwebInput.addEventListener('input', updatePreview);
    deepwebColorDropdown.addEventListener('change', updatePreview);

    keyInput.addEventListener('input', updateF8Code);
    outputField.addEventListener('input', updateF8Code);
    f8OutputField.addEventListener('input', updateF8Code);

    function applyStyles(text) {
        return text.replace(/~[rbygpcmuohs]~/g, match => {
            return `<span style="${colorStyles[match]}">`;
        }).replace(/~n~/g, '<br>').replace(/~s~/g, '</span>');
    }

    function updatePreview() {
        const name = nameInput.value || 'Geen Naam Ingevuld';
        const nameColor = colorMap[nameColorDropdown.value] || '';
        const formattedName = `${nameColor}${name}~s~`;

        const phone = phoneInput.value || '';
        const phoneColor = colorMap[phoneColorDropdown.value] || '';
        const formattedPhone = phone ? `${phoneColor}${phone}~s~` : '';

        const deepweb = deepwebInput.value || '';
        const deepwebColor = colorMap[deepwebColorDropdown.value] || '';
        const formattedDeepweb = deepweb ? `${deepwebColor}${deepweb}~s~` : '';

        const formattedOutput = [formattedName, formattedPhone, formattedDeepweb].filter(Boolean).join(' | ');
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

    copyF8Button.addEventListener('click', function() {
        f8OutputField.select();
        document.execCommand('copy');
        alert('F8 Code gekopieerd naar klembord!');
    });

    // Initial call to update the F8 code preview
    updateF8Code();
});
