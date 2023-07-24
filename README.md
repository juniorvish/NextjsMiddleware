# NextjsMiddleware

This project is a Next.js middleware for token-gating a route based on the user holding a certain NFT using Holaplex Hub APIs.

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/juniorvish/NextjsMiddleware.git
```

Then, install the dependencies:

```bash
cd NextjsMiddleware
npm install
```

## Configuration

Create a `.env` file in the root directory of the project, and add your Holaplex project and drop details:

```bash
HOLAPLEX_PROJECT=<Your Holaplex Project>
HOLAPLEX_DROP=<Your Holaplex Drop>
```

## Running the Project

To start the development server:

```bash
npm run dev
```

## Using the Middleware

To use the token-gating middleware, import it in your route file and use it as follows:

```javascript
import tokenGate from '../middleware/tokenGate';

// Your route here
router.get('/protectedRoute', tokenGate, (req, res) => {
  // Your code here
});
```

## API

The Holaplex API is used in `pages/api/holaplex.js`. This file handles the communication with the Holaplex Hub API.

## Styling

If this is a web app, Tailwind CSS is used for styling. Make sure to keep the UI neat and clean.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)