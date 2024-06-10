import { parseCookies } from 'nookies'

export function withAuth(PageComponent: any) {
  const WithAuth = (props: any) => <PageComponent {...props} />

  const getServerSideProps = async (context: any) => {
    let token
    try {
      const cookies = parseCookies(context)
      token = cookies.token
    } catch (err) {
      console.error(err)
    }

    if (!token || token === 'undefined') {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    // Call the original getServerSideProps function, if it exists
    let pageProps = {}
    if (PageComponent.getServerSideProps) {
      pageProps = await PageComponent.getServerSideProps(context)
    }

    return { props: { ...pageProps } }
  }

  return { WithAuth, getServerSideProps }
}
