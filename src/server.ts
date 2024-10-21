import express from 'express';
import router from './routes/indexRoutes';


const app = express();
const port = 3100;

app.use(express.json());


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.use("/", router)