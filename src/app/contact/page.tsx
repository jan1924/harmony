import { cn } from "@/lib/utils";
import Image from "next/image";
import localFont from "next/font/local";
import ContactUsForm from "@/components/ContactUsForm";
import { Metadata } from "next";

const TajawalRegular = localFont({
  src: "../../../public/fonts/Tajawal_Regular.ttf",
});

export const metadata: Metadata = {
  title: "Contact - Harmony",
  description: "Contact Harmony",
};

const page = () => {
  return (
    <>
      <main className="bg-[#f3f2f0] bg-[url('../../public/bglogo.png')] bg-center bg-repeat-round [background-size:128px] md:[background-size:256px]">
        <section className="container mx-auto relative flex flex-col gap-16 items-center justify-center text-right min-h-svh px-8 py-8">
          <div className="flex items-center gap-4">
            <Image
              className="h-[64px] w-[64px]"
              src={"/logo.jpg"}
              alt="Harmony Logo"
              height={256}
              width={256}
            />
            <p className="text-5xl md:text-7xl">HARMONY</p>
          </div>
          <div className="flex justify-center items-center">
            <p
              className={cn(
                TajawalRegular.className,
                "text-2xl md:text-4xl text-center"
              )}
            >
              تواصل معنا
            </p>
          </div>

          <ContactUsForm />
        </section>
      </main>
      <footer className="absolute bottom-0 w-full border-t border-gray-700 bg-[#0e1a2f] text-white/90 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} HARMONY. All Rights Reserved.</p>
      </footer>
    </>
  );
};
export default page;
