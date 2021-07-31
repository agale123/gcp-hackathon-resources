# Translate API Demo

1. Visit the Translation [quickstart](https://cloud.google.com/appengine/docs/standard/python3/quickstart)

2. Enable the API through ‘APIs and Services’ > ‘Library’

3. Create a service account on ‘IAM Admin’ > ‘Service accounts’

4. Set Google application credentials

`export GOOGLE_APPLICATION_CREDENTIALS="key.json"`

5. Run translate request

`curl -s -X POST -H "Content-Type: application/json"     -H "Authorization: Bearer "$(gcloud auth application-default print-access-token)     --data "{
  'q': 'The Great Pyramid of Giza (also known as the Pyramid of Khufu or the
        Pyramid of Cheops) is the oldest and largest of the three pyramids in
        the Giza pyramid complex.',
  'source': 'en',
  'target': 'es',
  'format': 'text'
}" "https://translation.googleapis.com/language/translate/v2"`