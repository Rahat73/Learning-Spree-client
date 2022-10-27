import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
    render() {
        return (
            <div>
                <Fade top>
                    <h1 className='text-5xl font-light my-7'>Welcome to Learning Spree</h1>
                </Fade>
                <Fade left>
                    <h1 className='text-xl font-light'>A platform where you not only gain knowledge, <br /> but also grow the capability to implement</h1>
                </Fade>
            </div >
        );
    }
}

export default FadeExample;