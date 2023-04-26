import {useEffect, useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'

export const Redirect = () => {
    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            setTime((t) => t - 1);
        },1000);

        if(time<0){
            navigate('/')
        }

    },[time]);

    return (<div><h1>Saindo em {time}</h1></div>);
}