import { Fragment } from 'react';
import { useSelector } from 'react-redux';

const LoadingComponent = () => {
  const stateLoading = useSelector((state: any) => state?.data?.loading);
  const LoadingLikeText = () => {
    return (
      <Fragment>
        <div className="p-4 w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-4 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-4 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        ;
      </Fragment>
    );
  };

  const LoadingLikeImageText = () => {
    return (
      <Fragment>
        <div className="lg:h-48 animate-pulse bg-slate-700 md:h-36 w-2/4 object-cover object-center mr-2 ml-4 rounded"></div>
        <div className="p-6">
          <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
          <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
          <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
          <div className="flex items-center flex-wrap ">
            <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
            <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
          </div>
        </div>
      </Fragment>
    );
  };

  const LoadingLikeSpinner = () => {
    return (
      <Fragment>
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </Fragment>
    );
  };

  const LoadingLikeDragDrop = () => {
    return (
      <Fragment>
        <div className="flex items-center justify-center rounded h-36 dark:bg-gray-800">
          <svg
            className="w-12 h-12 text-gray-400  animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      {stateLoading ? (
        <div className='absolute z-100 w-full top-0 left-0 bg-gray-50 opacity-100'>
        <div className="p-4">
          <div className="p-4 border-dashed rounded-lg">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[1, 2, 3]?.map((_item: any) => {
                return <LoadingLikeDragDrop />;
              })}
            </div>

            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <LoadingLikeText />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {[1, 2]?.map((_item: any) => {
                return (
                  <div className="flex items-center justify-center rounded bg-gray-50 h-56 dark:bg-gray-800">
                    <LoadingLikeImageText />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <LoadingLikeText />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4]?.map((_item: any) => {
                return (
                  <div className="flex items-center justify-center h-36 rounded bg-gray-50 dark:bg-gray-800">
                    <LoadingLikeSpinner />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default LoadingComponent;
