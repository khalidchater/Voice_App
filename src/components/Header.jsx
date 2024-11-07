import {
  SignInButton,
  UserButton,
  UserProfile,
  SignUpButton,
  SignedOut,
  SignIn,
  SignedIn,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import React from "react";
import { RiVoiceprintLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";

function Header() {
  return (
    <>
      <div className='flex justify-around gap-x-80 items-center p-4 text-white font-bold text-xl  '>
        <a
          href='/'
          className='text-3xl flex items-center gap-2 cursor-pointer'>
          <RiVoiceprintLine />
          SpeakiFy
        </a>

        <div className=' flex  items-center gap-3'>
          <SignedOut>

            <button class='bg-[#bb207e] text-white border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group'>
              <span class='bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
              <SignInButton
                mode='modal'
                className=''
                forceRedirectUrl={"/voice"}
              />
            </button>
          </SignedOut>
          <SignedOut>
            <button class='bg-neutral-950 text-white border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group'>
              <span class='bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
              <SignUpButton
                mode='modal'
                className='font-bold'
              />
            </button>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
}

export default Header;
