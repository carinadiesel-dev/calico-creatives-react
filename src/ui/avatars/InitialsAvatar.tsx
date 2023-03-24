import React from 'react';
import sizes from './sizes';

type InitialsAvatarProps = {
  backgroundColor: string
  color: string
  initials: string
  size: typeof sizes[keyof typeof sizes]
}

export const InitialsAvatar = ({ initials, backgroundColor, color, size }: InitialsAvatarProps) => {
  return <div className="font-bold border border-2 border-gray-200 rounded-full flex items-center justify-center" style={{
    backgroundColor,
    color,
    width: size.size,
    height: size.size,
    fontSize: size.fontSize
  }}>
    {initials.slice(0, 2).toUpperCase()}
  </div>;
}