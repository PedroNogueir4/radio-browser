import { CardProps } from "@/interfaces/CardProps"
import React from "react"

const Card: React.FC<CardProps> = ({text}) => {
    return(
        <div className=" flex w-full text-amber-50 bg-neutral-600 h-12 pl-3 rounded-md mb-4 items-center">
            <p>{text}</p>
        </div>
    )
}

export default Card