import { forwardRef, useCallback, useRef,useImperativeHandle, RefObject, cloneElement } from "react";
import { Icons } from "./icons";
import { toCanvas, toPng, toSvg } from "html-to-image";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn } from "~/lib/utils";
import { useToast } from "./ui/use-toast";

interface DownloadProps {
  id: string;
}

const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });


export const Download = forwardRef<HTMLDivElement,DownloadProps>(function Download(props,ref)  {
  
  const { toast } = useToast();
   
  const ImageConvert = useCallback(() => {
    if (ref && (ref as RefObject<HTMLDivElement>).current){
      toPng((ref as RefObject<HTMLDivElement>)!.current!,{cacheBust:true,style:{backgroundColor:"#fffef5"}})
     .then((url) =>  {
        const link = document.createElement('a');
        link.download = `${props.id}.png`;
        link.href = url;
        link.click();
        toast({
          title:"Imagen descargada"
        })
     }).catch((error) => {
        console.log("ImageConvert",error);
     })
    }
  },[ref]);
  return (
    <div className="rounded-full  cursor-pointer hover:bg-primary/10 ">

      <Icons.download
        className="size-12 fill-transparent p-1.5 text-primary/90  hover:text-primary"
        aria-hidden="true"
        onClick={ImageConvert}
      />
    </div>
  );
});
