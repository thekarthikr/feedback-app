import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'> {item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes />
      </button>
      <div className='text-display'>{item.text} </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
