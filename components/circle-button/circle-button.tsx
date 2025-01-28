import Link from "next/link";
import React, { FC } from "react";

interface CircleButtonProps {
  onClick?: () => void;
  link?: string | null;
  children: React.ReactNode;
}

const CircleButton: FC<CircleButtonProps> = ({
  children,
  onClick,
  link = null,
}) => {
  return (
    <>
      {link === null && (
        <button
          className="bg-third-color aspect-square rounded-full flex justify-center items-center p-6"
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {link !== null && (
        <Link
          href={link}
          className="bg-third-color aspect-square rounded-full flex justify-center items-center p-6"
          target="_blank"
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default CircleButton;
