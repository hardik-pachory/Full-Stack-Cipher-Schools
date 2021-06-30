import axios from 'axios';

const PostUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () =>
{
    return await axios.get(`${PostUrl}`);
}
export const getComments = async (id) => 
{
    id = id || '';
    return await axios.get(`${PostUrl}/${id}/comments`);
}