type Props = {
  value: number;
};

function Counter({ value }: Props) {
  return (
    <div key={value} style={{ animation: "fadeIn 400ms" }}>
      {value}
    </div>
  );
}

export default Counter;
