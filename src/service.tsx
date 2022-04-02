export const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    return data
}
export const getPosts = async () => {
    const data  = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    return data
}