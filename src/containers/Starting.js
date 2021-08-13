import { connect } from 'react-redux';
import Starting from 'src/components/Starting';
import { changeValue, submitNickname } from 'src/actions/mainActions';

const mapStateToProps = (state) => ({
  Nickname: state.main.nickname,
  Placeholder: state.main.nicknamePlaceholder,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (name, value) => dispatch(changeValue(name, value)),
  submitNickname: () => dispatch(submitNickname()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Starting);
