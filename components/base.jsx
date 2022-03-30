export default function Base({ children, title }) {
  return (
    <>
      <body className="antialiased bg-gray-50 h-[3000px]">{children}</body>
    </>
  );
}
