import MockData from "../data/MockData.json"

export const Datos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (MockData)
        },500)
    })
}