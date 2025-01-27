import React, { FC } from "react";

interface CircleButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CircleButton: FC<CircleButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-third-color aspect-square rounded-full flex justify-center items-center p-6"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CircleButton;
