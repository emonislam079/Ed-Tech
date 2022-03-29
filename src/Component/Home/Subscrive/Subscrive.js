import React from 'react';
import './Subscrive.css'
const Subscrive = () => {
    return (
                  <div id="subscription">
    
                <section className="container d-flex justify-content-center background my-5 p-5 border-5 rounded-3 text-white"
                    id="subscribe">
                    <div>
                        <h1>LET'S STAY IN TOUCH</h1>
                        <p>Get updates on school events, specials and more</p>
                        <div class="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label className="text-black" for="floatingInput">Email address</label>
                        </div><br />
                        <button type="button" className="btn btn-send">SEND</button>
                    </div>
    
                </section>
            </div>
        );
    };

export default Subscrive;