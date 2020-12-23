import React, { useState} from 'react'
import './quotes.css';

const Quotes=()=>{

    const [quote]=useState([
{
    quotation: "You can't go back and change the beginning, but you can start where you are and change the ending",
    author:  "C.S. Lewis"
},
// {
//     quotation: "I have great respect for the past. If you don't know where you've come from, you don't know where you're going. I have respect for the past, but I'm a person of the moment. I'm here, and I do my best to be completely centered at the place I'm at, then I go forward to the next place.",
//     author: "Maya Angelou"
// },
// {
//     quotation: "History, despite its wrenching pain, cannot be unlived, but if faced with courage, need not be lived again.",
//     author: "Maya Angelou"
// }

    ])

    // const currentFavs=favs.filter((quote)=>quote.quotation===quotation);

    return(
        <div className="subheader">
{quote.map((quotes, index)=>(
    <div key={index} >
        {quotes.quotation} --{quotes.author}
         
    </div>
))}



        </div>
    )
}

export default Quotes;