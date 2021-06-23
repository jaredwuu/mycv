import React,{useState} from 'react'
import Popup from './Popup'

const Contactme = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div>
        <input
            type="button"
            value="Send"
            onClick={togglePopup}
        />
        {isOpen && <Popup
            content={<>
                <b>Design your Popup</b>
                <button>Test button</button>
            </>}
            handleClose={togglePopup}
        />}
    </div>
    );
}

export default Contactme
