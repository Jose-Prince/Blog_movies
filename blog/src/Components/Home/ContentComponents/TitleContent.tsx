import React from "react"

interface ContainerProps { 
    title: string
    content: string
}

const TitleContent : React.FC<ContainerProps> = ({title, content}) => {
    return (
        <div className="titleContentDisplayment">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default TitleContent