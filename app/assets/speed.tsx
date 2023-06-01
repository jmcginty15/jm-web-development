interface LogoProps {
  className?: string;
  scale?: number;
}

export default function Speed({ className = "", scale = 0.1 }: LogoProps) {
  const scaleFactor = scale / 0.1;
  return (
    <svg
      fill="currentColor"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
    >
      <g>
        <path
          d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
		c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
        />
        <g>
          <path
            d="M350.281,169.609l-23.594,21.625C343.016,209.047,352,232.047,352,256c0,52.938-43.062,96-96,96s-96-43.062-96-96
			s43.062-96,96-96v-32c-70.578,0-128,57.422-128,128s57.422,128,128,128s128-57.422,128-128
			C384,224.016,372.031,193.344,350.281,169.609z"
          />
          <polygon points="272,262.391 307.188,138.688 240,249.609 248,272 		" />
        </g>
      </g>
    </svg>
  );
}
