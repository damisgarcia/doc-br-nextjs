import dynamic from 'next/dynamic'
import strapi from '../utils/http/strapi'
import HomeLayout from '../components/home-layout'

// only-client
const Albums = dynamic(
  () => import('../components/albums'),
  { ssr: false }
)



function Home({ albums, site }) {
  return (
    <HomeLayout site={site}>
      <div className="album-gallery">
        <ul>
          <Albums albums={albums} />
        </ul>
      </div>
    </HomeLayout>
  )
}




Home.getInitialProps = async ctx => {
  const site = await strapi.get('/site')
  const albums = await strapi.get('/albums')

  if (site.error) {
    console.warn(error)
  }

  return { 
    site: site.data,
    albums: albums.data
  }
}

export default Home