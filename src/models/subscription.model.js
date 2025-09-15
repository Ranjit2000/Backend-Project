import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        //One who is subscribing
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        //One to whome 'subscriber' is subscribing
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema)