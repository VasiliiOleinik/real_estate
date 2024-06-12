import RootLayout from '@/components/RootLayout'
import useEstatePage from '@/hooks/useEstatePage'
import ImageCarousel from '@/components/ImageCarousel'
import { useRouter } from 'next/router'

const EstatePage = () => {
  const router = useRouter()
  const { estate, isLoading } = useEstatePage()

  const metadata = {
    title: estate?.title ? estate.title : 'Real estate page',
    description: estate?.description ? estate.description : 'Real estate page'
  }

  const goBack = () => {
    router.back()
  }

  return (
    <RootLayout metadata={metadata}>
      <div className="flex flex-col w-full">
        <button onClick={goBack}>Go Back</button>
        <ImageCarousel images={estate?.media_contains} imageHeight="h-96" />
        <div className="mt-4">
          <p>{estate?.title}</p>
          <p>{estate?.description}</p>
        </div>
      </div>
    </RootLayout>
  )
}

export default EstatePage
