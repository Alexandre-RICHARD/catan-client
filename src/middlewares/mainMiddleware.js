import axios from 'axios';

import {
  SUBMIT_NICKNAME,
  changeValue,
} from 'src/actions/mainActions';

import {
  baseUrl,
} from 'src/middlewares/baseURL';

const main = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SUBMIT_NICKNAME: {
      store.dispatch(changeValue('loading', true));
      axios.post(`${baseUrl}/register`, {
        socketId: state.main.socketId,
        nickname: state.main.nickname,
      })
        .then((reponse) => {
          if (reponse.statusText === 'OK') {
            store.dispatch(changeValue('haveNickname', true));
          }
        })
        .catch((error) => {
          if (error.response) {
            store.dispatch('errorMessage', error.response.data);
          }
        })
        .finally(() => {
          setTimeout(() => {
            store.dispatch(changeValue('loading', false));
          }, 1500);
        });
      break;
    }
    default:
      next(action);
  }
};

export default main;
