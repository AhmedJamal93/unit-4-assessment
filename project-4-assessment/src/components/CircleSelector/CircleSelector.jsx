import React from 'react'
import './CircleSelector.css'

const CircleSelector = props => {

    const buttonChange = event => {
        props.buttonSelect(event.target.value)
      }

    if (props.selected)

    return(
        <div className='CircleSelector' >
            <button
                className={props.selected === 'One' ? 'selected' : ''}
                value='One'
                onClick={buttonChange}>{props.selected === 'One' ? 'Circle 1 Selected' : 'Select Circle 1' }
            </button>
            <button
                className={props.selected === 'Two' ? 'selected' : ''}
                value='Two'
                onClick={buttonChange}>{props.selected === 'Two' ? 'Circle 2 Selected' : 'Select Circle 2' }
            </button>
            <button
                className={props.selected === 'Three' ? 'selected' : ''}
                value='Three'
                onClick={buttonChange}>{props.selected === 'Three' ? 'Circle 3 Selected' : 'Select Circle 3' }
            </button>
            <button
                className={props.selected === 'Four' ? 'selected' : ''}
                value='Four'
                onClick={buttonChange}>{props.selected === 'Four' ? 'Circle 4 Selected' : 'Select Circle 4' }
            </button>
        </div>
    )
}

export default CircleSelector
