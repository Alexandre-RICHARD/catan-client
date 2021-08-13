export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBMIT_NICKNAME = 'SUBMIT_NICKNAME';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const STOCK_PLAYER = 'STOCK_PLAYER';

export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const submitNickname = () => ({
  type: SUBMIT_NICKNAME,
});

export const errorMessage = (message) => ({
  type: ERROR_MESSAGE,
  message,
});

export const stockPlayer = (playerList) => ({
  type: STOCK_PLAYER,
  playerList,
});
