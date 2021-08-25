import axios from 'axios';

import {
  SUBMIT_NICKNAME,
  SUBMIT_CHAT_MESSAGE,
  changeValue,
  errorMessage,
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
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(changeValue('haveNickname', true));
          }
        })
        .catch((err) => {
          if (err.response) {
            store.dispatch(errorMessage(err.response.data));
          }
        })
        .finally(() => {
          store.dispatch(changeValue('loading', false));
        });
      break;
    }
    case SUBMIT_CHAT_MESSAGE: {
      store.dispatch(changeValue('loading', true));
      const Time = new Date();
      axios.post(`${baseUrl}/chatmessage`, {
        talker: state.main.nickname,
        time: `${Time.getHours().toString().length === 1 ? `0${Time.getHours()}` : Time.getHours()}:${Time.getMinutes().toString().length === 1 ? `0${Time.getMinutes()}` : Time.getMinutes()}:${Time.getSeconds().toString().length === 1 ? `0${Time.getSeconds()}` : Time.getSeconds()}`,
        message: state.main.message,
      })
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(changeValue('message', ''));
          }
        })
        .catch((err) => {
          if (err.response) {
            store.dispatch(errorMessage(err.response.data));
          }
        })
        .finally(() => {
          store.dispatch(changeValue('loading', false));
        });
      break;
    }
    default:
      next(action);
  }
};

export default main;
