/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import rules from 'src/assets/text/rules';

const Home = (({
  playerList,
  nickname,
  changeFieldValue,
  Message,
  submitChatMessage,
  allChat,
}) => {
  const playerListDisplay = [];
  playerList.forEach((player) => {
    const preparedClass = `playerName ${player === nickname && 'player--itsme'}`;
    playerListDisplay.push(
      <p className={preparedClass} key={player}>{player}</p>,
    );
  });

  const messages = [];
  allChat.forEach((message) => {
    messages.push(
      <tr className={message.talker === nickname ? 'message--itsme' : 'message--other'}>
        <td className="author">{message.talker}</td>
        <td className="time">{message.time}</td>
        <td className="message">{message.message}</td>
      </tr>,
    );
  });

  const handleValueChange = (event) => {
    changeFieldValue('message', event.target.value);
  };
  const handleSubmitMessage = (event) => {
    event.preventDefault();
    if (Message.length > 0 && Message.length < 301) {
      submitChatMessage();
    }
  };

  return (
    <div className="homeContainer">
      <div className="homeContent rulesBox">
        <h1 className="title1">Règles du Catan</h1>
        <p>{ rules }</p>
      </div>
      <div className="homeSubContainer1">
        <div className="homeCatanLogo" />
        <div className="homeContent gameList">
          <h1 className="title1">Listes des parties</h1>
        </div>
      </div>
      <div className="homeSubContainer2">
        <div className="homeContent playerList">
          <h1 className="title1">Listes des joueurs connectés</h1>
          {playerListDisplay}
        </div>
        <div className="homeContent globalChat">
          <h1 className="title1">Canal de chat global</h1>
          <div className="chatSeparator">
            <div className="messageBox">
              <table>
                {messages}
              </table>
            </div>
            <form className="chatInput">
              <input placeholder="Envoie un message ici" className="messageInput" minLength="1" maxLength="300" value={Message} onChange={handleValueChange} />
              <input onClick={handleSubmitMessage} type="Submit" className="messageValidation" value="Envoyer" readOnly />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

Home.defaultProps = {
  changeFieldValue: () => {},
  submitChatMessage: () => {},
};

Home.propTypes = {
  playerList: PropTypes.array.isRequired,
  nickname: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func,
  Message: PropTypes.string.isRequired,
  submitChatMessage: PropTypes.func,
  allChat: PropTypes.array.isRequired,
};

export default Home;
