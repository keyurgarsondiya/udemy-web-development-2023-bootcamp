import express from 'express';
import bodyParser from 'body-parser';

const app = express();

var items = ['Buy Food', 'Cook Food', 'Eat Food'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  res.render('list', { kindOfDay: today, items });
});

app.post('/', (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server listening on PORT 3000');
});
