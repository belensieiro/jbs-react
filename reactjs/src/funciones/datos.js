

export const Datos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (MockData)
        },500)
    })
}