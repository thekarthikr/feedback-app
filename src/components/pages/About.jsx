import Card from "../Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className='about'>
        <h1> About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eos
          culpa nisi voluptatem quod tenetur officia harum amet velit rerum!
        </p>
        <Link to='/'>Back to Home</Link>
      </div>
    </Card>
  );
}

export default About;
