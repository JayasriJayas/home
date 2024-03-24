import React from 'react';
import purple from '../img/purple.mp4';
import Countdown from './Countdown'; // Import the Countdown component

const Timer = () => {
    return (
        <div>
            <section className="box">
                <video src={purple} autoPlay loop muted/>

                <div className="timer">
                    <h1 className="jelly">
                        <span>C</span>
                        <span>o</span>
                        <span>g</span>
                        <span>n</span>
                        <span>o</span>
                        <span>b</span>
                        <span>l</span>
                        <span>a</span>
                        <span>z</span>
                        <span>e</span>
                    </h1>
                    <h2 className="timer-heading">Get Ready to Ignite Your Passion for Innovation!</h2>

                    {/* Add Countdown component here */}
                    <Countdown />

                    <div className="timer-container">
                        {/* Integrated Button */}
                        <div className="register-button">
                            <input type="submit" value="Register now!" />
                        </div>
                        {/* End of Integrated Button */}
                    </div>
                    <h3 className="timer-heading">Join Us for an Unforgettable Symposium Experience!Fuel Your Curiosity and Spark New Connections!</h3>
                </div>
            </section>
        </div>
    );
};

export default Timer;
