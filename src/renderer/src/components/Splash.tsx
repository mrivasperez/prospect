import ProspectIcon from '../assets/prospect.png'

const Splash = (): JSX.Element => {
  return (
    <div className="p-5" id="drag">
      <img src={ProspectIcon} alt="" style={{ maxWidth: 250 }} />
      <h1>Prospect</h1>
      <p>0.0.1</p>
    </div>
  )
}

export default Splash
