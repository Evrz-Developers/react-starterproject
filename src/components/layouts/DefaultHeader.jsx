import ContentWrapper from '@/components/layouts/ContentWrapper';
import Link from 'next/link';

const DefaultHeader = () => {
  
  return (
    <div className={'w-full py-4 px-10  border-b-[1.5px]'}>
      <ContentWrapper className="">
        <div className="flex justify-between items-center">
          <Link href={'/'}>
            <img
              src="/logo/logo.png"
              alt="logo"
              className="h-10"
            ></img>
          </Link>
          
          {user && (
            <div
              className="flex items-center h-10 relative"
              
            >
              <img
                src="/images/person.jpg"
                className="rounded-full w-10 h-10 object-cover"
                alt=""
              />
              <div className="ml-4">
                <div className="text-color-secondary-s05 text-info">
                  Dave Mason
                </div>
                <div className="text-color-secondary-s60 text-error">
                  Company Manager
                </div>
              </div>
              <img src="/icons/chevron-down.svg" className="ml-4 " alt="" />
            </div>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default DefaultHeader;
