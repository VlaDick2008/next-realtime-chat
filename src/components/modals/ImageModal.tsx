'use client';

import React from 'react';

import Modal from './Modal';
import Image from 'next/image';

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-96 h-96">
        <Image src={src} alt="image" className="object-contain" fill />
      </div>
    </Modal>
  );
};

export default ImageModal;
