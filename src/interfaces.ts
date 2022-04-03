export interface User {
    address: Address;
    company: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
  }
  
  export interface State {
      [x: string]: any;
    data: Array<User>;
  }
  interface Address {
    city: string;
    geo: {
      [props: string]: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  }
  interface Company {
    [props: string]: string;
  }
export interface CommentInterface {
    userId: number,
    id: number,
    title: string,
    body: string
}
export interface ThreeComments {
    username: string,
    comments: CommentInterface[]
}
export interface ContextInterface {
    users: User[];
    comments: CommentInterface[];
    pickedComments: ThreeComments;
    pickComments: (id: number) => void
  
  }