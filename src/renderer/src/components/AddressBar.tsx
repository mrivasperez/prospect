const AddressBar = ({
  url,
  setUrl
}: {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {
  return (
    <div className="d-flex bg-body-tertiary align-center border-bottom sticky-top ps-0" id="drag">
      <p className="text-secondary m-0 p-2 align-center">Address</p>
      <input
        type="text"
        className="form-control rounded-0 border-start border-0"
        id="no-drag"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  )
}

export default AddressBar
