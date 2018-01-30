const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Redirect to posts
app.get('/', (req, res) => {
   res.redirect('/posts');
});

// List all posts
app.get('/posts', (req, res) => {
	
	res.render('posts.ejs', { posts: postsarray });
});

// Show the search form
app.get('/search', (req, res) => {
   res.render('search.ejs', { post: '' });
});

// Find all comments for post
app.post('/search', (req, res) => {});
