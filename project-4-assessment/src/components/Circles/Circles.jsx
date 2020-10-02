import React from 'react';
import './Circles.css';

const Circles = props => {
    return(
        <div className="Circles">
            <div className={props.selected === 'One' ? 'selected' : null}>1</div>
            <div className={props.selected === 'Two' ? 'selected' : null}>2</div>
            <div className={props.selected === 'Three' ? 'selected' : null}>3</div>
            <div className={props.selected === 'Four' ? 'selected' : null}>4</div>
        </div>
    );
}

export default Circles;
