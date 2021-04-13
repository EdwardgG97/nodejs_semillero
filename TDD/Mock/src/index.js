import app from './app.js';

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.info(`Running on port ${PORT}`));