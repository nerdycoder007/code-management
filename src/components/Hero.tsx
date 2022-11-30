import { EyeIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Coding from "../assets/coding.svg";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="flex flex-1 flex-col-reverse items-center gap-8  px-4 sm:px-8 md:flex-row md:justify-between md:px-12 lg:px-16">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="text-center font-serif text-2xl font-bold lg:text-4xl">
          Too much random commands?{" "}
        </h1>
        <h1 className="font-serif text-lg lg:text-2xl">
          Save and group your commands here
        </h1>
        <h1 className="font-sans text-lg lg:text-xl">Copy on just one click</h1>
        <div className="flex items-center gap-4 ">
          <Button>
            <Squares2X2Icon className="icon" />
            <p>Login</p>
          </Button>
          <a href="#preview">
            <Button intent={"secondary"}>
              <EyeIcon className="icon" />
              <p>View Preview</p>
            </Button>
          </a>
        </div>
      </div>
      <img src={Coding} className="h-[60%] w-[60%] md:h-80 md:w-80" />
    </div>
  );
};

export default Hero;
