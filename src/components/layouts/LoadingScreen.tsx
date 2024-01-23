'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@src/redux/store'
import { FC } from 'react'

export const LoadingScreen: FC = () => {
    const { loading } = useSelector((state: RootState) => state.app)

    return (
        <div>
            {loading && (
                <div className="flex h-screen items-center justify-center">
                    <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                    <div className="relative">
                        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
                    </div>
                </div>
            )}
        </div>
    )
}
