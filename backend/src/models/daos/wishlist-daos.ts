import WishListModel from '../schemas/wishList-models';
import PostSchema from '../schemas/post-models';
import { IWishList } from '../../types/app-types';
import { AppErrors, HttpStatusCode } from '../../helpers/app-error';

export const getSingleWishList = async (idPost: string, idUser: string) => {
  if (!isNaN(Number(idPost)) && !isNaN(Number(idUser))) {
    const wishExist = await WishListModel.findOne({ where: { idPost, idUser } });

    return wishExist;
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const addWishListToDb = async (info: IWishList) => {
  const { idPost, idUser } = info;
  if (idPost && idUser) {
    if (!isNaN(Number(idPost)) && !isNaN(Number(idUser))) {
      const exist = await WishListModel.findOne({ where: { idPost, idUser } });

      if (!exist) {
        const newWish = await WishListModel.create({ idPost, idUser });
        return newWish;
      } else {
        throw new AppErrors({ message: 'Can not duplicate', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
      }
    }
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const deleteSingleWish = async (idWish: string) => {
  if (!isNaN(Number(idWish))) {
    const deleted = await WishListModel.destroy({ where: { id: idWish } });
    return deleted;
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const listWishByUser = async (idUser: string) => {
  if (!isNaN(Number(idUser))) {
    const allWishes = await WishListModel.findAll({
      where: { idUser },
      include: {
        model: PostSchema,
      },
    });
    return allWishes;
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};
