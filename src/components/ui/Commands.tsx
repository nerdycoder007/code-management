import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CommandsProps {
  text: string;
}

const Command = ({ text }: CommandsProps) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);
  console.log(copied);
  return (
    <li className="group relative flex max-w-sm cursor-pointer items-center rounded-md  bg-[#2d2b57] p-4 font-mono text-sm md:text-base">
      {text}

      {!copied ? (
        <CopyToClipboard
          text={text}
          onCopy={() => {
            setCopied(true);
            console.log("Copied");
          }}
        >
          <div className="absolute right-0 mx-2 ml-auto hidden group-hover:block">
            <Icon className=" bg-purple-500/50 hover:bg-purple-700 active:bg-purple-700/30">
              <ClipboardDocumentIcon className="icon" />
            </Icon>
          </div>
        </CopyToClipboard>
      ) : (
        <Icon className="absolute  right-0 mx-2 ml-auto bg-purple-500/50 hover:bg-purple-700 active:bg-purple-700/30">
          <ClipboardDocumentCheckIcon className="icon text-teal-300" />
        </Icon>
      )}
    </li>
  );
};

export default Command;
