// api/proxy.js
export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const response = await fetch(decodeURIComponent(url));
    const data = await response.text();
    
    res.setHeader('Access-Control-Allow-Origin', '*'); // CORS fix
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch RSS' });
  }
}