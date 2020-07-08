const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true,   useCreateIndex: true, useFindAndModify:false })
.then((db)=>{
    console.log('connected to the database')
})
.catch(err=>console.log(err))

