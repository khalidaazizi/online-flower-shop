

import Best1 from "../assets/img/best-1.png";
import Best2 from "../assets/img/best-2.png";
import Best3 from "../assets/img/best-3.png";

const products = [
  {
    id: "golden-pothos1",
    slug: "golden-pothos1",
    Img: Best1,
    ImgAlt: "Angel's Wing",
    Title: "Angel's Wing",
    SubTitle: "Bonsai",
    Price: 25,
    Discount: 299,
    Description:
      "Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae...",
  
  },
 
  {
    id: "golden-pothos1",
    slug: "golden-pothos1",
    Img: Best2,
    ImgAlt: "Angel's Wing",
    Title: "Angel's Wing",
    SubTitle: "Bonsai",
    Price: 25,
    Discount: 299,
    Description:
      "Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae...",
  
  },
 
  {
    id: "golden-pothos1",
    slug: "golden-pothos1",
    Img: Best3,
    ImgAlt: "Angel's Wing",
    Title: "Angel's Wing",
    SubTitle: "Bonsai",
    Price: 25,
    Discount: 299,
    Description:
      "Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae...",
    Information: {
      weight: "33 kg",
      dimensions: "44 × 65 × 35 cm",
      year: "2024",
      manual: "Included in the package",
      refundable: "Up to 14 days",
    },
    Reviews: [
      {
        name: "Rosa Widerman",
        date: "13 January 2024",
        rating: 5,
        comment:
          "Awesome, Thank you so much for your sincere support and best product.",
      },
    ],
    SizeGuide: [
      { size: "XS", usa: "28-30", europe: "27-29", others: "34-36" },
      { size: "S", usa: "30-32", europe: "29-31", others: "36-38" },
      { size: "M", usa: "32-33", europe: "31-33", others: "38-40" },
      { size: "L", usa: "33-34", europe: "33-36", others: "40-44" },
      { size: "XL", usa: "34-38", europe: "36-40", others: "44-48" },
      { size: "XXL", usa: "38-48", europe: "40-44", others: "48-50" },
    ],
    FAQ: [
      { q: "What payment methods do you accept?", a: "Credit/debit cards, PayPal, bank transfers." },
      { q: "Do you offer international shipping?", a: "Yes, worldwide shipping." },
      { q: "How can I track my order?", a: "You’ll receive a tracking number via email." },
      { q: "What is your return policy?", a: "Return within 30 days for a full refund." },
      { q: "Are your products covered by a warranty?", a: "Yes, most have a warranty." },
    ],
    ShippingAndReturns: {
      shipping: {
        freeAbove: 100,
        europe: "1 – 3 days Free",
        usa: "4 – 6 days Free",
        asia: "3 – 6 days Free",
        africa: "5 – 7 days Free",
        australia: "3 – 5 days Free",
      },
      returns: "14-day return policy. Item must be unused, in original packaging with proof of purchase.",
    },
  },
 
];

export default products;
