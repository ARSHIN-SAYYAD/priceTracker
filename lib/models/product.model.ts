import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    url: { type: String, required: true, unique: true}, //can only have 1 product in an url
    currency: { type: String, required: true},
    image: { type: String, required: true},
    title: { type: String, required: true},
    currentPrice: { type: Number, required: true},
    originalPrice: { type: Number, required: true},
    priceHistory:[
        { 
            prices: { type: Number, required: true},
            date: { type: Date, default: Date.now }
        },
    ],
    lowestPrice: { type: Number },
    highestPrice: { type: Number },
    averagePrice: { type: Number },
    discountRate: { type: Number },
    description: { type: String },
    category: { type: String },
    reviewsCount: { type: Number },
    isOurOfStock: { type: Boolean, default: false },
    users: [
        { email: { type: String, required: true }}
    ], default: [],  //how many users scearched for that product
}, { timestamps:  true }); //keep track of changes

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;

