import { useEffect, useRef, useState } from 'react'
import './assets/styles.css'
import AddressBar from './components/AddressBar'
import useWindowsDimensions from './hooks/useWindowsDimensions'
import Splash from './components/Splash'
import NavigationBar from './feature/navigation/NavigationBar'
import TitleBar from './components/TitleBar'
import { WebviewTag } from 'electron'

function App(): JSX.Element {
  const [url, setUrl] = useState<string>('')
  const windowDimensions = useWindowsDimensions()
  const webviewRef = useRef<WebviewTag>(null)
  const [pageTitle, setPageTitle] = useState('')
  useEffect(() => {
    if (webviewRef.current) {
      webviewRef.current.addEventListener('did-navigate', (event) => {
        console.log(event)
        setUrl(event.url)
      })

      // Get the title from the webview
      webviewRef.current.executeJavaScript(`document.title;`, (title) => {
        setPageTitle(title)
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
      <TitleBar pageTitle={pageTitle} />
      <NavigationBar webViewRef={webviewRef} />
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
