export interface IProducts {
  id: number;
  slug: string;
  Img: string;
  ImgAlt: string;
  Title: string;
  SubTitle: string;
  Price: number;
  Discount?: number;
  OriginalPrice: number,
  isOnSale: boolean,
  BestProduct:boolean,
  Description: string;
  popularity: number;  
  relevance: number;  
  productInfo: {
    description: Description;
    information: Information; 
    reviews: Review[]; 
    sizeGuide: SizeGuide[];
  };
}

interface Description {
  title1: string;
  desc1: string;
  title2: string;
  desc2: string;
  title3: string;
  desc3: string;
}

interface Information {
  weight: number;
  dimensions: string;
  productYear: number;
  productManual: string;
  refundable: string;
}

interface Review {
  name: string;
  date: string;
  rating: number;
  review: string;
}

interface SizeGuide {
  size: string;
  USA: string;
  Europe: string;
  Others: string;
}







































