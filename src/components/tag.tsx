


interface TagProps{
    id:number;
    tag: string;
}

export const Tag = (props:TagProps) =>{
    return(
        <span className="rounded-sm bg-primary/95 text-background px-2 py-0.5 text-xs capitalize">
            {props.tag.toLowerCase()}
        </span>
    )
}