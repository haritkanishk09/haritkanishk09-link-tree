// netlify/functions/rss-proxy.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const url = event.queryStringParameters.url;
  try {
    const response = await fetch(url);
    const data = await response.text();
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: data
    };
  } catch (err) {
    return { statusCode: 500, body: 'Error' };
  }
};