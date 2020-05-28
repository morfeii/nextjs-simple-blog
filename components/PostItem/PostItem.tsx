import React, { FC } from 'react';
import Link from 'next/link';
import { PostItemProps } from '../../interfaces';
import { Article, Div, Button, H2, P } from './PostItemStyled';

const PostItem: FC<PostItemProps> = ({ post, deletePost }) => {
  const { id, title, body } = post;

  const deleteData = () => {
    deletePost(id);
  };

  return (
    <Article>
      <Div>
        <Link href={`/posts/${id}`}>
          <Button>
            Read →
          </Button>
        </Link>
        <Button onClick={deleteData}>Delete</Button>
      </Div>
      <H2>{title}</H2>
      <P>{body}</P>
    </Article>
  );
};

export default PostItem;
