import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ritikgupta:Romeo2513@cluster0.qlnbljm.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
