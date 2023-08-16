import React from 'react';

// useForwardRef + useRef for make component
const SelectTextArea = React.forwardRef((props, ref) => {
    return (
        <div>
            <p>
                <textarea ref={ref} />
            </p>
            <p>
                <button onClick={props.onAllTextClick}>Select all text</button>
            </p>
        </div>
    )
})

export default SelectTextArea;