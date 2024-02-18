export interface LinkType {
  id: number;
  name: string;
  url: string;
  active: boolean;
}

export interface ImgInterface {
  img_id: string;
  alt: string;
}
export interface CustomMetadataInterface {
  title: string;
  description: string;
  keywords: string;
}

export interface CollectionInterface {
  id: number;
  name: string;
  menu_name: string;
  slug: string;
  slogan: string;
  img_landscape: ImgInterface;
  img_portrait: ImgInterface;
  metadata: CustomMetadataInterface;
}

export interface ProductInterface {
  id: number;
  filename: string;
  title: string;
  descriptions: string[];
  features_lists: {
    name: string;
    list: string[];
  }[];
  tables: {
    name: string;
    headers: string[];
    rows: string[][];
  }[];
  tags: string[];
  slogan: string;
  slug: string;
  category: string;
  gender: string;
  price: {
    mrp_price: number;
    discounted_price: number;
  };
  ratings: {
    rating_count: number;
    rating: number;
  };
  imgs: ImgInterface[];
  metadata: CustomMetadataInterface;
}

export interface ProductSlimInterface {
  id: number;
  title: string;
  tags: string[];
  slogan: string;
  img_landscape: ImgInterface;
  slug: string;
  collection: number | CollectionInterface;
  gender: string;
  price: {
    mrp_price: number;
    discounted_price: number;
  };
  ratings: {
    rating_count: number;
    rating: number;
  };
  imgs: ImgInterface[];
}
