import mongoose from "mongoose";

const mongoURI = process.env.DB;

const connectToMongo = handler => async (req, res)=>{
    if (mongoose.connections[0].readyState){
        return handler(req, res);
    }
    await mongoose.connect(mongoURI)
    return handler(req, res);
}

export default connectToMongo;