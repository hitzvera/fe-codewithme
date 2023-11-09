
export default function Input({ type, placeholder, onChangeHandler, value }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="bg-slate-100 py-2 px-4 my-2"
        value={value}
        onChange={onChangeHandler}
      />
    );
}