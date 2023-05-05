const mongooose = require('mongoose')
const DBName = 'shorturl'
const password = 'Jayamani12'


mongooose.connect(`mongodb+srv://sanjaymech2313:${password}@sanjay.jhuniif.mongodb.net/${DBName}`,
{useNewUrlParser : true, useUnifiedTopology: true}
)