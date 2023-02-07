import React from 'react';
import { StyledForm } from './Form'
import { Button } from '../Button/button';


const FormBox = () =>  {

    return (
        <StyledForm >
            <div>
                <p>Name:</p>
                <input  type='text' className='name-input' />
            </div> 
            <div>
                <p>Email:</p>
                <input type='text' className='email-input'  />
            </div>
            <div>
                <p>Password:</p>
                <input type='text' className='password-input' />
            </div>
            <Button className='join-form' >Join Now</Button>
        </StyledForm>
    )
    
}
export default FormBox

