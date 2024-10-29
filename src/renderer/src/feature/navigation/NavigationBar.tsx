
const NavigationBar = (): JSX.Element => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <button>Back</button>
        <button>Forward</button>
      </div>

      <button>X</button>
    </div>
  )
}

export default NavigationBar
