
type SingleHeaderProps = {
    title: string
}

export const SingleHeader = ({title}: SingleHeaderProps) => {
    return (
      <div className="py-20">
        <h2 className="font-brilon text-8xl text-calicoPeach-400">
        {title}
        </h2> 
        </div> 
    )
}