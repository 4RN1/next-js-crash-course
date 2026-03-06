'use client'
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const Navbar = () => {
  const captureNavClick = (label: string, href: string) => {
    posthog.capture('nav_link_clicked', { label, href })
  }

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={() => captureNavClick('Logo', '/')}>
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
           <p>DevEvent</p>
        </Link>

        <ul>
            <Link href="/" onClick={() => captureNavClick('Home', '/')}>Home</Link>
            <Link href="/" onClick={() => captureNavClick('Event', '/')}>Event</Link>

            <Link href="/" onClick={() => captureNavClick('Create Event', '/')}>Create Event</Link>

        </ul>


      </nav>
    </header>
  );
};

export default Navbar;
