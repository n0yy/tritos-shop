export default function Base({ children }) {
  return (
    <>
      <body className="antialiased bg-gray-50">{children}</body>
    </>
  );
}
