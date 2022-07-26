import { Menu, Transition } from '@headlessui/react';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiSearchLine, RiUserLine, RiShoppingBagLine } from 'react-icons/ri';
import DropdownLink from './DropdownLink';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - PPAC' : 'PPAC'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between w-screen">
        <header className="z-10 ">
          <nav className="fixed grid grid-cols-3 w-screen px-8 align-middle items-stretch justify-between border-b border-black">
            <ul className="flex text-xs uppercase items-center">
              <li className="px-5 float-left py-3">
                <Link href="#">New In</Link>
              </li>
              <li className="float-left py-3">
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="text-xs uppercase px-5">
                    Shop
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
                      <Menu.Item className="block py-1">
                        <DropdownLink className="dropdown-link" href="#">
                          Shop all
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item className="block py-1">
                        <DropdownLink className="dropdown-link" href="#">
                          Outerwear
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item className="block py-1">
                        <DropdownLink className="dropdown-link" href="#">
                          Tees
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item className="block py-1">
                        <DropdownLink className="dropdown-link" href="#">
                          Bottoms
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item className="block py-1">
                        <DropdownLink className="dropdown-link" href="#">
                          Accessories
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item className="block py-1">
                        <DropdownLink className="dropdown-link" href="#">
                          Sale
                        </DropdownLink>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li className="px-5 float-left py-3">
                <Link href="#">Collections</Link>
              </li>
            </ul>
            <div className="flex text-center justify-center items-center py-2 text-4xl font-semibold">
              PPAC
            </div>
            <div className="flex flex-row gap-5 justify-end items-center px-5">
              <RiSearchLine size={20} />
              <RiUserLine size={20} />
              <RiShoppingBagLine size={20} />
            </div>
          </nav>
        </header>
        <main className="min-h-screen pt-16">{children}</main>
        <footer className="grid md:grid-cols-2 lg:grid-cols-4 p-12 border-t border-black">
          <div>
            <div className="footer-list-title">Customer Care</div>
            <ul>
              <li className="footer-list-item">
                <Link href="#">Contact</Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">Shipping & Delivery</Link>
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
          <div>
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
          <div>
            <div className="footer-list-title">Socials</div>
            <ul>
              <li className="footer-list-item">
                <Link href="#">Facebook</Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">Instagram</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
