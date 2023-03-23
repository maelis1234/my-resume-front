import axios from 'axios';

const onSubmit = (values : {firstname: string, lastname: string, email: string, message: string}) => {
  axios.post('http://localhost:3001/contact', values)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}
