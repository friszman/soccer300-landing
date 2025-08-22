import { put } from '@vercel/blob';

export default async function handler(req, res) {
  try {
    const { base64Image, filenamePrefix = 'upload' } = req.body;

    if (!base64Image) {
      console.error("❌ Missing base64Image in request body");
      return res.status(400).json({ error: 'Missing base64Image' });
    }

    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const blob = await put(`${filenamePrefix}-${Date.now()}.png`, buffer, {
      access: 'public',
      contentType: 'image/png',
    });

    console.log("✅ Upload successful:", blob.url);
    return res.status(200).json({ url: blob.url });

  } catch (error) {
    console.error("🔥 Error during upload:", error.message);
    return res.status(500).json({ error: 'Failed to upload image', details: error.message });
  }
}
