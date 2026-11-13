
import SIgnIn from "../../Components/Forms/SIgnIn";

export default function SigninPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">


      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden lg:flex overflow-hidden bg-green-950">
          <img
            src="/signinPage.avif"
            alt="Agricultural landscape"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-linear-to-t from-green-950 via-green-950/50 to-green-900/20" />

          <div className="relative z-10 flex flex-col justify-between w-full p-14 xl:p-20 text-white">
          

            <div className="max-w-xl">
              <p className="text-green-300 uppercase tracking-[0.3em] text-xs font-bold mb-5">
                A smarter way to grow
              </p>

              <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.15] tracking-tight mb-7">
                Every field has a story.
                <span className="block text-green-300">
                  Let's grow yours.
                </span>
              </h1>

              <p className="text-gray-200 text-base xl:text-lg leading-8 max-w-lg">
                Turn satellite observations, weather insights, and soil data
                into smarter agricultural decisions. Your next growing season
                starts with the right information.
              </p>

              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div>
                  <p className="text-3xl font-bold">01</p>
                  <p className="text-sm text-gray-300 mt-1">Understand your land</p>
                </div>

                <div className="w-px h-12 bg-white/20" />

                <div>
                  <p className="text-3xl font-bold">02</p>
                  <p className="text-sm text-gray-300 mt-1">Plan smarter seasons</p>
                </div>

                <div className="w-px h-12 bg-white/20" />

                <div>
                  <p className="text-3xl font-bold">03</p>
                  <p className="text-sm text-gray-300 mt-1">Grow with confidence</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-300">
              © 2026 Orbit Roots. Growing a smarter future.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-14 lg:px-12 xl:px-20 bg-gray-50">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-green-700 text-xs font-bold tracking-[0.2em] uppercase mb-5">
                <span className="w-7 h-px bg-green-600" />
                Your agricultural journey
              </div>

              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                Welcome <span className="text-green-700">back.</span>
              </h2>

              <p className="text-gray-500 leading-7">
                Sign in to access your farm dashboard, review your crop
                history, and make your next growing decision.
              </p>
            </div>

            <SIgnIn />

            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-center text-xs text-gray-400 leading-6">
                By continuing, you agree to use Orbit Roots responsibly.
                Agricultural recommendations are estimates based on available
                environmental data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
