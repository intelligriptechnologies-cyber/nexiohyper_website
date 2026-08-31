import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-section surface-soft">
      <div className="content-shell section-pad">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 text-center shadow-[0_28px_70px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-12">
          <Image
            src="/icons/logo-horizontal-2048.png"
            alt="NexioHyper"
            width={2048}
            height={482}
            className="mx-auto h-auto w-52 sm:w-64"
            priority
          />
          <p className="marketing-kicker mt-8 text-teal-700">404</p>
          <h1 className="marketing-section-title mt-4 font-bold text-slate-900">
            Page not Found
          </h1>
          <p className="marketing-body mx-auto mt-5 max-w-2xl text-slate-600">
            Page not Found, please try selecting the menu to navigate to the correct page.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-full bg-teal-500 px-8 py-3.5 font-semibold text-slate-950 transition-colors duration-200 hover:bg-teal-400"
            >
              Go to home
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-3.5 font-semibold text-slate-900 transition-colors duration-200 hover:border-teal-300 hover:text-teal-700"
            >
              Browse services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
