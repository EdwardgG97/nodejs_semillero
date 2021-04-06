import axios from 'axios';

const getUsers = async url => {
    const result = await axios.get(url);
    return result.data;
};

const getUsersById = async (userId, url) => {
    const result = await axios.get(`${url}${userId}`);
    return result.data;
};

export { getUsers, getUsersById };