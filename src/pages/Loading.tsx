import { Spinner } from 'flowbite-react';

function Loading() {
  return (
    <div className="grid h-screen place-items-center -mt-16">
      <div className="text-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    </div>
  );
}
export default Loading;
