import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import nunjucks from 'nunjucks';

const app = express();
const port = '4090';

// Middleware
app.use(morgan('dev'));
// post reqs
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(session({
    secret: 'itsasecret',
    saveUninitialized: true,
    resave: false
}))
nunjucks.configure('views', {
    autoescape: true,
    express: app
})
app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/get-name', (req, res) => {
    req.session.name = req.query.name

    res.redirect('/battle')
})

app.get('/battle', (req, res) => {
    res.render('battle.html')
})

// is this what I need to get the js working with express??
app.get('/battleFunction', (req, res) => {
})

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
})