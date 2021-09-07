import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Text is transformed to UpperCase","success");
    }

    const handleLowClick = ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Text is transformed to LowerCase","success");
    }

    const handleChange = (e)=>{
        setText(e.target.value);
    }

    const handleClearText = ()=>{
        setText("");
        props.showAlert("Text is cleared","success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space is removed","success");
    }
    const handleCopy = ()=>{
        let t = document.getElementById('exampleFormControlTextarea1');
        t.select();
        navigator.clipboard.writeText(t.value);
        props.showAlert("Text is copied","success");
    }
    

    const getNumberOfWords = ()=>{
        const wordsSplit = text.split(" ");
        let wordCount = 0;
        wordsSplit.forEach((ele)=>{
            if(ele!=="")
                wordCount+=1;
        });
        return wordCount;
    }
    const textAreaStyle = {
        backgroundColor: props.mode==='light'?'white':'#06203c',
        color: props.mode==='light'?'black':'white',
        placeholderTextColor: 'red'
    }
    
    const [text,setText] = useState("");

    return (
        <>
    
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} placeholder="Enter your text here!" onChange={handleChange} style={textAreaStyle}  ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{getNumberOfWords()} Words and {text.length} Characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter the text above to see the preview"}</p>   
            </div>
        </>
    )
}
