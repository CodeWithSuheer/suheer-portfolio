import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                with a direct question on twitter
              </Link>{" "}
              and I&apos;ll respond whenever I can. I will ignore all
              soliciting.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
