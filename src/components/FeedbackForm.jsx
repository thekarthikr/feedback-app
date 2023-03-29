import { useState } from "react"
import Card from "./Card"
import Button from "./Button"

function FeedbackForm() {
   
  const [review , setReview] = useState('')
  
  const handleTextChange = (e)=>{
   setReview(e.target.value)
  }

  return (
    <Card>
       <form >
         <h2>How would you like to rate our services ? </h2>
        <div className="input-group" >
          <input onChange={handleTextChange} type="text" placeholder="Write a review" />
          <Button type='submit' > Submit Review</Button>
        </div>
       </form>
    </Card>
  )
}

export default FeedbackForm