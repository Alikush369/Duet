export function Input({ name, value, onChange, placeholder, type = "text" }) {
  return <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className="border p-2 rounded w-full" />;
}
