import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

const NavContent = () => {
  return (
    <div>
      <section
        className="flex sm:flex-col lg:flex-row sm:h-full lg:space-evenly lg:justify-end sm:items-left lg:items-center"
        id="links"
      >
        <div className="flex sm:flex-col sm:space-between lg:flex-row lg:mr-8" id="links">
          {[
            ['Link 1', '/#'],
            ['Link 2', '/#'],
            ['Link 3', '/#'],
          ].map(([text, href]) => (
            <Link
              key={text}
              className="hover:opacity-50 sm:mb-2 sm:mb-4 md:mr-6 font-semibold sm:text-2xl lg:text-xl"
              href={href}
            >
              {text}
            </Link>
          ))}
        </div>
        <Button size={"lg"}>Contact Us</Button>
      </section>
    </div>
  );
};

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div className="flex flex-row items-center justify-start lg:px-12">

        {/* LOGO */}
        <div className="w-1/2">
          <section
            className="sm:pl-4 md:pl-0"
            id="logo"
          >
            <Image src="/logo.svg" width="400" height="162" alt="logo" />
          </section>
        </div>

        {/* UTILITY BUTTONS */}
        <div className="sm:w-1/2 sm:flex sm:flex-row sm:items-center sm:justify-end lg:hidden">
          <Button
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
            variant="outline"
            size="icon"
            className="mr-6"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button onClick={onOpen} variant="outline" size="icon" className="mr-6">
            <Menu />
          </Button>

          {/* NAVIGATION DRAWER */}
          <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <div className="flex flex-col w-full">
                <DrawerHeader borderBottomWidth='1px'>
                  <div className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white">
                    <Image src="/logo.svg" width="800" height="615" alt="logo" />
                    <Button onClick={onClose} variant="outline" size="icon" className="mr-6">
                      <X />
                    </Button>
                  </div>
                </DrawerHeader>
                <DrawerBody>
                  <NavContent />
                </DrawerBody>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        {/* DESKTOP AND ABOVE */}
        <nav className="drop-shadow sm:hidden lg:w-1/2 lg:flex lg:flex-row items-center sm:justify-between lg:justify-end lg:py-8">
          <NavContent />
        </nav>
      </div>
    </>
  )
};
