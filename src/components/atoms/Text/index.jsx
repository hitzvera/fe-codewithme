export default function Text({ children, customStyle }) {
    const appliedStyle = customStyle || "";
    return <p className={`font-poppins ${appliedStyle}`}>{children}</p>;
}