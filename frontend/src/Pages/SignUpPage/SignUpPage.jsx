import SignUp from "../../Components/Forms/SignUp";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-6 py-12 lg:px-12 xl:px-20 bg-gray-50 order-2 lg:order-1">
          <div className="w-full max-w-xl">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-green-700 text-xs font-bold tracking-[0.2em] uppercase mb-5">
                <span className="w-7 h-px bg-green-600" />
                Start your agricultural journey
              </div>

              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                Create your
                <span className="text-green-700"> account.</span>
              </h2>

              <p className="text-gray-500 leading-7">
                Tell us about yourself and your farm. We'll use your information
                to provide agricultural insights tailored to your land.
              </p>
            </div>

            <SignUp />

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-xs text-gray-400 leading-6">
                By creating an account, you agree to use Orbit Roots
                responsibly. Agricultural recommendations are estimates based on
                available environmental data.
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:flex overflow-hidden bg-green-950 order-1 lg:order-2">
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
                Your land.
                <span className="block text-green-300">Your future.</span>
                Our insights.
              </h1>

              <p className="text-gray-200 text-base xl:text-lg leading-8 max-w-lg">
                Every successful growing season starts with understanding your
                land. Join Orbit Roots and turn satellite observations, weather
                insights, and soil data into smarter decisions.
              </p>

              <div className="mt-12 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-green-300 font-bold">
                    01
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Understand your soil
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Get insights about your farm's environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-green-300 font-bold">
                    02
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Track your growing history
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Keep your agricultural journey organized.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-green-300 font-bold">
                    03
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Make smarter decisions
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Use environmental data to plan better seasons.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-300">
              © 2026 Orbit Roots. Growing a smarter future.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
