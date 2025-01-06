
h1{
  color: red;
}

form {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #4CAF50;
  border-radius: 10px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Fieldset Styling */
fieldset {
  border: 10px solid #4CAF50;
  margin: auto;
  padding: 0;
}

legend {
  font-size: 1.5rem;
  color: #4CAF50;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Label Styling */
label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
}

/* Input, Textarea, and Select Styling */
input[type="text"],
input[type="tel"],
textarea,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}

textarea {
  resize: none;
}

input[type="radio"],
input[type="checkbox"] {
  margin-right: 5px;
}

/* Checkbox and Radio Button Group */
div input[type="checkbox"],
div input[type="radio"] {
  display: inline-block;
  margin: 5px 10px 5px 0;
}

div label {
  display: inline-block;
}

/* Select Styling */
select {
  cursor: pointer;
}

/* Submit Button Styling */
button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

/* Responsive Design */
@media (max-width: 600px) {
  form {
    padding: 15px;
  }

  input[type="text"],
  input[type="tel"],
  textarea,
  select,
  button[type="submit"] {
    font-size: 0.9rem;
  }
}
h1 {
  color: #333;
  font-family: Arial, sans-serif;
  text-align: center;
}

button {
  background-color: #007BFF;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

label {
  font-size: 18px;
  font-family: Arial, sans-serif;
  margin-right: 10px;
}

input {
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input:focus {
  border-color: #007BFF;
  outline: none;
}

div {
  text-align: center;
  margin-top: 50px;
}

ol{
  list-style-type: decimal;
  margin: 20px;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #333;
}
fieldset {
  border: 2px solid #007BFF;
  padding: 20px;
  margin: 20px auto;
  width: fit-content;
  border-radius: 10px;
}

legend {
  font-size: 20px;
  font-weight: bold;
  color:aquamarine;
  padding: 0 10px;
  text-transform: capitalize;
}
