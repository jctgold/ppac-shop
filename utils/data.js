import bcryptjs from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Julia',
      email: 'julia@rever.com',
      password: bcryptjs.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Sandra',
      email: 'Sandra@gmail.com',
      password: bcryptjs.hashSync('123456'),
      isAdmin: false,
    },
  ],
  collections: [
    {
      name: 'All',
      slug: 'all-products',
    },
    {
      name: 'Outerwear',
      slug: 'outerwear',
    },
    {
      name: 'Tees',
      slug: 'tees',
    },
    {
      name: 'Bottoms',
      slug: 'bottoms',
    },
    {
      name: 'Accessories',
      slug: 'accessories',
    },
    {
      name: 'Sale',
      slug: 'sale',
    },
    {
      name: 'New Arrivals',
      slug: 'new-in',
    },
  ],
  products: [
    {
      name: 'Oversize tie-dye Check Short Sleeve',
      slug: 'oversize-tie-dye-check-shirt',
      longDescription: 'Oversize tie-dye Check Short Sleeve',
      prices: {
        original_price: 1495,
        sale_price: null,
      },
      category: 'Shirts',
      collection: ['Basic', 'Shirt'],
      images: [
        '/images/products/shirt1-1.jpg',
        '/images/products/shirt1-2.jpg',
      ],
      sizes: [
        {
          code: 's01-xs',
          name: 'XS',
          show: true,
        },
        {
          code: 's02-s',
          name: 'S',
          show: true,
        },
        {
          code: 's03-m',
          name: 'M',
          show: true,
        },
        {
          code: 's04-l',
          name: 'L',
          show: true,
        },
        {
          code: 'so5-xl',
          name: 'XL',
          show: true,
        },
        {
          code: 'so6-2xl',
          name: '2XL',
          show: true,
        },
        {
          code: 'so7-3xl',
          name: '3XL',
          show: false,
        },
      ],
    },
    {
      name: 'Printed short sleeve oversize T-shirt',
      slug: 'printed-short-sleeve-oversize-t-shirt',
      longDescription: 'Printed short sleeve oversize T-shirt',
      prices: {
        original_price: 1295,
        sale_price: null,
      },
      collection: ['Basic', 'Tees'],
      images: [
        '/images/products/shirt5-1.jpg',
        '/images/products/shirt5-2.jpg',
        '/images/products/shirt5-3.jpg',
        '/images/products/shirt5-4.jpg',
        '/images/products/shirt5-5.jpg',
      ],
      sizes: [
        {
          code: 's01-xs',
          name: 'XS',
          show: true,
        },
        {
          code: 's02-s',
          name: 'S',
          show: true,
        },
        {
          code: 's03-m',
          name: 'M',
          show: true,
        },
        {
          code: 's04-l',
          name: 'L',
          show: true,
        },
        {
          code: 'so5-xl',
          name: 'XL',
          show: true,
        },
        {
          code: 'so6-2xl',
          name: '2XL',
          show: true,
        },
        {
          code: 'so7-3xl',
          name: '3XL',
          show: false,
        },
      ],
      rating: 5,
      numReviews: 20,
    },
    {
      name: 'Extra loose short sleeve Tupac T-shirt',
      slug: 'extra-loose-short-sleeve-tupac-t-shirt',
      longDescription: 'Extra loose short sleeve Tupac T-shirt',
      prices: {
        original_price: 1495,
        sale_price: null,
      },
      collection: ['Basic', 'Tees'],
      images: [
        '/images/products/shirt3-2.jpg',
        '/images/products/shirt3-3.jpg',
        '/images/products/shirt3-4.jpg',
      ],
      sizes: [
        {
          code: 's01-xs',
          name: 'XS',
          show: true,
        },
        {
          code: 's02-s',
          name: 'S',
          show: true,
        },
        {
          code: 's03-m',
          name: 'M',
          show: true,
        },
        {
          code: 's04-l',
          name: 'L',
          show: true,
        },
        {
          code: 'so5-xl',
          name: 'XL',
          show: true,
        },
        {
          code: 'so6-2xl',
          name: '2XL',
          show: true,
        },
        {
          code: 'so7-3xl',
          name: '3XL',
          show: false,
        },
      ],
      rating: 5,
      numReviews: 20,
    },
    {
      name: 'Short sleeve oversize T-shirt featuring bear print',
      slug: 'short-sleeve-oversize-t-shirt-featuring-bear-print',
      longDescription: 'Short sleeve oversize T-shirt featuring bear print',
      prices: {
        original_price: 995,
        sale_price: null,
      },
      collection: ['Basic', 'Tees'],
      images: [
        '/images/products/shirt2-1.jpg',
        '/images/products/shirt2-2.jpg',
        '/images/products/shirt2-3.jpg',
        '/images/products/shirt2-4.jpg',
      ],
      sizes: [
        {
          code: 's01-xs',
          name: 'XS',
          show: true,
        },
        {
          code: 's02-s',
          name: 'S',
          show: true,
        },
        {
          code: 's03-m',
          name: 'M',
          show: true,
        },
        {
          code: 's04-l',
          name: 'L',
          show: true,
        },
        {
          code: 'so5-xl',
          name: 'XL',
          show: true,
        },
        {
          code: 'so6-2xl',
          name: '2XL',
          show: true,
        },
        {
          code: 'so7-3xl',
          name: '3XL',
          show: false,
        },
      ],
      rating: 5,
      numReviews: 20,
    },
    {
      name: 'Short sleeve T-shirt with print',
      slug: 'short-sleeve-t-shirt-with-print',
      longDescription: 'Short sleeve T-shirt with print',
      prices: {
        original_price: 995,
        sale_price: null,
      },
      collection: ['Basic', 'Tees'],
      images: [
        '/images/products/shirt4-1.jpg',
        '/images/products/shirt4-2.jpg',
        '/images/products/shirt4-3.jpg',
        '/images/products/shirt4-4.jpg',
      ],
      sizes: [
        {
          code: 's01-xs',
          name: 'XS',
          show: true,
        },
        {
          code: 's02-s',
          name: 'S',
          show: true,
        },
        {
          code: 's03-m',
          name: 'M',
          show: true,
        },
        {
          code: 's04-l',
          name: 'L',
          show: true,
        },
        {
          code: 'so5-xl',
          name: 'XL',
          show: true,
        },
        {
          code: 'so6-2xl',
          name: '2XL',
          show: true,
        },
        {
          code: 'so7-3xl',
          name: '3XL',
          show: false,
        },
      ],
      rating: 5,
      numReviews: 20,
    },
    {
      name: 'Extra loose short sleeve T-shirt with print',
      slug: 'loose-shirt-print',
      longDescription: 'Extra loose short sleeve T-shirt with print',
      prices: {
        original_price: 1245,
        sale_price: 355,
      },
      collection: ['Basic', 'Tees'],
      images: ['/images/products/tee1-1.jpg', '/images/products/tee1-2.jpg'],
      sizes: [
        {
          code: 's01-xs',
          name: 'XS',
          show: true,
        },
        {
          code: 's02-s',
          name: 'S',
          show: true,
        },
        {
          code: 's03-m',
          name: 'M',
          show: true,
        },
        {
          code: 's04-l',
          name: 'L',
          show: true,
        },
        {
          code: 'so5-xl',
          name: 'XL',
          show: true,
        },
        {
          code: 'so6-2xl',
          name: '2XL',
          show: true,
        },
        {
          code: 'so7-3xl',
          name: '3XL',
          show: false,
        },
      ],
      rating: 5,
      numReviews: 20,
    },
    {
      name: 'Floral puff print T-shirt with long sleeves',
      slug: 'floral-tshirt-long',
      longDescription:
        'The Dove Mini Dress is cut from our exclusive Posse Lilou print. It features a stunning low neckline and voluminous short sleeves. It has elastic throughout the neckline and back to customise the fit. ',
      prices: {
        original_price: 1495,
        sale_price: 395,
      },
      collection: ['Basic', 'Tees'],
      images: [
        '/images/products/sweatshirt1-1.jpg',
        '/images/products/sweatshirt1-2.jpg',
        '/images/products/sweatshirt1-3.jpg',
        '/images/products/sweatshirt1-4.jpg',
        '/images/products/sweatshirt1-5.jpg',
      ],
      sizes: [
        {
          code: 's01-xs',
          name: 'XS',
          show: true,
        },
        {
          code: 's02-s',
          name: 'S',
          show: true,
        },
        {
          code: 's03-m',
          name: 'M',
          show: true,
        },
        {
          code: 's04-l',
          name: 'L',
          show: true,
        },
        {
          code: 'so5-xl',
          name: 'XL',
          show: true,
        },
        {
          code: 'so6-2xl',
          name: '2XL',
          show: true,
        },
        {
          code: 'so7-3xl',
          name: '3XL',
          show: false,
        },
      ],
      rating: 5,
      numReviews: 20,
    },
  ],
};

export default data;
