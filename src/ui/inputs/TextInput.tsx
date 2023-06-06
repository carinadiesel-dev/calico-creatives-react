import React, {InputHTMLAttributes} from 'react'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
}
export const TextInput = ({ invalid = false, ...rest }: TextInputProps) => {

  const error = invalid ? "text-calicoRedOrange-400":"";
  const className = `bg-calicoWhite-400 py-4 px-6 rounded-full shadow-md font-sans w-full text-calicoGray-200 ${error}`;

  return <input
    className={className}
    {...rest} />;
}