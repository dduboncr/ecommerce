import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    comment: { type: String, require: true },
    rating: { type: Number, require: true },
  },
  { timestramp: true }
);
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      require: true,
    },
    name: { type: String, require: true },
    image: { type: String, require: true },
    brand: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    rating: { type: Number, default: 0, require: true },
    numReviews: { type: Number, default: 0, require: true },
    price: { type: Number, default: 0, require: true },
    countInStock: { type: Number, default: 0, require: true },
    reviews: [reviewSchema],
    isAdmin: { type: Boolean, default: false, require: true },
  },
  { timestamps: true }
);

const Product = mongoose.model('product', productSchema);

export default Product;
