import React from 'react';

export default class LoginForm extends React.Component {
    render () {
        return (
            <div className='App block-example border border-dark'>
                <h3 className='App-link'>Log In</h3>
                <div>
                    <div>
                        <form>
                            <label>Username</label>
                            <input type='text' placeholder='Username'/>
                        </form>
                    </div>
                    <div>
                        <form>
                            <label>Password</label>
                            <input type='text' placeholder='Password'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
