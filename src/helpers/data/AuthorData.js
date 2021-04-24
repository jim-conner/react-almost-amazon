import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// const getAuthors = () => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/authors.json`)
//     .then((response) => {
//       if (response.data) {
//         resolve(Object.values(response.data));
//         resolve([]);
//       } else {
//         resolve([]);
//       }
//     }).catch((error) => reject(error));
// });

const addAuthor = (author) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, author)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
      // .then(( => resolve))
        .then(() => resolve(console.warn('Author Added', author)));
      // .then(() => {
      //   getAuthors().then((authorsArray) => resolve(authorsArray));
    })
    .catch((error) => reject(error));
});

export default addAuthor;
