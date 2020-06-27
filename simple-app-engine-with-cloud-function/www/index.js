// Take the input text and translate to French.
function translate() {
    let text = encodeURI(document.getElementById('input').value);
    const Http = new XMLHttpRequest();
    const url=`https://us-central1-simple-232901.cloudfunctions.net/translate?message=${text}`;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        document.getElementById('output').innerText = Http.responseText;
    }
    

}

document.getElementById('button').addEventListener('click', translate);
