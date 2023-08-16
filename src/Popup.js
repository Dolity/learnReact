import { useEffect } from 'react';
import './Popup.css';

function Popup(props) {
    useEffect(() => {
        console.log('Popup Start');
        return () => {
            console.log('Popup End');
        }
    }, []);
    return <div className="popup" onClick={props.onPopupClose} />
}

export default Popup;