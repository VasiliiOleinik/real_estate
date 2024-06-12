import useImageCarousel from './useImageCarousel'
import Image from './Image'

export default function ImageCarousel({
  images,
}: {
  images: string[]
  imageHeight?: string
}) {
  const {
    activeImageIndex,
    goToNextSlide,
    goToPreviousSlide,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  } = useImageCarousel({ images })

  return (
    <div
      className={`position-relative h-100`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={goToPreviousSlide}
        className={`position-absolute d-flex align-items-center justify--content-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: '50%',
          left: '2px',
          transform: 'translateY(-50%)',
          zIndex: 20,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-warning"
          style={{ width: 24, height: 24 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className={`position-absolute d-flex align-items-center justify-content-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: '50%',
          right: '2px',
          transform: 'translateY(-50%)',
          zIndex: 20,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-warning"
          style={{ width: 24, height: 24, transform: 'rotate(180deg)' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {images?.map((image, index) => (
        <Image key={index} url={image} isActive={activeImageIndex === index} />
      ))}
      <div
        className="position-absolute d-flex justify-content-center"
        style={{
          gap: '3px',
          top: 'calc(100% - 20px)',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {images?.map((image, index) => (
          <div
            key={index}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
            }}
            className={activeImageIndex === index ? 'bg-black' : 'bg-white'}
          />
        ))}
      </div>
    </div>
  )
}
