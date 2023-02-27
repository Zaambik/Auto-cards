import { useState } from "react"

const useActivePage = () => {
   const [activePage, setActivePage] = useState<string>('home')

   console.log(activePage)

   return { activePage, setActivePage }
}

export default useActivePage