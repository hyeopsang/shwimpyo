import {Button} from '@/shared/button';
import GoogleIcon from '@/assets/google.svg?react';
import KakaoIcon from '@/assets/kakao.svg?react';
import LoginForm from '@/feature/auth/login-form';

export default function AuthPage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 mx-auto text-base">
      <div className="max-w-[364px] h-fit shadow px-8 md:py-12 py-8 rounded-3xl flex flex-col gap-6 bg-white dark:bg-slate-800">
        <h2 className="text-center font-medium">로그인</h2>
        <LoginForm />
        <div className="w-full relative flex justify-center items-center text-base">
          <p className="px-2 dark:bg-slate-800 bg-white text-slate-300 dark:text-slate-300/25  z-10">
            or
          </p>
          <span className="absolute w-full h-[1px] left-0 top-1/2 -translate-y-1/2 bg-slate-300 dark:bg-slate-300/25"></span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Button
            size="fit"
            variant="outlined"
            radius="full"
            type="submit"
            className=" text-slate-900 font-semibold py-3 w-full xs:px-5 dark:hover:bg-slate-300/25 hover:bg-slate-100 hover:border-slate-300 dark:border-slate-300/25 border-slate-300"
          >
            <Button.Icon icon={GoogleIcon} className="px-4" />
          </Button>
          <Button
            size="fit"
            variant="outlined"
            radius="full"
            type="submit"
            className=" text-slate-900 font-semibold py-3 w-full xs:px-5 dark:hover:bg-slate-300/25 hover:bg-slate-100 hover:border-slate-300 border-slate-300 dark:border-slate-300/25 mx-auto"
          >
            <Button.Icon icon={KakaoIcon} className="px-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
