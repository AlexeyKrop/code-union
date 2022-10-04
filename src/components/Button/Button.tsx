import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = DefaultButtonPropsType & {
  name: string;
  callBack?: () => void;
};
export const Button: React.FC<ButtonPropsType> = ({ callBack, className, name }) => {
  const onClickBtnHandler: () => void = () => {
    if (callBack) {
      callBack();
    }
  };

  return (
    <button type="submit" className={className} onClick={onClickBtnHandler}>
      {name}
    </button>
  );
};
