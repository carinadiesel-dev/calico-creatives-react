import React from 'react'
import sizes from '@/ui/avatars/sizes'

type ImageAvatarProps = {
  avatarUrl: string
  size: typeof sizes[keyof typeof sizes]
}

export const ImageAvatar = ({ avatarUrl, size }: ImageAvatarProps) => {
  return <div className="border border-2 border-gray-200 rounded-full" style={{
    backgroundImage: `url(${avatarUrl})`,
    backgroundSize: 'cover',
    width: size.size,
    height: size.size,
    fontSize: size.fontSize
  }} />;
}