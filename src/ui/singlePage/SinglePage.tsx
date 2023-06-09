import { SingleHeader } from "./SingleHeader"

type SinglePageProps = {
    headerText: string
    headerPosition : 'self-end' | 'self-center'
}


export const SinglePage = ({headerText,headerPosition}:SinglePageProps) => {
    return (
      <div className="grid h-screen bg-center bg-no-repeat bg-contain lg:bg-single bg-none">
        <div className={`${headerPosition} pl-16`}>
          <SingleHeader title={headerText} />
        </div>
      </div> 
    )
}