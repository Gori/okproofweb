export function Footer() {
  return (
    <footer className="bg-cream-500 px-5 lg:px-10 py-10 lg:py-14">
      <div className="max-w-[64rem] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <a
            href="#"
            className="font-[family-name:var(--font-abc-gaisyr)] text-[1.5rem] text-brown-700 tracking-tight"
          >
            ok.proof
          </a>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#how-it-works" className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-400 hover:text-brown-700 transition-colors">How it works</a>
            <a href="#features" className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-400 hover:text-brown-700 transition-colors">Features</a>
            <a href="#faq" className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-400 hover:text-brown-700 transition-colors">FAQ</a>
            <a href="https://app.okproof.dev" className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-400 hover:text-brown-700 transition-colors">Sign up</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-stabil-grotesk)] text-xs text-brown-200">
            &copy; 2026 ok.proof
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-[family-name:var(--font-stabil-grotesk)] text-xs text-brown-200 hover:text-brown-700 transition-colors">Privacy</a>
            <a href="#" className="font-[family-name:var(--font-stabil-grotesk)] text-xs text-brown-200 hover:text-brown-700 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
