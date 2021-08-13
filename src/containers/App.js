import { connect } from 'react-redux';
import App from 'src/components/App';
import { changeValue } from 'src/actions/mainActions';

const mapStateToProps = (state) => ({
  isLoading: state.main.loading,
  haveNickname: state.main.haveNickname,
});

const mapDispatchToProps = (dispatch) => ({
  saveSocketId: (name, value) => dispatch(changeValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
