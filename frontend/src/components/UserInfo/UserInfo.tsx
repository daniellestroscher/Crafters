import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import './UserInfo.css';

import { UserContext } from '../../context/UserContext';
import { User } from '../../types/User';

type UserInfoProps = {
  user: User;
  postNumber: number;
  numberOfFavs: number;
};

export const UserInfo: FC<UserInfoProps> = ({ user, postNumber, numberOfFavs }) => {
  const { userData } = useContext(UserContext);

  return (
    <div className="singleFlexProp">
      <div className="profileInfo__image">
        <img
          loading="lazy"
          src={userData && userData.userPicUrl ? userData.userPicUrl : user.picture}
          alt={userData && userData.username ? userData.username : user.nickname}
        />
      </div>

      <div className="profileInfo__user">
        <div className="userInfo__container">
          <h2 className="userInfo__username">{userData && userData.username ? userData.username : user.nickname}</h2>
          <Link to="/update-profile" className="editButtonInfo" data-testid="edit-profile-link">
            Edit profile
          </Link>
        </div>
        <div className="statsInfo">
          <p className="statistics">
            <span className="individualStats">{postNumber}</span> posts
          </p>
          <p className="statistics">
            <span className="individualStats">{numberOfFavs} </span> favs
          </p>
        </div>
        <p className="user__fullName">{userData && userData.name ? userData.name : user.name}</p>
      </div>
    </div>
  );
};
