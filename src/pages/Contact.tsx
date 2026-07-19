import { motion } from "framer-motion";
import { contactItems, gmailComposeUrl, resume } from "../data/userData";
import { ArrowUpRight, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.open(`${gmailComposeUrl}&su=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-48 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center space-y-4 flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tighter">
            Let's build <span className="text-blue-600 text-glow">better</span> products.
          </h3>

          <p className="text-lg md:text-2xl text-zinc-400 font-medium max-w-md leading-relaxed">
            Open for interesting opportunities or just a meaningful chat.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white text-black font-black text-base transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-1 flex items-center gap-2 group"
            >
              Start a Conversation
            </a>
            <a
              href={resume["software-engineer"]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white border border-white/10 rounded-full font-black text-base hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
            >
              Resume <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto font-medium"
          >
            Let's build something great together. I'm always open to new opportunities and collaborations.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-3 w-full">
            {contactItems.map(({ icon: Icon, label, value, href, color }, i) => {
              const CardComponent = href ? motion.a : motion.div;

              return (
                <CardComponent
                  key={i}
                  href={href}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="group p-4 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 flex items-center gap-4 w-full min-w-0"
                >
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    <Icon className={`${color || "text-zinc-400"} transition-colors`} size={18} />
                  </div>

                  <div className="flex-1 flex flex-col items-start text-left min-w-0">
                    <p className="font-black text-zinc-500 uppercase tracking-widest text-[10px] mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-bold text-white group-hover:text-blue-500 transition-colors truncate w-full">
                      {value}
                    </p>
                  </div>

                  {href && (
                    <div className="text-zinc-600 group-hover:text-white transition-all duration-300 hidden sm:block">
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </CardComponent>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 w-full">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 space-y-4"
            >
              <div className="text-left">
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="mt-1 text-sm text-zinc-500 font-medium">
                  Share your idea, opportunity, or project details.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500/60 focus:bg-white/10"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500/60 focus:bg-white/10"
                />
              </div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project"
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500/60 focus:bg-white/10"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-5 py-3.5 text-white font-black hover:bg-blue-700 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
