module.exports = ({ env }) => ({
    // ...
    settings: {
      cors: {
        origin: ['http://localhost:3000'], // Update with your Next.js server URL
      },
    },
    // ...
  });