import { cn } from "@/lib/utils";
import { oswald } from "./fonts";

export default function Heading({ children, className, id, tag = "h2" }) {
  const Tag = tag;

  let finalClass = className;
  if (tag == "h1") {
    finalClass = "text-3xl lg:text-5xl";
  } else if (tag == "h3") {
    finalClass = "text-xl lg:text-2xl";
  } else if (tag == "h4") {
    finalClass = "text-lg lg:text-xl";
  } else if (tag == "h5") {
    finalClass = "lg:text-lg";
  } else if (tag == "h6") {
    finalClass = "text-sm lg:text-base";
  }
  return (
    <>
      <Tag
        className={cn(
          `${oswald.className} text-2xl lg:text-3xl font-bold`,
          finalClass
        )}
        id={id}
      >
        {children}
      </Tag>
    </>
  );
}
