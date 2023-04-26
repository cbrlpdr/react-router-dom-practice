import "./styles.css"
import {useParams} from "react-router-dom"

export const Posts = () =>{
    const {id} = useParams();
    return (<h2>Posts!</h2>);
}