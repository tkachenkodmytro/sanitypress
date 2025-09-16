"use client"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { stegaClean } from 'next-sanity';
import { PageBuilderType } from '@/types';
import Container from '@/components/global/container';
import PlayVideo from '@/components/shared/play-video';

export type MediaBlockProps = PageBuilderType<"mediaBlock">;

export default function MediaBlock(props: MediaBlockProps) {

  const { 
    backgroundType,
    backgroundWidth,
    image, 
    overlayType,
    dialogType,
    videoUrl,
    anchorId 
  } = props;

  return (
    <section 
      {...(anchorId ? { id: anchorId } : {})} 
      className={cn('border-t border-dashed pattern-bg--2', {
        'px-4 md:px-10': stegaClean(backgroundWidth) === 'contained'
      })}
    >
      <Container 
        className={cn('relative h-[18rem] md:h-[48rem] overflow-hidden', {
          'border-x border-dashed': stegaClean(backgroundWidth) === 'contained'
        })}
      >
        {backgroundType === 'image' && image && (
          <div className='absolute inset-0'>
            <Image
              src={image?.asset?.url ?? ''}
              width={2400}
              height={1200}
              alt={image?.asset?.altText ?? ''}
              className='w-full h-full object-cover'
            />
            {overlayType === 'dark' && (
              <DarkOverlay />
            )}
          </div>
        )}
        {dialogType === 'video' && videoUrl && (
          <PlayVideo videoUrl={videoUrl} />
        )}
      </Container>
    </section>
  )
}

function DarkOverlay() {
  return (
    <>
      <div className='absolute inset-0 bg-black/40' />
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-[50%] w-full' />
    </>
  )
}