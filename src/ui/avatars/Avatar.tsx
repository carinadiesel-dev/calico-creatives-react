import React from 'react'
import {InitialsAvatar} from '@/ui/avatars/InitialsAvatar'
import {ImageAvatar} from '@/ui/avatars/ImageAvatar'
import sizes from './sizes';

type AvatarProps =
  | { initials?: string, size: keyof typeof sizes, avatarUrl?: never, backgroundColor?: string, color?: string }
  | { initials?: never, size: keyof typeof sizes, avatarUrl?: string, backgroundColor?: never, color?: never }

export const Avatar = ({ initials, avatarUrl, size, backgroundColor, color }: AvatarProps) => {
  if(avatarUrl)
    return <ImageAvatar avatarUrl={avatarUrl} size={sizes[size]} />;
  else if(initials)
    return <InitialsAvatar backgroundColor={backgroundColor!} color={color!} initials={initials} size={sizes[size]} />;
  else
    return null;
}