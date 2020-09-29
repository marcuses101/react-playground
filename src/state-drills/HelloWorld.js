import React, {useState, useEffect} from 'react';

export default function HelloWorld (props) {
    const [who, setWho] = useState("World")
    const buttons = ["World", "Friend", "React"]

    function handleClick (e){
        console.log(e.target.textContent);
        setWho(e.target.textContent)
    }

    return (
        <div>
            <p>Hello {who}</p>
            {buttons.map(button=>{
                return <button onClick={handleClick}>{button}</button>
            })}
        </div>
    )
}