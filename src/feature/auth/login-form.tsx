'use client';
import {useState} from 'react';
import {Button} from '@/shared/button';
import Input from '@/shared/input';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="w-full flex flex-col gap-3 last:mt-3">
      <Input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        inputSize="full"
        radius="full"
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        inputSize="full"
        radius="full"
      />

      {/* 버튼 */}
      <Button
        size="full"
        variant="default"
        radius="full"
        type="submit"
        className="bg-slate-900 dark:bg-white text-white hover:bg-slate-700 dark:hover:bg-slate-300 dark:text-slate-900 font-semibold py-3 px-5"
      >
        로그인
      </Button>
      <Button
        size="full"
        variant="outlined"
        radius="full"
        type="submit"
        className="dark:hover:bg-slate-300/25 hover:bg-slate-100 hover:border-slate-300 border-slate-300 dark:border-slate-300/25"
      >
        회원가입
      </Button>
    </form>
  );
}
