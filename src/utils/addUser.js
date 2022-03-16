import axios from 'axios';
import swal from 'sweetalert';

const addUser = (newUser, navigate, location) => {
  const submitInfo = async () => {
    try {
      const res = await axios.post('https://piar.meew.me/users', newUser);
      const result = res.data;
      if (!!result.id) {
        if (location.pathname === '/users/add') {
          swal('You have succesfully registered a new user! ').then(() => {
            // navigate('/');
          });
        }
        if (location.pathname === '/register') {
          swal(
            'You have succesfully registered! Please login to access your dashboard.'
          ).then(() => {
            navigate('/login');
          });
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  submitInfo();
};

export default addUser;
