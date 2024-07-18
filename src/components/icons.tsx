export type IconProps = React.HTMLAttributes<SVGElement> & {
  mode?: "light" | "dark";
};

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
      viewBox="0 0 512 512"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Atrás</title>
      <path d="M34,256,210,80l21.21,21.2L91.4,241H478v30H91.4L231.25,410.84,210,432Z" />
    </svg>
  ),
  sound: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Generar sonido</title>
      <path
        d="M83,384c-13-33-35-93.37-35-128C48,141.12,149.33,48,256,48s208,93.12,208,208c0,34.63-23,97-35,128"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <path
        d="M108.39,270.13l-13.69,8h0C64.47,295.83,63,350.54,91.32,400.33s75.87,75.81,106.1,58.12h0l13.69-8a16.16,16.16,0,0,0,5.78-21.87L130,276A15.74,15.74,0,0,0,108.39,270.13Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <path
        d="M403.61,270.13l13.69,8h0c30.23,17.69,31.74,72.4,3.38,122.19s-75.87,75.81-106.1,58.12h0l-13.69-8a16.16,16.16,0,0,1-5.78-21.87L382,276A15.74,15.74,0,0,1,403.61,270.13Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </svg>
  ),
  play: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 5.49683V18.5032C4 20.05 5.68077 21.0113 7.01404 20.227L18.0694 13.7239C19.384 12.9506 19.384 11.0494 18.0694 10.2761L7.01404 3.77296C5.68077 2.98869 4 3.95 4 5.49683Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pause: (props: IconProps) => (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M 16.8320 47.0898 L 22.1523 47.0898 C 24.2148 47.0898 25.2695 46.0117 25.2695 43.9492 L 25.2695 12.0273 C 25.2695 9.8945 24.2148 8.9102 22.1523 8.9102 L 16.8320 8.9102 C 14.7695 8.9102 13.6914 9.9883 13.6914 12.0273 L 13.6914 43.9492 C 13.6914 46.0117 14.7695 47.0898 16.8320 47.0898 Z M 33.8477 47.0898 L 39.1679 47.0898 C 41.2305 47.0898 42.3086 46.0117 42.3086 43.9492 L 42.3086 12.0273 C 42.3086 9.8945 41.2305 8.9102 39.1679 8.9102 L 33.8477 8.9102 C 31.7852 8.9102 30.7305 9.9883 30.7305 12.0273 L 30.7305 43.9492 C 30.7305 46.0117 31.7852 47.0898 33.8477 47.0898 Z" />
    </svg>
  ),
  reset: (props: IconProps) => (
    <svg
      viewBox="0 0 512 512"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M64,256H34A222,222,0,0,1,430,118.15V85h30V190H355V160h67.27A192.21,192.21,0,0,0,256,64C150.13,64,64,150.13,64,256Zm384,0c0,105.87-86.13,192-192,192A192.21,192.21,0,0,1,89.73,352H157V322H52V427H82V393.85A222,222,0,0,0,478,256Z" />
    </svg>
  ),
  bookmark: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
