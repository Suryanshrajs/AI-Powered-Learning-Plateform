"use client";

import Image from "next/image";
import { Button, Dropdown, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation'; // Import usePathname

export function Header() {
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState<string | null>(null); // Store user's name
  const [userEmail, setUserEmail] = useState<string | null>(null); // Store user's email
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  function handleLoginPage() {
    router.push('/login');
  };

  function handleSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Remove user info from localStorage
    setUserLogged(false);
  }

  useEffect(() => {
    // Check if user is logged in by verifying the token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, set userLogged to true and fetch user data
      const user = localStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name); // Set the user's name
        setUserEmail(parsedUser.email); // Set the user's email
      }
      setUserLogged(true); // User is logged in
    } else {
      setUserLogged(false); // User is not logged in
    }
  }, []);

  const getInitials = (name: string | null) => {
    if (name) {
      return name.charAt(0).toUpperCase(); // Return the first character
    }
    return '';
  };

  return (
    <Navbar fluid className="fixed w-screen border-b bg-customColor z-10">
      <Navbar.Brand href="/">
        <div className="relative mr-3 h-6 sm:h-9 w-6 sm:w-9">
          <Image
            src="https://flowbite-react.com/favicon.svg"
            alt="Flowbite Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Learn
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 mr-4 gap-1">
        {userLogged ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <div className="mr-1 w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center  text-white text-xl">
                {getInitials(userName)} {/* Display initials */}
              </div>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{userName}</span>
              <span className="block truncate text-sm font-medium">{userEmail}</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Button onClick={handleLoginPage} color="blue">
            Login
          </Button>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="mr-2">
        <Navbar.Link
          href="/"
          active={pathname === "/"} // Set active based on the current route
          className={`text-lg ${pathname === "/" ? "text-blue-500 font-bold" : ""}`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/courses"
          active={pathname === "/courses" || pathname.includes("/courses")} // Set active based on the current route
          className={`text-lg ${pathname === "/courses" ? "text-blue-500 font-bold" : ""}`}
        >
          Courses
        </Navbar.Link>
        <Navbar.Link
          href="/roadmap"
          active={pathname === "/roadmap"} // Set active based on the current route
          className={`text-lg ${pathname === "/roadmap" ? "text-blue-500 font-bold" : ""}`}
        >
          Roadmap
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}
