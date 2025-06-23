import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://priyankau7081:Priya1234@cluster0.x7jkev7.mongodb.net/tastyfood')
    .then(()=>{
        console.log('mongodb is connected...')
    }).catch(err =>console.log("err"));
    // }).catch(err =>console.log("err"));
    
}