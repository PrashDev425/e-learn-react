const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Empower Your Future with New Skills - Learn Anytime, Anywhere!
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Unlock your potential with our diverse courses! Learn at your own pace with expert-led instruction.
              Join thousands who've transformed their careers. Start your learning journey today!
            </p>
            <button className="bg-orange-primary hover:bg-orange-600 px-6 md:px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Start Now
            </button>
          </div>

          <div className="flex-1 max-w-md lg:max-w-none">
            <img
              src="/images/hero.png"
              alt="Learning illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;