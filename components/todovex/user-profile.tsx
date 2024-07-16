"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserProfile() {
  const session = useSession();
  const userImage = session?.data?.user?.image || "";
  return (
    <div>
      <Image
        src={userImage}
        width={24}
        height={24}
        alt="profile picture"
        className=" rounded-full"
      />
    </div>
  );
}
