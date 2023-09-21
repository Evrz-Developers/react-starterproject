import ContentWrapper from '../layouts/ContentWrapper';

const Welcome = () => {

  return (
    <div className="px-10 relative h-full">
      <ContentWrapper className="h-full">
        <div className="flex flex-col justify-center lg:flex-row h-full">
          <div className="mt-40 lg:mt-0 w-full lg:w-1/2 flex flex-col justify-center">
            <div>
              <h1 className="mb-4 text-heading-5 leading-10 text-color-body-text">
                Starter Project
              </h1>
              <p className="text-color-body-text text-body-md leading-[30px] mb-4 pr-32 xl:pr-60">
                Let's start..
              </p>
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-56 h-[55px] bg-color-primary-p50 text-color-button-text rounded-[5px] font-semibold uppercase"
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Welcome;
