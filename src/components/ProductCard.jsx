import React, { useMemo, useState } from 'react'
import { Heart, Star, BatteryCharging, Waves, ShieldCheck, ShoppingCart, Check } from 'lucide-react'
import QuickViewModal from './QuickViewModal'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Stars({ rating = 0, size = 16, color = '#FFA726' }) {
  const stars = [0,1,2,3,4]
  return (
    <div className="flex items-center" aria-label={`Rating: ${rating} out of 5`}>
      {stars.map((i) => (
        <Star
          key={i}
          size={size}
          className={classNames('mr-1', rating > i ? 'fill-current' : 'fill-transparent')}
          color={color}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function ProductCard({
  name = 'Sony WH-1000XM5 Wireless Headphones',
  image = 'https://images.unsplash.com/photo-1518447432279-6cee87686e66?q=80&w=800&auto=format&fit=crop',
  alt = 'Sony WH-1000XM5 Wireless Headphones product image',
  rating = 4.6,
  reviews = 128,
  price = 4999,
  originalPrice = 6999,
  bestSeller = true,
}) {
  const [wishlisted, setWishlisted] = useState(false)
  const [compare, setCompare] = useState(false)
  const [adding, setAdding] = useState(false)
  const [added, setAdded] = useState(false)
  const [quickOpen, setQuickOpen] = useState(false)

  const hasDiscount = originalPrice && originalPrice > price
  const formattedPrice = useMemo(() => `₹${price.toLocaleString('en-IN')}`, [price])
  const formattedOriginal = useMemo(() => originalPrice ? `₹${originalPrice.toLocaleString('en-IN')}` : null, [originalPrice])

  const handleAddToCart = async () => {
    setAdding(true)
    await new Promise(r => setTimeout(r, 350))
    setAdding(false)
    setAdded(true)
    await new Promise(r => setTimeout(r, 2000))
    setAdded(false)
  }

  return (
    <div
      className="group relative w-full sm:w-[360px] bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Image container */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden rounded-t-[12px]">
        <img
          src={image}
          alt={alt}
          className="h-[300px] w-[300px] object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          width={300}
          height={300}
        />

        {/* Best Seller badge */}
        {bestSeller && (
          <span className="absolute top-3 left-3 z-10 select-none px-2.5 py-1 rounded-full bg-blue-600 text-white text-[12px] font-semibold">
            Best Seller
          </span>
        )}

        {/* Compare checkbox (shows on hover) */}
        <label className={classNames(
          'absolute z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          bestSeller ? 'top-12 left-3' : 'top-3 left-3'
        )}>
          <input
            type="checkbox"
            checked={compare}
            onChange={(e) => setCompare(e.target.checked)}
            className="peer appearance-none h-5 w-5 rounded border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 grid place-content-center focus:outline-none focus:ring-[3px] focus:ring-blue-500"
            aria-label="Add to compare"
          />
          <Check className="h-4 w-4 text-white pointer-events-none -ml-6 opacity-0 peer-checked:opacity-100" aria-hidden="true" />
        </label>

        {/* Wishlist heart (32px icon, larger touch target) */}
        <button
          onClick={() => setWishlisted((w) => !w)}
          aria-label="Add to wishlist"
          className={classNames(
            'absolute top-3 right-3 z-10 h-12 w-12 grid place-items-center rounded-full bg-white/90 backdrop-blur border border-gray-200 transition transform focus:outline-none focus:ring-[3px] focus:ring-blue-500',
            wishlisted ? 'scale-110' : 'group-hover:translate-y-0'
          )}
        >
          <Heart
            className={classNames('h-8 w-8 transition', wishlisted ? 'fill-red-500 text-red-500' : 'text-gray-800')}
            aria-hidden="true"
          />
        </button>

        {/* Quick View button */}
        <button
          onClick={() => setQuickOpen(true)}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 h-11 px-5 rounded-lg border border-blue-600 text-blue-600 bg-white/90 backdrop-blur font-semibold focus:outline-none focus:ring-[3px] focus:ring-blue-500"
          aria-label="Quick View"
        >
          Quick View
        </button>

        {/* Subtle sound wave pattern (animated) */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 w-full h-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 5 C 10 2, 20 8, 30 5 S 50 2, 60 5 S 80 8, 100 5"
            stroke="#0066FF"
            strokeWidth="1.5"
            fill="none"
          >
            <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="stroke-dasharray" values="2 4;4 2;2 4" dur="3s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Name (2 lines max with ellipsis) */}
        <h3
          className="text-[16px] sm:text-[18px] font-bold text-[#1a1a1a] leading-snug overflow-hidden"
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
          title={name}
        >
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2" aria-label={`${rating} stars with ${reviews} reviews`}>
          <Stars rating={Math.round(rating)} />
          <span className="text-[14px] text-[#6B7280]">({reviews})</span>
        </div>

        {/* Price Row */}
        <div className="flex items-end justify-between mt-3">
          <span className="text-[20px] sm:text-[24px] font-extrabold text-[#0066FF]">{formattedPrice}</span>
          {hasDiscount && (
            <span className="text-[16px] text-[#9CA3AF] line-through">{formattedOriginal}</span>
          )}
        </div>

        {/* Value Statement */}
        <p className="mt-2 text-[14px] italic text-[#6B7280]">Perfect for: Work calls & music</p>

        {/* Key Specs */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex flex-col items-center">
            <BatteryCharging className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
            <span className="text-[14px] text-[#1a1a1a] mt-1">40hrs</span>
          </div>
          <div className="flex flex-col items-center">
            <Waves className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
            <span className="text-[14px] text-[#1a1a1a] mt-1">ANC</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
            <span className="text-[14px] text-[#1a1a1a] mt-1">2 yrs</span>
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={classNames(
            'w-full mt-5 h-12 rounded-lg text-white font-bold flex items-center justify-center gap-2 transition transform focus:outline-none focus:ring-[3px] focus:ring-blue-500',
            'bg-gradient-to-r from-[#0066FF] to-[#8B5CF6]',
            'hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.99]'
          )}
          aria-label="Add to cart"
        >
          {added ? (
            <>
              <Check className="h-5 w-5 text-white" aria-hidden="true" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
              {adding ? 'Adding...' : 'Add to Cart'}
            </>
          )}
        </button>

        {/* Compare status (visually hidden, ARIA live) */}
        <span className="sr-only" aria-live="polite">
          {compare ? 'Added to comparison' : 'Removed from comparison'}
        </span>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        open={quickOpen}
        onClose={() => setQuickOpen(false)}
        product={{ name, image, alt }}
      />
    </div>
  )
}
