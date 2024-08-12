"use client";

import Image from "next/image";
import { useState } from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Loader from "@/components/Loader";
import { Download, MoveLeft } from "lucide-react";
import Link from "next/link";
import Card from "@/components/Card";
const TajawalRegular = localFont({
  src: "../../public/fonts/Tajawal_Regular.ttf",
});
export default function Home() {
  const [skipped, setSkipped] = useState(false);
  const SERVICES = [
    {
      id: 1,
      name: "اختيار المساحات",
      icon: "/searchicon.png",
      image: "/searchImage.jpg",
    },
    {
      id: 2,
      name: "الضيافة",
      icon: "/hospitality.png",
      image: "/hospitalityImage.jpg",
    },
    {
      id: 3,
      name: "التخطيط والإبتكار للحدث",
      icon: "/planning.png",
      image: "/planningImage.jpg",
    },
    {
      id: 4,
      name: "تصميم وتنسيق الديكور والبوثات والمسارح ومرافق الحدث",
      icon: "/design.png",
      image: "/designImage.jpg",
    },
    {
      id: 5,
      name: "تجهيز المساحة بالأنظمة الصوتية والمرئية",
      icon: "/mic.png",
      image: "/micImage.jpg",
    },
    {
      id: 6,
      name: "المطبوعات والهدايا وبطاقات الدعوة",
      icon: "/gift.png",
      image: "/giftImage.jpg",
    },
    {
      id: 7,
      name: "بناء الثيم والهوية البصرية للحدث",
      icon: "/leaf.png",
      image: "/leafImage.jpg",
    },
  ];

  return (
    <>
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
              <div className="flex justify-center items-center">
                <Image
                  className="object-contain object-center h-[128px] w-[128px] md:h-[256px] md:w-[256px]"
                  src={"/LandingLogo.png"}
                  alt="Harmony Logo"
                  height={256}
                  width={256}
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
                    خبراتنا تصنع لك حدثا أكثر جمالا وابتكارا ، على أيدي شباب و شابات
                    سعوديون لطالما كانت صناعة الفعاليات شغفهم الأول ، حتى 
                    تمكنوا اليوم من إطلاق HARMONY COMPANY
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
                
              </div>
            </section>

            <section className="container mx-auto flex flex-col gap-6 md:gap-8 items-center justify-center text-right px-8 py-8 min-h-svh">
              <div className="flex flex-col gap-2 w-full items-end">
                <div className="flex gap-4 items-center">
                  <p
                    className={cn(
                      TajawalRegular.className,
                      "text-2xl md:text-4xl text-[#a08e6c] font-semibold"
                    )}
                  >
                    رؤيتنا بعيون أجمل
                  </p>
                  <Image
                    className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                    src={"/eyesIcon.png"}
                    alt="Eye icon"
                    height={96}
                    width={96}
                  />
                </div>
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-white/90 tex md:text-xl md:pr-28"
                  )}
                >
                  نعمل باستمرار على تطوير الذائقة العامة في صناعة الحدث التفاعلي
                  من خلال تقديم فعاليات أكثر ابتكاراً وجمالاً وتناغما مع مضمون
                  الحدث المقدم للجمهور
                </p>
              </div>

              <div className="flex flex-col gap-2 w-full items-end">
                <div className="flex gap-4 items-center">
                  <p
                    className={cn(
                      TajawalRegular.className,
                      "text-2xl md:text-4xl text-[#a08e6c] font-semibold"
                    )}
                  >
                    رسالتنا بفكر أحدث
                  </p>
                  <Image
                    className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                    src={"/stick.png"}
                    alt="Eye icon"
                    height={96}
                    width={96}
                  />
                </div>
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-white/90 tex md:text-xl md:pr-28"
                  )}
                >
                  إبداعنا ما تشوفه مرتين لأن التكرار ماله مكان في قاموسنا اللغوي
                  <br/>
                  باختصار كل حدث نصنع له هوية خاصة تليق بجمهوره وصانعيه
  
                </p>
              </div>

              <div className="flex flex-col gap-2 w-full items-end">
                <div className="flex gap-4 items-center">
                  <p
                    className={cn(
                      TajawalRegular.className,
                      "text-2xl md:text-4xl text-[#a08e6c] font-semibold"
                    )}
                  >
                    قيمنا أرقى
                  </p>
                  <Image
                    className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                    src={"/handIcon.png"}
                    alt="Eye icon"
                    height={96}
                    width={96}
                  />
                </div>
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-white/90 tex md:text-xl md:pr-28"
                  )}
                >
                  الجمال
                  <br />
                  الإبتكار
                  <br />
                  الابداع
                  <br />
                  الجودة
                  <br />
                  الاحترافية
                </p>
              </div>

              <div className="flex flex-col gap-2 w-full items-end">
                <div className="flex gap-4 items-center">
                  <p
                    className={cn(
                      TajawalRegular.className,
                      "text-2xl md:text-4xl text-[#a08e6c] font-semibold"
                    )}
                  >
                    وأهدافنا أكبر
                  </p>
                  <Image
                    className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                    src={"/corr.png"}
                    alt="Eye icon"
                    height={96}
                    width={96}
                  />
                </div>
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-white/90 tex md:text-xl md:pr-28"
                  )}
                >
                   إضافة فكرة إبداعية ومبتكرة تقدم الحدث بشكل فريد و
                  مميز
                  <br />
                   صناعة لحظات أكثر جاذبية تترك أثرا في أذهان الحضور
                  مدى الحياة
                  <br />
                   تنفيذ الحدث بجودة عالية تليق بجمهوره وصانعيه
                  <br />
                   إخراج الحدث بصورة مشرفة تحاكي الفعاليات العالمية
                  <br />
                   دعم قطاع صناعة الفعاليات والمؤتمرات والمعارض بما
                  يتوافق مع رؤية ٢٠٣٠
                  <br/>
                  تمكين فرص عمل تليق بشباب وشابات
                  الوطن في هذا القطاع
                </p>
              </div>
              <Link href={"/contact"}>
                <div className="flex items-center gap-4">
                  <p className="text-white text-lg">دعنا ننظم حدثك</p>
                  <MoveLeft color="white" size={48} />
                </div>
              </Link>
            </section>

            <section className="flex flex-col items-center bg-bottom [background-size:128px] md:[background-size:256px] [background-repeat:repeat-x]">
              <div className="container mx-auto relative flex flex-col items-center justify-center text-right px-8 py-8 min-h-svh">
                <div className="flex items-center gap-2 justify-end w-full pb-8">
                  <Image
                    className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                    src={"/logo.jpg"}
                    alt=""
                    height={96}
                    width={96}
                  />
                  <p className="text-3xl text-white">HARMONY</p>
                </div>
                <div className="flex flex-col items-end gap-8 w-full text-white md:pb-20">
                  <p
                    className={cn(
                      TajawalRegular.className,
                      "text-2xl md:text-4xl text-[#a08e6c] font-semibold"
                    )}
                  >
                     خدماتنا أفضل
                  </p>
                  <div className="flex flex-col gap-8 w-full">
                    <div
                      className={cn(
                        TajawalRegular.className,
                        "grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 md:gap-8"
                      )}
                    >
                      {SERVICES.map((service) => (
                        <Card
                          id={service.id}
                          key={service.id}
                          name={service.name}
                          icon={service.icon}
                          image={service.image}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link href={"https://wa.me/qr/EHJAHIGJIXGNH1"}>
                <div className="flex items-center gap-4">
                  <p className="text-white text-lg">اطلب خدمتك الان</p>
                  <MoveLeft color="white" size={48} />
                </div>
              </Link>
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
                  يستحق أن يكون فريداً, نابضاً بالحياة, ومتناغماً مع رؤيتك
                  الخاصة
                </p>
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-[#a08e6c] text-center [direction:rtl] z-10"
                  )}
                >
                  إذا كنت تبحث عن شريك يجلب الإبتكار والجمال إلى مناسبتك, نحن
                  هنا لنحقق ذلك
                </p>
              </div>
            </section>
          </>
        )}
      </main>
      {skipped && (
        <footer className="border-t border-gray-700 bg-[#0e1a2f] text-white/90 py-4 text-center">
          <p>&copy; {new Date().getFullYear()} HARMONY. All Rights Reserved.</p>
        </footer>
      )}
    </>
  );
}
