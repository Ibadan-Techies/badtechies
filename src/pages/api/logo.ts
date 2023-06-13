// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';

export default function handler( req: NextApiRequest,
  res: NextApiResponse) {
  // Get the file path of the image
  const filePath = path.join(process.cwd(), 'public', 'ibadan_techies_logo.jpg');

  // Read the image file
  const fileStream = fs.createReadStream(filePath);

  // Set the response headers
  res.setHeader('Content-Type', 'image/jpeg');

  // Pipe the image file to the response
  fileStream.pipe(res);
}

