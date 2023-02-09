import React from 'react';
import {Join} from './Join'
import FormBox  from '../../components/Form/FormBox';
import FooterContainer from '../../components/Footer/FooterContainer';

const JoinContainer = () => {
    return (
        <>
        <Join>
            <div>
                <h1>Join the <span>fun.</span></h1>
            </div>
            <FormBox/>
        </Join>
        <FooterContainer/>
        </>
    )
    }

export default JoinContainer