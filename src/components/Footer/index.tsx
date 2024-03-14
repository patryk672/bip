import Typography from '@mui/material/Typography';
import * as React from 'react';
import Link from 'next/link';

const NAVIGATION = {
  info: [
    { name: 'O nas', href: '#' },
    { name: 'Oferty pracy', href: '#' },
    { name: 'Prasa', href: '#' },
    { name: 'Partnerzy', href: '#' },
    { name: 'Kontakt', href: '/contact' }, // Dodany link do strony Kontakt
  ],
  news: [
    { name: 'Najnowsze wiadomości', href: '#' },
    { name: 'Komunikaty prasowe', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  resources: [
    { name: 'Dokumenty', href: '#' },
    { name: 'Poradniki', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  support: [
    { name: 'Centrum pomocy', href: '#' },
    { name: 'Wsparcie techniczne', href: '#' },
    { name: 'Zgłoś problem', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: () => (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: () => (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: () => (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'BIP © '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function MainFooter() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="text-white text-3xl font-bold font-poppins">
              BIP
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              {NAVIGATION.social.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="h-6 w-6">
                    <item.icon aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Nasza działalność
                </h3>
                <ul className="mt-6 space-y-4">
                  {NAVIGATION.info.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Wiadomości
                </h3>
                <ul className="mt-6 space-y-4">
                  {NAVIGATION.news.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Wsparcie
                </h3>
                <ul className="mt-6 space-y-4">
                  {NAVIGATION.support.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Pomoc
                </h3>
                <ul className="mt-6 space-y-4">
                  {NAVIGATION.resources.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
