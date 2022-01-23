import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="mx-w-7xl mx-auto">
      <Head>
        <title>Next Blog | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4'>Medium</span> is a place to write, read, and connect</h1>
          <h2>It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
        </div>
        <img src='/assets/hero.png' alt='' className='hidden md:inline-flex h-32 lg:h-full' />
      </div>
    </div>
  )
}
