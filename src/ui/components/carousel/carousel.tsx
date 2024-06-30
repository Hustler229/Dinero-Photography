import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

export default function ImageCarousel({ images }: { images: string[]}) {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        function handleOutsideClick(event: any) {
            if (selectedImg && event.target.id === 'modal-backdrop') {
                setSelectedImg(null);
            }
        }
        window.addEventListener('click', handleOutsideClick);
        return () => window.removeEventListener('click', handleOutsideClick);
    }, [selectedImg, selectedIndex]);

    return (
        <div>
            {/* Carousel Container */}
            <div className='flex space-x-2 overflow-x-scroll carousel-hide w-[300px]'>
                {images && images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        width={300}
                        height={100}
                        alt={`Image ${index}`}
                        className='w-auto rounded-[10px] cursor-pointer'
                        onClick={() => {
                            if (typeof img === 'string') {
                                setSelectedImg(img);
                                setSelectedIndex(index);
                            }
                        }}
                    />
                ))}

            </div>

            {/* Modal for selected image */}
            <Transition appear show={selectedImg !== null} as={Fragment}>
                <Dialog as='div' className='relative z-10 ' onClose={() => setSelectedImg(null)}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-50' id='modal-backdrop' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto backdrop-blur-lg'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className=' max-w-[600px]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                    {selectedImg && (
                                        <>
                                            <div className='text-primary flex items-end justify-end'>
                                                <IoCloseCircle className='w-10 h-10' onClick={() => setSelectedImg(null)} />
                                            </div>
                                            <Image
                                                src={selectedImg}
                                                alt='Selected Image'
                                                width={400}
                                                height={700}
                                                layout='responsive'
                                            />
                                        </>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}
