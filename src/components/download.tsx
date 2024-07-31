import { forwardRef, useCallback, useRef,useImperativeHandle, RefObject } from "react";
import { Icons } from "./icons";
import { toPng } from "html-to-image";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn } from "~/lib/utils";

interface DownloadProps {
  
  
}

const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });


export const Download = forwardRef<HTMLDivElement>((props,ref) => {

    
  const filter = (node: HTMLElement) => {
    const exclusionClasses = ['menu', 'tag',];
    console.log(!exclusionClasses.some((classname) => node.classList?.contains(classname)))
    return !exclusionClasses.some((classname) => node.classList?.contains(classname));
  }
  const ImageConvert = useCallback(() => {
    if (ref && (ref as RefObject<HTMLDivElement>).current){
      toPng((ref as RefObject<HTMLDivElement>)!.current!,{cacheBust:true,filter:filter,style:{width:"100%",height:"100%"}})
     .then((url) =>  {
        const link = document.createElement('a');
        link.download = "download.png";
        link.href = url;
        link.click();
     }).catch((error) => {
        console.log("ImageConvert",error);
     })
    }
  },[ref]);
  return (
    <>

      <Icons.download
        className="size-12 cursor-pointer rounded-full fill-transparent p-2 text-primary/90 hover:bg-primary/10 hover:text-primary"
        aria-hidden="true"
        onClick={ImageConvert}
      />
    </>
  );
});


/*
<div  ref={ref} className="hidden">
      <div  className=" z-0 flex h-full  w-full rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  ">
        <div className="flex basis-full flex-col justify-between gap-4 p-8 md:px-12">
          
          <div className="">
            <h1 className="mt-1 text-center text-2xl font-bold text-primary/90 lg:text-2xl">
              {props.title}
            </h1>
            <Markdown
              className={cn(
                "mb-4 mt-1 text-center text-lg text-primary/80 lg:text-lg",
                fontGaramond.className,
              )}
            >
              {props.content}
            </Markdown>
          </div>

          <span className="text-md lg:text-md text-center italic text-primary/90">
            {props.author}
          </span>

        </div>
      </div>
      </div>


*/