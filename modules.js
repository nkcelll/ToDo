
import { menu } from "./todo.js"






export function addItemToList(prodId, prodPrice) {
    
    menu.push({
        name: prodId,
        priceCents: prodPrice
    })

    return menu

}
