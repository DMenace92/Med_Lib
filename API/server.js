const express = require("express");
const app = express();
const cors = require('cors')
require("./config/db")



const drugRouter = require('./routes/drugs')
const drugMfrRouter = require('./routes/drugMfr')
const rxNoteRouter = require('./routes/rxNotes')
const userRouter = require('./routes/user')
const uNoteRouter = require('./routes/userNotes')
const drugSpecsRouter = require('./routes/drugSpecsRoutes')



const PORT = process.env.PORT || 9000;
app.use(cors())
app.use(express.json())
app.use(drugRouter);
app.use(drugMfrRouter)
app.use(rxNoteRouter);
app.use(userRouter);
app.use(uNoteRouter)
app.use(drugSpecsRouter);


app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running on Port: ${PORT}`)
})