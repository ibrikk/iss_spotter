/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = (callback) => { 
  request('https://api.ipify.org?format=json', (error, response, body) => {
  if (error) {
    return callback(error, null);
  }
  if (response.statusCode !== 200) {
    const msg = `Invalid status code: ${response.statusCode}. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }

  const ipStr = (JSON.parse(body)).ip;
  console.log(`my IP address is: ${ipStr}`);
  callback(null, ipString);
  });
  // use request to fetch IP address from JSON API

}

module.exports = { fetchMyIP };

