import { Footer } from "../shared/components/Footer/Footer"
import { Navbar } from "../shared/components/Navbar/Navbar"
import { NotFound } from "./components/NotFound"

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <NotFound />
      <Footer />
    </>
  )
}

export default NotFoundPage