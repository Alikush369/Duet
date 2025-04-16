export function Button({ children, onClick, variant = "default" }) {
  return <button onClick={onClick} className={\`border p-2 rounded \${variant === "destructive" ? "bg-red-500 text-white" : "bg-blue-500 text-white"}\`}>{children}</button>;
}
