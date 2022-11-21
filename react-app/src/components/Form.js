import { useState } from "react";

const Form = () => {
    let [firstname, setFirstName] = useState('');
    let [lastname, setLastName] = useState('');

    const handleFirstName = (event) => {
        setFirstName((firstname = event.target.value));
    };

    const handleLastName = (event) => {
        setLastName((lastname = event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            fname: firstname,
            lname: lastname,
        });
    };

    return (
        <div>
            <h3>Form</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleFirstName} type='text' name='firstname' value={firstname}></input>
                <br />
                <input onChange={handleLastName} type='text' name='lastname' value={lastname}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;