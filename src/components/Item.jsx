import React from "react";

export const Item = ({
  name,
  alt,
  gradiantFrom,
  gradiantTo,
  shadow,
  index,
  handleCLick
}) => {
  return (
    <div
      className={`
        active:scale-[.9] w-[130px] 
        h-[130px] flex-col justify-center 
        items-center rounded-full 
        flex mx-auto bg-gradient-to-t
        ${gradiantFrom} 
        ${gradiantTo} 
        shadow-[0_5px_0]
        ${shadow}
      `}
      style={index === 2 ? { gridColumn: "span 2" } : {}}
      onClick={handleCLick}
    >
      <div className="w-[100px] h-[100px] item flex flex-col justify-center items-center rounded-full p-8 bg-white">
        <img
          className="m-0 bg-cover"
          src={`assets/icon-${name}.svg`}
          alt={alt}
        />
      </div>
    </div>
  );
};
