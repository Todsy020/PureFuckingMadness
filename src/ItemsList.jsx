import { Item } from "./Item"
import { arts } from "./arts"

export const ItemsList = () => {
    return (
        <div id="itemsList" className="flex flex-wrap justify-center items-center gap-3">
            {arts.map(({name, image}) => <Item key={name} image={image}/>)}
        </div>
    )
}