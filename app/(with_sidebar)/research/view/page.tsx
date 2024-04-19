"use client"

import { useEffect, useRef } from "react";
import WebViewer from '@pdftron/pdfjs-express-viewer';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function () {
  const viewer = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!viewer || !viewer.current)
      return;
    if (viewer.current.getAttribute("filled") === "true")
      return;
    if (viewer && viewer.current)
      viewer.current.setAttribute("filled", "true");

    WebViewer(
      {
        path: '/pdfviewer/lib',
        initialDoc: '/pdf/sample.pdf',
        licenseKey: 'QadFJ7h8a0B1lUi75ttI'
      },
      viewer.current,
    ).then((instance: any) => {
      // set theme
      const theme = instance.UI.Theme;
      instance.UI.setTheme(theme.DARK);

      // now you can access APIs through the WebViewer instance
      const { Core } = instance;

      // adding an event listener for when a document is loaded
      Core.documentViewer.addEventListener('documentLoaded', () => {
        console.log('document loaded');
      });

      // adding an event listener for when the page number has changed
      // Core.documentViewer.addEventListener('pageNumberUpdated', (pageNumber) => {
      //   console.log(`Page number is: ${pageNumber}`);
      // });
    });
  }, []);

  return (
    <div className="flex flex-col p-6 gap-5 h-full max-sm:fixed bottom-0 max-sm:z-50 bg-gray-900 max-sm:h-[calc(100%-20px)] max-sm:rounded-t-xl">
      <div className="w-10 h-1 bg-slate-500 rounded-[33px] mt-2 self-center sm:hidden" />
      <div className="flex gap-2 items-center justify-between">
        <div className="text-slate-200 text-lg font-bold">
          UNDANG-UNDANG DASAR NEGARA REPUBLIK INDONESIA TAHUN 1945
        </div>
        <Image src="/images/icon-close.svg" width={24} height={24} alt="close"
          onClick={() => router.back()}
        />
      </div>
      <div ref={viewer} className="flex-1 rounded-xl"></div>
    </div>
  )
}