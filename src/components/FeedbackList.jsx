import FeedbackItem from "./FeedbackItem";


import React from 'react'
function FeedbackList({feedback}) {
  return (
  <div className="feedback-list">
   {feedback.map((item)=>(
    <FeedbackItem key={item.id} item={item} />
   ))}
  </div>
  )
}

export default FeedbackList