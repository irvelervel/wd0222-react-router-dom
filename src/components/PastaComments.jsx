import { ListGroup } from 'react-bootstrap'

// I want to generate as many ListGroup Items as elements in the comments array of the selectedPasta (which comes from the state)
// Every time we will modify the state, every component that is "connected" to the state will be rerendered accordingly to the new state

const PastaComments = ({ selectedPasta }) => (
  <ListGroup>
    {/* Since at the beginning our initial state is {selectedPasta:null} the interface will crash. Therefore we need to check if selectedPasta is not null if we want to render comments.
              We gonna use the short circuit operator to perform a conditional rendering, if selectedPasta is null --> do not render anything, if selectedPasta it is NOT null --> render the list of comments */}
    {/* {this.state.selectedPasta &&
                this.state.selectedPasta.comments.map(comment => (
                  <ListGroup.Item>
                    {comment.comment} -- {comment.author}
                  </ListGroup.Item>
                ))} */}
    {/* As an alternative you could use the ternary operator to display a component in case the selectedPasta is null */}
    {selectedPasta ? (
      selectedPasta.comments.map((comment) => (
        <ListGroup.Item key={comment.id}>
          {comment.comment} -- {comment.author}
        </ListGroup.Item>
      ))
    ) : (
      <h4>No comments to display </h4>
    )}
  </ListGroup>
)

export default PastaComments
