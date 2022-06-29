import { Component } from 'react'
import withRouter from '../helpers/withRouter'

class ClassComponentExample extends Component {
  render() {
    console.log('MY PROPS ARE', this.props)
    return (
      <div>
        <h2>Class component here!</h2>
        <p>let's see if I receive extra props...</p>
        <p>My location is {this.props.router.location.pathname}</p>
      </div>
    )
  }
}

export default withRouter(ClassComponentExample)
// again, this is for providing Class Components with location, navigate and params
// which normally they couldn't get (since they come from hooks which are not
// allowed in Class Components!)
