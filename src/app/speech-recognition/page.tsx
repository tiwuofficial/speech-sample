'use client';
import { useState } from "react";

export default function SpeechRecognitionPage() {
  const [textList, setTextList] = useState<string[]>([]);

  if (typeof window !== "undefined") {
    // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    // konichiwa となる
    // recognition.lang = 'en-US';


    // recognition.interimResults = true;
    // recognition.continuous = true;
  
    recognition.onresult = (event: any) => {
      console.log(event.results);
      console.log(event.results[0][0].transcript);
      console.log(event.results[0].isFinal); // 発言が終了したかどうか。
      setTextList([...textList, event.results[0][0].transcript]);
    }
  
    recognition.start();
  }

  return (
    <main>
      {textList.map((text, index) => {
        return <p key={index}>{text}</p>
      })}
    </main>
  )
}
