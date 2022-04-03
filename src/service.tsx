import { State, CommentInterface } from "./interfaces";

export const getData = async (): Promise<State> => {
  let data;
  try {
    data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
    return data;
  } catch (e) {
    data = e;
    return data;
  }
};
export const getPosts = async (): Promise<CommentInterface[]> => {
  let data;
  try {
    data = await fetch(" https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.json()
    );
    return data;
  } catch (e) {
    data = e;
    return data;
  }
};
