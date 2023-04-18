
type SingleHeaderProps = {
    title: string
}

export const SingleHeader = ({title = "Calico Test String"}: SingleHeaderProps) => {
    return (
      <div className="font-brilon text-8xl text-calicoPeach-400">
            {title}
        </div> 
    )
}