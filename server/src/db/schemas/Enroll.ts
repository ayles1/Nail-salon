import mongoose from "mongoose";

const EnrollSchema = new mongoose.Schema(
    {
        name:{
            type:Number,
            required:true
        },
        phoneNumber:{
            type: String,
            required:true
        },
        date:{
            type: Date,
            required:true
        },
        specRequests:{
            type: String,
            
            
        }
    }
)

export default mongoose.model("Enroll", EnrollSchema)