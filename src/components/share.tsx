import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icons } from "./icons";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { useToast } from "./ui/use-toast";

type ShareProps = {
  title: string,
  author: string,
}

export const Share = (props:ShareProps) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (navigator.clipboard) {9
      void navigator.clipboard.writeText(window.location.toString());
      toast({
        title: "link copiado",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span>
          <Icons.Share className="size-12 cursor-pointer rounded-full fill-transparent p-2 font-bold text-primary/90 hover:bg-primary/10 hover:text-primary " />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-1f">
        <DropdownMenuItem className="px-4 py-1" onClick={copyToClipboard}>
          <Icons.copy className="size-6 px-1 text-primary" /> Copiar link
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="px-4 py-1">
        

          <a
            className="flex flex-row"
            target="_blank"
            href={`https://x.com/intent/post?text=${props.title},+por+${props.author}&url=${window.location.toString()}`}
            rel="noopener noreferrer"
          >
            <Icons.x className="size-6 px-1 text-primary" />
          
            Compartir por X
            
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
