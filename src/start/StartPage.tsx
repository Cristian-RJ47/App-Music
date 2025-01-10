import { Footer } from "../shared/components/Footer/Footer"
import { Navbar } from "../shared/components/Navbar/Navbar"
import { FormRegister } from "./components/FormRegiter/FormRegister"

const StartPage = () => {
  return (
    <>
        <Navbar />
        <FormRegister/>
        <Footer />
    </>
  )
}

export default StartPage