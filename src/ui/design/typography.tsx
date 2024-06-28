import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?:
  | "title"
  | "subtitle"
  | "lead"
  | "lead-sm"
  | "lead-md"
  | "lead-lg"
  | "body"
  | "body-sm"
  | "body-md"
  | "body-lg";
  color?: "primary" | "secondary" | "white" | "gray" | "blue" | "dark";
  tag?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5";
}

const Text = ({ children, className, variant = 'lead', color = 'primary', tag: Tag = 'p' }: Props) => {
  let textVariant = "",
    colorVariant = "";

  switch (variant) {
    case "title":
      textVariant = "text-4xl";
      break;
    case "subtitle":
      textVariant = "text-3xl";
      break;
    case "lead":
      textVariant = "text-2xl";
      break;
    case "lead-sm":
      textVariant = "text-xl";
      break;
    case "lead-md":
      textVariant = "text-4md";
      break;
    case "lead-lg":
      textVariant = "text-3md";
      break;
    case "body":
      textVariant = "text-2md";
      break;
    case "body-sm":
      textVariant = "text-md";
      break;
    case "body-md":
      textVariant = "text-sm";
      break;
    case "body-lg":
      textVariant = "text-base";
      break;
  }
  switch (color) {
    case "primary":
      colorVariant = 'text-primary'
      break;
    case "secondary":
      colorVariant = 'text-secondary'
      break;
    case "white":
      colorVariant = 'text-white'
      break;
    case "gray":
      colorVariant = 'text-gray'
      break;
    case "blue":
      colorVariant = 'text-blue'
      break;
    case "dark":
      colorVariant = 'text-dark'
      break;
  }
  return (
    <Tag className={clsx(textVariant, colorVariant, 'montserrat', className)}>
      {children}
    </Tag>
  )
};

export default Text
