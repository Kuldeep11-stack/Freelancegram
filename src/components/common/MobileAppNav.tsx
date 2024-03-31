import { MenuIcon, Plus, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MobileAppNav = () => {
  return (
    <div className='md:hidden'>
        <nav className='flex justify-between items-center p-2'>
            <MenuIcon size={30}/>
            <Image src={"/images/logo_512.png"} width={40} height={40} alt="logo" />
            <Settings  size={30}/>
        </nav>
        <button className="bg-primary absolute bottom-2 right-2 h-12 w-14 rounded-full text-white flex justify-center items-center"><Plus/></button>
    </div>
  )
}

export default MobileAppNav