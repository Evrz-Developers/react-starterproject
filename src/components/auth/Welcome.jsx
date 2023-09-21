import ContentWrapper from '../layouts/ContentWrapper';

const Welcome = () => {

  return (
    <div className="flex w-full h-full">
      <ContentWrapper className="h-full">
        {/* Header */}
        <div className='h-full bg-color-title-text pl-5'>
          <h1 className="text-heading-3 leading-10 text-color-secondary-s80">
            Starter Project: React
          </h1>
          <p className="text-color-secondary-s70 text-sm mb-4">
            Welcome to our React Project
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Welcome;
