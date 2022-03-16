import axios from 'axios';

// Deleting user & station based on page url, path defines between user & station
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
    console.error(err.message);
  }
};

export { deleteSingleUser };
