import React from "react";

type ButtonProps = {
  className?: string;
  buttons: {
    icon: boolean;
    url?: string;
    title: string;
    ref?: string;
    className?: string;
  }[];
};

function Button({ className, buttons }: ButtonProps) {
  return (
    <>
      {buttons.map(
        (
          item: {
            icon: boolean;
            url?: string;
            title: string;
            ref?: string;
            className?: string;
          },
          i: React.Key
        ) => (
          <a
            href={item.ref}
            target="_blank"
            key={i}
            className={`btn ${className} ${item.className}`}
          >
            {item.className === "button-shadow-gradient" ? (
              <div className="gradient-overlay"></div>
            ) : null}
            {item.icon && (
              <span style={{ backgroundImage: `url("${item.url}")` }}></span>
            )}
            {/* <a href={item.ref} target="_blank"> */}
            <span>{item.title}</span>
            {/* </a> */}
          </a>
        )
      )}
    </>
  );
}
export default Button;
