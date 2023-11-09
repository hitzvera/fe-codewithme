export default function AuthTemplate({ children }) {
    return (
      <div className="w-full h-screen bg-slate-300 py-16 flex justify-center items-center">
        <main className="flex">
          {children}
        </main>
      </div>
    );
}