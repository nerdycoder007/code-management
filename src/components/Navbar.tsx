import {
  PlusIcon,
  Squares2X2Icon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import LoginBtn from "./ui/LoginBtn";

const Navbar = () => {
  const loggedIn = false;
  return (
    <>
      <div className="flex items-center justify-end gap-5 p-4">
        {!loggedIn ? (
          <LoginBtn />
        ) : (
          <>
            <Icon>
              <PlusIcon className="icon" />
            </Icon>
            <Icon>
              <TrashIcon className="icon text-red-300" />
            </Icon>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
