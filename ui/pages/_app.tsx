import '../styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
    style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
    subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
  
}

export default MyApp
