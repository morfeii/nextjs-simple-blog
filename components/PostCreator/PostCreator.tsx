import React, { FC, useState, useEffect } from 'react';
import { PostCreatorProps } from '../../interfaces';
import {
  Section,
  H3,
  Form,
  P,
  Label,
  Input,
  Textarea,
  Button,
} from './PostCreatorStyled';

const PostCreator: FC<PostCreatorProps> = ({ createPost }) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let timeOut: any;

    visible ? (timeOut = setTimeout(() => setVisible(false), 4000)) : null;

    return () => clearTimeout(timeOut);
  });

  const sendData = () => {
    if (title && body) {
      createPost(title, body);
      setTitle('');
      setBody('');
      setVisible(true);
    }
  };

  return (
    <Section>
      <Form>
        {visible ? <P>The post was created</P> : null}
        <H3>Post title:</H3>
        <Label htmlFor="postTitle" />
        <Input
          type="text"
          id="postTitle"
          name="title"
          placeholder="Write title (required)"
          value={title}
          required
          onChange={(event) => setTitle(event.target.value)}
        />
        <H3>Post text:</H3>
        <Label htmlFor="postText" />
        <Textarea
          id="postText"
          name="postText"
          placeholder="Write your post (required)"
          value={body}
          required
          onChange={(event) => setBody(event.target.value)}
        />
        <br />
        <Button onClick={sendData}>Add Post</Button>
      </Form>
      <br />
    </Section>
  );
};

export default PostCreator;
