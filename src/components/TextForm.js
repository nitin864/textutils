import React, { useState } from "react";
 
export default function TextForm(props) {
  const handleupcase = () => {
    //console.log("uppercase was clicked " + text);
    let newtext = text.toLocaleUpperCase();
    setext(newtext);
    props.showAlert("Converted to Uppercase!","success");
    if (newtext == ''){
      props.showAlert("Enter Text First! ","warning");
    }
  };
  const handleOnchange = (event) => {
    //console.log("onclick");
    setext(event.target.value);
  };
  const handlelowercase = () => {
    //console.log("lowercase was clicked" + text)
    let newtext = text.toLocaleLowerCase();

    setext(newtext); 
    props.showAlert("Converted to Lowercase!","success");
    if (newtext == ''){
      props.showAlert("Enter Text First! ","warning");
    }
  };

  const handlespeak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent == "Speak") {
      toogle.innerHTML = "Stop";
      props.showAlert("Voice Recognition ON!","success");
      if(msg==''){
        props.showAlert("Enter Text First!","warning");
      }
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
        props.showAlert("Voice Recognition OFF!","success");
      }
    }
  };
  const [text, setext] = useState("");
  const handleclear =()=> {
    let newtext = '';
    setext(newtext);
    props.showAlert("Cleared!","success");
  }


      


 

  return (
    <>
      <div>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
             
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleupcase}>
          Click To UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlelowercase}>
          Click To LowerCase
        </button>
        
        <button
          type="submit"
          onClick={handlespeak}
          className="btn btn-warning mx-1 my-1"
          id="toggle"
        >
          Speak
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclear}>
          Clear
        </button>
      </div>
      <div className="container  mx-1 my-1"  >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>It takes {0.008 * text.split(" ").length} minutes to read</p>
        <div className="container mx-2"  >
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
