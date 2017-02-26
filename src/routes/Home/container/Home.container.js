import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import selectors from '../../../selectors'
import HomeView from '../components/HomeView'

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = (state) => {
  const chatHistory = selectors.getChatHistory(state)
  return {
    chatHistory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
