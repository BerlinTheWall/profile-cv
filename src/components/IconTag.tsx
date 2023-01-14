import * as React from 'react';

interface Props {
  title: string;
  href?: string;
  text?: string;
  icon?: string;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const IconTag: React.FC<Props> = ({
  title,
  href,
  text,
  icon,
  className = '',
  disabled = false,
  onClick,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      onClick={onClick}
      className={`flex flex-col items-center text-left gap-1 cursor-pointer ${className} ${
        disabled ? 'cursor-default pointer-events-none' : 'hover:font-semibold'
      }`}
      rel="noreferrer"
    >
      <img src={icon} alt={text} className="w-6" />
      <div className="text-center text-xl">{title}</div>
    </a>
  );
};
export default IconTag;
