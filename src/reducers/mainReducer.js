import {
  CHANGE_VALUE,
  ERROR_MESSAGE,
  STOCK_PLAYER,
  NEW_GLOBAL_MESSAGE,
} from 'src/actions/mainActions';

const nicknamePLaceHolder = ['Dumbo', 'User666', 'Spies', 'Smarties', 'Ludo', 'Vespuchi', 'Explorer', 'Deadlyman', 'Batman', 'Foulque', 'Clotaire', 'Pinky', 'GoldenRetrouver', 'Snowdotnow', 'Coolest ever', 'Du coup', 'Scatman', 'The Ouichieur', 'Potichat'];

const initialState = {
  socketId: '',
  loading: false,
  haveNickname: false,
  nickname: '',
  nicknamePlaceholder: nicknamePLaceHolder[Math.floor(Math.random() * nicknamePLaceHolder.length)],
  errorMessage: '',
  playerList: {},
  message: '',
  globalChat: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }
    case STOCK_PLAYER: {
      return {
        ...state,
        playerList: action.playerList,
      };
    }
    case NEW_GLOBAL_MESSAGE: {
      return {
        ...state,
        globalChat: [
          ...state.globalChat, {
            talker: action.talker,
            time: action.time,
            message: action.message,
          }],
      };
    }
    default:
      return state;
  }
};
