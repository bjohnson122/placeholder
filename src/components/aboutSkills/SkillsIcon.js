import React from 'react'
import Image from 'next/image'

export default function SkillsIcon({src, alt}) {
  return (
    <div>
         <Image src={src} alt={alt} height={80} />
    </div>
  )
}
//m-auto md:flex-shrink relative flex md:flex-row flex-col items-center gap-4 overflow-hidden