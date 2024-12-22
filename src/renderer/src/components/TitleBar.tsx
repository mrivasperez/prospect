const TitleBar = ({ pageTitle }: { pageTitle: string }): JSX.Element => {
  return (
    <div className="bg-secondary fw-bold p-2 border-bottom text-center sticky-top" id="drag">
      {pageTitle}
    </div>
  )
}

export default TitleBar
