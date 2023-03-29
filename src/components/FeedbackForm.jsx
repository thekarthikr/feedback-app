import { useState } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./Card"
import Button from "./Button"

function FeedbackForm() {
   
  const [review , setReview] = useState('')
  const [rating , setRating] = useState(8)
  const [btnDisabled , setBtnDisabled] = useState(true)
  const [message , setMessage] = useState('')
 
  
  const handleTextChange = (e)=>{
   e.preventDefault()
   if(review !== '' && review.trim().length <= 10){
    setMessage('Text must be atleast 10 characters')
    setBtnDisabled(true)
  }else{
    setMessage(null)
    setBtnDisabled(false)
  }

   setReview(e.target.value)
  }

  return (
    <Card>
       <form >
         <h2>How would you like to rate our services ? </h2>

         <RatingSelect select ={(rating)=> setRating(rating)} />
        <div className="input-group" >
          <input onChange={handleTextChange} type="text" placeholder="Write a review" />
          <Button type='submit' isDisabled={btnDisabled} > Submit </Button>
        </div>
        {message && <p className="message"> {message} </p> }
       </form>
    </Card>
  )
}

export default FeedbackForm