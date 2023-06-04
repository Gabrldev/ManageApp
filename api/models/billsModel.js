import { Schema,model } from "mongoose";

const billsSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  bills: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  dateCreate: {
    type: Date,
    default: Date.now,
  },
},{
  versionKey: false,
});

const ModelBill = model("bills", billsSchema);

export default ModelBill;
