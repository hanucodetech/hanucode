export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-cyan/5 to-brand-teal/5 rounded-3xl" />
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>

        {/* Grid */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
        </pattern>
        <rect width="400" height="400" fill="url(#grid)" rx="24" />

        {/* Cloud element */}
        <g transform="translate(260, 40)">
          <rect x="0" y="20" width="100" height="50" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <path d="M20 20 Q30 5 50 10 Q60 0 80 10 Q100 5 100 25" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="30" cy="40" r="3" fill="#22c55e" />
          <text x="40" y="44" fill="#64748b" fontSize="8" fontFamily="system-ui">Cloud API</text>
        </g>

        {/* Central hub */}
        <g transform="translate(150, 150)">
          <circle cx="50" cy="50" r="45" fill="url(#heroGrad1)" stroke="url(#heroGrad2)" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <text x="50" y="54" textAnchor="middle" fill="#0f2341" fontSize="10" fontWeight="bold" fontFamily="system-ui">CORE</text>
        </g>

        {/* API blocks */}
        <g transform="translate(30, 120)">
          <rect width="80" height="45" rx="8" fill="white" stroke="#2563eb" strokeWidth="1.5" />
          <rect x="8" y="10" width="30" height="4" rx="2" fill="#2563eb" opacity="0.3" />
          <rect x="8" y="20" width="50" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="8" y="28" width="40" height="3" rx="1.5" fill="#e2e8f0" />
          <text x="8" y="42" fill="#2563eb" fontSize="7" fontWeight="600" fontFamily="system-ui">REST API</text>
        </g>

        <g transform="translate(30, 240)">
          <rect width="80" height="45" rx="8" fill="white" stroke="#06b6d4" strokeWidth="1.5" />
          <rect x="8" y="10" width="30" height="4" rx="2" fill="#06b6d4" opacity="0.3" />
          <rect x="8" y="20" width="50" height="3" rx="1.5" fill="#e2e8f0" />
          <text x="8" y="42" fill="#06b6d4" fontSize="7" fontWeight="600" fontFamily="system-ui">Auth</text>
        </g>

        {/* Product cards */}
        <g transform="translate(280, 160)">
          <rect width="90" height="55" rx="8" fill="white" stroke="#14b8a6" strokeWidth="1.5" />
          <rect x="8" y="8" width="74" height="20" rx="4" fill="#14b8a6" opacity="0.1" />
          <rect x="8" y="35" width="35" height="12" rx="3" fill="#f1f5f9" />
          <rect x="48" y="35" width="35" height="12" rx="3" fill="#f1f5f9" />
          <text x="8" y="22" fill="#14b8a6" fontSize="7" fontWeight="600" fontFamily="system-ui">SaaS Module</text>
        </g>

        <g transform="translate(280, 280)">
          <rect width="90" height="55" rx="8" fill="white" stroke="#22c55e" strokeWidth="1.5" />
          <circle cx="25" cy="28" r="10" fill="#22c55e" opacity="0.15" />
          <path d="M22 28 L24 30 L29 25" stroke="#22c55e" strokeWidth="1.5" fill="none" />
          <text x="40" y="32" fill="#22c55e" fontSize="7" fontWeight="600" fontFamily="system-ui">Secure</text>
        </g>

        {/* Security indicator */}
        <g transform="translate(130, 30)">
          <rect width="70" height="35" rx="8" fill="#0f2341" />
          <circle cx="18" cy="17" r="6" fill="#22c55e" opacity="0.8" />
          <text x="30" y="21" fill="white" fontSize="7" fontFamily="system-ui">SSL/TLS</text>
        </g>

        {/* Connection lines */}
        <line x1="110" y1="142" x2="150" y2="175" stroke="url(#heroGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        <line x1="110" y1="262" x2="150" y2="225" stroke="url(#heroGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        <line x1="245" y1="187" x2="280" y2="187" stroke="url(#heroGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        <line x1="245" y1="212" x2="280" y2="307" stroke="url(#heroGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        <line x1="200" y1="150" x2="200" y2="65" stroke="url(#heroGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        <line x1="245" y1="175" x2="290" y2="90" stroke="url(#heroGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

        {/* Nodes */}
        {[[150, 175], [150, 225], [245, 187], [245, 212], [200, 150], [200, 65]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="white" stroke="#06b6d4" strokeWidth="2" />
        ))}

        {/* AI node */}
        <g transform="translate(60, 320)">
          <rect width="80" height="45" rx="8" fill="white" stroke="#f97316" strokeWidth="1.5" />
          <text x="40" y="28" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="600" fontFamily="system-ui">AI Engine</text>
        </g>
        <line x1="140" y1="342" x2="175" y2="245" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      </svg>
    </div>
  );
}
