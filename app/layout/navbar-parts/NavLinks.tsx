import Link from 'next/link'

const navLinks: { name: string; href: string }[] = [
    { name: "Dashboard", href: "/Dashboard" },
    { name: "Team", href: "/" },
    { name: "Projects", href: "/Projects" },
    { name: "Schedules", href: "/Schedules" },
];

const NavLinks = () => {
  return (
            <div className="flex items-center space-x-4 hover:border-b-blue-700">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        className="border-b-2 flex items-center h-[80px] border-transparent hover:border-b-blue-700 hover:text-blue-700"
                        href={link.href}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

  )
}

export default NavLinks
