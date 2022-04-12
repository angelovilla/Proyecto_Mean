const database = require('./database');
const app = require('./app');


app.listen(app.get('port'));
console.log('server is running on port 3000',app.get('port'));