"use client";

import Image from "next/image";
import { useState } from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Loader from "@/components/Loader";
const GeSSTwoLight = localFont({
  src: "../../public/fonts/GE_SS_Two_Light.otf",
});
export default function Home() {
  const [skipped, setSkipped] = useState(false);

  return (
    <main className="h-full flex flex-col gap-8 bg-[#0e1a2f] word-normal">
      <Loader />

      {!skipped && (
        <section className="flex flex-col items-center justify-evenly bg-[#e6e6e6] min-h-svh pt-8 py-16">
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
            <p className={cn(GeSSTwoLight.className, "text-2xl md:text-4xl")}>
              تعرف على هارموني
            </p>
            <Image
              className="object-contain object-center h-[256px] w-[256px]"
              src={"/LandingLogo.png"}
              alt="Harmony Logo"
              height={256}
              width={256}
            />
            <p className={cn(GeSSTwoLight.className, "text-2xl md:text-4xl")}>
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
                  GeSSTwoLight.className,
                  "text-white text-2xl md:text-4xl"
                )}
              >
                هذا حناَ
              </p>
              <div className="flex flex-col gap-4">
                <p
                  className={cn(
                    GeSSTwoLight.className,
                    "text-white/90 md:text-xl"
                  )}
                >
                  شركة سعودية مختصة تعمل على صناعة أيقونة جمالية ساحرة وجذَابة
                  من حدثك أو فعاليتك الخاصة
                </p>
                <p
                  className={cn(
                    GeSSTwoLight.className,
                    "text-white/90 md:text-xl"
                  )}
                >
                  خبراتنا تصنع لك حدثا أكثر جمالا وابتكارا ، على أيدي شابات
                  سعوديات لطالما كانت صناعة الفعاليات شغفهنّ الأول ، حتى ..
                  تمكنّ اليوم من إطلاق
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 items-center">
              <p
                className={cn(
                  GeSSTwoLight.className,
                  "text-white text-2xl md:text-4xl text-center"
                )}
              >
                هارموني لـ يكنّ حيث يُصنع الإبداع
              </p>
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
                    GeSSTwoLight.className,
                    "text-white text-2xl md:text-4xl"
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
                  GeSSTwoLight.className,
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
                    GeSSTwoLight.className,
                    "text-white text-2xl md:text-4xl"
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
                  GeSSTwoLight.className,
                  "text-white/90 tex md:text-xl md:pr-28"
                )}
              >
                طبعا لقصد لغة الإبداع والفنون، باختصار كل حدث تصنع له هوية خاصة
                تليق بجمهوره وصانعيه قيمنا أرقى
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full items-end">
              <div className="flex gap-4 items-center">
                <p
                  className={cn(
                    GeSSTwoLight.className,
                    "text-white text-2xl md:text-4xl"
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
                  GeSSTwoLight.className,
                  "text-white/90 tex md:text-xl md:pr-28"
                )}
              >
                أولاً الابتكار دائما وأبدا البداع شغف الجودة والإتقان في كل مكان
                الاحترافية طبيعة
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full items-end">
              <div className="flex gap-4 items-center">
                <p
                  className={cn(
                    GeSSTwoLight.className,
                    "text-white text-2xl md:text-4xl"
                  )}
                >
                  أهدافنا أكبر
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
                  GeSSTwoLight.className,
                  "text-white/90 tex md:text-xl md:pr-28"
                )}
              >
                العمل على إضافة فكرة إبداعية ومبتكرة تقدم الحدث بشكل فريد و مميز
                <br />
                العمل على صناعة لحظات أكثر جاذبية تترك أثرا في أذهان الحضور مدى
                الحياة
                <br />
                العمل على إخراج الحدث بجودة عالية تليق بجمهوره وصانعيه
                <br />
                العمل على إخراج الحدث بصورة مشرفة تحاكي الفعاليات العالمية
                <br />
                العمل على دعم قطاع صناعة الفعاليات والمؤتمرات والمعارض بما
                يتوافق مع رؤية ٢٠٣٠ العمل على إيجاد فرص عمل تليق بشباب وشابات
                الوطن في هذا القطاع
              </p>
            </div>
          </section>

          <section className="container mx-auto relative flex flex-col items-center justify-center text-right min-h-svh px-8 py-8">
            <div className="absolute top-8 right-4 md:right-8 flex items-center gap-2 justify-end w-full">
              <Image
                className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                src={"/logo.jpg"}
                alt=""
                height={96}
                width={96}
              />
              <p className="text-3xl text-white">HARMONY</p>
            </div>
            <div className="flex flex-col items-center gap-8 justify-center text-white">
              <p className={cn(GeSSTwoLight.className, "text-2xl md:text-4xl")}>
                خدماتنا الأفضل
              </p>
              <p className={cn(GeSSTwoLight.className, "text-xl md:text-3xl")}>
                فعاليات من صناعة هارموني
              </p>
              <p className={cn(GeSSTwoLight.className, "text-lg md:text-2xl")}>
                هارمونيين
              </p>
            </div>
          </section>

          <section className="bg-[url('../../public/DBLogo.png')] bg-bottom [background-repeat:repeat-x]">
            <div className="container mx-auto relative flex flex-col items-center justify-center text-right pb-[192px] px-8 py-8 min-h-svh">
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
              <div className="flex flex-col items-end gap-8 w-full text-white">
                <p
                  className={cn(GeSSTwoLight.className, "text-2xl md:text-4xl")}
                >
                  خدماتنا الأفضل
                </p>
                <div className="flex flex-col gap-8 w-full">
                  <div className="grid grid-cols-3 gap-4 items-start w-full">
                    <div className="flex flex-col gap-2 flex-1 items-center justify-center">
                      <Image
                        className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                        src={"/searchicon.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          GeSSTwoLight.className,
                          "text-xs md:text-lg text-center"
                        )}
                      >
                        اختبار المساحات
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 items-center justify-center">
                      <Image
                        className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                        src={"/hospitality.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          GeSSTwoLight.className,
                          "text-xs md:text-lg text-center"
                        )}
                      >
                        الضيافة
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 items-center justify-center">
                      <Image
                        className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                        src={"/planning.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          GeSSTwoLight.className,
                          "text-xs md:text-lg text-center"
                        )}
                      >
                        التخطيط والإبتكار للحدث
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-start w-full">
                    <div className="flex flex-col gap-2 flex-1 items-center justify-center">
                      <Image
                        className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                        src={"/design.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          GeSSTwoLight.className,
                          "text-xs md:text-lg text-center"
                        )}
                      >
                        تصميم وتنسيق الديكور والبوثات والمسارح ومرافق احدث
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 items-center justify-center">
                      <Image
                        className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                        src={"/mic.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          GeSSTwoLight.className,
                          "text-xs md:text-lg text-center"
                        )}
                      >
                        تجهيز المساحة بالأنظمة الصوتية
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-start w-full">
                    <div className="flex flex-col gap-2 flex-1 items-center justify-center">
                      <Image
                        className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                        src={"/gift.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          GeSSTwoLight.className,
                          "text-xs md:text-lg text-center"
                        )}
                      >
                        المطبوعات والهدايا وبطاقات الدعوة
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 items-center justify-center">
                      <Image
                        className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                        src={"/leaf.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          GeSSTwoLight.className,
                          "text-xs md:text-lg text-center"
                        )}
                      >
                        بناء الثيم والهوية البصرية للحدث
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f3f2f0] bg-[url('../../public/bglogo.png')] bg-center bg-repeat-round [background-size:128px] md:[background-size:256px]">
            <div className="container mx-auto relative flex flex-col gap-8 items-center justify-center text-right min-h-svh px-8 py-8">
              <div className="flex justify-center items-center">
                <p
                  className={cn(
                    GeSSTwoLight.className,
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
