module.exports = {
    database: process.env.DB_DATABASE || 'Haiku',
    username: process.env.DB_USERNAME || 'username',
    password: process.env.DB_PASSWORD || '9999ball',
    host: process.env.DATABASE_URL || 'localhost',
    use_env_variable: 'DATABASE_URL'

};

// module.exports = {
//     database: process.env.DB_DATABASE || 'Haiku',
//     username: process.env.DB_USERNAME || 'username',
//     password: process.env.DB_PASSWORD || '9999ball',
//     host: process.env.DB_HOST || 'localhost'
// };
