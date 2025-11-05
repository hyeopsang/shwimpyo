export default function LongTextTemplate() {
  return (
    <form className="w-[800px] rounded-[10px] flex flex-col overflow-hidden bg-white px-5 pb-5 pt-10">
      <textarea
        id="text"
        name="text"
        className="w-full resize-none outline-none bg-white overflow-hidden text-[#4C4B4A] leading-relaxed placeholder:text-[#B1AEAB]"
        placeholder="오늘의 마음을 기록해보세요..."
        maxLength={1000}
        rows={28}
      />
    </form>
  );
}
