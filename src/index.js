import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import conenctDB from "./db/index.js";
import app from "./app.js";

conenctDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server running at port: ${process.env.PORT}`);
    });

  })
  .catch((err) => {
    console.log(`Mongo connection failed!!! ${err}`);
  });

// another way
// import express from "express";
// const app = express();

// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("ERRR", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, ()=>{
//       console.log(`app Listeing to port ${process.env.PORT}`)
//     })

//   } catch (error) {
//     console.log("Error:", error);
//   }
// };
