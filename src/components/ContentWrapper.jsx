import { cn } from "@/lib/utils";

const ContentWrapper = ({ children, className, id, tag = "div" }) => {
  const Tag = tag;
  return (
    <>
      <Tag className={cn("container py-14 lg:py-20", className)} id={id}>
        {children}
      </Tag>
    </>
  );
};

export default ContentWrapper;
