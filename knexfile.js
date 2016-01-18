module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/help_desk'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
