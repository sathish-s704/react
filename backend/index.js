import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/userroutes.js';


const app = express();
//middleware for parsing json request for body
app.use(bodyParser.json());
dotenv.config();
const port = process.env.PORT || 3000 || 4000;
const db = process.env.MONGO_URI;
app.use('/api/user', router);

//connect to database
mongoose.connect(db).then(() => {console.log('Connected to database');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch(err => console.log(err));
