import Image from "next/image";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Display from "./Components/Display";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className=" w-full flex justify-center bg-yellw-200 gap-10 xl:px-[10rem]">
        <SideBar/>
        <Display/>

      </div>
      <Footer/>
    </main>
  );
}
