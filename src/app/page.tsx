import Image from "next/image";
import SwiperComponent from "./components/swiper";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-0 lg:pt-10">
      {/* <div className="relative flex flex-row place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
      <SwiperComponent/>
      {/* <div className="text-5xl grid grid-flow-row gap-4">
        <div>
          <div>
            8090婚礼策划
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              欢迎添加我们的微信italy8090
            </p>
          </div>
          <div>
            <a
              href="/weddingSet"
              className="rounded-lg border border-transparent p-6 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-blue-100/50"
              target="_self"
              rel="noopener noreferrer"
            >
              开启您的婚礼企划
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/homepic.png"
            alt="Vercel Logo"
            // className="dark:invert"
            width={600}
            height={200}
            priority
          />
        </div>
        
      </div> */}
    </main>
  );
}
