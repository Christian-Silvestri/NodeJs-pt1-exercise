import app from "./app";
import 'dotenv/config';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running at http://localhost:`+ port);
});
