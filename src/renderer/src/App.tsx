import { useState } from 'react'
import './assets/styles.css'
import AddressBar from './components/AddressBar'

function App(): JSX.Element {
  const [url] = useState<string>('https://cyberjournal.app')

  return (
    <>
      <AddressBar />
      <div className="container responsive">
        <webview src={url} className="h-100"></webview>
      </div>
    </>
  )
}

export default App
