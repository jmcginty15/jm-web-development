import { ICON_SIZE } from "~/config";

export default function ThumbsUp({ scale }: { scale: number }) {
  const size = ICON_SIZE * scale;

  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
    >
      <path d="M6.81,22.48V54.2h10.1a3.62,3.62,0,0,0,3.61-3.62V26.1a3.62,3.62,0,0,0-3.62-3.62Z" />
      <path d="M40.14,25.54a42.07,42.07,0,0,0,2-12.17c0-6.37-7-5.71-7-5.71s-2.85,14.6-14.6,18.77" />
      <path d="M33.59,25.59H54s2.64.23,2.64,3.58-2.53,3.36-2.53,3.36h-5.2" />
      <path d="M48.91,40H54s2.89,0,2.89-3.75S54,32.53,54,32.53" />
      <path d="M48.91,47.54H54s2.89,0,2.89-3.75S54,40,54,40" />
      <path d="M20.52,50.58l9.18,3s2.28.87,10.79.67,6.91-.14,9-.21c3.55,0,6.54-3.73,2.41-6.45" />
    </svg>
  );
}
