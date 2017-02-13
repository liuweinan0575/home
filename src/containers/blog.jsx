
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../redux/blog';
import { BlogView } from '../views';

function mapStateToProps(state) {
  const { blog } = state;
  return {
    blog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogView);
