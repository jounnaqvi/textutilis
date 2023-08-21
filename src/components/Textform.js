import React,{useState} from 'react';

export default function Textform(props) {
 const handleupclick = ()=>{
  //  console.log("this button will clicked" + text);
   let newText = text.toUpperCase();
      setText(newText);
      props.showalert("converted too upper case","success")
      
 }
 const handleloclick = ()=>{
  //  console.log("this button will clicked" + text);
   let newText = text.toLowerCase();
      setText(newText);
    }   
 const handlecleartext = ()=>{
  //  console.log("this button will clicked" + text);
   let newText ='';
      setText(newText);
    }   
    const handleonChange = (event)=>{ 
  //  console.log("On change");
   setText(event.target.value);

    }

//     }

    const [text, setText]=useState("");
    // setText("this is  john");
  return (
    <>
      <div className='container'>
        {/* <h1>{props.heading}</h1> */}

<div className="mb-3 my-3" >
  <textarea className="form-control" value ={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupclick}>convert to UPPERCASE</button>
<button className="btn btn-primary mx-1" onClick={handleloclick}>convert to lowercase</button>
<button className="btn btn-primary" onClick={handlecleartext}>clear</button>
    </div>
    <div className="container">
   <h1> summary
   </h1>
   <p>
     {text.split(" ").length}words and {text.length} character
   </p>
<p>
  {0.008 *  text.split(" ").length} minutes to read
</p>
<h3>preview</h3>
<p>
  {text}
</p>

    </div>
    </>
  )
}
