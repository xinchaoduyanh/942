import express from 'express';
import { BlogPosts } from './BlogPost';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/blogPost', (req, res) => {
  res.send(JSON.stringify(BlogPosts) );
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
