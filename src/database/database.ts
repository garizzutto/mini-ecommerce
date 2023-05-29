import mongoose from "mongoose";

const uri =
  "mongodb+srv://" +
  process.env.MONGODB_USER +
  ":" +
  process.env.MONGODB_PASSWORD +
  "@cluster0.1ssxlwv.mongodb.net/?retryWrites=true&w=majority";
(async () => {
  await mongoose.connect(uri);
  console.log("Connected to MongoDB");
})();

export default mongoose;
