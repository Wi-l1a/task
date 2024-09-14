export const setLS = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLS = (key: string) => {
    const data = localStorage.getItem(key)
    if (data) return JSON.parse(data)
}

export const removeLS = (key: string) => {
    localStorage.removeItem(key)
}