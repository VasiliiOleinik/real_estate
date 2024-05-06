import React from 'react'
import ImageCarousel from '../ImageCarousel'

export default function EstateCard({
  media_contains,
  title,
  country,
  region,
  price,
  estate_status,
  property_type
}) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
      <ImageCarousel images={media_contains} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg text-gray-600">Type: {property_type}</p>
        <p className="text-lg text-gray-600">Status: {estate_status}</p>
        <p className="text-lg text-gray-600">Price: {price}</p>
        <p className="text-lg text-gray-600">
          Location: {country}, {region}
        </p>
      </div>
    </div>
  )
}
