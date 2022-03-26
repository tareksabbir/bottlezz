import React from 'react';
import './QsnAns.css'

const QsnAns = () => {
    return (
        <div className='grid-make'>
            <div className='grid-design'>
                <h5>How React Works</h5>
                <p>While still attempting to be efficient and adaptive, React uses a declarative paradigm that makes it easy to reason about our application. It builds basic views for each state in our program, and it swiftly updates and renders the relevant component when our data changes.
                    React components believe data is being passed into them. The dynamic aspects of the UI are represented by this data. For example, a rendered UI element that supported a Boolean value may change the next time the component is created. A visual illustration of the notion is shown below.</p>
            </div>
            <div className='grid-design'>
                <h5>How UseState Works</h5>
                <p>
                    I'm dialing React right now. When you use useState inside a function component, it creates a single piece of state for that component. Whereas the state of a class is always an object, the state of a hook can be any type. Each state item has a single value, which can be an object, an array, a boolean, or any other type of value you can imagine.
                    useState is a built-in function in the React framework (). UseState () should only be used within a functional component. useState () does not work in class component; const App = () JSX elements useState (0) const [counter, setCounter];
                </p>

            </div>
        </div>
    );
};

export default QsnAns;