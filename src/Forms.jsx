import { Component } from "react";
import Apple from "./apple";
class Forms extends Component {
  render(){
    return (
      <>
       <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
    
    <label for="nickname">Nickname:</label>
    <input type="text" id="nickname" name="nickname" required />
    
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="1234567890" required />
    
    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male" required />
    <label for="male" style="display: inline;">Male</label>
    <input type="radio" id="female" name="gender" value="female" required />
    <label for="female" style="display: inline;">Female</label>
    <input type="radio" id="other" name="gender" value="other" required />
    <label for="other" style="display: inline;">Other</label>
    
    <button type="submit">Submit</button>
  </form>
      
      </>
    )
  }
  }
  export default Forms;