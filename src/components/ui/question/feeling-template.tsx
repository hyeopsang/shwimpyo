import {useState} from 'react';
import {cn} from '@/utils/style';
import ThanksIcon from '@/assets/emoji/thanks.svg?react';
import HappyIcon from '@/assets/emoji/happy.svg?react';
import TouchingIcon from '@/assets/emoji/touching.svg?react';
import HeartIcon from '@/assets/emoji/heart.svg?react';
import ExitedIcon from '@/assets/emoji/exited.svg?react';
import FlutterIcon from '@/assets/emoji/flutter.svg?react';
import ProudIcon from '@/assets/emoji/proud.svg?react';
import ConfidentIcon from '@/assets/emoji/confident.svg?react';
import FeellightIcon from '@/assets/emoji/feellight.svg?react';
import CalmIcon from '@/assets/emoji/calm.svg?react';
import AngryIcon from '@/assets/emoji/angry.svg?react';
import FrustratedIcon from '@/assets/emoji/frustrated.svg?react';
import UnfairIcon from '@/assets/emoji/unfair.svg?react';
import DisappointedIcon from '@/assets/emoji/disappointed.svg?react';
import SadIcon from '@/assets/emoji/sad.svg?react';
import UpsetIcon from '@/assets/emoji/upset.svg?react';
import SorryIcon from '@/assets/emoji/sorry.svg?react';
import AnxiousIcon from '@/assets/emoji/anxious.svg?react';
import EmbarrassedIcon from '@/assets/emoji/embarrassed.svg?react';
import AfraidIcon from '@/assets/emoji/afraid.svg?react';
import ConfusedIcon from '@/assets/emoji/confused.svg?react';
import ShameIcon from '@/assets/emoji/shame.svg?react';
import AlossIcon from '@/assets/emoji/aloss.svg?react';
import WorriedIcon from '@/assets/emoji/worried.svg?react';
import LonelyIcon from '@/assets/emoji/lonely.svg?react';
import EmptyIcon from '@/assets/emoji/empty.svg?react';
import InconvenientIcon from '@/assets/emoji/inconvenient.svg?react';
import EmbarrassingIcon from '@/assets/emoji/embarrassing.svg?react';
import ToughIcon from '@/assets/emoji/tough.svg?react';
import BotheringIcon from '@/assets/emoji/bothering.svg?react';
import SearchIcon from '@/assets/search.svg?react';
import XIcon from '@/assets/x.svg?react';
import CheckIcon from '@/assets/check.svg?react';

const feelingList = [
  {text: '고맙다', icon: ThanksIcon, color: '#DC7F49'},
  {text: '행복하다', icon: HappyIcon, color: '#D66777'},
  {text: '뭉클하다', icon: TouchingIcon, color: '#D39AB2'},
  {text: '따뜻하다', icon: HeartIcon, color: '#EDC16F'},
  {text: '신나다', icon: ExitedIcon, color: '#E39F73'},
  {text: '설레다', icon: FlutterIcon, color: '#DADE4E'},
  {text: '뿌듯하다', icon: ProudIcon, color: '#988FBF'},
  {text: '자신있다', icon: ConfidentIcon, color: '#5C98CB'},
  {text: '홀가분하다', icon: FeellightIcon, color: '#AABEE1'},
  {text: '평온하다', icon: CalmIcon, color: '#5C8D85'},
  {text: '화나다', icon: AngryIcon, color: '#B04941'},
  {text: '답답하다', icon: FrustratedIcon, color: '#938F90'},
  {text: '억울하다', icon: UnfairIcon, color: '#26445D'},
  {text: '섭섭하다', icon: DisappointedIcon, color: '#758290'},
  {text: '슬프다', icon: SadIcon, color: '#23508F'},
  {text: '속상하다', icon: UpsetIcon, color: '#737774'},
  {text: '미안하다', icon: SorryIcon, color: '#DBD0C7'},
  {text: '불안하다', icon: AnxiousIcon, color: '#61579F'},
  {text: '부끄럽다', icon: EmbarrassedIcon, color: '#DE8A7E'},
  {text: '두렵다', icon: AfraidIcon, color: '#9E585C'},
  {text: '혼란스럽다', icon: ConfusedIcon, color: '#97488E'},
  {text: '아쉽다', icon: ShameIcon, color: '#A1BFD0'},
  {text: '막막하다', icon: AlossIcon, color: '#6B8881'},
  {text: '걱정스럽다', icon: WorriedIcon, color: '#796BA7'},
  {text: '외롭다', icon: LonelyIcon, color: '#826260'},
  {text: '공허하다', icon: EmptyIcon, color: '#B4BEC5'},
  {text: '불편하다', icon: InconvenientIcon, color: '#F3D138'},
  {text: '당혹스럽다', icon: EmbarrassingIcon, color: '#DA7668'},
  {text: '힘들다', icon: ToughIcon, color: '#60636B'},
  {text: '귀찮다', icon: BotheringIcon, color: '#B8B7A8'},
];

export default function FeelingTemplate() {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filteredList = feelingList.filter((feeling) =>
    feeling.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <form className="w-full max-w-[800px] mx-auto px-4 space-y-10">
      {/* 검색창 */}
      <div className="w-full flex items-center h-12 px-6 bg-white rounded-full border-2 border-[#DCDCDC] gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none flex-1 px-2 text-sm"
          placeholder="마음을 검색해 보세요."
        />
        {search ? (
          <button type="button" onClick={() => setSearch('')}>
            <XIcon
              width={12}
              height={12}
              className="cursor-pointer text-[#DCDCDC]"
            />
          </button>
        ) : (
          <SearchIcon width={18} height={18} className="text-[#DCDCDC]" />
        )}
      </div>

      {filteredList.length > 0 ? (
        <ul
          className="
            grid 
            grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 
            gap-y-4 sm:gap-y-6 md:gap-y-8
            gap-x-3 sm:gap-x-4
            "
        >
          {filteredList.map((feeling) => {
            const Icon = feeling.icon;
            const isSelected = selected === feeling.text;

            return (
              <li
                key={feeling.text}
                onClick={() =>
                  setSelected(selected === feeling.text ? null : feeling.text)
                }
                className={cn(
                  'flex flex-col justify-center items-center hover:shadow-md hover:scale-[1.05] border-2 border-[#DCDCDC] rounded-[14px] gap-2 bg-white overflow-visible cursor-pointer transition-all aspect-square',
                  'w-full max-w-[95px] mx-auto',
                  isSelected && 'border-[#AB30E8] shadow-md scale-[1.05]'
                )}
              >
                <Icon height={42} className="sm:h-[47px]" />
                <span className="text-[10px] sm:text-xs text-center leading-3">
                  {feeling.text}
                </span>
                <span
                  className={cn(
                    'hidden text-white',
                    isSelected &&
                      'block absolute right-1 top-1 p-0.5 bg-[#AB30E8] rounded-full'
                  )}
                >
                  <CheckIcon width={16} height={16} />
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <li className="col-span-full flex flex-col justify-center items-center text-center text-sm text-gray-500 py-10 gap-3">
          <p>해당하는 감정이 없어요</p>
          <button
            type="button"
            onClick={() => console.log('마음 추가 요청')}
            className="text-[#AB30E8] text-xs font-medium hover:underline transition-all"
          >
            마음 추가 요청하기
          </button>
        </li>
      )}
    </form>
  );
}
