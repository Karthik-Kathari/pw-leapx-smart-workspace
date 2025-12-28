export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition border border-white/30 hover:border-white/50 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/60 ${className}`}
    >
      {children}
    </button>
  );
}
