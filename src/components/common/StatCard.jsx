export default function StatCard({ value, label }) {
  return (
    <div className="text-center p-6">
      <div className="text-3xl md:text-4xl font-bold text-navy-900">{value}</div>
      <div className="mt-2 text-sm text-slate-600">{label}</div>
    </div>
  );
}
