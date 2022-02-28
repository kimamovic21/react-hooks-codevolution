import React, {useState} from 'react'
import HookMouse from './effecthookcomponents/HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toogle display</button>{display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
