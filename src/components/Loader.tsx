'use client'
import { useSelector } from "react-redux";

const Loader = () => {
    const loaderValue: boolean = useSelector((state: any) => state.loader.value);

    return (
        loaderValue && (
            <div className="h-screen w-screen opacity-60 bg-gray-900 flex justify-center items-center fixed z-[99999] pointer-events-none">
                <div className="w-24 h-24 border-4 border-[#0D9A73] border-t-transparent rounded-full animate-spin z-[999999]"></div>
            </div>

        )
    );
}


export default Loader;