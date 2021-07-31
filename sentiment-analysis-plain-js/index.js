// Take the input text and analyze sentiment.
function analyze() {
    // Structure of this request came from the documentation here:
    // https://cloud.google.com/natural-language/docs/analyzing-sentiment#language-sentiment-string-protocol
    let data = {
        encodingType: 'UTF8',
        document: {
            type: 'PLAIN_TEXT',
            content: document.getElementById('input').value,
        }
    };
    // TODO: create a service account using this documentation:
    // https://cloud.google.com/iam/docs/service-accounts
    // then run `gcloud auth application-default print-access-token` to generate an access token you can use here:
    let key = '';
    fetch(`https://language.googleapis.com/v1/documents:analyzeSentiment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(response => {
            document.getElementById('output').innerText = `Magnitude: ${response.documentSentiment.magnitude} Score: ${response.documentSentiment.score}`;
        });
}

document.getElementById('button').addEventListener('click', analyze);
