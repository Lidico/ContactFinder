const express = require(`express`);
const connectDB = require(`./config/db`);

const app = express();

app.get(`/`,(req,res) => res.json({msg: `Welcome to the ContactKeeper API`}))

//Connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false}));

//Define Routes
app.use(`/api/users`, require(`./routs/users`));
app.use(`/api/auth`, require(`./routs/auth`));
app.use(`/api/contacts`, require(`./routs/contacts`));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`));