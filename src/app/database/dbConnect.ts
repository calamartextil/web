import mongoose from 'mongoose';

interface Connection {
  isConnected: number;
}

const connection: { isConnected: number } = {} as Connection;

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(
    process.env.MONGODB_URI as string
    //    {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    // }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
