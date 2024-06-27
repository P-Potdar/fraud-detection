import app from './app.mjs';
import 'dotenv/config'
import config from './config.mjs';
import bodyParser from 'body-parser';

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
