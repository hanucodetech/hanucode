const colorStyles = {
  blue: { primary: '#2563eb', secondary: '#06b6d4', accent: '#dbeafe' },
  cyan: { primary: '#06b6d4', secondary: '#14b8a6', accent: '#cffafe' },
  teal: { primary: '#14b8a6', secondary: '#22c55e', accent: '#ccfbf1' },
  green: { primary: '#22c55e', secondary: '#eab308', accent: '#dcfce7' },
};

export default function ProductVisual({ name, color = 'blue' }) {
  const c = colorStyles[color] || colorStyles.blue;

  return (
    <div className="relative aspect-[16/10] rounded-xl bg-white/80 border border-white/50 shadow-sm overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50" />
      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 h-4 bg-white rounded text-[8px] text-slate-400 flex items-center px-2">{name.toLowerCase()}.app</div>
      </div>
      <div className="absolute top-10 left-0 bottom-0 w-16 bg-slate-50 border-r border-slate-200 p-2 space-y-2">
        {[c.primary, c.secondary, '#94a3b8', '#94a3b8'].map((col, i) => (
          <div key={i} className="h-3 rounded" style={{ backgroundColor: i < 2 ? col + '30' : '#e2e8f0' }} />
        ))}
      </div>
      <div className="absolute top-10 left-16 right-0 bottom-0 p-3">
        <div className="grid grid-cols-3 gap-2 h-full">
          <div className="col-span-2 space-y-2">
            <div className="h-6 rounded-md" style={{ backgroundColor: c.accent }} />
            <div className="grid grid-cols-2 gap-2 flex-1">
              <div className="rounded-md border border-slate-200 p-2 space-y-1">
                <div className="h-2 w-8 rounded" style={{ backgroundColor: c.primary + '40' }} />
                <div className="h-4 w-12 rounded bg-slate-200" />
              </div>
              <div className="rounded-md border border-slate-200 p-2 space-y-1">
                <div className="h-2 w-8 rounded" style={{ backgroundColor: c.secondary + '40' }} />
                <div className="h-4 w-12 rounded bg-slate-200" />
              </div>
            </div>
            <div className="h-16 rounded-md border border-slate-200 p-2">
              <div className="flex items-end gap-1 h-full">
                {[40, 65, 45, 80, 55, 70].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i % 2 === 0 ? c.primary + '60' : c.secondary + '60' }} />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-full rounded-md border border-slate-200 p-2 space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.primary }} />
                  <div className="h-2 flex-1 rounded bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
