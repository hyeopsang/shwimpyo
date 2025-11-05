interface QuestionTextProps {
  question: string;
  explanation?: string;
}
export default function QuestionText({
  question,
  explanation,
}: QuestionTextProps) {
  return (
    <div className="w-full flex flex-col items-start justify-center">
      <h2>{question}</h2>
      {explanation && <p>{explanation}</p>}
    </div>
  );
}
