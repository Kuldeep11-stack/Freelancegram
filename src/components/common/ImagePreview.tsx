import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'

const ImagePreview = ({image,callback} : {image :string , callback: ()=>void}) => {
  return (
    <div className='relative border-2 rounded-xl    '>
        <Image src={image} alt='image_preview' height={10} width={10} className='w-full object-contain'/>
        <Button className="absolute top-2 right-2" variant={'secondary'} size={'icon'} > 
        <X onClick={callback}/>
        </Button>
    </div>
  )
}

export default ImagePreview