//type IconProps = React.HTMLAttributes<SVGElement>;
interface ProgressPie  {
    progress: number;
    duration: number;
}
type ProgressPieProps = React.HTMLAttributes<SVGElement> & ProgressPie;

export const ProgressPie = ({progress,duration,...props}:ProgressPieProps) =>{
    const circumference = 2 * 3.14 * 45.5
    const offset = ((circumference/duration)*progress)-circumference;
    console.log(progress,duration,offset)
    return (
        <>

        <svg {...props} viewBox="-10.375 -10.375 103.75 103.75" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <circle r="45.5" cx="41.5" cy="41.5" fill="transparent" stroke="#e0e0e0" strokeWidth="8" strokeDasharray={circumference} strokeDashoffset="0"></circle>
            <circle r="45.5" cx="41.5" cy="41.5" stroke="#21272c" strokeOpacity={0.9} strokeWidth="8" strokeLinecap="round" strokeDashoffset={`${offset}px`} fill="transparent" strokeDasharray={circumference}></circle>
        </svg>
    
  </>
    )
}