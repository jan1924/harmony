import Card from "@/components/Card";
import { cn } from "@/lib/utils"
import { ArrowBigLeft, MoveLeft } from "lucide-react";
import localFont from "next/dist/compiled/@next/font/dist/local";
import Image from "next/image";
import Link from "next/link";
// const TajawalRegular = localFont({
//     src: "../../../public/fonts/Tajawal_Regular.ttf",
//   });

const page=()=>{
    const SERVICES = [
        {
          id: 1,
          name: "اختبار المساحات",
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
          name: "تصميم وتنسيق الديكور والبوثات والمسارح ومرافق احدث",
          icon: "/design.png",
          image: "/designImage.jpg",
        },
        {
          id: 5,
          name: "تجهيز المساحة بالأنظمة الصوتية",
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
        <main className=" h-full flex flex-col gap-8 bg-[#0e1a2f] word-normal">
        <section className="flex flex-col items-center bg-bottom [background-size:128px] md:[background-size:256px] [background-repeat:repeat-x]">
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
                    //TajawalRegular.className,
                    "text-2xl md:text-4xl text-[#a08e6c] font-semibold"
                  )}
                >
                  خدماتنا الأفضل
                </p>
                <div className="flex flex-col gap-8 w-full">
                  <div
                    className={cn(
                      //TajawalRegular.className,
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
            <Link href={"/contact"}>
            <div className="flex items-center gap-4">
            <p className="text-white text-lg">
               اطلب خدمتك الان 
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