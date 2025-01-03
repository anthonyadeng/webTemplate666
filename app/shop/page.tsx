import { Shop } from '../components/Shop';
import Image from 'next/image';
import headerlogo from '../../public/1.png';
import yeslogo from '../../public/yes.png';
import goodlogo from '../../public/good.png';
import bg1 from '../../public/bg1.png';
export default function ShopHome() {
  return (
    <div>
      <header className='flex flex-row w-full  h-24  text-zinc-900 bg-slate-50 bg-opacity-50 fixed justify-items-center text-center items-center z-50 backdrop-blur-sm font-mono text-xl'>
        <Image
          src={yeslogo}
          placeholder='blur'
          alt='logo'
          style={{
            marginTop: '25rem',
            position: 'absolute',
            pointerEvents: 'none',
          }}
        />
        <div className='flex-initial w-20'>
          <Image
            src={headerlogo}
            placeholder='blur'
            alt='logo'
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'left',
              pointerEvents: 'none',
            }}
          />
        </div>
        <a href='/' className='flex-initial w-44'>
          Home{' '}
        </a>
        |<div className='flex-initial w-44'>Shop ✓</div>|
        <div className='flex-initial w-44'>About</div>|
      </header>
      <div className='w-24 h-12 bg-rose-300 fixed bottom-0 right-0 z-50'></div>
      <div className='w-full h-screen static justify-items-center items-center place-content-center place-items-center absolute'>
        <Image
          src={bg1}
          placeholder='blur'
          quality={75}
          fill
          sizes='100vw'
          alt='background'
          style={{
            objectFit: 'cover',
            position: 'absolute',
            margin: '0px',
            left: '0px',
            opacity: 0.7,
            top: '0px',
            padding: '0px',
            zIndex: 0,
            pointerEvents: 'none',
          }}
          priority
        />

        <Image
          src={goodlogo}
          placeholder='blur'
          alt='logo'
          style={{
            position: 'absolute',
            right: '0px',
            bottom: '0px',
            zIndex: 9,
            pointerEvents: 'none',
          }}
        />
      </div>
      <Shop />
    </div>
  );
}
