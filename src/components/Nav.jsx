import { cn } from "@/lib/utils";
import { oswald } from "./fonts";

export default function Nav({ className }) {
  return (
    <>
      <ul
        className={`${cn(`${oswald.className} flex items-center gap-5 uppercase tracking-widest`, className)}`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </>
  );
}
