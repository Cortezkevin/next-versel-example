import { MainLayout } from "../../components/layouts/MainLayout"
import Link from "next/link"

export default function PricingPage(){
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

PricingPage.getLayout = function getLayout( page: JSX.Element ){
    return (
      <MainLayout>
        { page }
      </MainLayout>
    )
  }