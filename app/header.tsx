"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navigation = [
    { name: "Courses", href: "/courses" },
    { name: "Evaluation", href: "/teacher/evaluation" },
    { name: "Find Teachers", href: "/student/FindTeacher" },
    { name: "My Profile", href: "#" },
  ];

  return (
    <header className="grid grid-cols-1 lg:grid-cols-2 w-full justify-between p-4 px-16 shadow-lg">
      <Link href="/" className="text-3xl text-green-500 font-bold my-auto">
        EqualEd
      </Link>
      <div className="flex flex-row justify-between">
        <nav className="my-auto flex gap-4 items-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href; // Check active link

            return (
              <Link
                href={item.href}
                key={item.name}
                className={`py-1 px-4 rounded-full ${
                  isActive ? "bg-green-700 text-white" : "text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="px-4 py-2 hover:bg-green-700 hover:text-white rounded-full"
        >
          Login
        </button>
      </div>
    </header>
  );
}
