import { SingleHeader } from "./SingleHeader"

type SinglePageProps = {
    headerText: string
    headerPositionAlign : 'self-end' | 'self-center',
    headerPositionJustify : string
}


export const SinglePage = ({headerText,headerPositionAlign, headerPositionJustify}:SinglePageProps) => {
    return (
      <div className="grid h-[55rem] bg-center bg-no-repeat bg-contain lg:bg-single bg-none xl:pb-10">
        <div className={`${headerPositionAlign} ${headerPositionJustify} pr-20`}>
          <SingleHeader title={headerText} />
        </div>
      </div> 
    )
}