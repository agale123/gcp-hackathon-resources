// Take the input text and translate to French.
function translate() {
    let text = encodeURI(document.getElementById('input').value);
    fetch(`https://us-central1-simple-232901.cloudfunctions.net/translate?message=${text}`)
        .then(response => response.text())
        .then(response => {
            document.getElementById('output').innerText = response;
        });
}

document.getElementById('button').addEventListener('click', translate);
