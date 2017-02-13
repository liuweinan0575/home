
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../redux/post';
import { PostView } from '../views';

function mapStateToProps(state) {
  const { post } = state;
  return {
    post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
