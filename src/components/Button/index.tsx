import React from "react"

interface ButtonProps{
    children: React.ReactNode
    isLoading?: boolean
}

export function Button({children, isLoading}:ButtonProps){
    return(
        <button>
            {isLoading ? "Carregando..." : children}
        </button>
    )
}