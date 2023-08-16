import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

export default function Root() {
  return (
    <>
      <div>
        <div className="flex bg-sky-400 justify-between p-4 px-96 font-bold text-white">
          <div>A VERY CUSTOMIZABLE THEME</div>
          <div className="flex justify-between w-3/5 ">
            <div className="hover:text-sky-500 hover:cursor-pointer">About</div>
            <div className="hover:text-sky-500 hover:cursor-pointer">Our</div>
            <div className="hover:text-sky-500 hover:cursor-pointer">
              Stores
            </div>
            <div className="hover:text-sky-500 hover:cursor-pointer">Blog</div>
            <div className="hover:text-sky-500 hover:cursor-pointer">
              Contact
            </div>
            <div className="hover:text-sky-500 hover:cursor-pointer">FAQ</div>
            <div className="hover:text-sky-500 hover:cursor-pointer">
              Newsletter
            </div>
            <div className="hover:text-sky-500 hover:cursor-pointer">
              Languages
            </div>
            <div className="hover:text-sky-900 hover:cursor-pointer">
              <AiOutlineTwitter
                style={{
                  fontSize: "30px",
                }}
              />
            </div>
            <div className="hover:text-sky-900 hover:cursor-pointer">
              <AiOutlineInstagram
                style={{
                  fontSize: "30px",
                }}
              />
            </div>
            <div className="hover:text-sky-900 hover:cursor-pointer">
              <AiFillFacebook
                style={{
                  fontSize: "30px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex px-96 justify-between mt-10">
          <div className="text-4xl font-black text-zinc-600">ShopLogo</div>
          <div className="flex">
            <input
              placeholder="Search..."
              type="text"
              className="bg-stone-200 px-10 w-100 rounded-full h-14 "
            />
            <div className="p-3">
              <AiOutlineSearch
                style={{ fontSize: "30px", color: "rgb(46, 46, 46)" }}
              />
            </div>
          </div>

          <div className="flex justify-between w-40 font-bold text-sky-900">
            <div className="font-bold">Login</div>
            <div> | Cart / $0.00</div>
            <div>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className="h-px bg-zinc-300 mt-10 "></div>
        <div className="flex justify-between px-96 ">
          <div className="flex justify-between w-4/5 m-10 font-bold text-zinc-500 ">
            <div className="p-2 px-4 hover:text-sky-600">Categories</div>
            <div className="p-2 px-4 hover:text-sky-600">Elements</div>
            <div className="p-2 px-4 hover:text-sky-600">Features</div>
            <div className="p-2 px-4 hover:text-sky-600">Home</div>
            <div className="p-2 px-4 hover:text-sky-600">Pages</div>
            <div className="p-2 px-4 hover:text-sky-600">Portifolio</div>
            <div className="p-2 px-4 hover:text-sky-600">Blog</div>
            <div className="p-2 px-4 hover:text-sky-600">Shop</div>
          </div>
          <div className="flex justify-between mt-10 font-bold text-zinc-500 ">
            <div className="p-2 px-4 hover:text-sky-600">Outlet / Wishlist</div>
          </div>
        </div>
        <div className="bg-slade bg-cover h-500 my-10 text-white pt-40 px-96">
          <div className="text-2xl">Shop The Beast Prices</div>
          <div className="text-6xl font-bold">CLEARANCE</div>
          <div className="text-1xl mt-5">Up to 75% OFF Everything</div>
          <div className="mt-5 text-2xl bg-sky-600 p-5 px-10 w-60 rounded-full text-center">
            Show Now
          </div>
        </div>
        <div className=" flex justify-between px-80">
          <div className="bg-cardUM bg-cover h-203 w-298 pt-14 ps-4">
            <div className="text-zinc-600">AMAZING</div>
            <div className="font-bold font-">LADIES BOOTS</div>
            <div className=" bg-zinc-900 rounded-full w-52 mt-5 text-white text-bold text-center text-1xl py-2   ">
              SALE UP TO 20%
            </div>
          </div>
          <div className="bg-cardUM bg-cover h-203 w-298 pt-14 ps-4">
            <div className="text-zinc-600">AMAZING</div>
            <div className="font-bold font-">LADIES BOOTS</div>
            <div className=" bg-zinc-900 rounded-full w-52 mt-5 text-white text-bold text-center text-1xl py-2   ">
              SALE UP TO 20%
            </div>
          </div>
          <div className="bg-cardUM bg-cover h-203 w-298 pt-14 ps-4">
            <div className="text-zinc-600">AMAZING</div>
            <div className="font-bold font-">LADIES BOOTS</div>
            <div className=" bg-zinc-900 rounded-full w-52 mt-5 text-white text-bold text-center text-1xl py-2   ">
              SALE UP TO 20%
            </div>
          </div>
        </div>

        <div className="bg-slade bg-cover h-500 mt-10 text-white pt-40 px-96">
          <div className="text-2xl">Shop The Beast Prices</div>
          <div className="text-6xl font-bold">CLEARANCE</div>
          <div className="text-1xl mt-5">Up to 75% OFF Everything</div>
          <div className="mt-5 text-2xl bg-sky-600 p-5 px-10 w-60 rounded-full text-center">
            Show Now
          </div>
        </div>
      </div>
    </>
  );
}
