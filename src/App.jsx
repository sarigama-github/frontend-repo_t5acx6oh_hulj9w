import React from 'react'
import Spline from '@splinetool/react-spline'
import ProductCard from './components/ProductCard'

function App() {
  const product = {
    name: 'Sony WH-1000XM5 Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1556452041-0df5eaa315f8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb255JTIwV0gtMTAwMFhNNSUyMFdpcmVsZXNzJTIwSGVhZHBob25lc3xlbnwwfDB8fHwxNzYyOTMxNzI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Sony WH-1000XM5 Wireless Headphones product image'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Spline */}
      <section className="relative h-[320px] sm:h-[420px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 bg-white/70 backdrop-blur px-4 py-2 rounded-lg">
            Explore Premium Headphones
          </h1>
        </div>
      </section>

      {/* Product section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col items-center gap-8">
          <ProductCard {...product} />
        </div>
      </section>
    </div>
  )
}

export default App
