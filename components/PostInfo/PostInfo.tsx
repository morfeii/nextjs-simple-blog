import React, { FC, useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { PostInfoProps } from '../../interfaces';
import {
  NavBar,
  A,
  Section,
  Article,
  H1,
  P,
  DivUpdate,
  H3,
  Input,
  Textarea,
  Button,
  CommentsArticle,
  DivComments,
  H2,
} from './PostInfoStyled';

const PostInfo: FC<PostInfoProps> = ({ post, updatePost, createComments }) => {
  const { id, title, body, comments } = post;

  const [updateStatus, setUpdateStatus] = useState<boolean>(false);
  const [updateTitle, setUpdateTitle] = useState<string>('');
  const [updateBody, setUpdateBody] = useState<string>('');
  const [commentBody, setCommentBody] = useState<string>('');

  useEffect(() => {
	  setUpdateTitle(title);
	  setUpdateBody(body);
  }, [title, body]);

  const updateData = () => {
    if (updateTitle && updateBody) {
      updatePost(id, updateTitle, updateBody);
      setUpdateTitle('');
      setUpdateBody('');
      setUpdateStatus(false);
    }
  };

  const sendData = () => {
    if (commentBody) {
      createComments(id, commentBody);
      setCommentBody('');
    }
  };

  return (
    <Fragment>
      <NavBar>
        <Link href="/">
          <A>← Back</A>
        </Link>
      </NavBar>
      <Section key={id}>
        <Article>
          <H1>{title}</H1>
          <P>{body}</P>
        </Article>
        <Button
          onClick={() => setUpdateStatus((value: boolean) => !value)}
        >
          Update post
        </Button>
        {updateStatus ? (
          <DivUpdate>
            <H3>New title:</H3>
            <Input
              type="text"
              placeholder="Write title (required)"
              value={updateTitle}
              onChange={(event) => setUpdateTitle(event.target.value)}
            />
            <H3>New text:</H3>
            <Textarea
              placeholder="Write yor post (required)"
              value={updateBody}
              onChange={(event) => setUpdateBody(event.target.value)}
            />
            <br />
            <Button onClick={updateData}>Update</Button>
          </DivUpdate>
        ) : null}
        {comments
          ? comments.map((comment: any) => {
              return (
                <CommentsArticle key={comment.id}>
                  <H3>Comment {comment.id}:</H3>
                  <P>{comment.body}</P>
                </CommentsArticle>
              );
            })
          : null}
        <DivComments>
          <H2>Write your comment:</H2>
          <Textarea
            placeholder="Write yor comment (required)"
            value={commentBody}
            onChange={(event) => setCommentBody(event.target.value)}
          />
          <br />
          <Button onClick={sendData}>Add Comment</Button>
        </DivComments>
      </Section>
    </Fragment>
  );
};

export default PostInfo;
