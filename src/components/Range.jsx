import '../Style/Range.css'
import React, { useEffect, useState } from "react";

function Range(){
    
    const [data,setData] = useState(0)
    const [emoji,setEmoji] = useState('')
    useEffect(()=>{
        if(data == 0){
            setEmoji("😎")
        }else if(data == 1){
            setEmoji("🙂")
        }else if(data == 2){
            setEmoji("😆")
        }else if(data == 3){
            setEmoji("🤣")
        }else if(data == 4){
            setEmoji("😉")
        }else if(data == 5){
            setEmoji("😊")
        }else if(data == 6){
            setEmoji("😇")
        }else if(data == 7){
            setEmoji("🥰")
        }else if(data == 8){
            setEmoji("🤩")
        }else if(data == 9){
            setEmoji("😋")
        }else if(data == 10){
            setEmoji("🤑")
        }
    },[data])
    return(
        <div className='p-52 '>
            <h1 className='text-7xl  py-5'>{emoji}</h1>
            <input className={data>50?'heigh':'less' } type="range" min="0" max="10" step="1" value={data} onChange={(e)=>setData(e.target.value)} />
            <h1 className='text-2xl'>{data}</h1>
        </div>
    
    );
    
}

export default Range;