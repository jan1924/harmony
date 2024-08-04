"use client";

import Image from "next/image";
import { useState } from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Loader from "@/components/Loader";
import { ArrowDown, Download, icons } from "lucide-react";
import Card from "@/components/Card";
const TajawalRegular = localFont({
  src: "../../public/fonts/Tajawal_Regular.ttf",
});
export default function Home() {
  const [skipped, setSkipped] = useState(false);

  
  return (
    <main className="h-full flex flex-col gap-8 bg-[#0e1a2f] word-normal">
      <Loader />

      {!skipped && (
        <section className="flex flex-col items-center justify-evenly bg-[#e6e6e6] min-h-svh pt-8 py-16 z-30">
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
          <div
            onClick={() => setSkipped(true)}
            className="flex flex-col items-center justify-between gap-8 bg-[url('../../public/bgImage.png')] bg-center bg-contain bg-no-repeat p-8 cursor-pointer"
          >
            <div className="flex">
          
              <Image
              src={"/arrow.png"}
              alt="arrow"
              height={128}
              width={128}
              className="tranform scale-x-[-1]"
              />
              
            <Image
              className="object-contain object-center h-[256px] w-[256px]"
              src={"/LandingLogo.png"}
              alt="Harmony Logo"
              height={256}
              width={256}
            
            />
             <Image
              src={"/arrow.png"}
              alt="arrow"
              height={128}
              width={128}
              
              />
            </div>
            <p
              className={cn(
                TajawalRegular.className,
                "text-2xl md:text-4xl text-center"
              )}
            >
              نغم من الجمال يصنع حدثاً أجمل
            </p>
          </div>
        </section>
      )}

      {skipped && (
        <>
          <section className="flex flex-col items-center justify-between text-right min-h-svh px-8 py-8">
            <div className="flex flex-grow flex-col items-center justify-center gap-8 h-full">
              <p
                className={cn(
                  TajawalRegular.className,
                  "text-2xl md:text-4xl text-[#a08e6c] font-semibold"
                )}
              >
                هذا حناَ
              </p>
              <div className="flex flex-col gap-4">
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-white/90 md:text-xl"
                  )}
                >
                  شركة سعودية مختصة تعمل على صناعة أيقونة جمالية ساحرة وجذَابة
                  من حدثك أو فعاليتك الخاصة
                </p>
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-white/90 md:text-xl [direction:rtl]"
                  )}
                >
                  خبراتنا تصنع لك حدثا أكثر جمالا وابتكارا ، على أيدي شابات
                  سعوديات لطالما كانت صناعة الفعاليات شغفهنّ الأول ، حتى ..
                  تمكنّ اليوم من إطلاق HARMONY COMPANY
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 items-center">
              
              <Image
                src={"/blueLogo.png"}
                alt="Harmony logo"
                height={256}
                width={256}
              />
              <p
                className={cn(
                  TajawalRegular.className,
                  "text-2xl md:text-4xl text-center text-white font-semibold"
                )}
              >
                 لـ يكنّ حيث يُصنع الإبداع
              </p>
            </div>
          </section>

         

          
          <section className="container min-h-[200svh] flex flex-col items-center justify-evenly">
            <div className="flex flex-col gap-4 items-center">
              <p
                className={cn(
                  TajawalRegular.className,
                  "text-[#a08e6c] text-3xl md:text-4xl text-end z-10"
                )}
              >
                حاب تتعرف علينا أكثر
              </p>
              <Download
                className="h-[96px] w-[96px] md:h-[128px] md:w-[128px]"
                color="white"
              />
            </div>
            <Image
              src={"/logo.jpg"}
              alt="Harmony Logo"
              height={512}
              width={512}
            />
            <div className="flex flex-col gap-8 text-2xl md:text-4xl">
              <p
                className={cn(
                  TajawalRegular.className,
                  "text-[#a08e6c] [direction:rtl] z-10"
                )}
              >
                لإبداعك نغمٌ يُصنع من{" "}
                <span className="text-white">HARMONY</span>
              </p>
              <p
                className={cn(
                  TajawalRegular.className,
                  "text-[#a08e6c] [direction:rtl] z-10"
                )}
              >
                في <span className="text-white">HARMONY</span> نؤمن أن كل حدث
                يستحق أن يكون فريداً, نابضاً بالحياة, ومتناغماً مع رؤيتك الخاصة
              </p>
              <p
                className={cn(
                  TajawalRegular.className,
                  "text-[#a08e6c] text-center [direction:rtl] z-10"
                )}
              >
                إذا كنت تبحث عن شريك يجلب الإبتكار والجمال إلى مناسبتك, نحن هنا
                لنحقق ذلك
              </p>
            </div>
          </section>

          <section className="bg-[#f3f2f0] bg-[url('../../public/bglogo.png')] bg-center bg-repeat-round [background-size:128px] md:[background-size:256px]">
            <div className="container mx-auto relative flex flex-col gap-8 items-center justify-center text-right min-h-[300px] px-8 py-8">
              <div className="flex justify-center items-center">
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-2xl md:text-4xl text-center"
                  )}
                >
                  تواصل معنا لنتحدث عن حدثك التالي
                </p>
              </div>
              <div className="flex justify-evenly md:justify-center md:gap-32 items-center w-full">
                <Image
                  className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                  src={"/mail.png"}
                  alt="Eye icon"
                  height={96}
                  width={96}
                />{" "}
                <Image
                  className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                  src={"/whatsapp.png"}
                  alt="Eye icon"
                  height={96}
                  width={96}
                />
              </div>
              
            </div>
          </section>
        </>
      )}
    </main>
  );
}
