
import {Navbar} from "./Navbar"

export const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center items-center mt-32 font-bold mobile:flex-col-reverse mobile:mt-20">
            <div className="flex flex-col justify-center items-center text-sm w-5/12 mobile:w-screen">
            <span className="text-white text-4xl mb-10 text-center mobile:mb-6 mobile:mt-9">MAX &quot;M666X&quot; PEREIRA</span>
            <p className="text-white w-3/4 text-center">
                Max &quot;M666X&quot; Pereira est un artiste designer vivant dans les ruelles sombres de Paris. Son art est un mélange fascinant de ténèbres et d&apos;horreur, capturant l&apos;essence même des cauchemars les plus profonds de l&apos;esprit humain. Armé de sa souris et de son clavier, il manie Photoshop comme un sorcier manie sa baguette, donnant vie à des visions macabres et envoûtantes.
                </p>
                <p className="text-white w-3/4 text-center my-5">
                Sa jeunesse n&apos;est pas un obstacle, mais plutôt un atout pour sa créativité débordante. Max est un esprit audacieux et ambitieux, déterminé à faire sa marque dans le monde de l&apos;art digital. Son travail ne se contente pas de choquer, mais il aspire à provoquer une réflexion profonde sur les aspects les plus sombres de l&apos;humanité.</p>
                <p className="text-white w-3/4 text-center mobile:mb-14">
                Mais Max ne marche pas seul dans les ténèbres. Il est membre éminent du groupe OVB (Obscure Visionaries Brotherhood), une fraternité d&apos;artistes passionnés par l&apos;exploration des profondeurs de l&apos;imagination humaine. Ensemble, ils repoussent les limites de l&apos;art sombre et s&apos;efforcent de faire de leur vision une réalité dans le monde artistique contemporain.
                Dans les rues brumeuses de Paris, Max &quot;M666X&quot; Pereira reste une figure énigmatique, un créateur de cauchemars et un architecte des ténèbres, prêt à plonger tête la première dans l&apos;inconnu pour découvrir de nouveaux horizons artistiques.
</p>
        </div>  
        <img className="w-1/4 mr-40 mobile:w-64 mobile:mr-0" src="/M666X-Portrait.png" alt="" />
        </div>
        </div>
    )
}