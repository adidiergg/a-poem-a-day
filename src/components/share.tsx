import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icons } from "./icons";

export const Share = () => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
      <span>
      <Icons.Share
          className="size-12 cursor-pointer rounded-full fill-transparent p-2 font-bold text-primary/90 hover:bg-primary/10 hover:text-primary "
         
        />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-1f">
        <DropdownMenuItem className="px-4 py-1">Copiar link</DropdownMenuItem>
        <DropdownMenuItem className="px-4 py-1">Compartir por X</DropdownMenuItem>
        <DropdownMenuItem className="px-4 py-1">Compartir por Facebook</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
