import React from 'react';

const SentFile = React.forwardRef((props, ref) => {
    return (
        <div>
            <p>
                <input type="file" ref={ref} />
            </p>
            <p>
                <button onClick={props.onUploadClick}>Upload</button>
            </p>
        </div>

    )
})

export default SentFile;