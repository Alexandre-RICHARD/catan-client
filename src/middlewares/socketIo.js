import axios from 'axios';

import store from 'src/store';
import {
  changeValue,
  stockPlayer,
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
};

export default socketIo;
