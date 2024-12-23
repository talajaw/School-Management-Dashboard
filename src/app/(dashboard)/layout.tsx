import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div className="h-auto flex">
        {/* LEFT */}
        <div className="p-4 w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
          <Link href='/' className=" flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="" width={32} height={32}/>
          <span className=" hidden lg:block font-blod ">AOE School</span>
          </Link>
          <Menu/>
        </div>

        {/* RIGHT */}
        <div  className="flex flex-col p-3 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-white overflow-scroll">
          <Navbar/>
          {children}
        </div>
        </div>
    
  );
}
