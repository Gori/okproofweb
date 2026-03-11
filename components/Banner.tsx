export function Banner() {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="bg-cream-700 rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Content */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
            <span className="font-[family-name:var(--font-stabil-grotesk)] text-base text-brown-400 mb-3 block">
              Early access
            </span>
            <h2 className="font-[family-name:var(--font-abc-gaisyr)] text-[1.25rem] lg:text-[1.5rem] font-medium leading-[1.35] lg:leading-[1.3] text-brown-700">
              Ready to see real proof?
            </h2>
            <p className="mt-2 font-[family-name:var(--font-stabil-grotesk)] font-medium text-lg text-brown-500">
              Request access today.
            </p>
          </div>

          {/* Decorative */}
          <div className="lg:w-1/2 h-[16rem] lg:h-auto relative">
            <div
              className="w-full h-full bg-yellow-400"
              style={{
                clipPath:
                  "polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-brown-700/20">
                <svg className="w-24 h-24" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="8" y="12" width="48" height="40" rx="4" />
                  <path d="M8 22h48" />
                  <path d="M20 34l6 6-6 6" />
                  <path d="M34 44h12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
