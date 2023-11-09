export const ButtonTypes = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger",
};

export const IndicatorTypes = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default',
}

const ButtonStyles = {
  [ButtonTypes.PRIMARY]:
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center",
  [ButtonTypes.SECONDARY]:
    "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center",
  [ButtonTypes.SUCCESS]:
    "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center",
  [ButtonTypes.WARNING]:
    "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center",
  [ButtonTypes.DANGER]:
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center",
};

const IndicatorStyles = {
  [IndicatorTypes.SUCCESS]:
    "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
  [IndicatorTypes.WARNING]:
    "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",
  [IndicatorTypes.ERROR]:
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
  [IndicatorTypes.DEFAULT]:
    "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
}

export function getButtonStyle(type) {
  return ButtonStyles[type] || ""; // Return the style for the specified type, or an empty string if not found
}

export function getIndicatorStyle(type) {
  return IndicatorStyles[type] || "";
}