import Main from "@/components/Charts/Main";
import Navbar from "@/components/NavBar/Navbar";
import Profile from "@/components/Profile";
import Sidebar from "@/components/SideBar/Sidebar";
import SignIn from "./(auth)/sign-in/sign-in";

export default function Home() {
  return (
    <main>
      <SignIn />
    </main>
    // <main className="bg-gray-200 flex min-h-screen w-full h-full flex-row items-center justify-between">
    //   <div className="bg-gray-500 w-1/4 flex h-screen justify-center items-center">
    //     <Profile />
    //   </div>
    //   <div className="bg-red-500 w-[100%] h-screen">
    //     <div className="flex flex-row w-full">
    //       <div className="flex flex-row bg-orange-200 w-full">
    //         <p>AAAAAAAAAAAAAAA</p>
    //         <input type="text" />
    //       </div>
    //     </div>
    //     <div className="bg-blue-500 w-full h-full">dawd</div>
    //   </div>
    // </main>
  );
}
