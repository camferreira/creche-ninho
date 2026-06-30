type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105 hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}