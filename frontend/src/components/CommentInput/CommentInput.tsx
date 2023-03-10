import React, { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

import './CommentInput.css';

import { createNewComment, getCommentsByPost } from '../../services/fetchComments';

type CommentInputProps = {
  idUser: number;
  idPost: number;
  setComments: Function;
};

export const CommentInput = ({ idUser, idPost, setComments }: CommentInputProps) => {
  const [comment, setComment] = useState<string>('');
  const [height, setHeight] = useState<number>(40);

  const keyUpHandler = (e: React.KeyboardEvent) => {
    let scHeight = e.currentTarget.scrollHeight as number;
    if (height < 64) {
      if (scHeight < 64) setHeight(scHeight);
      else setHeight(64);
    }

    if (comment === '') setHeight(40);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newComment = { comment: comment.trim(), idUser, idPost };
    const res = await createNewComment(newComment);
    if (!res.error) {
      const allComments = await getCommentsByPost(idPost);
      setComments(allComments);
    } else {
      alert(res.message);
    }

    setComment('');
    setHeight(40);
  };

  return (
    <div className="commentInput__container">
      <form onSubmit={handleSubmit} className="flex items-center bg-light-grey rounded">
        <textarea
          value={comment}
          style={{ height: `${height}px`, maxHeight: '88px' }}
          onChange={e => setComment(e.target.value)}
          onKeyUp={e => keyUpHandler(e)}
          className="w-full focus:ring-0 addComment__input"
          //type="text"
          placeholder="Add a comment..."
          required
        ></textarea>
        <button
          type='submit'
          className="addComment__btn" name="comment-btn"
          //disabled={Boolean(comment) || comment === ''}
        >
          <FaTelegramPlane />
        </button>
      </form>
    </div>
  );
};
