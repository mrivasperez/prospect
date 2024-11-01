import { useEffect, useRef, useState } from 'react'
import './assets/styles.css'
import AddressBar from './components/AddressBar'
import useWindowsDimensions from './hooks/useWindowsDimensions'
import Splash from './components/Splash'
import NavigationBar from './feature/navigation/NavigationBar'
import TitleBar from './components/TitleBar'

function App(): JSX.Element {
  const [url, setUrl] = useState<string>('')
  const windowDimensions = useWindowsDimensions()
  const webviewRef = useRef<HTMLWebViewElement>(null)

  useEffect(() => {
    if (webviewRef.current) {
      webviewRef.current.addEventListener('did-navigate', (event) => {
        console.log(event)
        // TODO resolve
        // @ts-expect-error url is any type
        setUrl(event.url)
      })
    }

    return () => {
      if (webviewRef.current) {
        webviewRef.current.removeEventListener('did-navigate', () => {})
      }
    }
  }, [])

  return (
    <>
      <TitleBar />
      <NavigationBar />
      <AddressBar setUrl={setUrl} url={url} />
      {url ? (
        <webview
          ref={webviewRef}
          src={`${url.includes('https://') ? '' : 'https://'}${url}`}
          style={{
            height: windowDimensions.height - 54
          }}
        ></webview>
      ) : (
        <Splash />
      )}
    </>
  )
}

export default App
