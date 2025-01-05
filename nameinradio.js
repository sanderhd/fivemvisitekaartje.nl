document.addEventListener('DOMContentLoaded', function() {
    const roepnummerInput = document.getElementById('roepnummer');
    const nameInput = document.getElementById('name');

    const nameOutput = document.getElementById('naamoutput');
    const outputField = document.getElementById('output-field');
    const copyButton = document.getElementById('copy-button');

    const keyInput = document.getElementById('key-input');
    const f8OutputField = document.getElementById('f8-output-field');

    roepnummerInput.addEventListener('input', updatePreview);
    nameInput.addEventListener('input', updatePreview);

    keyInput.addEventListener('input', updateF8Code);
    outputField.addEventListener('input', updateF8Code);
    f8OutputField.addEventListener('input', updateF8Code);

    function updatePreview() {
        const roepnummer = roepnummerInput.value || 'Geen Roepnummer Ingevuld';
        const name = nameInput.value || 'Geen Naam Ingevuld';

        const formattedOutput = `[${roepnummer}] ${name}`;
        nameOutput.textContent = formattedOutput;
        outputField.value = formattedOutput;

        updateF8Code();
    }

    function updateF8Code() {
        const key = keyInput.value.trim();
        const text = outputField.value.trim();
        const f8Code = key ? `bind keyboard ${key} "nameinradio ${text}"` : '';
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
