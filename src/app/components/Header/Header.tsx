"use client";

import { FC } from "react";
import Image from "next/image";

export const Header: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between p-5">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none lg:pr-6">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                // className="dark:invert"
                width={100}
                height={30}
                priority
              />
            </a>
          </div>
          <div className="mb-2 grid lg:grid-flow-row grid-flow-col grid-cols-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              href="/weddingSet"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-blue-100/50"
              target="_self"
              rel="noopener noreferrer"
            >
              {/* hover:border-gray-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-blue-100/30 */}
              <h2 className={`mb-3 text-2xl font-semibold`}>
                婚礼布置
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                属于你的独一无二的私人定制
              </p>
            </a>

            <a
              href="/weddingSet"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-blue-100/50"
              target="_self"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                婚礼摄影{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                您最重要的日子的的独家影像
              </p>
            </a>
            <a
              href="/weddingSet"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-blue-100/50"
              target="_self"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                婚纱摄影{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                将您的爱情记录成数字浪漫
              </p>
            </a>

            <a
              href="/weddingSet"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-blue-100/50"
              target="_self"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                联系我们{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                添加微信italy8090
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
