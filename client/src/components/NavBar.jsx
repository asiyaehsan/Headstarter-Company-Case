import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';

const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Team', href: 'team', current: false },
  { name: 'Calendar', href: 'calendar', current: false },
  { name: 'Join Meeting', href: 'videocall', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) { 
      console.log(error);
    }
  };

  const { logOut, user } = UserAuth();
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toDateString() + "  " + date.toLocaleTimeString("en-us", {hour: '2-digit', minute:'2-digit'}))
    }, 1000);
  }, []);


  return (
    <Disclosure as="nav" className='bg-purple-200 px-5'>
      {({ open }) => (
        <>
          <div className="max-w-9xl mx-auto sm:px-6 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <a href='/home'>
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="hidden lg:block h-11 w-auto"
                      src="https://www.theheadstarter.com/static/media/logo.ddf12db2.svg"
                      alt="Workflow"
                    />
                  </div>
                  </a>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-indigo-900 text-white text-lg' : 'text-lg text-indigo-500 hover:bg-indigo-600 hover:text-white',
                          'px-3 py-2 rounded-md text-2xl'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div class="text-2xl font-mono">{clock} EST</div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 ml-40 p-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-4 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:transparent">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://www.gravatar.com/avatar/d042064e87c789458a3eda1c519a19de?d=https%3A%2F%2Fapp.theheadstarter.com%2Fassets%2Favatar_default.jpeg&s=200"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100 text-3xl' : '', 'block px-4 py-2 text-3xl text-gray-500')}
                          >
                            My Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100 text-3xl' : '', 'block px-4 py-2 text-3xl text-gray-500')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            onClick={handleSignOut}
                            className={classNames(active ? 'bg-gray-100 text-3xl' : '', 'block px-4 py-2 text-3xl text-gray-500')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
