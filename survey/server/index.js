const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const expressGraphQL = require('express-graphql');

const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const schema = require('./models/schema');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT);
