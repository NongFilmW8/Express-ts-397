import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';
const app = express();

app.use('/api', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 1150;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

// #localhost:1150/api/products

//...
// applying the routes to the basepath '/api'
