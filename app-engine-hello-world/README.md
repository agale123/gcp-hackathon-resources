# Python3 App Engine Quickstart

## Download the Hello World App

1. Clone the Hello World sample app to your local machine

`git clone https://github.com/GoogleCloudPlatform/python-docs-samples`

2. Change to the directory that contains the sample code

`cd python-docs-samples/appengine/standard_python37/hello_world`

## Run Hello World on your local machine

1. Create an isolated Python environment in a directory external to your project and activate it:

`python3 -m venv env`

`source env/bin/activate`

2. Navigate to your project directory and install dependencies:

`cd hello_world`

`pip install  -r requirements.txt`

3. Run the application:

`python main.py`

4. In your web browser, enter the following address:
http://localhost:8080

## Deploy on App Engine

1. Deploy the Hello World app by running the following command from the standard_python37/hello_world directory:

`gcloud app deploy`

2. Launch your browser to view the app at https://PROJECT_ID.REGION_ID.r.appspot.com

`gcloud app browse`

where PROJECT_ID represents your Google Cloud project ID.

## Clean up

1. Deactivate the virtual environment

`deactivate`