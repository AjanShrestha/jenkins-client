// npm packages
const rp = require('request-promise');

// our packages
const {getJenkinsAPIUrl} = require('./config');

const API = '/api/json';
const CRUMB_ISSUER = `/crumbIssuer${API}`;

/**
 * Builds the URL to Jenkins strictly.
 *
 * @returns {string} url - the formatted URL.
 */
function buildUrl() {
  const host = getJenkinsAPIUrl();
  return host + CRUMB_ISSUER;
}

/**
 * Run the actual HTTP request.
 *
 */
const jenkinsCrumbRequest = function() {
  const requestOptions = {
    uri: buildUrl(),
    json: true,
  };
  // Do the request
  return rp(requestOptions)
    .then(res => res)
    .catch(error => error);
};

module.exports = jenkinsCrumbRequest;