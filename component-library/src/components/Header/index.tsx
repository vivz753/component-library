import type { FC } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Drawer } from "../Drawer";
import useComponentVisible from "../../hooks/useComponentVisible";

export const Header: FC<{ username?: string }> = ({ username }) => {
  const [ref, openDrawer, setOpenDrawer] = useComponentVisible(false);

  return (
    <div className="h-[50vh] w-screen" ref={ref}>
      <header className="fixed h-[48px] flex w-screen shadow-m3-lg bg-m3 z-50">
        <nav className="flex w-screen flex-wrap flex-row items-center">
          <Hamburger
            size={20}
            color={openDrawer ? "var(--color-cream)" : "var(--color-m2"}
            toggled={openDrawer}
            toggle={setOpenDrawer}
          />
          {username && (
            <div className="font-regular text-m2 hover:text-cream ml-auto mx-8">
              <span>Welcome, {username}!</span>
            </div>
          )}
        </nav>
      </header>
      <Drawer toggle={openDrawer} />
    </div>
  );
};
