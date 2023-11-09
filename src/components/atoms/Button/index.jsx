import { getButtonStyle } from "../../../styles";
export default function Button({ typeStyle, children, customStyle, onClickHandler }) {
    const appliedStyle = typeStyle ? getButtonStyle(typeStyle) : customStyle ? customStyle : ""; 
    return <button className={appliedStyle} onClick={onClickHandler}>{children}</button>;
}