import { useState } from 'react'
import './assets/styles.css'
import AddressBar from './components/AddressBar'
import useWindowsDimensions from './hooks/useWindowsDimensions'

function App(): JSX.Element {
  const [url, setUrl] = useState<string>('https://cyberjournal.app')
  const windowDimensions = useWindowsDimensions()
  return (
    <>
      <AddressBar setUrl={setUrl} url={url} />
      <webview
        src={url}
        style={{
          height: windowDimensions.height - 54
        }}
      ></webview>
    </>
  )
}

export default App
