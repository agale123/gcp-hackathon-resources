// Take the input text and translate to French.
function translate() {
    // Structure of this request came from the documentation here:
    // https://cloud.google.com/translate/docs/basic/quickstart#translate_translate_text-drest
    let data = {
        q: document.getElementById('input').value,
        source: 'en',
        target: 'fr',
        format: 'text',
    }
    // TODO: follow these instructions to generate an API key to use here:
    // https://cloud.google.com/docs/authentication/api-keys#creating_an_api_key
    let key = '';
    fetch(`https://translation.googleapis.com/language/translate/v2?key=${key}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(response => {
            document.getElementById('output').innerText = response.data.translations[0].translatedText;
        });
}

document.getElementById('button').addEventListener('click', translate);
