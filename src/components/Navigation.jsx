import Link from 'next/link'
import React from 'react'

function Navigation() {
    return (
        <div>
            <header className='grid grid-cols-2'>
                <div>next js app logo </div>
                <nav>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                          <li>
                            <Link href="/About">About</Link>
                        </li>
                          <li>
                            <Link href="/service">service</Link>
                        </li>
                          <li>
                            <Link href="/contact">contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Navigation
