export default function ShortTextTemplate() {
  return (
    <form className="w-[800px] rounded-[10px] flex flex-col overflow-hidden bg-white p-5 border border-[#B8B7A8]">
      <textarea
        className="w-full resize-none outline-none bg-white overflow-hidden text-[#4C4B4A] leading-relaxed placeholder:text-[#B1AEAB]"
        placeholder="오늘의 마음을 기록해보세요..."
        maxLength={100}
        rows={10}
      />
    </form>
  );
}
