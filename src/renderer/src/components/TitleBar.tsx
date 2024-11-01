const TitleBar = ({ pageTitle }: { pageTitle: string }): JSX.Element => {
  return (
    <div className="bg-secondary fw-bold p-2 border-bottom text-center " id="drag">
      {pageTitle}
    </div>
  )
}

export default TitleBar
