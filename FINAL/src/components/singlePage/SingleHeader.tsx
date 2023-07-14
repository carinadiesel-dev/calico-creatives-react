
type SingleHeaderProps = {
    title: string
}

export const SingleHeader = ({title}: SingleHeaderProps) => {
    return (
      <div className="py-16 lg:py-20">
        <h2 className="text-4xl md:text-6xl font-brilon lg:text-6xl xl:text-8xl text-calicoPeach-400">
        {title}
        </h2> 
        </div> 
    )
}