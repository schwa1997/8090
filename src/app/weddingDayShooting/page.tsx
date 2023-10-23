"use client";
import Image from "next/image";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState("简约风格");
  const [zoomedPhoto, setZoomedPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const photoData = [
    // 你的 JSON 数据应该在这里
    {
      style: "简约风格",
      src: "/wedding1.png",
    },
    {
      style: "新中式风格",
      src: "/wedding2.jpg",
    },
    {
      style: "田园风格",
      src: "/wedding3.jpg",
    },
    {
      style: "田园风格",
      src: "/wedding4.jpg",
    },
    {
      style: "新中式风格",
      src: "/wedding3.jpg",
    },
    {
      style: "简约风格",
      src: "/wedding3.jpg",
    }, // 添加更多照片数据
  ];

  const uniqueStyles = [...new Set(photoData.map((data) => data.style))];

  const handleStyleChange = (style: string) => {
    setSelectedStyle(style);
    setZoomedPhoto(null);
  };

  const handleZoomPhoto = (photoSrc: any) => {
    setZoomedPhoto(photoSrc);
    setOpenModal(true); // 打开模态框
  };

  const handleCloseModal = () => {
    setOpenModal(false); // 关闭模态框
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="m-4">
        <div className="text-lg font-bold mb-2">选择风格：</div>
        <div className="flex space-x-4 mb-4">
          {uniqueStyles.map((style, index) => (
            <button
              key={index}
              onClick={() => handleStyleChange(style)}
              className={`px-4 py-2 rounded-lg ${
                selectedStyle === style
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photoData
            .filter((data) => data.style === selectedStyle)
            .map((data, index) => (
              <div key={index}>
                <Image
                  src={data.src}
                  alt="Vercel Logo"
                  className="rounded-lg"
                  width={600}
                  height={200}
                  priority
                />
                <IconButton onClick={() => handleZoomPhoto(data.src)}>
                  <ZoomInIcon />
                </IconButton>
              </div>
            ))}
        </div>
      </div>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          {zoomedPhoto && (
            <Image
              src={zoomedPhoto}
              alt="Vercel Logo"
              className="rounded-lg"
              width={1200} // 调整为适当的大小
              height={1200} // 调整为适当的大小
              priority
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
