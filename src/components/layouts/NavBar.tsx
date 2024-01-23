import { Logo } from '@src/components/layouts'
import { FC } from 'react'


export const NavBar: FC= () => {
    return (
        <>
            <div className="fixed inset-x-0 z-[100] m-auto flex h-fit w-full max-w-[1920px] flex-col items-center px-5 py-4 text-title-sm backdrop-blur-md md:text-title-md ">
                <div className="flex w-full flex-row items-center justify-between">
                    <Logo />
                </div>
            </div>
        </>
    )
}
