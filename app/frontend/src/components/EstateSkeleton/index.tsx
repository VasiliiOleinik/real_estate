import React from 'react'

export default function EstateSkeleton() {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6 animate-pulse">
      <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden text-gray-700 relative grid h-56 place-items-center bg-gray-300"></div>
      <div className="p-6">
        <div className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-inherit mb-4 h-3 w-56 rounded-full bg-gray-300"></div>
        <div className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-inherit mb-4 h-3 w-56 rounded-full bg-gray-300"></div>
        <div className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-inherit mb-4 h-3 w-56 rounded-full bg-gray-300"></div>
        <div className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-inherit mb-4 h-3 w-56 rounded-full bg-gray-300"></div>
      </div>
    </div>
  )
}
