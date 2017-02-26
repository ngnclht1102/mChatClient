import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import selectors from '../../../selectors'
import Counter from '../components/Counter'

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = (state) => {
  const counter = selectors.getCounter(state)
  return {
    counter: counter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
