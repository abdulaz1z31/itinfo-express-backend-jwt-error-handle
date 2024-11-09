import express from 'express';
import { port } from './src/config/index.config.js';
import { databaseConnection } from './src/database/database.js';
import { userRouter, cartegoryRouter, authorRouter} from './src/routes/index.routes.js';
import { statusCodes, errorMessages } from './src/utils/index.js';



const app = express()
app.use(express.json())


app.use("/user", userRouter)
app.use("/cartegory", cartegoryRouter)
app.use("/author", authorRouter)
app.use((req, res) => {
    res.status(statusCodes.NOT_FOUND).send(errorMessages.NOT_FOUND)
})
app.use((err, req, res, next) => {
    if (err) {
       res.status(500).send("something broke") 
    }
})

app.listen(port, async () => {
    await databaseConnection()
    console.log(`server is runnig on port ${port}`);
})



