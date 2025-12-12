'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Create Resume', href: '/resume' },
  { name: 'Templates', href: '/resume-templates' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-blue-500 py-4 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ResumeBuilder
            </Link>
          </div>
          <div className="ml-10 flex items-center space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/resume"
              className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Create Free Resume
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
