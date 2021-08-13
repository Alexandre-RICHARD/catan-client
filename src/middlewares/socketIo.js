import store from 'src/store';
import {
  changeValue,
  stockPlayer,
} from 'src/actions/mainActions';

const socketIo = (socket) => {
  socket.on('connect', () => {
    store.dispatch(changeValue('socketId', socket.id));
    console.log(`Connecté à l'API ; ID : ${socket.id}`);
  });
  window.onbeforeunload = () => {
    console.log('fermeture');
    socket.emit('disconection', socket.id);
  };

  socket.on('playerList', (arg) => {
    console.log('Liste reçu');
    console.log(arg);
    store.dispatch(stockPlayer(arg));
  });
};

export default socketIo;
