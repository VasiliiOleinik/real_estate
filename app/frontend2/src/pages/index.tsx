import { Metadata } from 'next'
import RootLayout from '@/components/RootLayout'
import { withAuth } from '@/utils/withAuth'

export const metadata = {
  title: 'Real estate Home Page',
  description: 'The official Next.js Course Dashboard, built with App Router.'
}

const { WithAuth, getServerSideProps } = withAuth(Index)

function Index() {
  return (
    <RootLayout metadata={metadata}>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="/real-estates"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Real estates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Explore the world of real estate</p>
        </a>
        <a
          href="/create-real-estate"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Create new real estate{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </RootLayout>
  )
}

export default WithAuth
export { getServerSideProps }
