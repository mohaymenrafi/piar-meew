import axios from 'axios';

const addStation = (newStation, authToken) => {
  const submitInfo = async () => {
    try {
      const res = await axios.post(
        'https://piar.meew.me/stations',
        newStation,
        {
          headers: {
            'user-jwt': authToken,
          },
        }
      );
      const result = await res.data;
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  submitInfo();
};

export default addStation;
