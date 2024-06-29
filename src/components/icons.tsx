export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="7" cy="15" r="2" />
      <circle cx="17" cy="15" r="2" />
      <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
    </svg>
  ),
  back: (props: IconProps) => (
    <svg
      {...props}
      fill="#000000"
      viewBox="0 0 512 512"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M34,256,210,80l21.21,21.2L91.4,241H478v30H91.4L231.25,410.84,210,432Z" />
    </svg>
  ),
};
