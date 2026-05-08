export function BackgroundEffect() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 noise opacity-40" />
      <div className="absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl animate-aurora" />
      <div className="absolute bottom-[-20rem] right-[-10rem] hidden h-[38rem] w-[38rem] rounded-full bg-blue-700/10 blur-3xl animate-float md:block" />
      <div className="absolute left-[-12rem] top-[35%] hidden h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl animate-aurora md:block" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
    </div>
  );
}
