import "./Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  );
};
