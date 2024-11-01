import goBack from './assets/go-previous.svg'
import goForward from './assets/go-next.svg'
import history from './assets/recent.svg'
const NavigationBar = ({
  webViewRef
}: {
  webViewRef: React.RefObject<Electron.WebviewTag>
}): JSX.Element => {
  const handleGoBack = (): void => webViewRef.current?.goBack()

  const handleGoForward = (): void => webViewRef.current?.goForward()

  return (
    <div
      className="d-flex justify-content-between border-bottom bg-body-tertiary sticky-top"
      id="drag"
    >
      <div className="d-flex">
        <button className="btn d-flex" id="no-drag" onClick={handleGoBack}>
          <img src={goBack} height={40} />
          <p className="m-0 py-2 ms-1 mt-0 fw-medium">Back</p>
        </button>
        {webViewRef.current && webViewRef.current.canGoForward() && (
          <button className="btn p-0" id="no-drag" onClick={handleGoForward}>
            <img src={goForward} className="lead" height={40} />
          </button>
        )}
      </div>

      <button className="btn p-0 me-2" id="no-drag">
        <img src={history} className="lead" height={40} />
      </button>
    </div>
  )
}

export default NavigationBar
