import { CardProps } from "@/interfaces/CardProps"
import React from "react"

const Card: React.FC<CardProps> = ({text}) => {
    return(
        <div className="w-full text-amber-50 bg-neutral-600 h-12 pl-2 pr-10 rounded-md">
            {text}
        </div>
    )
}

export default Card