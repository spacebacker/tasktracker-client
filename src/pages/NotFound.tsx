import { Card, Button } from 'flowbite-react';

function NotFound() {
  return (
    <div className="grid h-screen place-items-center -mt-16">
      <div className="max-w-md">
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Page not found
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We can`t seem to find the page you are looking for :(
          </p>
          <Button gradientDuoTone="cyanToBlue" href="#">
            To the main page
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default NotFound;
