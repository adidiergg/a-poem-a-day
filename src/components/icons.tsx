export type IconProps = React.HTMLAttributes<SVGElement> & {
  mode?: "light" | "dark";
};

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3801 15.27V7.57999C18.3801 6.80999 17.7601 6.25 17.0001 6.31H16.9601C15.6201 6.42 13.5901 7.11001 12.4501 7.82001L12.3401 7.89002C12.1601 8.00002 11.8501 8.00002 11.6601 7.89002L11.5001 7.79001C10.3701 7.08001 8.34012 6.40999 7.00012 6.29999C6.24012 6.23999 5.62012 6.81001 5.62012 7.57001V15.27C5.62012 15.88 6.1201 16.46 6.7301 16.53L6.9101 16.56C8.2901 16.74 10.4301 17.45 11.6501 18.12L11.6801 18.13C11.8501 18.23 12.1301 18.23 12.2901 18.13C13.5101 17.45 15.6601 16.75 17.0501 16.56L17.2601 16.53C17.8801 16.46 18.3801 15.89 18.3801 15.27Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.1001V17.6601"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" />
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
