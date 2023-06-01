import { ICON_SIZE } from "~/config";

export default function Phone({ scale }: { scale: number }) {
  const size = ICON_SIZE * scale;

  return (
    <svg
      fill="currentColor"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26 32h-21c-1.105 0-2-0.896-2-2v-24c0-1.105 0.895-2 2-2v24c0 1.104 0.896 2 2 2h4c1.105 0 2-0.896 2-2v-24h13c1.105 0 2 0.896 2 2v24c0 1.104-0.895 2-2 2zM21 29h2v-2h-2v2zM21 26h2v-2h-2v2zM21 23h2v-2h-2v2zM21 20h2v-2h-2v2zM18 29h2v-2h-2v2zM18 26h2v-2h-2v2zM18 23h2v-2h-2v2zM18 20h2v-2h-2v2zM26 7c0-0.553-0.447-1-1-1h-9c-0.552 0-1 0.447-1 1v4c0 0.552 0.448 1 1 1h9c0.553 0 1-0.448 1-1v-4zM26 18h-2v2h2v-2zM26 21h-2v2h2v-2zM26 24h-2v2h2v-2zM26 27h-2v2h2v-2zM11 29h-4c-0.552 0-1-0.447-1-1v-25c0-0.553 0.448-1 1-1h1.938v-2h1.062v2h1c0.552 0 1 0.447 1 1v25c0 0.553-0.448 1-1 1z"></path>
    </svg>
  );
}
