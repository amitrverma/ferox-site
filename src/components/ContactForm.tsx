export default function ContactForm() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-16 flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-12 w-full">
        {/* Left Side: Heading + Region Cards */}
        <div className="flex flex-col justify-center w-full">
          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold">
              We <span className="text-yellow-400">love our customers</span> <span>😊</span>
            </h2>
            <p className="text-2xl mt-4 text-white/90">
              We will be happy to meet you in person or virtually <br />
              feel free to reach us on -
            </p>
          </div>

          {/* Region Cards */}
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {/* North America */}
            <div>
              <div className="bg-yellow-400 text-black font-bold py-2 text-lg mb-2">
                North America
              </div>
              <p className="font-semibold text-yellow-400">Call Us On:</p>
              <p className="font-bold text-white">+1-609-819-7762</p>
              <p className="font-bold text-white">+1-609-664-8687</p>
              <p className="mt-2 font-bold text-yellow-400">Ferox Consulting LLC</p>
              <p>
                <span className="font-semibold">Address:</span> <br />
                5213 Wessex PL,<br />
                Princeton NJ 0854000000
              </p>
            </div>

            {/* United Kingdom */}
            <div>
              <div className="bg-yellow-400 text-black font-bold py-2 text-lg mb-2">
                United Kingdom
              </div>
              <p className="font-semibold text-yellow-400">Call Us On:</p>
              <p className="font-bold text-red-500">+1-609-819-7762 /</p>
              <p className="font-bold text-red-500">+1-609-664-8687</p>
              <p className="mt-2 font-bold text-yellow-400">SheSparks</p>
              <p>
                <span className="font-semibold">Address:</span> United Kingdom
              </p>
              <p className="text-white underline">hello@she-sparks.co.uk</p>
              <p className="text-white underline">www.she-sparks.co.uk</p>
            </div>

            {/* Rest of the world */}
            <div>
              <div className="bg-yellow-400 text-black font-bold py-2 text-lg mb-2">
                Rest of the world
              </div>
              <p className="font-semibold text-yellow-400">Call Us On:</p>
              <p className="font-bold text-white">+91 9899985453</p>
              <p className="font-bold text-white">+91 8826630055</p>
              <p className="mt-2 font-bold text-yellow-400">Ferox Tech Services</p>
              <p>
                <span className="font-semibold">Address:</span> Pune, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-6">
            Contact <span className="text-yellow-400">Us</span>
          </h2>

          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-white text-black px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-white text-black px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-white text-black px-4 py-2 rounded"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="w-full bg-white text-black px-4 py-2 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
