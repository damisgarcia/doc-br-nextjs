import App from 'next/app'

import '../styles/globals.scss'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

MyApp.getInitialProps = async ctx => {
    const appProps = await App.getInitialProps(ctx)
    return { ...appProps }
}

export default MyApp;