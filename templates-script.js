document.addEventListener('DOMContentLoaded', function() {
    const keyInput = document.getElementById('key-input');

    const politieTemplate1 = document.getElementById('politie-template-1');
    const politieTemplate2 = document.getElementById('politie-template-2');

    const ambuTemplate1 = document.getElementById('ambu-template-1');
    const ambuTemplate2 = document.getElementById('ambu-template-2');

    const anwbTemplate1 = document.getElementById('anwb-template-1');
    const anwbTemplate2 = document.getElementById('anwb-template-2');

    keyInput.addEventListener('input', updateTemplates);

    function updateTemplates() {
        const key = keyInput.value || '';

        politieTemplate1.value = key ? `bind keyboard ${key} "me ~ws~ ~b~ Verwijderd Taser Pinnen"` : '';
        politieTemplate2.value = key ? `bind keyboard ${key} "me ~ws~ ~b~ Doet gordel van verdachte om/af"` : '';

        ambuTemplate1.value = key ? `bind keyboard ${key} "me ~ws~ ~b~ Controleert vitale functies"` : '';
        ambuTemplate2.value = key ? `bind keyboard ${key} "me ~ws~ ~b~ Verbindt wond"` : '';

        anwbTemplate1.value = key ? `bind keyboard ${key} "me ~ws~ ~b~ Repareert voertuig"` : '';
        anwbTemplate2.value = key ? `bind keyboard ${key} "me ~ws~ ~b~ Sleepwagen aankoppelen"` : '';
    }
});
