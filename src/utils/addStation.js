import axios from 'axios';
import swal from 'sweetalert';

// Adding a new station function
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
      swal('Station Added Successfully');
    } catch (err) {
      console.log(err.message);
    }
  };
  submitInfo();
};

export default addStation;
