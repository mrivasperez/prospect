const AddressBar = ({
  url,
  setUrl
}: {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {
  return (
    <nav className="navbar bg-primary text-white p-2 border-bottom-dark sticky-top" id="drag">
      <div className="container">
        <input
          type="text"
          className="form-control"
          id="no-drag"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
    </nav>
  )
}

export default AddressBar
