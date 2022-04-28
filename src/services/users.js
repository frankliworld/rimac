import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data;
};
const getUser = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/users/${id}`);
  return data;
}

export default { getUsers, getUser };

