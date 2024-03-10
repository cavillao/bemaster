import Navbar from '../components/Navbar/Navbar'
import { ChildrenProp } from '../types/props'

function Layout({ children }: ChildrenProp) {
  return (
    <>
      <h1>Layout</h1>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
