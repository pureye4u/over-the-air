import { connect } from 'react-redux'

let Box = ({ dispatch }) => (
  <div className="box">
  BOX!
  </div>
)

Box = connect()(Box)

export default Box;
