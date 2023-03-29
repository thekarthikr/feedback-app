import {v4 as uuidv4} from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackItem from "./components/FeedbackItem"

function App() {

   const [feedback , setFeedback] = useState(FeedbackData)
  
   const addFeedback = (newFeedback)=>{
      newFeedback.id = uuidv4()
     setFeedback([newFeedback, ...feedback])
  
   }
    
   const deleteFeedback = (id)=>{
    if(window.confirm('Are you sure want to delete')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
   }

  return (
    <>
     <Header />
      <div className="container">
      <FeedbackForm handleAdd = {addFeedback} />
      <FeedbackStats feedback = {feedback} />
      <FeedbackList feedback = {feedback} handleDelete ={deleteFeedback} />
      </div>
    </>
  )
}

export default App