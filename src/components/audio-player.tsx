import { useEffect, useRef } from "react";
import * as tts from "@diffusionstudio/vits-web";
import { use, useState } from "react";
import { Spinner } from "./spinner";
import { Icons } from "./icons";
import { ProgressPie } from "./progress-pie";

enum Status {
  initial = "initial",
  pending = "pending",
  play = "play",
  pause = "pause",
  reset = "reset",
  error = "error",
}
const synth = window.speechSynthesis;
let text = "Hello everybody!!!!"
const utterThis = new SpeechSynthesisUtterance(text);
synth.speak(utterThis);

export const AudioPlayer = (props: {
  title: string;
  content: string;
  author: string;
}) => {
  const [status, setStatus] = useState<Status>(Status.initial);
  const audio = useRef<HTMLAudioElement>(new Audio());
  const [progress,setProgress] = useState<number>(0);
  const [duration,setDuration] = useState<number>(0);
  console.log("render");
  /*
    const synth = window.speechSynthesis;
let text = "Hello everybody!!!!"
const utterThis = new SpeechSynthesisUtterance(text);

  */
  useEffect(() => {
    return () => {
      //audio.current.pause();
      console.log("cleanup");
    }
  })

  const handleTimeUpdate = () => {
    setProgress(audio.current.currentTime);
  }
  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleDataLoaded = () => {
    setDuration(audio.current.duration);
  }

  useEffect(() => {
    audio.current.addEventListener("loadedmetadata",handleDataLoaded);
    return () => {
      audio.current.removeEventListener("loadedmetadata", handleDataLoaded);
    };
  }, []);

  const handleAudioEnded = () => {
    setStatus(Status.reset);
  }

  useEffect(() =>{
    audio.current.addEventListener("ended", handleAudioEnded);
    return () => {
      audio.current.removeEventListener("ended", handleAudioEnded);
    }
  },[]);

  const handleOnError = () => {
    setStatus(Status.error);
  }

  useEffect(() =>{
    audio.current.addEventListener("onerror", handleOnError);
    return () => {
      audio.current.removeEventListener("onerror", handleOnError);
    }
  },[]);

  if (status === Status.pending) return <Spinner size={40} />;

  const generate_text_audio = async () => {
    setStatus(Status.pending);
    const wav = await tts.predict(
      {
        text: `${props.title} de ${props.author} ${props.content}`,
        voiceId: "es_ES-davefx-medium",
      },
      (progress) => {
        console.log(
          `Downloading ${progress.url} - ${Math.round((progress.loaded * 100) / progress.total)}%`,
        );
      },
    ).then(async (response)=> {
      audio.current.src = URL.createObjectURL(response);
      await audio.current.play();
      setStatus(Status.play);
    }).catch(e =>{
      console.log(e);
      setStatus(Status.error);
    });
    
  };

  const pause = () => {
    audio.current.pause();
    setStatus(Status.pause);
  };

  const play = async () => {
    await audio.current.play();
    setStatus(Status.play);
  };

  return (
    <div className="relative">
      {(status === Status.initial || status===Status.error) && (
        <Icons.sound
          className=" z-20 size-12 cursor-pointer rounded-full  fill-transparent p-2 font-bold text-primary/90 hover:bg-primary/10 hover:text-primary"
          aria-hidden="true"
          onClick={generate_text_audio}
        />
      )}
      {status === Status.play && (
        <>
        <Icons.pause
          className="absolute z-20  size-12 cursor-pointer rounded-full fill-current p-2 font-bold text-primary/90 hover:bg-primary/10 hover:text-primary"
          aria-hidden="true"
          onClick={pause}
        />    
        </>
        
      )}

      {status === Status.pause && (
        <Icons.play
          className="absolute z-20  size-12 cursor-pointer rounded-full fill-current p-2 font-bold text-primary/90 hover:bg-primary/10 hover:text-primary"
          aria-hidden="true"
          onClick={play}
        />
      )}
      {status === Status.reset && (
          <Icons.reset
          className="z-20  size-12 cursor-pointer rounded-full fill-current p-2 font-bold text-primary/90 hover:bg-primary/10 hover:text-primary"
          aria-hidden="true"
          onClick={play}
          />       
      )}
      { status !== Status.initial && status !== Status.reset && status !== Status.error && 
       <ProgressPie className="z-10 size-12 cursor-pointer rounded-full fill-current  font-bold text-primary/90 hover:bg-primary/10 hover:text-primary -rotate-90" progress={progress} duration={duration}/>

    }
    </div>
  );
};

//      <ProgressPie className="z-10 size-12 cursor-pointer rounded-full fill-current  font-bold text-primary/90 hover:bg-primary/10 hover:text-primary -rotate-90" progress={progress} duration={duration}/>

