# simple-web-app

The goal of this app is to demonstrate a simple HTML page, served by App Engine. It also calls a Cloud Function and renders the results.

## Local Development
Stand up a local python server by running:
cd www
python -m SimpleHTTPServer 8000

## Cloud Function
The source code for the cloud function that performs the translation is in the function/ directory. The cloud function makes a call to the Translate API.

## Deploy
To deploy, run:
gcloud app deploy
