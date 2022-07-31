import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    longDescription: { type: String, required: true },
    shortDescription: { type: String, required: true },
    prices: {
      original_price: Number,
      sale_price: Number,
    },
    category: [{ type: String }],
    images: [{ type: String }],
    collection: [{ type: String }],
    sizes: [
      {
        code: { type: String, required: true },
        name: { type: String, required: true },
        show: { type: Boolean, required: true },
      },
    ],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
