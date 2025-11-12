import React, { useEffect } from 'react'

export default function QuickViewModal({ open, onClose, product }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-label="Quick view modal"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white w-[90%] max-w-2xl rounded-xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 px-3 py-1 rounded-md text-sm font-medium text-white bg-gray-800/80 hover:bg-gray-900 focus:outline-none focus:ring-[3px] focus:ring-blue-500"
          aria-label="Close quick view"
        >
          Close
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 flex items-center justify-center p-6">
            <img
              src={product.image}
              alt={product.alt}
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-sm text-gray-500 mt-1">Quick specs</p>
            </div>
            <ul className="text-sm text-gray-800 space-y-2">
              <li><span className="font-medium">Battery:</span> 40 hours playback</li>
              <li><span className="font-medium">Noise Cancel:</span> Active Noise Cancellation (ANC)</li>
              <li><span className="font-medium">Warranty:</span> 2 years manufacturer warranty</li>
              <li><span className="font-medium">Connectivity:</span> Bluetooth 5.x, multipoint</li>
            </ul>
            <div className="flex items-end gap-3 pt-2">
              <span className="text-2xl font-extrabold text-blue-600">₹4,999</span>
              <span className="text-sm text-gray-400 line-through">₹6,999</span>
            </div>
            <button
              onClick={onClose}
              className="w-full h-11 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition focus:outline-none focus:ring-[3px] focus:ring-blue-500"
              aria-label="Close and return"
            >
              Continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
