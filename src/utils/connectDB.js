import mongoose from "mongoose";

const uri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log('DB has been connected')
            return
        } else {
            await mongoose.connect(uri);
            console.log('DB connected')
        }

    } catch (error) {
        console.log(error)
    }
}



export default connectDB