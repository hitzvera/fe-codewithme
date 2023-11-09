export default function Title({ children, customStyle }) {
  const appliedStyle = customStyle || "";
  return (
    <h1 className={`font-poppins font-bold ${appliedStyle}`}>{children}</h1>
  );
}
