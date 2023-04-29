import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h1 className='title'>
        <Link href="/about">
          About
        </Link>
      </h1>
      <div className='description'>
        <p>
          Get started by editing&nbsp;
          <code className='code'>pages/index.js</code>
        </p>
      </div>
    </MainLayout>
  )
}
