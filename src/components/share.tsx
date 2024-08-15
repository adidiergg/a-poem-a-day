import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Icons } from "./icons";

export const Share = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Icons.Share
          className=" size-12 cursor-pointer rounded-full fill-transparent p-2 font-bold text-primary/90 hover:bg-primary/10 hover:text-primary "
         
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-10 w-56 bg-red-400">
        <DropdownMenuItem>compartir</DropdownMenuItem>
        <DropdownMenuItem>compartir</DropdownMenuItem>
        <DropdownMenuItem>compartir</DropdownMenuItem>
        <DropdownMenuItem>compartir</DropdownMenuItem>
        <DropdownMenuItem>compartir</DropdownMenuItem>
        <DropdownMenuItem>compartir</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
