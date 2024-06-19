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
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";
import { Button as ChakraButton } from '@chakra-ui/react'


const NavContent = () => {
  return (
    <div>
      <section
        className="md:w-3/4 sm:w-4/6 xs:w-3/4 flex flex-row xs:justify-end md:space-evenly lg:justify-end align-center items-center lg:pr-16 md:pr-24 sm:pr-2 xs:pr-4"
        id="links-and-phone"
      >
        <div className="xs:mr-2 sm:mr-11 lg:mr-28" id="links">
          <Link
            className="hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs"
            href="#link1"
            color='blue.400' _hover={{ color: 'blue.500' }}
          >
            Link 1
          </Link>
          <Link
            className="hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs"
            href="#link2"
            color='blue.400' _hover={{ color: 'blue.500' }}
          >
            Link 2
          </Link>
          <Link
            className="hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs"
            href="#link-3"
            color='blue.400' _hover={{ color: 'blue.500' }}
          >
            Link 3
          </Link>
        </div>
        <Button>Contact Us</Button>
      </section>
    </div>
  );
};

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* MOBILE AND TABLET */}
      <div className="flex flex-row lg:hidden">
        <div className="w-1/2">
          <section
            className="md:w-1/4 sm:w-2/6 xs:w-1/4 lg:pl-16 md:pl-24 sm:pl-8 xs:pl-4"
            id="logo"
          >
            <Image src="/logo.svg" width="800" height="615" alt="logo" />
          </section>
        </div>
        <div className="w-1/2">
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
          <ChakraButton colorScheme='blue' onClick={onOpen}>
            Open
          </ChakraButton>
          <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth='1px'><Image src="/logo.svg" width="800" height="615" alt="logo" /></DrawerHeader>
              <DrawerBody>
                <NavContent />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* DESKTOP AND ABOVE */}
      <nav className="bg-background drop-shadow hidden lg:flex lg:flex-row items-center justify-between xs:justify-end lg:py-8 md:py-10">
        <NavContent />
      </nav>
    </>
  )
};
