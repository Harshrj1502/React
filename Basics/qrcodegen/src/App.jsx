import { useState } from 'react'
import QRCode from 'react-qr-code'
import './App.css'

// using third party package project


export default function App() {

  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  return (
    <>
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          // button ko disable krdo jb kch input na ho 
          onClick={()=> {setQrCode(input),setInput('')}}>
          {/* setInput('') use hota hai wapas s empty bnane k    */}
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
    </>
  )
}