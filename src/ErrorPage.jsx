import { Navbar } from "./Navbar"


export const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen flex-wrap">
            <Navbar/>
            <p className="text-white">Page introuvable, sans doute un problème dans l&apos;URL </p>
        </div>
    )
}