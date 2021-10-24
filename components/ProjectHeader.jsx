import CloudinaryImg from './CloudinaryImg';
import CustomLink from './CustomLink';

import { trackEvent } from '@/utils/analytics';

export default function ProjectHeader({ data }) {
  return (
    <header className='space-y-2'>
      <h1>{data.name}</h1>
      <p className='text-dark dark:text-light'>
        Category: {data.category || 'Built Solo'}
      </p>
      <p className=''>
        {data.github && (
          <CustomLink
            onClick={() => trackEvent(`Project Github: ${data.name}`, 'link')}
            href={data.github}
          >
            Repository
          </CustomLink>
        )}
        {data.github && (data.youtube || data.link) && ' • '}
        {data.youtube && (
          <CustomLink
            href={data.youtube}
            onClick={() => trackEvent(`Project Video: ${data.name}`, 'link')}
          >
            Video Demo
          </CustomLink>
        )}
        {data.youtube && data.link && ' • '}
        {data.link && (
          <CustomLink
            href={data.link}
            onClick={() => trackEvent(`Project Live: ${data.name}`, 'link')}
          >
            Visit Live
          </CustomLink>
        )}
      </p>
      <figure className='overflow-hidden rounded-sm shadow-md dark:shadow-none'>
        <CloudinaryImg
          publicId={data.cloudinaryPublicId}
          width='1440'
          height='792'
          alt={data.name}
        />
      </figure>
    </header>
  );
}
