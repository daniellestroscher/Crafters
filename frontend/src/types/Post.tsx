import { user } from './User';

export type postData = {
  createdAt?: string;
  id?: number;
  idPost?: number;
  idUser?: number;
  updatedAt?: string;
  wishlist: boolean;
};

export type postDetails = {
  createdAt?: string;
  description?: string | undefined;
  id?: number;
  postPicUrl?: string;
  price: number;
  public_image_id?: string;
  sold?: boolean;
  title: string;
  updatedAt?: string;
  userEmail: string | undefined;
  name?: string;

  postPicture?: Blob;
  user?: user;
  idPost?: number;
  comment?: string;
};

export type newPost = {
  postPicture: any;
  title: string;
  description: string;
  price: number;
  userEmail: string | undefined;
};

export const defaultPost = {
  createdAt: '',
  description: '',
  id: 0,
  postPicUrl: '',
  price: 0,
  public_image_id: '',
  sold: false,
  title: '',
  updatedAt: '',
  userEmail: '',
  username: '',
  user: {
    id: 0,
  },
  idPost: 0,
  comment: '',
};

export type comment = {
  description: string;
  comment: string;
  updatedAt: string;
  id: number;
  idPost: number;
  user: user;
};

export type likeStatus = {
  like: boolean;
  id?: number;
};

//for payment
export type item = {
  item: {
    id: number | undefined;
    name: string;
    description: string | undefined;
    price: number;
    image: Blob | string | undefined;
  };
  userId: number | undefined;
};
