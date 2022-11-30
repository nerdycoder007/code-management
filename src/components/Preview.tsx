import React from "react";
import { previewData } from "./data";
import Command from "./ui/Commands";
const Preview = () => {
  return (
    <div className="min-h-screen  p-8" id="preview">
      <div className="flex flex-wrap items-start justify-center gap-4 md:justify-start">
        {previewData.map((item) => {
          return (
            <div key={item.id} className="mb-8">
              <h1 className="mb-4 font-serif text-2xl">{item.groupName}</h1>
              <ul className="flex flex-col gap-2">
                {item.commands.map(({ id, text }) => {
                  return <Command key={id} text={text} />;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
