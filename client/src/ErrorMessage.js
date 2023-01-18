import React, {useState, useContext, useEffect} from 'react';
import {ErrorContext} from './context/error';

function ErrorMessage() {
    const [visible, setVisible] = useState(false);
    const {error} = useContext(ErrorContext);
    useEffect(() => {
        if (!error) {
            setVisible(false)
            return
        } else {
            setVisible(true)
            const timer = setTimeout(() => {
                setVisible(false)
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [error])
    if (!visible) return null
return (
    <div>
        <h3 className="error">{error}</h3>
    </div>
)
}

export default ErrorMessage;