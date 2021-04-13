import axios from 'axios';

const getEntidades = async url => {
    const result = await axios.get(url);
    return result.data;
};

const getSubListById = async (url, entidadId) => {
    const result = await axios.get(`${url}${entidadId}`);
    return result.data;
};

export { getEntidades, getSubListById };