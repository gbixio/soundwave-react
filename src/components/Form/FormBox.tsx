import React from 'react';
import { StyledForm } from './Form'
import { ButtonLarge } from '../Button/ButtonCTA';


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
            <ButtonLarge >Join Now</ButtonLarge>
        </StyledForm>
    )
    
}
export default FormBox

