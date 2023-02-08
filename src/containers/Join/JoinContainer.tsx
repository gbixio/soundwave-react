import React from 'react';
import {Join} from './Join'
import FormBox  from '../../components/Form/FormBox';

const JoinContainer = () => {
    return (
        <Join>
            <h1 className='join__title'>Join the <span>fun.</span></h1>
            <FormBox/>
        </Join>
    )
    }

export default JoinContainer