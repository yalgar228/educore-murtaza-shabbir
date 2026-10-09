"use client"
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#02040a] text-white p-4">
      {/* HEADER - MURTAZA SHABBIR BRANDING */}
      <div className="flex justify-between items-center bg-gradient-to-r from-[#0f172a]/80 to-[#1e293b]/80 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-4 mb-6 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-cyan-400 rounded-xl flex items-center justify-center font-black text-black text-xl">M</div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-cyan-200 bg-clip-text text-transparent">EduCore AI - Premium School OS</h1>
            <p className="text-[11px] text-gray-400">Developed by <span className="text-cyan-300 font-bold">MURTAZA SHABBIR</span> • Healthcare Diagnostic Services Tech Division • Jhelum • v2.5 Premium</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-bold text-sm">Murtaza Shabbir</p>
            <p className="text-[10px] bg-cyan-400 text-black px-2 py-0.5 rounded-full font-bold">Super Admin</p>
          </div>
          <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT - LOGIN */}
        <div className="col-span-4 bg-white/[0.03] border border-yellow-500/10 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-yellow-200 text-center">Welcome Back</h2>
          <p className="text-cyan-300 text-center text-sm mb-6">Sign in to EduCore AI</p>

          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-400">Email Address</label>
              <input value="murtaza.shabbir@edcore.ai" readOnly className="w-full mt-1 bg-black/50 border border-cyan-500/30 rounded-xl p-3 text-sm" />
            </div>
            <div>
              <label className="text-xs text-gray-400">Password</label>
              <input value="••••••••••" readOnly type="password" className="w-full mt-1 bg-black/50 border border-white/10 rounded-xl p-3 text-sm" />
            </div>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-cyan-400 text-black font-black py-3 rounded-xl mt-4">Sign In 🛡️</button>
            <p className="text-[10px] text-center text-gray-500 mt-4">🔒 Secured with 256-bit SSL • Healthcare Grade Compliance • © MURTAZA SHABBIR</p>
          </div>
        </div>

        {/* RIGHT - DASHBOARD */}
        <div className="col-span-8 space-y-4">
          <h3 className="font-bold">Dashboard Overview</h3>
          <p className="text-xs text-cyan-300 -mt-3 mb-3">Welcome back, Murtaza — Here is your school performance overview</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/40 border border-yellow-500/10 rounded-xl p-4"><p className="text-xs text-gray-400">Total Students</p><p className="text-3xl font-bold text-yellow-100">1,248</p><p className="text-xs text-cyan-300">+12% this month ↑</p></div>
            <div className="bg-black/40 border border-yellow-500/10 rounded-xl p-4"><p className="text-xs text-gray-400">Monthly Revenue</p><p className="text-3xl font-bold text-yellow-100">$42,850</p><p className="text-xs text-cyan-300">+8.4% vs last month ↑</p></div>
            <div className="bg-black/40 border border-yellow-500/10 rounded-xl p-4"><p className="text-xs text-gray-400">Diagnostics Run</p><p className="text-3xl font-bold text-cyan-300">186</p><p className="text-[10px] text-gray-400">Healthcare Diagnostics • 98% Accuracy</p></div>
            <div className="bg-black/40 border border-yellow-500/10 rounded-xl p-4"><p className="text-xs text-gray-400">Attendance Rate</p><p className="text-3xl font-bold text-yellow-100">94.6%</p><p className="text-xs text-cyan-300">+1.2% improvement ↑</p></div>
          </div>

          <div className="bg-black/40 border border-white/5 rounded-xl p-4">
            <p className="font-bold text-sm">Recent Activity - MURTAZA SHABBIR System</p>
            <div className="mt-3 space-y-2 text-xs">
              <p>🔵 New student enrolled - Ayesha Khan | Grade 10 • 2 mins ago</p>
              <p>🟡 Diagnostic report generated - Blood Test | Patient ID #7841 • 15 mins ago</p>
              <p>🔵 Fee payment received - Grade 8 | $450 • 1 hour ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[10px] text-gray-600 mt-10">EduCore AI • Luxury ERP for Education & Healthcare Diagnostics • Developed by MURTAZA SHABBIR • Jhelum, Pakistan • v2.5 Premium $50k Edition</div>
    </div>
  )
}
