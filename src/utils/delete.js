import axios from 'axios';

const deleteSingleUser = async (id, authToken, path) => {
  try {
    const res = await axios.delete(`https://piar.meew.me/${path}/${id}`, {
      headers: {
        'user-jwt': authToken,
      },
    });
    const result = await res.data;
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

export { deleteSingleUser };
