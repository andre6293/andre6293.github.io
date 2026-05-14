import Link from "next/link";

const links = [
  ["Resume", "/resume"],
  ["Blog", "/blog"],
  ["Music", "/music"],
  ["3D", "/3d"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800">
      <div className="max-w-4xl mx-auto flex gap-6 p-4">
        <Link href="/" className="font-bold">
          Andre
        </Link>

        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-zinc-300 hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
