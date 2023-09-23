import ContentWrapper from '../layouts/ContentWrapper';
import DefaultHeader from '../layouts/DefaultHeader';
import DefaultLayout from '../layouts/DefaultLayout';

const Welcome = () => {

  return (
    <DefaultLayout showFooter={true}>
      <div className='w-full h-[calc(100vh-100px)]  flex justify-center items-center overflow-y-auto overflow-x-hidden '>
        <span className='text-heading-1'>Home Page</span>
      </div>
    </DefaultLayout>
  );
};

export default Welcome;
