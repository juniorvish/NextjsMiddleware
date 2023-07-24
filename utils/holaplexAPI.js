```javascript
import axios from 'axios';

const holaplexAPI = axios.create({
  baseURL: 'https://holaplex.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkNFTOwnership = async (walletAddress, projectId, dropId) => {
  try {
    const response = await holaplexAPI.get(`/ownership/${walletAddress}/${projectId}/${dropId}`);
    return response.data;
  } catch (error) {
    console.error('Error checking NFT ownership:', error);
    return null;
  }
};

export default holaplexAPI;
```