import { cn } from "@/lib/utils";
import Image from "next/image";
import localFont from "next/font/local";

const TajawalRegular = localFont({
  src: "../../../public/fonts/Tajawal_Regular.ttf",
});

const page = () => {
  return (
    <section className="bg-[#f3f2f0] bg-[url('../../public/bglogo.png')] bg-center bg-repeat-round [background-size:128px] md:[background-size:256px]">
      <div className="container mx-auto relative flex flex-col gap-16 items-center justify-center text-right min-h-svh px-8 py-8">
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

        <form
          className={cn(
            TajawalRegular.className,
            "flex flex-col justify-between text-nowrap gap-4 text-lg"
          )}
          action=""
        >
          <div className="flex gap-4">
            <input
              className="bg-[#a08e6c] rounded-full px-4 [direction:rtl]"
              type="text"
            />
            <label className="text-end w-1/3" htmlFor="name">
              الأسم
            </label>
          </div>
          <div className="flex gap-4">
            <input
              className="bg-[#a08e6c]  rounded-full px-4 [direction:rtl]"
              type="text"
            />
            <label className="text-end w-1/3" htmlFor="name">
              الجهة
            </label>
          </div>
          <div className="flex gap-4">
            <input
              className="bg-[#a08e6c] rounded-full px-4 [direction:rtl]"
              type="text"
            />
            <label className="text-end w-1/3" htmlFor="name">
              نوع المشروع
            </label>
          </div>
          <div className="flex gap-4">
            <input
              className="bg-[#a08e6c] rounded-full px-4 [direction:rtl]"
              type="text"
            />
            <label className="text-end w-1/3" htmlFor="name">
              الموضوع
            </label>
          </div>
          <div className="flex gap-4">
            <input
              className="bg-[#a08e6c] rounded-full px-4 [direction:rtl]"
              type="text"
            />
            <label className="text-end w-1/3" htmlFor="name">
              رقم التواصل
            </label>
          </div>
          <div className="flex gap-4">
            <input
              className="bg-[#a08e6c] rounded-full px-4 [direction:rtl]"
              type="text"
            />
            <label className="text-end w-1/3" htmlFor="name">
              البريد الإلكتروني
            </label>
          </div>
          <button className="border border-[#f3f2f0] bg-[#a08e6c]  hover:bg-[#817357]  rounded-full">
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
};
export default page;
