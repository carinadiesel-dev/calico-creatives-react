import React, {InputHTMLAttributes} from 'react'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
}
export const TextInput = ({ invalid = false, ...rest }: TextInputProps) => {

  const error = invalid ? "text-red-400":"";
  const className = `py-4 px-6 rounded-full shadow-md font-normal w-full text-gray-900 ${error}`;

  return <input
    className={className}
    {...rest} />;
}