import { Dispatch, SetStateAction, useState } from "react"

type TypeOut = {
   activePage: string,
   setActivePage: Dispatch<SetStateAction<string>>
}

const useActivePage = (): TypeOut => {
   const [activePage, setActivePage] = useState<string>('home')

   console.log(activePage)

   return { activePage, setActivePage }
}

export default useActivePage