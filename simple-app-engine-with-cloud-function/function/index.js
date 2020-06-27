const translate = require('@google-cloud/translate')();

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.toFrench = async (req, res) => {
  res.header('Content-Type','application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
      
  //respond to CORS preflight requests
  if (req.method == 'OPTIONS') {
    res.status(204).send('');
  }
  
  const text = req.query.message || req.body.message || '';

  // Translates some text into Russian
  translate.translate(text, {from: 'en', to: 'fr'}).then(
    (results) => {
      res.status(200).send(results[0]);
    })
  
  
};
