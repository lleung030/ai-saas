'use client'

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import SideBar from './sidebar';

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                
        <Button variant='ghost' size='icon' className='md:hidden'>
            <Menu />
        </Button>
            </SheetTrigger>
            <SheetContent side='left' className='p-0'>
                 <SideBar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar