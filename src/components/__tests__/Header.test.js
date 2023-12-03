import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../customHooks/appStore"
import { render } from "@testing-library/react"

it("loadin login in header" , ()=>{
    render(<Provider store={appStore}><Header/></Provider>)
})