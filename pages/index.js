import dynamic from 'next/dynamic'
import strapi from '../utils/http/strapi'

// only-client
const HomeLayout = dynamic(
  () => import('../components/home-layout'),
  { ssr: false }
)

const Albums = dynamic(
  () => import('../components/albums'),
  { ssr: false }
)

const FeaturePosts = dynamic(
  () => import('../components/feature-posts'),
  { ssr: false }
)



function Home({ albums, site, features }) {
  return (
    <HomeLayout site={site}>
      <div className="container">
        <section 
          className="site-section welcome" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <div className="columns is-vcentered">
            <div className="column">
              <div className="title is-1 is-spaced">Seja benvindo</div>
              <p className="subtitle is-5">
                Qui Lorem dolore adipisicing pariatur reprehenderit sint nulla dolor quis. Aliquip et occaecat ad veniam magna cillum.
              </p>
            </div>
            <div className="column is-5">
              <picture className="image is-16by9">
                <img 
                  src="https://template59494.motopreview.com/mt-demo/59400/59494/mt-content/uploads/2017/03/mt-0901-home-welcome.jpg" 
                />
              </picture>
            </div>
          </div>
        </section>
      </div>
      <div className="album-gallery">
        <ul>
          <Albums albums={albums} />
        </ul>
      </div>
      <section className="more-posts container">
        <div 
          className="tile is-child box"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="title is-1">Postagens em destaque</div>
        </div>
        <FeaturePosts features={features} />
      </section>
    </HomeLayout>
  )
}




Home.getInitialProps = async ctx => {
  const site = await strapi.get('/site')
  const albums = await strapi.get('/albums')
  const features = await strapi.get('/articles')

  if (site.error) {
    console.warn(error)
  }

  return { 
    site: site.data,
    albums: albums.data,
    features: features.data
  }
}

export default Home