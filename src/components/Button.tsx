interface Props {
  color: string;
  text: string;
}

const Button = ({ color, text }: Props) => {
  return (
    <button className="btn" style={{ backgroundColor: `${color}` }}>
      {text}
    </button>
  );
};

export default Button;
