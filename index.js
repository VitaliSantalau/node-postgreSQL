const express = require('express')
const userRoter = require('./routes/user.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use('/api', userRoter)



app.listen(PORT, () => console.log(`Server ready on port ${PORT}`))