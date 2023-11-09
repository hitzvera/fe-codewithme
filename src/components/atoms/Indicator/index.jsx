import { IndicatorTypes, getIndicatorStyle } from "../../../styles";

export default function Indicator({ children, typeStyle, isShown }) {

    const appliedStyle = typeStyle ? getIndicatorStyle(typeStyle) : getIndicatorStyle(IndicatorTypes.DEFAULT);
    const isShownApplied = isShown ? 'block' : 'hidden';

    return (
        <h3 className={`px-4 py-2 my-2 ${appliedStyle} ${isShownApplied}`}>
            {children}
        </h3>
    )
}