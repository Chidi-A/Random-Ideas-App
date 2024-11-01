// Add this line at the top of your file to debug
console.log('MONGO_URI:', process.env.MONGO_URI);

const mongoose = require('mongoose');

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
      console.error(error);
      process.exit(1);
   }
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
