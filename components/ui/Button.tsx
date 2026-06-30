type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}