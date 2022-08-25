const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

// ask BCS</br>
// referred https://www.w3schools.com/mySQl/default.asp</br>
// referred from https://github.com/kunalc156/E-Commerce</br>
// referred from https://github.com/ashachakre0906/E-commerce-Backend-Application</br>
