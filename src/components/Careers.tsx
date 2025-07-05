export default function Careers() {
  return (
    <section
      id="careers"
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20 flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-16 w-full">
        {/* Left Statement + Tracks */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold leading-snug mb-12">
            Grow a rewarding career with <br />
            <span className="text-yellow-400">ferox tech services</span>
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <div>
              <h3 className="text-yellow-400 font-bold text-2xl mb-1">
                Customer Services Expertise
              </h3>
              <p>
                We help you build a rewarding career in customer service, email, chat, and contact center operations.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-2xl mb-1">
                Finance & Accounts and Financial Services
              </h3>
              <p>
                Deep domain expertise in Finance and Accounting operations. Exciting opportunities await.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-2xl mb-1">Health Care & Insurance</h3>
              <p>
                Decades of experience in complex insurance management, including North America healthcare processing.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-2xl mb-1">Project Management</h3>
              <p>
                Over 40+ years of experience in project & program management to help you grow your skills.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold text-2xl mb-1">Automation</h3>
              <p>
                Join us to become a brand ambassador of how technology supports human decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Right Hiring CTA */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-5xl font-bold mb-8">
            We are <span className="text-yellow-400">hiring!</span>
          </h2>

          <form className="w-full max-w-md space-y-5 text-lg">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white text-black px-5 py-3 rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-white text-black px-5 py-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white text-black px-5 py-3 rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-white text-black px-5 py-3 rounded"
            ></textarea>
            <input type="file" className="text-white text-base" />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded font-semibold text-lg hover:bg-yellow-300 transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
