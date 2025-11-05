// QuestionRenderer.tsx
import LongTextTemplate from '@/components/ui/question/long-text-template';
import ShortTextTemplate from '@/components/ui/question/short-text-template';
import FeelingTemplate from '@/components/ui/question/feeling-template';

export default function QuestionRenderer({type}: {type: string}) {
  switch (type) {
    case 'long':
      return <LongTextTemplate />;
    case 'short':
      return <ShortTextTemplate />;
    case 'feeling':
      return <FeelingTemplate />;
    default:
      return <p>지원되지 않는 질문 타입입니다.</p>;
  }
}
