"use client";

import Image from "next/image";
import { useState } from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Loader from "@/components/Loader";
import { ArrowDown, Download } from "lucide-react";
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
            <p className={cn(TajawalRegular.className, "text-2xl md:text-4xl")}>
              تعرف على هارموني
            </p>
            <Image
              className="object-contain object-center h-[256px] w-[256px]"
              src={"/logo.jpg"}
              alt="Harmony Logo"
              height={256}
              width={256}
            />
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
              <p
                className={cn(
                  TajawalRegular.className,
                  "text-2xl md:text-4xl text-center text-[#a08e6c] font-semibold"
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
                طبعا لقصد لغة الإبداع والفنون، باختصار كل حدث تصنع له هوية خاصة
                تليق بجمهوره وصانعيه قيمنا أرقى
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
                أولاً الابتكار دائما وأبدا البداع شغف الجودة والإتقان في كل مكان
                الاحترافية طبيعة
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
                  TajawalRegular.className,
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

          <section className="bg-[url('../../public/blueLogoOpacity.png')] [background-position-x:0] [background-position-y:0] bg-repeat-round [background-size:128px] md:[background-size:256px]">
            <div className="container mx-auto relative flex flex-col items-center justify-center text-right min-h-svh px-8 py-8 ">
              <div className="absolute top-8 right-4 md:right-8 flex items-center gap-2 justify-end w-full ">
                <Image
                  className="h-[48px] w-[48px] md:h-[96px] md:w-[96px]"
                  src={"/logo.jpg"}
                  alt=""
                  height={96}
                  width={96}
                />
                <p className="text-3xl text-white">HARMONY</p>
              </div>
              <div className="flex flex-col items-center gap-8 justify-center text-[#a08e6c] font-semibold">
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-2xl md:text-4xl"
                  )}
                >
                  خدماتنا الأفضل
                </p>
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-xl md:text-3xl"
                  )}
                >
                  فعاليات من صناعة هارموني
                </p>
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-lg md:text-2xl"
                  )}
                >
                  هارمونيين
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[url('../../public/DBLogo.png')] bg-bottom [background-size:128px] md:[background-size:256px] [background-repeat:repeat-x]">
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
              <div className="flex flex-col items-end gap-8 w-full text-white md:pb-20">
                <p
                  className={cn(
                    TajawalRegular.className,
                    "text-2xl md:text-4xl text-[#a08e6c] font-semibold"
                  )}
                >
                  خدماتنا الأفضل
                </p>
                <div className="flex flex-col gap-8 w-full">
                  <div
                    className={cn(
                      TajawalRegular.className,
                      "grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 md:gap-8"
                    )}
                  >
                    <div
                      className={`relative flex flex-col gap-2 flex-1 items-end justify-start border border-gray-700 rounded-md p-4 md:p-8 shadow-md h-[200px] md:h-[300px] hover:[background-image:url('../../public/searchImage.jpg')] [background-size:95%] hover:[background-size:100%] bg-center group transition-all ease-in-out duration-500`}
                    >
                      <div className="absolute inset-0 bg-[#0e1a2f] opacity-0 group-hover:opacity-50"></div>
                      <Image
                        className="h-[48px] w-[48px] md:h-[64px] md:w-[64px] lg:h-[96px] lg:w-[96px] z-10"
                        src={"/searchicon.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={
                          "text-base md:text-xl lg:text-2xl text-end z-10"
                        }
                      >
                        اختبار المساحات
                      </p>
                    </div>
                    <div
                      className={`relative flex flex-col gap-2 flex-1 items-end justify-start border border-gray-700 rounded-md p-4 md:p-8 shadow-md h-[200px] md:h-[300px] hover:[background-image:url('../../public/hospitalityImage.jpg')] [background-size:95%] hover:[background-size:100%] bg-center group transition-all ease-in-out duration-500`}
                    >
                      <div className="absolute inset-0 bg-[#0e1a2f] opacity-0 group-hover:opacity-50"></div>
                      <Image
                        className="h-[48px] w-[48px] md:h-[64px] md:w-[64px] lg:h-[96px] lg:w-[96px] z-10"
                        src={"/hospitality.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          TajawalRegular.className,
                          "text-base md:text-xl lg:text-2xl text-end z-10"
                        )}
                      >
                        الضيافة
                      </p>
                    </div>
                    <div
                      className={`relative flex flex-col gap-2 flex-1 items-end justify-start border border-gray-700 rounded-md p-4 md:p-8 shadow-md h-[200px] md:h-[300px] hover:[background-image:url('../../public/planningImage.jpg')] [background-size:95%] hover:[background-size:100%] bg-center group transition-all ease-in-out duration-500`}
                    >
                      <div className="absolute inset-0 bg-[#0e1a2f] opacity-0 group-hover:opacity-50"></div>
                      <Image
                        className="h-[48px] w-[48px] md:h-[64px] md:w-[64px] lg:h-[96px] lg:w-[96px] z-10"
                        src={"/planning.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          TajawalRegular.className,
                          "text-base md:text-xl lg:text-2xl text-end z-10"
                        )}
                      >
                        التخطيط والإبتكار للحدث
                      </p>
                    </div>
                    <div
                      className={`relative flex flex-col gap-2 flex-1 items-end justify-start border border-gray-700 rounded-md p-4 md:p-8 shadow-md h-[200px] md:h-[300px] hover:[background-image:url('../../public/designImage.jpg')] [background-size:95%] hover:[background-size:100%] bg-center group transition-all ease-in-out duration-500`}
                    >
                      <div className="absolute inset-0 bg-[#0e1a2f] opacity-0 group-hover:opacity-50"></div>
                      <Image
                        className="h-[48px] w-[48px] md:h-[64px] md:w-[64px] lg:h-[96px] lg:w-[96px] z-10"
                        src={"/design.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          TajawalRegular.className,
                          "text-base md:text-xl lg:text-2xl text-end z-10"
                        )}
                      >
                        تصميم وتنسيق الديكور والبوثات والمسارح ومرافق احدث
                      </p>
                    </div>
                    <div
                      className={`relative flex flex-col gap-2 flex-1 items-end justify-start border border-gray-700 rounded-md p-4 md:p-8 shadow-md h-[200px] md:h-[300px] hover:[background-image:url('../../public/micImage.jpg')] [background-size:95%] hover:[background-size:100%] bg-center group transition-all ease-in-out duration-500`}
                    >
                      <div className="absolute inset-0 bg-[#0e1a2f] opacity-0 group-hover:opacity-50"></div>
                      <Image
                        className="h-[48px] w-[48px] md:h-[64px] md:w-[64px] lg:h-[96px] lg:w-[96px] z-10"
                        src={"/mic.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          TajawalRegular.className,
                          "text-base md:text-xl lg:text-2xl text-end z-10"
                        )}
                      >
                        تجهيز المساحة بالأنظمة الصوتية
                      </p>
                    </div>
                    <div
                      className={`relative flex flex-col gap-2 flex-1 items-end justify-start border border-gray-700 rounded-md p-4 md:p-8 shadow-md h-[200px] md:h-[300px] hover:[background-image:url('../../public/giftImage.jpg')] [background-size:95%] hover:[background-size:100%] bg-center group transition-all ease-in-out duration-500`}
                    >
                      <div className="absolute inset-0 bg-[#0e1a2f] opacity-0 group-hover:opacity-50"></div>
                      <Image
                        className="h-[48px] w-[48px] md:h-[64px] md:w-[64px] lg:h-[96px] lg:w-[96px] z-10"
                        src={"/gift.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          TajawalRegular.className,
                          "text-base md:text-xl lg:text-2xl text-end z-10"
                        )}
                      >
                        المطبوعات والهدايا وبطاقات الدعوة
                      </p>
                    </div>
                    <div
                      className={`relative justify-self-center w-1/2 md:w-full col-span-2 md:col-span-1 md:col-start-2 flex flex-col gap-2 flex-1 items-end justify-start border border-gray-700 rounded-md p-4 md:p-8 shadow-md h-[200px] md:h-[300px] hover:[background-image:url('../../public/leafImage.jpg')] [background-size:95%] hover:[background-size:100%] bg-center group transition-all ease-in-out duration-500`}
                    >
                      <div className="absolute inset-0 bg-[#0e1a2f] opacity-0 group-hover:opacity-50"></div>
                      <Image
                        className="h-[48px] w-[48px] md:h-[64px] md:w-[64px] lg:h-[96px] lg:w-[96px] z-10"
                        src={"/leaf.png"}
                        alt="Eye icon"
                        height={96}
                        width={96}
                      />
                      <p
                        className={cn(
                          TajawalRegular.className,
                          "text-base md:text-xl lg:text-2xl text-end z-10"
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
                يستحق أن يكون فريداً, نابضاً بالحياة, ومتناغماً مع رؤينك الخاصة
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
            <div className="container mx-auto relative flex flex-col gap-8 items-center justify-center text-right min-h-svh px-8 py-8">
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
              <form
                className={cn(
                  TajawalRegular.className,
                  "flex flex-col justify-between text-nowrap gap-4 text-lg"
                )}
                action=""
              >
                <div className="flex gap-4">
                  <input
                    className="rounded-full px-4 [direction:rtl]"
                    type="text"
                  />
                  <label className="text-end w-1/3" htmlFor="name">
                    الأسم
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    className="rounded-full px-4 [direction:rtl]"
                    type="text"
                  />
                  <label className="text-end w-1/3" htmlFor="name">
                    الجهة
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    className="rounded-full px-4 [direction:rtl]"
                    type="text"
                  />
                  <label className="text-end w-1/3" htmlFor="name">
                    نوع المشروع
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    className="rounded-full px-4 [direction:rtl]"
                    type="text"
                  />
                  <label className="text-end w-1/3" htmlFor="name">
                    الموضوع
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    className="rounded-full px-4 [direction:rtl]"
                    type="text"
                  />
                  <label className="text-end w-1/3" htmlFor="name">
                    رقم التواصل
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    className="rounded-full px-4 [direction:rtl]"
                    type="text"
                  />
                  <label className="text-end w-1/3" htmlFor="name">
                    البريد الإلكتروني
                  </label>
                </div>
                <button className="border border-[#f3f2f0] bg-[#fff] hover:bg-[#f3f2f0] rounded-full">
                  إرسال
                </button>
              </form>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
