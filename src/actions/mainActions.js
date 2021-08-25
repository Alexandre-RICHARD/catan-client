export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBMIT_NICKNAME = 'SUBMIT_NICKNAME';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const STOCK_PLAYER = 'STOCK_PLAYER';
export const SUBMIT_CHAT_MESSAGE = 'SUBMIT_CHAT_MESSAGE';
export const NEW_GLOBAL_MESSAGE = 'NEW_GLOBAL_MESSAGE';

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

export const submitChatMessage = () => ({
  type: SUBMIT_CHAT_MESSAGE,
});

export const newGlobalMessage = (talker, time, message) => ({
  type: NEW_GLOBAL_MESSAGE,
  talker,
  time,
  message,
});
