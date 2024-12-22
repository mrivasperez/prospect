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
  const webviewRef = useRef<Electron.WebviewTag>(null)
  const [pageTitle, setWebviewTitle] = useState<string>('')

  useEffect(() => {
    const handleTitleUpdate = (): void => {
      // Get the title directly from the webview element
      if (webviewRef.current) {
        const newTitle = webviewRef.current.getTitle()
        setWebviewTitle(newTitle)
        console.log('Title Updated:', newTitle)
      }
    }

    const handleLoad = (): void => {
      if (webviewRef.current) {
        setWebviewTitle(webviewRef.current.getTitle())
        console.log('Initial Title:', webviewRef.current.getTitle())
      }
    }

    if (webviewRef.current) {
      webviewRef.current.addEventListener('did-finish-load', handleLoad)
      webviewRef.current.addEventListener('page-title-updated', handleTitleUpdate)
    }

    return () => {
      if (webviewRef.current) {
        webviewRef.current.removeEventListener('did-finish-load', handleLoad)
        webviewRef.current.removeEventListener('page-title-updated', handleTitleUpdate)
      }
    }
  }, [])

  const handleUrlChange = (newUrl: string): void => {
    setUrl(newUrl.includes('https://') || newUrl.includes('http://') ? newUrl : `https://${newUrl}`)
  }

  return (
    <>
      <TitleBar pageTitle={pageTitle} />
      <NavigationBar webViewRef={webviewRef} />
      <AddressBar setUrl={handleUrlChange} url={url} />
      {url ? (
        <webview
          ref={webviewRef}
          src={url}
          style={{
            height: windowDimensions.height - 54
          }}
        />
      ) : (
        <Splash />
      )}
    </>
  )
}

export default App
