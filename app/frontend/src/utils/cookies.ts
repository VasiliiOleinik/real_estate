import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const getCookie = (name: string) => cookies.get(name)

export const setCookie = (name: string, value: any) => cookies.set(name, value)

export const removeCookie = (name: string) => cookies.remove(name)
