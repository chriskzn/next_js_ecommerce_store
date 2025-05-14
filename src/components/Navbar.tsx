'use client';

import Link from 'next/link';
import { useAppSelector } from '@/hooks/reduxHooks';

export default function Navbar() {
  const { totalQuantity } = useAppSelector(state => state.cart);
  const { isAuthenticated } = useAppSelector(state => state.auth);

  return (
    <nav className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold">
              Refresh
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link href="/products" className="hover:text-gray-300">
                  Products
                </Link>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative hover:text-gray-300">
              <span>Cart</span>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalQuantity}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <Link href="/account" className="hover:text-gray-300">
                Account
              </Link>
            ) : (
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
