import { useState,  useEffect } from "react"
import { MENU_API } from "../utils"




const useRestroMenu = (restroId)=>{
   const [resInfo , setResInfo] = useState(null)
     
    useEffect(()=>{
       fetchData()
    },[])


async function fetchData(){
    const data = await fetch(`${MENU_API}restaurantId=${restroId}&catalog_qa=undefined&submitAction=ENTER`)
    const json = await data.json()
    setResInfo(json.data)
}
return(resInfo)
}


export default useRestroMenu;