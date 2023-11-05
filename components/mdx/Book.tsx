'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import ImageModal from './ImageModal';

export default function Book({ designer, project, title, page }: { designer: string, project: string, title: string, page: string }) {
  const pages = Array(Number(page)).fill(0);

  const [current, setCurrent] = useState(0);

  let [imageModal, setImageModal] = useState(false);
  let [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("portal"));
  }, [imageModal]);

  const imageModalHandler = () => {
    setImageModal(!imageModal);
  };
  const toggle = () => setImageModal(prev => !prev);
  const handlerPrev = () => {
    if (current > 0) setCurrent(prev => prev - 1);
  }
  const handlerNext = () => {
    if (current < Number(page) - 1) setCurrent(prev => prev + 1);
  }
  return (
    <div>
      {
        pages.map((page, idx) =>
          <div key={idx} style={{
            display: current === idx ? 'block' : 'none'
          }}>
            <Image src={`/profile/${designer}/${project}/${title}/${idx + 1}.png`} width={100} height={50} sizes="100vw" style={{ width: '100%', height: "auto", objectFit: "contain" }} alt={idx + 1 + 'th page'} onClick={toggle} />

          </div>
        )
      }
      {
        imageModal && portalElement
          ? createPortal(<ImageModal imageModalHandler={imageModalHandler} url={`/profile/${designer}/${project}/${title}/${current + 1}.png`} />, portalElement)
          : null
      }
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}>
        <button onClick={handlerPrev} style={{
          padding: '12px',
          width: '48px',
          height: '48px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}>
          <img src='/icons/arrow_left.svg' alt='prev' style={{
            width: '24px',
            height: '24px',
            objectFit: 'fill'
          }} />
        </button>
        <div>{`${current + 1}/${page}P`}</div>
        <button onClick={handlerNext} style={{
          padding: '12px',
          width: '48px',
          height: '48px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}>
          <img src='/icons/arrow_right.svg' alt='prev' style={{
            width: '24px',
            height: '24px',
            objectFit: 'fill'
          }} />
        </button>
      </div>
    </div>
  )
}