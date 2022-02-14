import React, {useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div>
                <input
                type="text"
                className='input'
                value={value}
                // onChange={handleChange}
                onChange={(event) => handleChange(event)}
            />
        </div>        
    )
    
    

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }

    // return (

    //     <div>
    //       <p></p>
    
    //       <form className="contact-form" onSubmit={handleSubmit}>
    //         <div className="form-group">
    //           <Input id="firstname" value={contact.firstName} name="firstName" placeholder="First Name" handleChange={handleInputChange} />
    //         </div>
    
    //         <input type="submit" className="btn" name="sumbit_btn" value={isEditing ? "Save" : "Submit" } />
    //       </form>
    //     </div>
}


export default Input;