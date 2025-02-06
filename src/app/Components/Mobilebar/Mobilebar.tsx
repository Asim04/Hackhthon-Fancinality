import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { AlignJustify, Link } from "lucide-react"




const Mobilebar = () => {
  return (
    <div>

<Sheet>
  <SheetTrigger><AlignJustify /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
      <h1 className=" font-Helvetica text-2xl font-bold text-center ">
      <span className='font-Helvetica text-primaryColor text-2xl font-bold '>Food</span>tuck</h1>
      </SheetTitle>
      <SheetDescription>
      <nav className="bg-black text-white p-4 flex justify-evenly items-center border-b-2">
      <ul className="  sm:flex sm:flex-col sm:items-center justify-center space-y-5 ">
        <li className="ml-4 size-3 font-bold" > <a href="/home"> Home</a> </li>
        <li className="ml-4 size-3" > <a href="/menu"> Menu</a> </li>
        <li className="ml-4 size-3" > <a href="/blog"> Blog</a> </li>
        <li className="ml-4 size-3" > <a href="/about"> About</a> </li>
        <li className="ml-4 size-3" > <a href="/shop"> Shop</a> </li>
        <li className="ml-4 size-3" > <a href="/contact"> Contact</a> </li>
      </ul>
        </nav>
      <div className="flex flex-col items-center space-x-6 mt-3">
        <input 
          type="text"
          placeholder="Search..."
          className="p-2 rounded-[27px] mt-[33px] border-[1px] bg-gray-800 text-white "
        />
        <button className="bg-yellow-500 mt-[33px] px-10 py-2 rounded-[27px] text-white">
          Search
        </button>
      </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


      
    </div>
  )
}

export default Mobilebar


 