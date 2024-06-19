import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const footerHeadingStyles = "font-semibold border-b-2 border-border xs:text-2xl lg:text-xl xs:mb-4 lg:mr-8 lg:mb-6 xs:pb-2 lg:pb-4";

  return (
    <footer>
      <div className="bg-secondary--foreground flex xs:flex-col lg:flex-row pt-24 pb-24 lg:px-12">
        <div className="xs:w-full lg:w-1/2">
          <Image src="/logo.svg" width="400" height="162" alt="Company logo" />
        </div>
        <div className="xs:w-full lg:w-1/2 pt-16 xs:pl-11 lg:pl-0 flex flex-wrap xs:flex-col lg:flex-row lg:justify-end">
          <div className="flex flex-col max-w-48 w-full xs:mb-8">
            <h2 className={footerHeadingStyles}>Information</h2>
            <ul>
              {[
                ['Link 1', '/#'],
                ['Link 2', '/#'],
                ['Link 3', '/#'],
              ].map(([text, href]) => (
                <li><Link href={href}>{text}</Link></li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col max-w-48 w-full xs:mb-8">
            <h2 className={footerHeadingStyles}>Services</h2>
            <ul>
              {[
                ['Service 1'],
                ['Service 2'],
                ['Service 3'],
              ].map(([text]) => (
                <li>{text}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col max-w-48 w-full xs:mb-8">
            <h2 className={footerHeadingStyles}>Contact</h2>
            <ul>
              <li className="lg:mb-2">123 Fake Street, Fakesville, CA 99999</li>
              <li className="lg:mb-2"><Link href="tel:+15555555555">(555) 555-5555</Link></li>
              <li className="lg:mb-2"><Link href="mailto:email@me.com">Fake Name &lt;email@me.com&gt;</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center pb-8 xs:px-12">Designed and hand coded by <Link className="text-primary font-semibold" href="https://palmspringswebdesign.net">Palm Springs Web Design</Link> <br />Copyright 2024 - Present</p>
    </footer>
  );
}
