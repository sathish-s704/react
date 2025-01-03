const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
   // console.log('Hello World');
    //res.send((500),'error occured');
   // res.status(200).send('Hello World');
   // res.json({ message: 'learning express' });
   res.render('index.ejs');
// res.send('Hello World');
});
const userRoutes = require('./routes/user');
app.use('/user', userRoutes);
app.listen(3000);