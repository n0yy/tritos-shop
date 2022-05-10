import Link from "next/link";

export default function Button({ children, to, sizing }) {
  return (
    <Link href={to}>
      <a
        className={`${sizing} px-6 py-2 text-xs text-indigo-50 bg-indigo-400 rounded-md shadow-lg font-semibold uppercase hover:bg-indigo-600 transition duration-200 flex justify-center`}
      >
        {children}
      </a>
    </Link>
  );
}
