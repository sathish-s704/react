import React from 'react';
function Forms(){
    return(
        <form>
        <fieldset>
          <legend>Slam Book</legend>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="nickname">Nickname:</label>
            <input type="text" id="nickname" name="nickname" required />
          </div>
          <div>
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="1234567890" required />
          </div>
          <div>
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male" required />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" required />
            <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" required />
            <label for="other">Other</label>
          </div>
          <div>
        <label for="memories">Memories:</label>
        <textarea id="memories" name="memories" rows="4" cols="40" placeholder="Write your favorite memories here..."></textarea>
      </div>
          <div>
        <label>Favorite Actors:</label>
        <input type="checkbox" id="vijay" name="actors" value="vijay" />
        <label for="vijay">Vijay</label>
        <input type="checkbox" id="ajith" name="actors" value="ajith" />
        <label for="ajith">Ajith</label>
        <input type="checkbox" id="surya" name="actors" value="surya" />
        <label for="surya">Surya</label>
      </div>
      <div>
          <label>School:</label>
          <select name="school">
            <option value="school1">ghs</option>
            <option value="school2">kongu</option>
            <option value="school3">vijay vikas</option>
          </select>
        </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      
    )
}
export default Forms;