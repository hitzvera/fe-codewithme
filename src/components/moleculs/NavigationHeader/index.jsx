export default function NavigationHeader({ children, customStyle }) {

  const appliedStyle = customStyle || "";

  return (
    <>
      <nav className={`flex gap-4 h-fit justify-end w-full px-4 py-2 bg-slate-100 items-center ${appliedStyle}`}>
        {children}
      </nav>
    </>
  );
}
