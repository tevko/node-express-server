import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import path from 'path'

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  console.log("Your lambda was activated!", JSON.stringify(req.rawHeaders))
  res.sendFile(path.join(__dirname, './output.zip'));
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
