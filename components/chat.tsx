'use client';

import { useRef } from 'react';
import { useChat } from 'ai/react';
import clsx from 'clsx';
import {
  LoadingCircle,
  SendIcon,
  UserIcon,
} from '../app/icons';
import Textarea from 'react-textarea-autosize';
import Image from 'next/image';

const examples = [
  'What is two-factor authentication (2FA)',
  "What is a Distributed Denial of Service (DDoS) attack",
  'What is the principle of the "least privilege" in cybersecurity',
];

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, input, setInput, handleSubmit, isLoading } =
    useChat({
      onResponse: (response) => {
        if (response.status === 429) {
          window.alert(
            'You have reached your request limit for the day.'
          );
          return;
        }
      },
    });

  const disabled = isLoading || input.length === 0;


  return (
    <main className="flex flex-col items-center justify-between pb-40">
     
      {messages.length > 0 ? (
        messages.map((message, i) => {
          const isUser = message.role === 'user';
          const messageContainerClassName = `flex w-full items-center justify-center border-b border-gray-200 py-8 ${isUser ? 'bg-white' : 'bg-gray-100'}`;
          const messageRoleClassName = `bg-${message.role === 'assistant' ? 'white' : 'black'} p-1 text-white`;
  
          return (
            <div key={i} className={clsx(messageContainerClassName)}>
              <div className="flex w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0">
                <div className={messageRoleClassName}>
                  {isUser ? (<UserIcon/>):
                  (<Image src='/image/Logo.png' alt='logo' width={32} height={32}/>)
                }
                </div>
                <div className="prose prose-p:leading-relaxed mt-1 w-full break-words">
                  {message.content}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="border-gray-200sm:mx-0 mx-5 mt-20 max-w-screen-md rounded-md border sm:w-full">
          <div className="flex flex-col space-y-4 p-7 sm:p-10">
            <h1 className="text-lg font-semibold text-black">
              Hi, SecureBot
            </h1>
            <p className="text-gray-500">
              I am an AI bot built with the{' '}
              <a
                href="https://sdk.vercel.ai/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 transition-colors hover:text-black"
              >
                Vercel AI SDK
              </a>{' '}
              and{' '}
              <a
                href="https://openai.com/blog/gpt-3-5-turbo-fine-tuning-and-api-updates"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 transition-colors hover:text-black"
              >
                fine-tuned
              </a>{' '}
              on cybersecurity
              <br />
            </p>
          </div>
          <div className="flex flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
            {examples.map((example, i) => (
              <button
                key={i}
                className="rounded-md border border-gray-200 bg-white px-5 py-3 text-left text-sm text-gray-500 transition-all duration-75 hover:border-black hover:text-gray-700 active:bg-gray-50"
                onClick={() => {
                  setInput(example);
                  inputRef.current?.focus();
                }}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="fixed bottom-0 flex w-full flex-col items-center space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 p-5 pb-3 sm:px-0">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative w-full max-w-screen-md rounded-xl border border-gray-200 bg-white px-4 pb-2 pt-3 shadow-lg sm:pb-3 sm:pt-4"
        >
          <Textarea
            ref={inputRef}
            tabIndex={0}
            required
            rows={1}
            autoFocus
            placeholder="Send a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                formRef.current?.requestSubmit();
                e.preventDefault();
              }
            }}
            spellCheck={false}
            className="w-full pr-10 focus:outline-none"
          />
          <button
            className={clsx(
              'absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all',
              disabled
                ? 'cursor-not-allowed bg-white'
                : 'bg-yellow-500 hover:bg-yellow-600'
            )}
            disabled={disabled}
          >
            {isLoading ? (
              <LoadingCircle />
            ) : (
              <SendIcon
                className={clsx(
                  'h-4 w-4',
                  input.length === 0 ? 'text-gray-300' : 'text-white'
                )}
              />
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
  