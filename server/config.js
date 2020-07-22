module.exports = {
    database: process.env.DB_DATABASE || 'Haiku',
    username: process.env.DB_USERNAME || 'username',
    password: process.env.DB_PASSWORD || '9999ball',
    host: process.env.DB_HOST || 'localhost'
};






var apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
//var apiUrl = 'http://localhost:5000';

export default apiUrl;


require('dotenv').config(); 
module.exports = {
"development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
};