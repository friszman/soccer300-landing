import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  console.log("🔥 Request method:", req.method); // ✅ Add this line

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, name } = req.body;

  if (!image || !name) {
    return res.status(400).json({ error: 'Missing image or name' });
  }

  const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');

  const filePath = path.join(process.cwd(), 'public', 'images', name);

  try {
    fs.writeFileSync(filePath, buffer);
    const publicUrl = `https://soccer300.com/images/${name}`;
    return res.status(200).json({ success: true, url: publicUrl });
  } catch (err) {
    console.error('File write error:', err);
    return res.status(500).json({ error: 'Failed to save image' });
  }
}