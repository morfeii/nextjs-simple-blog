import React, { FC, useEffect, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { State, PostPageProps } from '../../interfaces';
import * as actions from '../../store/actions/actions';
import PostInfo from '../../components/PostInfo';

const PostPage: FC<PostPageProps> = ({
  post,
  getResourceItem,
  createResourceItemComments,
  updateResourceItem,
}) => {
  const postId = Number(useRouter().query.id);

  useEffect(() => {
    getResourceItem(postId);
  }, [postId]);

  return (
    <Fragment>
      <Head>
        <title>Post</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      {post ? (
        <PostInfo
          post={post}
          updatePost={updateResourceItem}
          createComments={createResourceItemComments}
        />
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: State) => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const {
    getResourceItem,
    createResourceItemComments,
    updateResourceItem,
  } = bindActionCreators(actions, dispatch);

  return {
    getResourceItem: (id: number) => getResourceItem(id),
    createResourceItemComments: (postId: number, body: string) =>
      createResourceItemComments(postId, body),
    updateResourceItem: (id: number, title: string, body: string) =>
      updateResourceItem(id, title, body),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
