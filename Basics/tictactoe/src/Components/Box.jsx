import {useState} from 'react'


export default function Box({value}){
    const [click1, setclick1] = useState()
    const [click, setclick] = useState(null)
    function check(){   
        if(click1===true){
            setclick('x')
            setclick1(false);
        }
        else{
            setclick('o')
            setclick1(true);
        }   
    }

console.log(click)
    return(
        <>
        <button onClick={check} style={{height:"35px" ,width:"35px"}}>
        {click}
        </button>
        <h1>{value}</h1>
        </>
    )
}