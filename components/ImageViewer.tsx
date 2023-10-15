'use client'

import { useEffect, useState } from "react";
import ImageModal from '../components/ImageModal'
import { createPortal } from "react-dom";
import Image from "next/image";

type ParamsType = {
  src: string
  height: string | number
}

export default function ImageViewer({ src, height = "auto" }: ParamsType) {
  const url = '/profile/' + src;
  let [imageModal, setImageModal] = useState(false);
  let [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("portal"));
  }, [imageModal]);

  const imageModalHandler = () => {
    setImageModal(!imageModal);
  };
  const toggle = () => setImageModal(prev => !prev);
  return (
    <div>
      <style jsx>{`
        .image {
          position: relative;
          width: 100%;
          height: 400px;
        }
      `}
      </style>
        <Image id="image" width={100} height={100} sizes="100vw" style={{width: '100%', height: (!isNaN(Number(height)) ? height + "px" : "auto"), objectFit: "contain"}} src={url} alt={url} onClick={toggle} />
      {imageModal && portalElement
        ? createPortal(<ImageModal imageModalHandler={imageModalHandler} url={url} />, portalElement)
        : null}
    </div>
  )
}