import axios from 'axios';

import store from 'src/store';
import {
  changeValue,
  stockPlayer,
  newGlobalMessage,
} from 'src/actions/mainActions';

import {
  baseUrl,
} from 'src/middlewares/baseURL';

const socketIo = (socket) => {
  socket.on('connect', () => {
    store.dispatch(changeValue('socketId', socket.id));
    console.log(`Connecté à l'API ; ID : ${socket.id}`);
  });
  window.onbeforeunload = () => {
    axios.post(`${baseUrl}/disconnect`, {
      socketId: socket.id,
    });
  };

  socket.on('playerList', (arg) => {
    store.dispatch(stockPlayer(arg));
  });
  socket.on('newGlobalMessage', (arg) => {
    store.dispatch(newGlobalMessage(arg.talker, arg.time, arg.message));
  });
};

export default socketIo;
