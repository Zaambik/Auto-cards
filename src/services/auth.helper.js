import Cookies from "js-cookie"

export const saveTokenStorage = (data) => {
   Cookies.set('accessToken', data.accessToken)
} 

export const removeTokenStorage = () => {
   Cookies.remove('accessToken')
}

export const saveToStorage = (data) => {
   saveTokenStorage(data)
   localStorage.setItem('user', JSON.stringify(data.user))
}