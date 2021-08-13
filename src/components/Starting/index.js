import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Starting = (({
  Nickname,
  Placeholder,
  changeFieldValue,
  submitNickname,
}) => {
  const handleValueChange = (event) => {
    changeFieldValue('nickname', event.target.value);
  };
  const handleSubmitNickname = (event) => {
    event.preventDefault();
    if (Nickname.length > 0 && Nickname.length < 31) {
      submitNickname();
    }
  };

  return (
    <div className="nicknameBox">
      <div className="nicknameBoxHeader" />
      <form className="nicknameForm">
        <p className="indication">Choisir un pseudo pour jouer</p>
        <input placeholder={Placeholder} className="nicknameInput" minLength="1" maxLength="30" value={Nickname} onChange={handleValueChange} />
        <input onClick={handleSubmitNickname} type="Submit" className="nicknameValidation" value="Valider et accéder au jeu" readOnly />
      </form>
    </div>
  );
});

Starting.defaultProps = {
  changeFieldValue: () => {},
  submitNickname: () => {},
};

Starting.propTypes = {
  Nickname: PropTypes.string.isRequired,
  Placeholder: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func,
  submitNickname: PropTypes.func,
};

export default Starting;
