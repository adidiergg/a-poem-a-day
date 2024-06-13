import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { SHA256 as sha256} from "crypto-js"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hashPassword = (password: string)=>{
  return sha256(password).toString();
}
