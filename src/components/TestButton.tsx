interface Props {
  text: string;
  onButtonPressed: (toast: string) => void;
}

const TestButton = ({ text, onButtonPressed }: Props) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        onButtonPressed("You pressed me!");
      }}
    >
      {text}
    </button>
  );
};

export default TestButton;
