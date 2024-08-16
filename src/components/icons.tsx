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
  bookmark_save: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.5 10.5L11.5 11.5L14 9M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  download: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 5L19 8M19 8L22 5M19 8V2M12.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17C17.93 21 18.395 21 18.7765 20.8978C19.8117 20.6204 20.6204 19.8117 20.8978 18.7765C21 18.395 21 17.93 21 17M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5ZM14.99 11.9181L6.53115 19.608C6.05536 20.0406 5.81747 20.2568 5.79643 20.4442C5.77819 20.6066 5.84045 20.7676 5.96319 20.8755C6.10478 21 6.42628 21 7.06929 21H16.456C17.8951 21 18.6147 21 19.1799 20.7582C19.8894 20.4547 20.4547 19.8894 20.7582 19.1799C21 18.6147 21 17.8951 21 16.456C21 15.9717 21 15.7296 20.9471 15.5042C20.8805 15.2208 20.753 14.9554 20.5733 14.7264C20.4303 14.5442 20.2412 14.3929 19.8631 14.0905L17.0658 11.8527C16.6874 11.5499 16.4982 11.3985 16.2898 11.3451C16.1061 11.298 15.9129 11.3041 15.7325 11.3627C15.5279 11.4291 15.3486 11.5921 14.99 11.9181Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  explore: (props: IconProps) => (
    <svg
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.029 16.5295L19.5 19.0005"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  prev: (props: IconProps) => (
    <svg
      version="1.1"
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 42"
      {...props}
    >
      <polygon points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41 " />
    </svg>
  ),
  next: (props: IconProps) => (
    <svg
      version="1.1"
      baseProfile="tiny"
      id="Layer_1"
      viewBox="0 0 42 42"
      {...props}
    >
      <polygon points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 " />
    </svg>
  ),
  first_page: (props: IconProps) => (
    <svg viewBox="-2 0 20 20" version="1.1" {...props}>
      <g
        id="Free-Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          transform="translate(-1267.000000, -748.000000)"
          id="Group"
          stroke="currentColor"
          strokeWidth="2"
        >
          <g transform="translate(1263.000000, 746.000000)" id="Shape">
            <path d="M19,21 L9.5,12 L19,3 M5,3 L5,21"></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  last_page: (props: IconProps) => (
    <svg viewBox="-1.5 0 20 20" version="1.1" {...props}>
      <g
        id="Free-Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          transform="translate(-1192.000000, -748.000000)"
          id="Group"
          stroke="currentColor"
          strokeWidth="2"
        >
          <g transform="translate(1189.000000, 746.000000)" id="Shape">
            <path
              d="M19,21 L9.5,12 L19,3 M5,3 L5,21"
              transform="translate(11.750000, 12.000000) scale(-1, 1) translate(-11.750000, -12.000000) "
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  Share: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 13V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V13M12 3L12 15M12 3L16 7M12 3L8 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  copy: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z"
        fill="currentColor"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <path
        fill="currentColor"
        d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
      />
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
    </svg>
  ),
};
