import { contactConfig } from "@/config/contact";
import Link from "next/link";

export default function ContactPage() {
  const email = "vaibhavkesarwani100@email.com";

  return (
    <main className="px-4 sm:px-6 py-8 sm:py-10">
      <div className="mb-12 sm:mb-14 flex justify-center">
        <div
          className="
            w-full max-w-2xl
            rounded-2xl sm:rounded-3xl
            border border-black/10 dark:border-white/10
            bg-white/40 dark:bg-white/2
            backdrop-blur-2xl
            shadow-xl
            p-5 sm:p-8 md:p-10
            space-y-4 sm:space-y-5
          "
        >
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wide">
            Contact Information
          </div>

          {contactConfig.socialData.map((data, i) => {
            const Icon = data.icon;

            return (
              <Link
                key={i}
                href={`mailto:${email}`}
                className="
              group block
              rounded-xl sm:rounded-2xl
              border border-black/10 dark:border-white/5
              bg-white/60 dark:bg-white/5
              backdrop-blur-xl
              p-4 sm:p-5
              transition-all duration-300 sm:duration-500
              active:scale-[0.98]
              sm:hover:scale-[1.015]
              hover:border-black/30 dark:hover:border-white/30
              hover:shadow-lg
            "
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div
                    className="
                  p-2.5 sm:p-3
                  rounded-lg sm:rounded-xl
                  border border-black/10 dark:border-white/10
                  bg-blue-300 dark:bg-yellow-300 dark:text-black
                  transition-all duration-300
                  sm:group-hover:scale-110
                "
                  >
                    <Icon size={18} className="sm:stroke-[2.5]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500">
                      {data.name}
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl font-semibold break-all">
                      {data.text}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="space-y-8 sm:space-y-10">
        <h2 className="text-center text-lg sm:text-xl font-medium tracking-wide">
          Find Me On
        </h2>

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4 sm:gap-6 lg:gap-8
          "
        >
          {contactConfig.socialLinks.map((social, i) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="
                  group relative
                  rounded-2xl sm:rounded-3xl
                  border border-black/10 dark:border-white/10
                  backdrop-blur-xl
                  p-5 sm:p-7 lg:p-8
                  transition-all duration-300 sm:duration-500
                  active:scale-[0.97]
                  sm:hover:-translate-y-2
                  hover:border-black/30 dark:hover:border-white/30
                "
                style={{
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
                  <div
                    className="
                      p-4
                      rounded-2xl
                      border border-black/10 dark:border-white/10
                      bg-blue-300 dark:bg-yellow-300 text-black
                      transition duration-500
                      sm:group-hover:scale-110
                    "
                  >
                    <Icon size={22} className="sm:size-6.5" />
                  </div>

                  <p className="text-xs sm:text-sm font-semibold tracking-wide opacity-80 group-hover:opacity-100 transition">
                    {social.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
