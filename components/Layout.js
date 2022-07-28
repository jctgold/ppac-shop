import { Menu, Transition } from '@headlessui/react';
import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BsBag, BsPerson } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import DropdownLink from './DropdownLink';
import Link from 'next/link';
import Cart from './Cart';

export default function Layout({ title, children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState('');

  const handleClearSearch = () => {
    setSearch('');
    setSearchFocus(false);
  };

  const handleNavMenu = () => {
    setNavOpen(!navOpen);
    setSearchFocus(false);
  };

  const handleBlurEvent = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setNavOpen(false);
      setSearchFocus(false);
    }
  };

  const handleSearchFocus = () => {
    setSearchFocus(!searchFocus);
    setNavOpen(false);
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - PPAC' : 'PPAC'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between">
        <header>
          <nav
            className="fixed grid grid-cols-3 w-screen px-4 md:px-8 align-middle items-stretch justify-between border-b border-black bg-white z-10"
            onBlur={(event) => handleBlurEvent(event)}
          >
            <button
              className="inline-flex order-1 md:hidden items-center ml-3 text-gray-400 rounded-lg hover:text-gray-900 focus:outline-none"
              type="button"
              id="menu-button"
              onClick={handleNavMenu}
            >
              {navOpen ? (
                <IoCloseOutline color="black" size={24} />
              ) : (
                <BiMenu color="black" size={24} />
              )}
            </button>
            <div
              className={`${
                !navOpen && 'hidden'
              } w-full order-4 md:order-1 md:flex md:items-stretch md:w-auto`}
              id="menu"
            >
              <ul className="flex flex-col pb-4 md:pb-0 md:flex-row text-xs uppercase md:items-center whitespace-nowrap">
                <li className="px-5 py-3">
                  <Link href="/collections/new-in">New In</Link>
                </li>
                <li className="py-3">
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="text-xs uppercase px-5 flex gap-2 items-center">
                      Shop <AiOutlineDown />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="dropdown-container">
                        <Menu.Item className="dropdown-item">
                          <DropdownLink href="/collections/all-products">
                            Shop all
                          </DropdownLink>
                        </Menu.Item>
                        <Menu.Item className="dropdown-item">
                          <DropdownLink href="/collections/outerwear">
                            Outerwear
                          </DropdownLink>
                        </Menu.Item>
                        <Menu.Item className="dropdown-item">
                          <DropdownLink href="/collections/tees">
                            Tees
                          </DropdownLink>
                        </Menu.Item>
                        <Menu.Item className="dropdown-item">
                          <DropdownLink href="/collections/bottoms">
                            Bottoms
                          </DropdownLink>
                        </Menu.Item>
                        <Menu.Item className="dropdown-item">
                          <DropdownLink href="/collections/accessories">
                            Accessories
                          </DropdownLink>
                        </Menu.Item>
                        <Menu.Item className="dropdown-item">
                          <DropdownLink href="/collections/sale">
                            Sale
                          </DropdownLink>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
                <li className="px-5 py-3">
                  <Link href="#">Collections</Link>
                </li>

                {/* <li className="px-5 py-3 pt-5 md:hidden">Account</li> */}
              </ul>
            </div>
            <div className="flex order-2 text-center justify-center items-center py-2 text-4xl font-semibold tracking-tight">
              <Link href="/">
                <a>PPAC</a>
              </Link>
            </div>
            <div className="flex order-3 flex-row gap-2 justify-end items-center md:gap-5 px-5">
              <button onClick={handleSearchFocus}>
                <IoSearchOutline size={20} />
              </button>
              <button>
                <BsPerson size={22} />
              </button>
              <button onClick={() => setShowCart(!showCart)} type="button">
                <BsBag size={19} />
              </button>
            </div>
            <div
              className={`${
                !searchFocus && 'hidden'
              } order-4 col-span-3 p-6 pt-4 flex justify-center`}
            >
              <div className="flex py-2 border-b border-black items-center gap-2 w-full md:w-3/4">
                <IoSearchOutline size={20} color="black" />
                <input
                  className="focus:outline-0 placeholder:text-black clear-none"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                  placeholder="Search"
                />
                <button
                  onClick={handleClearSearch}
                  className="ml-auto"
                  type="button"
                >
                  <IoCloseOutline size={22} />
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="p-12 md:px-16 lg:px-24 border-t border-black">
          <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="footer-list-title">Customer Care</div>
              <ul>
                <li className="footer-list-item">
                  <Link href="#">Contact</Link>
                </li>
                <li className="footer-list-item">
                  <Link href="#">Shipping &amp; Delivery</Link>
                </li>
                <li className="footer-list-item">
                  <Link href="#">Returns</Link>
                </li>
                <li className="footer-list-item">
                  <Link href="#">FAQ</Link>
                </li>
                <li className="footer-list-item">
                  <Link href="#">Size Guide</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="footer-list-title">The Brand</div>
              <ul>
                <li className="footer-list-item">
                  <Link href="#">Our Story</Link>
                </li>
                <li className="footer-list-item">
                  <Link href="#">Find Us</Link>
                </li>
                <li className="footer-list-item">
                  <Link href="#">Terms</Link>
                </li>
                <li className="footer-list-item">
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="footer-list-title">Socials</div>
              <ul>
                <li className="footer-list-item">
                  <Link href="https://www.facebook.com/PeerPressureApparelCo">
                    Facebook
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link href="https://www.instagram.com/peerpressureapparelco/?hl=en">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-list-title">Be the first to know</div>
              <div className="inline-flex">
                <input
                  className="border-b border-black text-xs uppercase py-2  focus:outline-none placeholder:text-black autofill:!bg-transparent"
                  placeholder="email"
                  // type="email"
                  name="email"
                  size={30}
                />
                <button className="border-b border-black text-black text-xs uppercase py-2 font-semibold pl-2">
                  &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="uppercase text-xs pt-12 text-center md:text-left text-gray-500">
            2022 &copy; Peer Pressure Apparel Co. | Project by Julia Guinto
          </div>
        </footer>

        {showCart && <Cart onBackPress={() => setShowCart(!showCart)} />}
      </div>
    </>
  );
}
