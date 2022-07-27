const data = {
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
      collection: 'Basic',
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
      countInStock: {
        xs: 0,
        s: 1,
        m: 0,
        l: 0,
        xl: 1,
        xl: 1,
      },
    },
    {
      name: 'Extra loose short sleeve T-shirt with print',
      slug: 'loose-shirt-print',
      description: 'Extra loose short sleeve T-shirt with print',
      prices: {
        original_price: 1245,
        sale_price: 355,
      },
      category: 'Shirts',
      images: ['/images/products/tee1-1.jpg', '/images/products/tee1-2.jpg'],
      countInStock: 20,
      collection: 'Basic',
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
      name: 'Floral puff print T-shirt with long sleeves',
      slug: 'floral-tshirt-long',
      longDescription:
        'The Dove Mini Dress is cut from our exclusive Posse Lilou print. It features a stunning low neckline and voluminous short sleeves. It has elastic throughout the neckline and back to customise the fit. ',
      prices: {
        original_price: 1495,
        sale_price: 395,
      },
      category: 'Shirts',
      collection: 'Basic',
      images: [
        '/images/products/sweatshirt1-1.jpg',
        '/images/products/sweatshirt1-2.jpg',
        '/images/products/sweatshirt1-3.jpg',
        '/images/products/sweatshirt1-4.jpg',
        '/images/products/sweatshirt1-5.jpg',
      ],
      countInStock: 20,
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
  ],
};

export default data;
