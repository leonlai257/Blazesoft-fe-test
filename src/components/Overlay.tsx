import { ReactNode } from 'react'

export interface OverlayProps {
    children?: ReactNode
}

export const Overlay = ({ children }: OverlayProps) => {
    return (
        <div className="fixed left-0 top-0 z-[50] flex h-screen w-screen items-center justify-center bg-transparent backdrop-blur-sm">
            {children && children}
        </div>
    )
}

export interface OverlayInteractiveProps {
    onClick?: () => void
}

export const OverlayInteractive = ({ onClick }: OverlayInteractiveProps) => {
    return <div onClick={onClick} className="absolute left-0 top-0 z-[-1] h-full w-full"></div>
}
