import { Footer } from "../shared/components/Footer/Footer"
import { Navbar } from "../shared/components/Navbar/Navbar"
import { Home } from "./components/Home"

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default HomePage