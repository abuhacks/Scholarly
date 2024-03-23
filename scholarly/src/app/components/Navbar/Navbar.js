import Link from 'next/link'
import React from 'react'

export default function Navbar(){
    return(
        <div> 
            <Link href='/'>Home</Link>
            <Link href='/'>Math</Link>
            <Link href='/'>Language</Link>
            <Link href='/'>About Us</Link>
        </div>
    )
}
