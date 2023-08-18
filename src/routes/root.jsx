import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiFillGift,
  AiOutlineHeart,
} from "react-icons/ai";

export default function Root() {
  const handleMauseDown = (props) => {
    const child = props.target.children.link;
    var list = child.className;
    const character = "hidden";
    if (list.includes(character)) {
      child.classList.remove("hidden");
      return;
    }
    child.classList.add("hidden");
  };

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
            <div className="p-2 px-4 hover:text-sky-600">Outlet </div>
            <div className="p-2 px-4 hover:text-sky-600">Wishlist</div>
          </div>
        </div>
        <div className="bg-slade bg-cover h-500 mb-10 text-white pt-40 px-96">
          <div className="text-2xl">Shop The Beast Prices</div>
          <div className="text-6xl font-bold">CLEARANCE</div>
          <div className="text-1xl mt-5">Up to 75% OFF Everything</div>
          <div className="mt-5 text-2xl bg-sky-600 p-5 px-10 w-60 rounded-full text-center">
            Show Now
          </div>
        </div>
        <div className="mt-10">
          <div className=" flex justify-between px-80">
            <div className="bg-cardone bg-cover h-203 w-298 pt-24 ps-4">
              <div className="text-zinc-600">AMAZING</div>
              <div className="font-bold font-">LADIES BOOTS</div>
              <div className=" bg-zinc-900 rounded-full w-52 mt-5 text-white text-bold text-center text-1xl py-2   ">
                SALE UP TO 20%
              </div>
            </div>
            <div className="bg-cardtwo bg-cover h-203 w-298 pt-24 ps-4">
              <div className="text-zinc-600">COOL</div>
              <div className="font-bold font-">MENS JACKETS</div>
              <div className=" bg-zinc-900 rounded-full w-52 mt-5 text-white text-bold text-center text-1xl py-2   ">
                SALE UP TO 10%
              </div>
            </div>
            <div className="bg-cardtree bg-cover h-203 w-298 pt-24 ps-4">
              <div className="text-zinc-600">TRENDY</div>
              <div className="font-bold font-">SCHOOL BAG</div>
              <div className=" bg-zinc-900 rounded-full w-52 mt-5 text-white text-bold text-center text-1xl py-2   ">
                SALE UP TO 50%
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold text-zinc-800 text-center mt-10">
          Featured Products
        </div>
        <div className="mt-10 flex justify-between px-96">
          <div
            id="shop"
            className="w-20 bg-black h-64 bg-shopone bg-cover "
            onMouseOver={handleMauseDown}
            onMouseOut={handleMauseDown}
          >
            <div
              id="link"
              className="bg-trans h-12 mt-52 text-center font-bold text-white pt-2 hidden"
            >
              QUICK VIEW
            </div>
          </div>
          <div
            id="shop"
            className="w-20 bg-black h-64 bg-shoptwo bg-cover "
            onMouseOver={handleMauseDown}
            onMouseOut={handleMauseDown}
          >
            <div
              id="link"
              className="bg-trans h-12 mt-52 text-center font-bold text-white pt-2 hidden"
            >
              QUICK VIEW
            </div>
          </div>{" "}
          <div
            id="shop"
            className="w-20 bg-black h-64 bg-shoptree bg-cover "
            onMouseOver={handleMauseDown}
            onMouseOut={handleMauseDown}
          >
            <div
              id="link"
              className="bg-trans h-12 mt-52 text-center font-bold text-white pt-2 hidden"
            >
              QUICK VIEW
            </div>
          </div>{" "}
          <div
            id="shop"
            className="w-20 bg-black h-64 bg-shopfour bg-cover "
            onMouseOver={handleMauseDown}
            onMouseOut={handleMauseDown}
          >
            <div
              id="link"
              className="bg-trans h-12 mt-52 text-center font-bold text-white pt-2 hidden"
            >
              QUICK VIEW
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between px-96">
          <div className="w-20 ">
            <div className="text-xs font-bold text-zinc-600">CATEGOTY</div>
            <div className="text-base text-3xl font-bold text-zinc-900">
              Long Hoddie
            </div>
            <div className="text-zinc-900  ">
              <span className="text-base text-zinc-500  line-through">
                $89,00
              </span>{" "}
              $59,00
            </div>
          </div>
          <div className="w-20 ">
            <div className="text-xs font-bold text-zinc-600">CATEGOTY</div>
            <div className="text-base text-3xl font-bold text-zinc-900">
              Leather Belt
            </div>
            <div className="text-zinc-900  ">
              <span className="text-base text-zinc-500  line-through">
                $29,00
              </span>{" "}
              $19,00
            </div>
          </div>
          <div className="w-20 ">
            <div className="text-xs font-bold text-zinc-600">CATEGOTY</div>
            <div className="text-base text-3xl font-bold text-zinc-900">
              Jack Sandals
            </div>
            <div className="text-zinc-900  ">
              <span className="text-base text-zinc-500  line-through">
                $89,00
              </span>{" "}
              $79,00
            </div>
          </div>
          <div className="w-20 ">
            <div className="text-xs font-bold text-zinc-600">CATEGOTY</div>
            <div className="text-base text-3xl font-bold text-zinc-900">
              Vintage Hat
            </div>
            <div className="text-zinc-900  ">
              <span className="text-base text-zinc-500  line-through">
                $89,00
              </span>{" "}
              $79,00
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold text-zinc-800 text-center mt-10">
          Best Selling Products
        </div>
        <div className="mt-10 flex justify-between px-96">
          <div
            id="shop"
            className="w-20 bg-black h-64 bg-shopfive bg-cover "
            onMouseOver={handleMauseDown}
            onMouseOut={handleMauseDown}
          >
            <div
              id="link"
              className="bg-trans h-12 mt-52 text-center font-bold text-white pt-2 hidden"
            >
              QUICK VIEW
            </div>
          </div>
          <div
            id="shop"
            className="w-20 bg-black h-64 bg-shopsix bg-cover "
            onMouseOver={handleMauseDown}
            onMouseOut={handleMauseDown}
          >
            <div
              id="link"
              className="bg-trans h-12 mt-52 text-center font-bold text-white pt-2 hidden"
            >
              QUICK VIEW
            </div>
          </div>{" "}
          <div
            id="shop"
            className="w-20 bg-black h-64 bg-shopseven bg-cover "
            onMouseOver={handleMauseDown}
            onMouseOut={handleMauseDown}
          >
            <div
              id="link"
              className="bg-trans h-12 mt-52 text-center font-bold text-white pt-2 hidden"
            >
              QUICK VIEW
            </div>
          </div>{" "}
          <div
            id="shop"
            className="w-20 bg-black h-64 bg-shopeight bg-cover "
            onMouseOver={handleMauseDown}
            onMouseOut={handleMauseDown}
          >
            <div
              id="link"
              className="bg-trans h-12 mt-52 text-center font-bold text-white pt-2 hidden"
            >
              QUICK VIEW
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between px-96">
          <div className="w-20 ">
            <div className="text-xs font-bold text-zinc-600">CATEGOTY</div>
            <div className="text-base text-3xl font-bold text-zinc-900">
              Timez Watch
            </div>
            <div className="text-zinc-900  ">
              <span className="text-base text-zinc-500  line-through">
                $189,00
              </span>{" "}
              $159,00
            </div>
          </div>
          <div className="w-20 ">
            <div className="text-xs font-bold text-zinc-600">CATEGOTY</div>
            <div className="text-base text-3xl font-bold text-zinc-900">
              Clauren Bag
            </div>
            <div className="text-zinc-900  ">
              <span className="text-base text-zinc-500  line-through">
                $229,00
              </span>{" "}
              $189,00
            </div>
          </div>
          <div className="w-20 ">
            <div className="text-xs font-bold text-zinc-600">CATEGOTY</div>
            <div className="text-base text-3xl font-bold text-zinc-900">
              Classic sunglasses
            </div>
            <div className="text-zinc-900  ">
              <span className="text-base text-zinc-500  line-through">
                $189,00
              </span>{" "}
              $139,00
            </div>
          </div>
          <div className="w-20 ">
            <div className="text-xs font-bold text-zinc-600">CATEGOTY</div>
            <div className="text-base text-3xl font-bold text-zinc-900">
              High Heels Shoes
            </div>
            <div className="text-zinc-900  ">
              <span className="text-base text-zinc-500  line-through">
                $99,00
              </span>{" "}
              $79,00
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold text-zinc-800 text-center mt-10">
          Shop Categories
        </div>
        <div className="mt-10 flex justify-between px-96 text-center">
          <div className="w-20 py-10 bg-zinc-800 ">
            <div className="text-3xl text-slate-200 font-bold ">Women</div>
            <div className="text-stone-500 text-sm">19 PRODUCTS</div>
          </div>
          <div className="w-20 py-10 bg-zinc-800 ">
            <div className="text-3xl text-slate-200 font-bold ">KIds</div>
            <div className="text-stone-500 text-sm">29 PRODUCTS</div>
          </div>
          <div className="w-20 py-10 bg-zinc-800 ">
            <div className="text-3xl text-slate-200 font-bold ">Shoes</div>
            <div className="text-stone-500 text-sm">19 PRODUCTS</div>
          </div>
          <div className="w-20 py-10 bg-zinc-800 ">
            <div className="text-3xl text-slate-200 font-bold ">Woman</div>
            <div className="text-stone-500 text-sm">47 PRODUCTS</div>
          </div>
        </div>
        <div className="mt-10 px-96 flex justify-between ">
          <div className="w-4/12 flex ">
            <div className="pt-5">
              <AiOutlineShoppingCart style={{ fontSize: "40px" }} />
            </div>
            <div className="text-stone-700 p-6 ">
              <div className="text-xs">SUPER FAST, NEXT DAY DELIVERY</div>
              <div className="text-2xl text-stone-900 font-extrabold pb-3">
                Free Shipping $99+
              </div>
              <div>
                Lorem ipsum dolor sit amet, sectetur adipiscing elit. Phasellus
                blanmassa enim. Nullam id varius.
              </div>
            </div>
          </div>
          <div className="w-4/12 flex ">
            <div className="pt-5">
              <AiFillGift style={{ fontSize: "40px" }} />
            </div>
            <div className="text-stone-700 p-6 ">
              <div className="text-xs">A BUNCH OF OPTIONS</div>
              <div className="text-2xl text-stone-900 font-extrabold pb-3">
                Send a Gift to a Friend
              </div>
              <div>
                Lorem ipsum dolor sit amet, sectetur adipiscing elit. Phasellus
                blanmassa enim. Nullam id varius.
              </div>
            </div>
          </div>
          <div className="w-4/12 flex ">
            <div className="pt-5">
              <AiOutlineHeart style={{ fontSize: "40px" }} />
            </div>
            <div className="text-stone-700 p-6 ">
              <div className="text-xs"> 5 STAR RATING</div>
              <div className="text-2xl text-stone-900 font-extrabold pb-3">
                Loved By Buyers
              </div>
              <div>
                Lorem ipsum dolor sit amet, sectetur adipiscing elit. Phasellus
                blanmassa enim. Nullam id varius.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cover h-500 mt-10 text-white pt-40 px-96"></div>
      </div>
    </>
  );
}
