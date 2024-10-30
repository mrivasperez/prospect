import goBack from './assets/go-previous.svg'
import goForward from './assets/go-next.svg'

const NavigationBar = (): JSX.Element => {
  return (
    <div
      className="d-flex justify-content-between border-bottom bg-body-tertiary sticky-top"
      id="drag"
    >
      <div className="d-flex">
        <button className="btn  d-flex align-center" id="no-drag">
          <img src={goBack} height={40} />
          <p className="m-0 py-2 ms-1 mt-0 fw-medium">Back</p>
        </button>
        <button className="btn p-0" id="no-drag">
          <img src={goForward} className="lead" height={40} />
        </button>
      </div>
    </div>
  )
}

export default NavigationBar
