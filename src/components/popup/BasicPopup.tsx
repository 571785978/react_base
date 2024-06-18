import React, { useState } from 'react'
import { getIcon } from '@/components/icon/Icon';
import clsx from 'clsx';
import { UsePopup } from '@/components/popup/base/UsePopup';

interface IProps {
    defaultWidth: Number,
    defaultHeight: Number,
    children: React.ReactNode,
}

export const BasicPopup: React.FC<IProps> = ({
    defaultWidth,
    defaultHeight,
    children
}: IProps) => {
    if (!defaultWidth || !defaultHeight) throw new Error("width and height is required");
    if (!children) throw new Error("children is required")

    const [style] = useState({
        width: `${defaultWidth}px`,
        height: `${defaultHeight}px`
    });

    const { show, isShown } = UsePopup();

    return (

        <div className={clsx(
            show ? 'opacity-100 z-50' : 'opacity-0 -z-10', 'transition duration-500 ease-in-out fixed top-0 left-0 h-full w-full flex justify-center items-center bg-half-dark')}>
            <div
                className='z-10 shadow-md fixed justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-gray-500 rounded-lg bg-light dark:bg-dark'
                style={style}>
                <div className='float-end mr-2 mt-2 cursor-pointer' title="关闭" onClick={() => isShown(false)}>
                    {getIcon('CloseOne', '20', 'filled')}
                </div>
                {children}
            </div>
        </div>

    );

}
