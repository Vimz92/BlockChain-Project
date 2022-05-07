import '../styles/globals.css'
import {RobinhoodProvider} from '../context/RobinhoodContext'
import {MoralisProvider} from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return ( 
    <MoralisProvider
    serverUrl='https://tpifds2apuxk.usemoralis.com:2053/server'
    appId='EUbbAPX71EB2C0tQg52UPDn5TTJYNfCneTdOoJrc'
    > 
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
   </MoralisProvider>
  )
}

export default MyApp
