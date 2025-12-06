export default function Header() {
  return (
    <header className="bg-gradient-to-b from-slate-50/60 to-transparent border-b border-black/5 py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-9 rounded-md border-2 border-slate-900 flex items-center justify-center text-slate-900">
            <svg className="logo-svg" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="14" height="18" strokeWidth="2" rx="2" />
              <rect x="4" y="4" width="8" height="2" fill="currentColor" />
            </svg>
          </div>
          <div className="font-bold text-base leading-none text-slate-900">Resume</div>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center text-sm font-semibold text-slate-900">
            <li><a href="#">Builder <span className="ml-1 text-xs text-slate-600">▾</span></a></li>
            <li><a href="#">Resume <span className="ml-1 text-xs text-slate-600">▾</span></a></li>
            <li><a href="#">CV <span className="ml-1 text-xs text-slate-600">▾</span></a></li>
            <li><a href="#">Cover Letter <span className="ml-1 text-xs text-slate-600">▾</span></a></li>
            <li><a href="#">Advice <span className="ml-1 text-xs text-slate-600">▾</span></a></li>
            <li><a href="#">Resources <span className="ml-1 text-xs text-slate-600">▾</span></a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a className="rounded-full px-4 py-2 font-bold text-sm border border-black/80" href="#">Login</a>
          <a className="rounded-full px-4 py-2 font-bold text-sm bg-blue-600 text-white shadow-[0_4px_14px_rgba(43,111,255,0.18)]" href="#">Free Account</a>
        </div>
      </div>
    </header>
  )
}
