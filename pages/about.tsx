import { MainLayout } from '../components/layouts/MainLayout'
import Link from 'next/link'
import React from 'react'

export default function AboutPage(){
  return (
    <>
      <h1 className='title'>
          <Link href="/">
            Home
          </Link>
      </h1>
      <div className='description'>
        <p>
          Get started by editing&nbsp;
          <code className='code'>pages/index.js</code>
        </p>
      </div>
    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ){
  return (
    <MainLayout>
      { page }
    </MainLayout>
  )
}