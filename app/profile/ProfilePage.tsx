"use client";

import Image from "next/image";

function ProfilePage() {
  return (
    <main className="w-full px-16">
      <h1 className="text-5xl my-4 font-serif ">My Profile</h1>
      <div className="flex">
        <div className="flex flex-col items-center mr-8">
          <Image
            className="rounded-full"
            alt="Sodium_Chloridy "
            height={150}
            width={150}
            src="https://cn.i.cdn.ti-platform.com/cnapac/content/701/showpage/we-bare-bears/sa/showicon.png"
          />
          <p className="my-4">
            <span className="font-bold">Sodium_Chloridy </span>#1026
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="px-8 flex flex-col justify-center items-center ml-4">
              <p className="text-xl">2</p>
              <p className="font-bold text-xl">Courses Completed</p>
            </div>
            <div className="px-8 flex flex-col justify-center items-center">
              <p className="text-xl">12</p>
              <p className="font-bold text-xl">Followers</p>
            </div>
            <div className="px-8 flex flex-col justify-center items-center">
              <p className="text-xl">15</p>
              <p className="font-bold text-xl">Following</p>
            </div>
          </div>
          <div className="flex-row p-8 text-xl ml-4">
            <p> Hi! Hope you have fun in EqualEd!</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
