import Link from "next/link";

export default function LargeButton({ children, to }) {
  return (
    <Link href={to}>
      <a className="px-6 py-3 text-xs text-indigo-50 bg-indigo-400 rounded-md shadow-xl font-semibold uppercase hover:bg-indigo-600 transition duration-200">
        {children}
      </a>
    </Link>
  );
}
