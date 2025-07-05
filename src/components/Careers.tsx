// src/components/Careers.tsx

export default function Careers() {
  return (
    <section
      id="careers"
      className="h-screen w-full bg-black text-white px-6 md:px-16 py-16 flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-12 w-full">
        {/* Left Statement + Tracks */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-snug mb-10">
            Grow a rewarding career with <br />
            <span className="text-yellow-400">ferox tech services</span>
          </h2>

          <div className="space-y-4 text-white text-sm">
            <div>
              <h3 className="text-yellow-400 font-semibold">
                Customer Services Expertise
              </h3>
              <p>
                We help you build a rewarding career in customer service, email, chat, and contact center operations.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold">
                Finance & Accounts and Financial Services
              </h3>
              <p>
                Deep domain expertise in Finance and Accounting operations. Exciting opportunities await.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold">Health Care & Insurance</h3>
              <p>
                Decades of experience in complex insurance management, including North America healthcare processing.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold">Project Management</h3>
              <p>
                Over 40+ years of experience in project & program management to help you grow your skills.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold">Automation</h3>
              <p>
                Join us to become a brand ambassador of how technology supports human decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Right Hiring CTA */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-6">
            We are <span className="text-yellow-400">hiring!</span>
          </h2>

          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white text-black px-4 py-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-white text-black px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white text-black px-4 py-2 rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-white text-black px-4 py-2 rounded"
            ></textarea>
            <input type="file" className="text-sm text-white" />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
