import React from 'react';
import { connect } from 'react-redux';

import { State, CreatePostPageProps } from '../../interfaces';
import { createResourceItem } from '../../store/actions/actions';
import Layout from '../../components/Layout';
import PostCreator from '../../components/PostCreator';

const CreatePostPage: React.FC<CreatePostPageProps> = ({
  createResourceItem,
}) => (
  <Layout title="New Post">
    <PostCreator createPost={createResourceItem} />
  </Layout>
);

const mapStateToProps = (state: State) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createResourceItem: (title: string, body: string) =>
      dispatch(createResourceItem(title, body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPage);
