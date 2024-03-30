import './Rate.css'
import React, {useState , useRef} from "react"
import axios from 'axios'
import App from "./App.js"
import starr from "./images/plainstar.jpeg";
import sta from "./images/fillstar.png";
export default function Rate(){
    const textAreaRef = useRef(null);
    const [stars, setStars] = useState(0);
    const[star1,setStar1]=useState(starr)
    const[star2,setStar2]=useState(starr)
    const[star3,setStar3]=useState(starr)
    const[star4,setStar4]=useState(starr)
    const[star5,setStar5]=useState(starr)
    const handleStarClick = (star,setStar) => {
        if(star===starr){
            setStar(sta);
            setStars(stars-1);
        }
        else{
            setStar(starr);
            setStars(stars+1);
        }
    };
    const handleSubmit= ()=>{
        axios.post("http://localhost:9000/",{ star: stars, text: textAreaRef.current.value })
        .then(result=>{console.log(result)})
        .catch(error=>console.log(error))


        if(textAreaRef.current.value === "Thanks for the REVIEW...Have a nice day"){
            return;
        }
        textAreaRef.current.value = "Thanks for the REVIEW...We consider this valuable and use this for improving our service. Thank you once again."
    }
    return(
        <div>
            <App />
            <div className="stars-cont">
            <img src={star1} alt="star" className="star" onClick={() => handleStarClick(star1,setStar1)}/>
            <img src={star2} alt="star" className="star" onClick={() => handleStarClick(star2,setStar2)}/>
            <img src={star3} alt="star" className="star" onClick={() => handleStarClick(star3,setStar3)}/>
            <img src={star4} alt="star" className="star" onClick={() => handleStarClick(star4,setStar4)}/>
            <img src={star5} alt="star" className="star" onClick={() => handleStarClick(star5,setStar5)}/>
            </div>
            <textarea ref={textAreaRef} rows="4" cols="50">Being our valuable customer please spend a minute to write a review on our service and give us insights on where to improve from our end.</textarea>
            <button className="navitem-b" onClick={handleSubmit}>Submit</button>
            <h1 className="h1">Also rate us <a href="https://www.indiamart.com/msformsprint/" >@IndiaMart.com</a></h1>
        </div>
    )
}