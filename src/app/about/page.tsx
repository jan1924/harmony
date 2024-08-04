import { cn } from "@/lib/utils"
import { ArrowBigLeft, MoveLeft } from "lucide-react";
import localFont from "next/dist/compiled/@next/font/dist/local";
import Image from "next/image";
import Link from "next/link";
// const TajawalRegular = localFont({
//     src: "../../../public/fonts/Tajawal_Regular.ttf",
//   });

const page=()=>{
    return (
        <main className="bg-[url('../../public/blueLogoOpacity.png')] [background-position-x:0] [background-position-y:0] bg-repeat-round [background-size:128px] md:[background-size:256px] h-full flex flex-col gap-8 bg-[#0e1a2f] word-normal">
        <section className="container mx-auto flex flex-col gap-6 md:gap-8 items-center justify-center text-right px-8 py-8 min-h-svh">
        <div className="flex flex-col gap-2 w-full items-end">
          <div className="flex gap-4 items-center">
            <p
              className={cn(
                // TajawalRegular.className,
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
             // TajawalRegular.className,
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
               // TajawalRegular.className,
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
             // TajawalRegular.className,
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
                //TajawalRegular.className,
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
             // TajawalRegular.className,
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
               // TajawalRegular.className,
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
             // TajawalRegular.className,
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
        <Link href={"/services"}>
        <div className="flex items-center gap-4">
            <p className="text-white text-lg">
                دعنا ننظم حدثك 
            </p>
            <MoveLeft color="white" size={48}/>
        </div>
        </Link>
      </section>
      <section className="bg-[#f3f2f0] bg-[url('../../public/bglogo.png')] bg-center bg-repeat-round [background-size:128px] md:[background-size:256px]">
            <div className="container mx-auto relative flex flex-col gap-8 items-center justify-center text-right min-h-[300px] px-8 py-8">
              <div className="flex justify-center items-center">
                <p
                  className={cn(
                    //TajawalRegular.className,
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
      </main>
    )
}
export default page