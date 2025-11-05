import {useState} from 'react';
import SaveLoadingIcon from '@/assets/loading.svg?react';
import SaveAccessIcon from '@/assets/access.svg?react';
import SaveErrorIcon from '@/assets/error.svg?react';
import ArrowIcon from '@/assets/arrow.svg?react';
import QuestionText from './question-text';
import QuestionRenderer from './question-render';
import {cn} from '@/utils/style';
type Question = {
  id: number;
  type: string;
  question: string;
  explanation?: string;
};
type QuestionCategories = {
  daily: Question[];
  weekly: Question[];
  monthly: Question[];
  yearly: Question[];
};
const saveState = [
  {icon: SaveAccessIcon, state: '저장 완료', color: '#00C8FF'},
  {icon: SaveLoadingIcon, state: '저장 중..', color: '#FFA500'},
  {icon: SaveErrorIcon, state: '저장 실패', color: '#FF4B4B'},
];

const questionSets: QuestionCategories = {
  daily: [
    {
      id: 1,
      type: 'feeling',
      question: '오늘의 마음은 어떤가요?',
      explanation: '아래의 30가지 마음 이모지 중 선택해 주세요.',
    },
    {
      id: 2,
      type: 'long',
      question: '오늘은 어떤 일이 있었나요?',
      explanation:
        '그 마음이 들게 했던 일이 있으셨나요? 어떤 상황이 있었는지 구체적으로 쓰면 좋아요',
    },
    {
      id: 3,
      type: 'long',
      question:
        '그 상황에서 떠오른 나의 마음은, 내안에 있는 어떤 바람과 욕구 때문이었을까요?',
      explanation: '오늘, 그 일을 겪은 나를 멀리서 바라본다고 생각해봅시다.',
    },
    {
      id: 4,
      type: 'short',
      question: '오늘 나에게, 공감 한마디 해볼까요?',
      explanation: '나를 조금 떨어져서 바라보니 어떤가요?',
    },
  ],
  weekly: [
    {
      id: 1,
      type: 'long',
      question:
        '한 주간 마음을 쓰면서 반가운 나의 모습이나 반갑지 않은 나의 모습이 있었나요?',
    },
    {
      id: 2,
      type: 'long',
      question:
        '다음 주는 어떤 모습이고 싶나요? 그러기 위해서 나에게 필요한 것은 무엇일까요?',
    },
  ],
  monthly: [
    {
      id: 1,
      type: 'short',
      question: '한달을 기록하며, 새로 발견한 것들이 있을까요?',
    },
    {
      id: 2,
      type: 'long',
      question: '한달을 기록하며, 나에게 중요한 욕구는 무엇이었을까요?',
    },
    {
      id: 3,
      type: 'long',
      question:
        '그 욕구들이 잘 채워진 나의 삶은 어떤 모습인가요? 자유롭게 표현해보세요.',
    },
  ],
  yearly: [
    {
      id: 1,
      type: 'feeling',
      question: '올해 나를 가장 자주 찾아온 마음은 어떤 마음이었나요?',
    },
    {
      id: 2,
      type: 'short',
      question: '새해에는 어떤 마음으로 살아가고 싶나요?',
    },
    {
      id: 3,
      type: 'short',
      question: '올해의 나를 한 단어로 표현한다면?',
    },
    {
      id: 4,
      type: 'short',
      question: '내년의 나에게 건네는 한 문장은?',
    },
  ],
};

export default function QuestionWrapper({
  mode,
}: {
  mode: 'daily' | 'weekly' | 'monthly' | 'yearly';
}) {
  const [step, setStep] = useState(0);
  const questions = questionSets[mode];
  const total = questions.length;
  const [saveStatus, setSaveStatus] = useState<'success' | 'loading' | 'error'>(
    'success'
  );

  const handleNext = () => setStep((prev) => Math.min(prev + 1, total - 1));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const current = questions[step];
  const currentSave =
    saveState[saveStatus === 'success' ? 0 : saveStatus === 'loading' ? 1 : 2];
  const SaveIcon = currentSave.icon;

  return (
    <div className="w-full h-dvh relative flex flex-col">
      <header className="w-full h-20 flex items-center justify-between px-6 border-b bg-white sticky top-0 z-10">
        <span className="flex items-center gap-4">
          <button onClick={handlePrev} disabled={step === 0}>
            <ArrowIcon
              className={cn(
                'w-5 h-5',
                step === 0 && 'opacity-30 cursor-default'
              )}
            />
          </button>
          <button onClick={handleNext} disabled={step === total - 1}>
            <ArrowIcon
              className={cn(
                'w-5 h-5 rotate-180',
                step === total - 1 && 'opacity-30 cursor-default'
              )}
            />
          </button>
          <span className="text-sm text-gray-500">
            {step + 1} / {total}
          </span>
        </span>

        <span className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <SaveIcon />
            <p
              className="text-[14px] font-normal"
              style={{color: currentSave.color}}
            >
              {currentSave.state}
            </p>
          </span>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm">
            임시 저장
          </button>
          <button className="px-4 py-2 text-white bg-[#4C4B4A] rounded-md text-sm">
            완료 하기
          </button>
        </span>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <QuestionText
          question={current.question}
          explanation={current.explanation}
        />
        <QuestionRenderer type={current.type} />
      </main>
    </div>
  );
}
