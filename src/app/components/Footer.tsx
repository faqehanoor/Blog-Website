"use client";
import React from 'react';
import Link from 'next/link';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <div>
      <div className='pt-16 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen'>
        <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 font-semibold'>
          <div className='sm:col-span-2'>
            <Link href={"/"} aria-label='Go home' title='perfumes' className=''>
              <span className='ml-2 text-white text-2xl uppercase font-bold tracking-wide'>
                WATERFALLS
              </span>
            </Link>
          </div>

          <div className='space-y-2 text-sm'>
            <p className='text-base font-bold tracking-wide text-gray-900'>Contacts</p>

            <div className='flex'>
              <p className='text-black font-bold'>Phone:</p>
              <Link href="tel:03302354356" aria-label='My Phone Number' title="nmbr" className='transition-colors duration-300 text-white text-secondary hover:text-violet-400'>
                03302354356
              </Link>
            </div>

            <div className='flex'>
              <p className='text-black font-bold'>Email:</p>
              <Link href="mailto:faqehanoor@gmail.com" aria-label='My Email' title="mail" className='transition-colors duration-300 text-white text-secondary hover:text-violet-400'>
                faqehanoor@gmail.com
              </Link>
            </div>

            <div className='flex'>
              <p className='text-black font-bold'>LinkedIn:</p>
              <Link href="https://www.linkedin.com/in/faqeha-noor-2b5a4a254/" aria-label='LinkedIn' title="in" className='transition-colors duration-300 text-white text-secondary hover:text-violet-400'>
                Faqeha Noor
              </Link>
            </div>
          </div>

          <p>
            <span className='text-white'>Frontend Developer</span> |
            <span className='text-white'>Writer</span> |
            <span className='text-white'>Project&apos;s Maker</span> |
          </p>

          <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'></div>

          <div className='text-sm text-white'>
            <Copyright blog='faqeha'/>
          </div>

          <div className="mb-9 flex justify-center">
            {/* LinkedIn Icon */}
            <Link href="https://www.linkedin.com/in/faqeha-noor-2b5a4a254/" className="icons mx-0.5 lg:mx-5 sm:mx-5 text-neutral-200 dark:text-neutral-200 bg-gradient-to-r from-indigo-500 via-pink-600 to-pink-500 rounded-full p-3 transition duration-400 hover:-translate-y-1" target="_blank" rel="noopener noreferrer" aria-label="Visit Faqeha Noor&apos;s LinkedIn profile">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="30" height="30">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.2 20.45H3.56V9h3.64v11.45zm-1.82-13A2.13 2.13 0 013.22 5.3c0-1.17.95-2.13 2.13-2.13s2.13.95 2.13 2.13c0 1.17-.96 2.12-2.13 2.12zm15.27 13h-3.64v-5.48c0-1.31-.03-2.99-1.82-2.99-1.82 0-2.1 1.42-2.1 2.89v5.58h-3.64V9h3.49v1.56h.05c.49-.93 1.7-1.91 3.51-1.91 3.76 0 4.45 2.48 4.45 5.71v6.09z"/>
              </svg>
            </Link>

            {/* Phone Icon */}
            <Link href="tel:0330354356" className="icons mx-0.5 lg:mx-5 sm:mx-5 text-neutral-200 dark:text-neutral-200 bg-gradient-to-r from-indigo-500 via-pink-600 to-pink-500 rounded-full p-3 transition duration-400 hover:-translate-y-1" aria-label="Call us">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="30" height="30">
                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.6 1 1 0 011 1v3.67a1 1 0 01-1 1A17.78 17.78 0 012 6a1 1 0 011-1h3.71a1 1 0 011 1 11.72 11.72 0 00.6 3.7 1 1 0 01-.27 1.11z"/>
              </svg>
            </Link>

            {/* GitHub Icon */}
            <Link href="https://github.com/faqehanoor456" className="icons mx-0.5 lg:mx-5 sm:mx-5 text-neutral-200 dark:text-neutral-200 bg-gradient-to-r from-indigo-500 via-pink-600 to-pink-500 rounded-full p-3 transition duration-400 hover:-translate-y-1" target="_blank" rel="noopener noreferrer" aria-label="Visit Faqeha Noor&apos;s GitHub profile">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="30" height="30">
                <path d="M12 .5a11.5 11.5 0 00-3.63 22.41c.57.1.78-.25.78-.55v-2.17c-3.16.69-3.83-1.36-3.83-1.36a3 3 0 00-1.26-1.66c-1.04-.71.08-.69.08-.69a2.4 2.4 0 011.76 1.18 2.45 2.45 0 003.36.96 2.45 2.45 0 01.73-1.54c-2.53-.29-5.19-1.26-5.19-5.58a4.36 4.36 0 011.17-3.01 4.06 4.06 0 01.11-2.97s.95-.3 3.12 1.16a10.87 10.87 0 015.69 0c2.17-1.46 3.12-1.16 3.12-1.16a4.06 4.06 0 01.11 2.97 4.36 4.36 0 011.17 3.01c0 4.32-2.66 5.29-5.19 5.58a2.74 2.74 0 01.78 2.13v3.16c0 .3.21.66.79.55A11.5 11.5 0 0012 .5z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
