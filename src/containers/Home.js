import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { changeValue, submitChatMessage } from 'src/actions/mainActions';

const mapStateToProps = (state) => ({
  playerList: state.main.playerList,
  nickname: state.main.nickname,
  Message: state.main.message,
  allChat: state.main.globalChat,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (name, value) => dispatch(changeValue(name, value)),
  submitChatMessage: (message) => dispatch(submitChatMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
