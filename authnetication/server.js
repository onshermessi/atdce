const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3500;

app.use(cors(corsOptions));


// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

app.use(cookieParser());

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

//note: app.use fl route works in order !!!! edheka aaleh hatina verifyJWT taht authentication bsh tekhdem ken aal employees
app.use(verifyJWT)
app.use('/employees', require('./routes/api/employees'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
