import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children?: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500 mb-2">
        {title}
      </h3>

      <div className="text-2xl font-semibold text-gray-800">
        {children ?? "---"}
      </div>
    </div>
  );
};

export default Card;
