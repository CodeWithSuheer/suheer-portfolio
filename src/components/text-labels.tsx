interface TextLabelsProps {
  text: string;
}

export default function TextLabels({ text }: TextLabelsProps) {
  return (
    <>
      <span className="px-1.5 py-1 bg-[#F3F4F6] font-semibold cursor-pointer">
        {text}
      </span>
    </>
  );
}
