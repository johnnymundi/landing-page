import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="pixel-card pixel-clip-10 p-6 sm:p-8">
        <h2 className="text-[16px] sm:text-[18px]">Contact</h2>

        <p className="pixel-text text-muted mt-3 max-w-2xl text-[11px]">
          Wanna talk about freelance, new job opportunities, networking, or a
          project idea? Reach out to me through any of the channels below!:
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:johnny.sf@gmail.com"
            className="pixel-btn pixel-clip-8 inline-flex items-center gap-2 px-4 py-2 text-[10px]"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/johnnymundi"
            className="pixel-btn pixel-clip-8 inline-flex items-center gap-2 px-4 py-2 text-[10px]"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/johnnymundi"
            className="pixel-btn pixel-clip-8 inline-flex items-center gap-2 px-4 py-2 text-[10px]"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://wa.me/55SEUDDDSEUNUMERO"
            className="pixel-btn pixel-clip-8 inline-flex items-center gap-2 px-4 py-2 text-[10px]"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
