import React, { useContext } from "react"
import { Fade as Hamburger } from 'hamburger-react'
// import { LoggedInContext } from "../Store"
import Drawer from "../Drawer"
import useComponentVisible from "../../hooks/useComponentVisible"

const navStyle = `container mx-auto flex flex-wrap md:px-14 px-8 py-2 flex-row items-center justify-around`

export const Header = () => {
  // const [loggedIn] = useContext(LoggedInContext);
  const [ref, openDrawer, setOpenDrawer] = useComponentVisible(false);
  
  return (
    <div ref={ref}>
    <header className="fixed flex w-full shadow-m3-lg bg-m3 z-50">
      <div className="navStyle">
        <div className="flex order-first mr-auto block">
          {/* <Link to="/app">
            <img src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f847e77ef0f35843704c5b8_pom%20logo.svg" />
          </Link> */}
        </div>
        <div className="flex flex-row items-center ml-auto block">
          {/* { loggedIn && (
            <div className="font-regular text-red-400 mr-4">
              <Link to="/app/welcome">{ loggedIn.email }</Link>
            </div>
          )} */}
          <Hamburger size={20} color={openDrawer ? "var(--color-cream)" : "var(--color-m2"} toggled={openDrawer} toggle={setOpenDrawer} />
        </div>
      </div>
    </header>
    <Drawer toggle={openDrawer} />
    </div>
  )
}