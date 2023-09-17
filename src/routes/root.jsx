import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiFillGift,
  AiOutlineHeart,
} from "react-icons/ai";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaCcAmazonPay,
} from "react-icons/fa";

import "./Img.css";

export default function Root() {
  const handleMauseDown = (props) => {
    // eslint-disable-next-line react/prop-types
    const child = props.target.children.link;
    // eslint-disable-next-line react/prop-types
    var list = child.className;
    const character = "hidden";
    // eslint-disable-next-line react/prop-types
    if (list.includes(character)) {
      // eslint-disable-next-line react/prop-types
      child.classList.remove("hidden");
      return;
    }
    // eslint-disable-next-line react/prop-types
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
              className="bg-stone-200 px-10 w-298 text-black rounded-full h-14 "
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
        <div className="slade bg-cover h-500 mb-10 text-white pt-40 px-96">
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
              <div className="font-bold text-zinc-900">LADIES BOOTS</div>
              <div className=" bg-zinc-900 rounded-full w-52 mt-5 text-white text-bold text-center text-1xl py-2   ">
                SALE UP TO 20%
              </div>
            </div>
            <div className="bg-cardtwo bg-cover h-203 w-298 pt-24 ps-4">
              <div className="text-zinc-600">COOL</div>
              <div className="font-bold text-zinc-900">MENS JACKETS</div>
              <div className=" bg-zinc-900 rounded-full w-52 mt-5 text-white text-bold text-center text-1xl py-2   ">
                SALE UP TO 10%
              </div>
            </div>
            <div className="bg-cardtree bg-cover h-203 w-298 pt-24 ps-4">
              <div className="text-zinc-600">TRENDY</div>
              <div className="font-bold text-zinc-900">SCHOOL BAG</div>
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
            <div className="text-3xl text-slate-100 font-bold ">Women</div>
            <div className="text-stone-500 text-sm">19 PRODUCTS</div>
          </div>
          <div className="w-20 py-10 bg-zinc-800 ">
            <div className="text-3xl text-slate-100 font-bold ">Kids</div>
            <div className="text-stone-500 text-sm">29 PRODUCTS</div>
          </div>
          <div className="w-20 py-10 bg-zinc-800 ">
            <div className="text-3xl text-slate-100 font-bold ">Shoes</div>
            <div className="text-stone-500 text-sm">19 PRODUCTS</div>
          </div>
          <div className="w-20 py-10 bg-zinc-800 ">
            <div className="text-3xl text-slate-100 font-bold ">Woman</div>
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
        <div className="mt-10 flex justify-between px-96">
          <div className="w-1/2 bg-Bannerone bg-cover h-458 text-black font-bold pt-20 ps-20">
            <div className="">WEEKEND SALE</div>
            <div className="text-3xl">LADIES DRESS</div>
            <div className="text-3xl py-5">
              <span className="text-zinc-400 line-through">$150</span>$100
            </div>
            <div className="p-4 bg-black w-40 text-white text-center rounded-full ">
              SHOP NOW
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 bg-Bannertwo h-458 mx-5 bg-cover text-black font-bold pt-20 ps-10">
              <div className="">MENS JACKETS</div>
              <div className="text-3xl py-5">
                <span className="text-zinc-400 line-through">$300</span>$225
              </div>
              <div className="p-4 bg-black w-40 text-white text-center rounded-full ">
                SHOP
              </div>
            </div>
            <div className="w-1/2 bg-Bannertree h-458 bg-cover text-black font-bold pt-20 ps-10">
              <div className="">UNISEX CAPS</div>
              <div className="text-3xl py-5">
                <span className="text-zinc-400 line-through">$100</span>$75
              </div>
              <div className="p-4 bg-black w-40 text-white text-center rounded-full ">
                SHOP
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between px-96">
          <div className="text-black">
            <div className="font-bold text-2xl">Featured Products</div>
            <div className="flex mt-5 cursor-pointer">
              <div className="bg-shopone bg-cover h-100 w-100 "></div>
              <div className="p-2">
                <div className="text-sm text-zinc-400">CATEGORY</div>
                <div className="text-zinc-800 text-2xl font-bold mb-3">
                  Long Hoddie
                </div>
                <div>
                  <span className="text-zinc-400 line-through">$69.00</span>{" "}
                  $59.00
                </div>
              </div>
            </div>
            <div className="flex mt-5 cursor-pointer">
              <div className="bg-shoptwo bg-cover h-100 w-100 "></div>
              <div className="p-2">
                <div className="text-sm text-zinc-400">CATEGORY</div>
                <div className="text-zinc-800 text-2xl font-bold mb-3">
                  Leather Belt
                </div>
                <div>
                  <span className="text-zinc-400 line-through">$29.00</span>{" "}
                  $19.00
                </div>
              </div>
            </div>
            <div className="flex mt-5 cursor-pointer ">
              <div className="bg-shoptree bg-cover h-100 w-100 "></div>
              <div className="p-2">
                <div className="text-sm text-zinc-400">CATEGORY</div>
                <div className="text-zinc-800 text-2xl font-bold mb-3">
                  Jack Sandals
                </div>
                <div>
                  <span className="text-zinc-400 line-through">$40.00</span>{" "}
                  $30.00
                </div>
              </div>
            </div>
          </div>
          <div className="text-black">
            <div className="font-bold text-2xl">Best Selling Products</div>
            <div className="flex mt-5 cursor-pointer">
              <div className="bg-shopfour bg-cover h-100 w-100 "></div>
              <div className="p-2">
                <div className="text-sm text-zinc-400">CATEGORY</div>
                <div className="text-zinc-800 text-2xl font-bold mb-3">
                  Vintage Hat
                </div>
                <div>
                  <span className="text-zinc-400 line-through">$99.00</span>{" "}
                  $79.00
                </div>
              </div>
            </div>
            <div className="flex mt-5 cursor-pointer">
              <div className="bg-shopfive bg-cover h-100 w-100 "></div>
              <div className="p-2">
                <div className="text-sm text-zinc-400">CATEGORY</div>
                <div className="text-zinc-800 text-2xl font-bold mb-3">
                  Timez Watch
                </div>
                <div>
                  <span className="text-zinc-400 line-through">$199.00</span>{" "}
                  $119.00
                </div>
              </div>
            </div>
            <div className="flex mt-5 cursor-pointer ">
              <div className="bg-shopsix bg-cover h-100 w-100 "></div>
              <div className="p-2">
                <div className="text-sm text-zinc-400">CATEGORY</div>
                <div className="text-zinc-800 text-2xl font-bold mb-3">
                  Clauren Bag
                </div>
                <div>
                  <span className="text-zinc-400 line-through">$229.00</span>{" "}
                  $280.00
                </div>
              </div>
            </div>
          </div>
          <div className="text-black">
            <div className="font-bold text-2xl">Latest Products</div>
            <div className="flex mt-5 cursor-pointer">
              <div className="bg-shopseven bg-cover h-100 w-100 "></div>
              <div className="p-2">
                <div className="text-sm text-zinc-400">CATEGORY</div>
                <div className="text-zinc-800 text-2xl font-bold mb-3">
                  Classik Sunglasses
                </div>
                <div>
                  <span className="text-zinc-400 line-through">$199.00</span>{" "}
                  $99.00
                </div>
              </div>
            </div>
            <div className="flex mt-5 cursor-pointer">
              <div className="bg-shopeight bg-cover h-100 w-100 "></div>
              <div className="p-2">
                <div className="text-sm text-zinc-400">CATEGORY</div>
                <div className="text-zinc-800 text-2xl font-bold mb-3">
                  High Heels Shoes
                </div>
                <div>
                  <span className="text-zinc-400 line-through">$99.00</span>{" "}
                  $79.00
                </div>
              </div>
            </div>
            <div className="flex mt-5 cursor-pointer ">
              <div className="bg-shopnine bg-cover h-100 w-100 "></div>
              <div className="p-2">
                <div className="text-sm text-zinc-400">CATEGORY</div>
                <div className="text-zinc-800 text-2xl font-bold mb-3">
                  Dual Color Jacket
                </div>
                <div>
                  <span className="text-zinc-400 line-through">$399.00</span>{" "}
                  $299.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10 px-96 bg-zinc-800 p-10 text-">
          <div className="w-1/2 flex text-gray-200">
            <div className="font-bold text-2xl">Newsletter</div>
            <div className="ps-10 text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidun.
            </div>
          </div>
          <div className="w-1/2">
            <input
              placeholder="Digite seu E-mail "
              className="mx-10 mt-3 text-black rounded w-full ps-4"
            />
            <div className="bg-sky-400 w-40 text-center font-bold text-white p-2 mt-2 rounded m-auto">
              SUBSCRIBE
            </div>
          </div>
        </div>
        <div className="flex justify-between px-96 bg-zinc-900 p-20 ">
          <div className="text-zinc-100">
            <div className="font-bold mb-10">Get In Touch</div>
            <div className="font-bold text-zinc-700">ADDRESS</div>
            <div>1234 Street Name, City, State, USA</div>
            <div className="font-bold text-zinc-700">PHONE</div>
            <div>Toll Free (123) 456-7890</div>
            <div className="font-bold text-zinc-700">EMAIL</div>
            <div>mail@example.com</div>
            <div className="font-bold text-zinc-700">WORKING DAYS/HOURS</div>
            <div>Mon - Sun / 9:00AM - 8:00PM</div>
          </div>
          <div className="text-zinc-100">
            <div className="font-bold mb-10 text-white">Useful Links</div>
            <div className="hover:text-zinc-100 text-zinc-700">Contact Us</div>
            <div className="hover:text-zinc-100 text-zinc-700">
              Our Services
            </div>
            <div className="hover:text-zinc-100 text-zinc-700">
              Payment Methods
            </div>
            <div className="hover:text-zinc-100 text-zinc-700">
              Services Guide
            </div>
            <div className="hover:text-zinc-100 text-zinc-700">
              Services Support
            </div>
            <div className="hover:text-zinc-100 text-zinc-700">Privacy</div>
            <div className="hover:text-zinc-100 text-zinc-700">About </div>
            <div className="hover:text-zinc-100 text-zinc-700">
              Our Guarantee
            </div>
            <div className="hover:text-zinc-100 text-zinc-700">
              Terms and Conditions
            </div>
            <div className="hover:text-zinc-100 text-zinc-700">FAQs</div>
          </div>
          <div className="text-zinc-100">
            <div className="font-bold mb-10 text-white">Recent Posts</div>
            <div className="text-white">This is The Post Title, Example</div>
            <div className="text-zinc-600">April 22, 2020</div>
            <div className="text-white">This is The Post Title, Example</div>
            <div className="text-zinc-600">April 22, 2020</div>
            <div className="text-white">This is The Post Title, Example</div>
            <div className="text-zinc-600">April 22, 2020</div>
            <div className="text-white">This is The Post Title, Example</div>
            <div className="text-zinc-600">April 22, 2020</div>
          </div>
        </div>
        <div className="h-px bg-zinc-800 "></div>
        <div className="px-10 flex justify-between bg-zinc-900 text-white py-3 ">
          <div>SeuShop Theme. © 2021. All Rights Reserved</div>
          <div className="flex justify-between  w-2/12">
            <FaCcVisa style={{ height: "30px", width: "30px" }} />
            <FaCcMastercard style={{ height: "30px", width: "30px" }} />
            <FaCcPaypal style={{ height: "30px", width: "30px" }} />
            <FaCcApplePay style={{ height: "30px", width: "30px" }} />
            <FaCcAmazonPay style={{ height: "30px", width: "30px" }} />
          </div>
        </div>
      </div>
    </>
  );
}
