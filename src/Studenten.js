import React from 'react';

const Studenten = props => {
    return (

        <button
            onClick={() => props.handleClick(props.naam)}>
            {props.naam}
        </button>

    )

}

export default Studenten;