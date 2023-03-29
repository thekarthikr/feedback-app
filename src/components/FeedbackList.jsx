import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem";



import React from 'react'
function FeedbackList({feedback}) {

  if(!feedback || feedback === ''){
    return <p>No Feedback yet </p>
  }

  return (
  <div className="feedback-list">
   {feedback.map((item)=>(
    <FeedbackItem key={item.id} item={item} />
   ))}
  </div>
  )
}

FeedbackList.propTypes = {
  item : PropTypes.array,
}
export default FeedbackList