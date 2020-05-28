import axios from 'axios';
import {
  Post,
  PostsList,
  GET_POSTS_LIST,
  PostInfo,
  GET_POST,
  CreatePost,
  POST_CREATE_POST,
  CreatePostComments,
  POST_CREATE_POST_COMMENTS,
  UpdatePost,
  PUT_UPDATE_POST,
  DeletePost,
  DELETE_POST,
} from '../../interfaces';

const _apiBase: string = 'https://simple-blog-api.crew.red';

export const getPostsList = (payload: Post[]): PostsList => ({
  type: GET_POSTS_LIST,
  payload,
});

export const getPosts = (payload: Post): PostInfo => ({
  type: GET_POST,
  payload,
});

export const createPost = (): CreatePost => ({
  type: POST_CREATE_POST,
});

export const updatePost = (): UpdatePost => ({
  type: PUT_UPDATE_POST,
});

export const deletePost = (): DeletePost => ({
  type: DELETE_POST,
});

export const createPostComments = (): CreatePostComments => ({
  type: POST_CREATE_POST_COMMENTS,
});

export const getResource = () => (dispatch: any) => {
  axios.get(`${_apiBase}/posts`).then((response) => {
    if (response.status === 200) {
      dispatch(getPostsList(response.data));
    } else {
      console.log('Response status: ', response.status);
    }
  });
};

export const getResourceItem = (id: number) => (dispatch: any) => {
  if (id) {
    axios
      .get(`${_apiBase}/posts/${id}`, {
        params: {
          _embed: 'comments',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getPosts(response.data));
        } else {
          console.log('Response status: ', response.status);
        }
      })
      .catch((error) => console.log('error', error));
  }
};

export const createResourceItem = (title: string, body: string) => (
  dispatch: any,
) => {
  if (title && body) {
    axios
      .post(`${_apiBase}/posts`, {
        title,
        body,
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch(createPost());
        } else {
          console.log('Response status: ', response.status);
        }
      })
      .catch((error) => console.log('error', error));
  }
};

export const updateResourceItem = (id: number, title: string, body: string) => (
  dispatch: any,
) => {
  if (id && title && body) {
    axios
      .put(`${_apiBase}/posts/${id}`, {
        title,
        body,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(updatePost());
          dispatch(getResourceItem(id));
        } else {
          console.log('Response status: ', response.status);
        }
      })
      .catch((error) => console.log('error', error));
  }
};

export const deleteResourceItem = (id: number) => (dispatch: any) => {
  if (id) {
    axios
      .delete(`${_apiBase}/posts/${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(deletePost());
          dispatch(getResource());
        } else {
          console.log('Response status: ', response.status);
        }
      })
      .catch((error) => console.log('error', error));
  }
};

export const createResourceItemComments = (postId: number, body: string) => (
  dispatch: any,
) => {
  if (postId && body) {
    axios
      .post(`${_apiBase}/comments`, {
        postId,
        body,
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch(createPostComments());
          dispatch(getResourceItem(postId));
        } else {
          console.log('Response status: ', response.status);
        }
      })
      .catch((error) => console.log('error', error));
  }
};
