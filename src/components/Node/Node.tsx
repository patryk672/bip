import { ChildrenProps } from "@/types";

function Title({ children }: ChildrenProps) {
  return <h1 className="text-3xl font-bold font-poppins">{children}</h1>;
}

export default function Node({ children }: ChildrenProps) {
  return (
    <section className="p-8 flex flex-col h-full justify-center">
      {children}
    </section>
  );
}

Node.Title = Title;
