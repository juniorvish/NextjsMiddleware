import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../middleware/tokenGate';
import { fetchNFT } from '../../utils/holaplexAPI';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ error: 'Token is required' });
  }

  const isValidToken = await verifyToken(token);

  if (!isValidToken) {
    return res.status(403).json({ error: 'Invalid token' });
  }

  try {
    const nft = await fetchNFT(token);

    if (!nft) {
      return res.status(404).json({ error: 'NFT not found' });
    }

    return res.status(200).json(nft);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching the NFT' });
  }
}