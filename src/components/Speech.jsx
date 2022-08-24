import React,{useState} from 'react'
import { useSpeechSynthesis } from "react-speech-kit";
export default function Speech() {
  const [value, setValue] =useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div>
    <div className="speech">
      <div className="group">
        <h2>Text To Speech Converter Using React Js</h2>
      </div>
      <div className="group">
        <textarea
          rows="10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
      <div className="group">
        <button onClick={() => speak({ text: value })}>
          Speech
        </button>
      </div>
    </div>
   );
    </div>
  )
}
