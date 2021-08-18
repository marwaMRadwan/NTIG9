const app = require('./app/src')
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`app on localhost:${PORT}`))