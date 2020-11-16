import * as mongoose from 'mongoose';


export const CustomerSechema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    address: String,
    description: String,
    createdAt: {type: Date, default:Date.now}
})