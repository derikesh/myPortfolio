'use client';

import useLenis from "../hooks/lenisHook"

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {

    useLenis();

    return (
        <>
            {children}
        </>
    )

}

export default LenisWrapper;