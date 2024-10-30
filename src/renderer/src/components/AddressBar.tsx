const AddressBar = ({
  url,
  setUrl
}: {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {
  return (
    <div
      className="d-flex bg-body-tertiary align-center border-bottom-dark sticky-top p-2 ps-0"
      id="drag"
    >
      <p className="text-secondary m-0 p-0 align-center mx-2 p-2">Address</p>
      <input
        type="text"
        className="form-control"
        id="no-drag"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  )
}

export default AddressBar
