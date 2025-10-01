import { Button } from "../Button";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
// import tw from "twin.macro"

const h1Style = `font-semibold text-m3 text-lg font-regular hover:text-m2 py-1 cursor-pointer`;

const Bar = (props) => <div className={`rounded border border-m1`} />;

const iconStyle = `h-4 w-4`;
const Icon = (props) => (
  <div className="p-2 m-2 rounded-full bg-cream hover:text-m2 cursor-pointer">
    {props.icon === "facebook" && <FaFacebookF className="iconStyle" />}
    {props.icon === "twitter" && <FaTwitter className="iconStyle" />}
    {props.icon === "insta" && <FaInstagram className="iconStyle" />}
  </div>
);

const DrawerContainer = (props) => (
  <div
    ref={props.ref}
    className={`pt-[48px] flex fixed bg-white shadow-m3-lg overflow-visible w-screen h-auto z-30 transition-all duration-1000 ease-in-out opacity-0 transform ${props.toggle ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
    {props.children}
  </div>
);

export const Drawer = (props) => {
  return (
    <DrawerContainer ref={props.ref} toggle={props.toggle}>
      <div className="my-4 mx-auto w-full px-12 text-m3-400 font-regular items-center text-center flex-col">
        <div className="pt-12 md:pb-6 pb-8 flex flex-col items-center justify-between sm:flex-row gap-2">
          <h1 className={h1Style}>HOME</h1>
          <h1 className={h1Style}>DOCS</h1>
          <h1 className={h1Style}>PRODUCTS</h1>
          <h1 className={h1Style}>CONTACT</h1>
          <div className="flex flex-col gap-4">
            <Button size="small" primary label="Join The Queue"></Button>
            <Button size="small" label="Playlist Generator"></Button>
          </div>
        </div>
        <Bar />
        <div className="pb-12 pt-4 flex md:flex-row flex-col justify-between items-center text-xs md:text-xl">
          <div className="text-center flex flex-col">
            <p className="py-4 text-sm">Coming soon on iOS</p>
            {/* <div className="flex flex-row justify-between">
              <img className="w-24 md:w-28 mr-4" src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f763c892974051a94f1d887_Android%20Download.svg" />
              <img className="w-24 md:w-28" src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f763c893ac4118bf4da8006_iOs%20Download.svg" />
            </div> */}
          </div>
          <div className="text-sm flex flex-row justify-evenly py-4">
            <p className="m-2 hover:text-m2 cursor-pointer">T & C's</p>
            <p className="m-2 hover:text-m2 cursor-pointer">Privacy Policy</p>
          </div>
          <div className="flex flex-row justify-evenly">
            <Icon icon="insta" />
            <Icon icon="facebook" />
            <Icon icon="twitter" />
          </div>
        </div>
      </div>
    </DrawerContainer>
  );
};
