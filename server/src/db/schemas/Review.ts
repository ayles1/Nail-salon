import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        rating:{
            type:Number
        },
        text:{
            type: String
        },
        date:{
            type: Date
        }
    }
)

export default mongoose.model("Review", ReviewSchema)