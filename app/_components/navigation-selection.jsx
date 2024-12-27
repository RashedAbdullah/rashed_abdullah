"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { memo } from "react";

const NavigationsSelection = ({ user }) => {
  const router = useRouter();

  const handleNavigation = (value) => {
    if (value) {
      router.push(value);
    }
  };

  return (
    <Select className="bg-transparent" onValueChange={handleNavigation}>
      <SelectTrigger className="w-[180px] py-1">
        <SelectValue
          placeholder="মেনু"
          className="placeholder:text-green-500"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>মেনু</SelectLabel>
          <SelectItem value="/quran/surah">কুরআন কারীম</SelectItem>
          <SelectItem value="/resources">পাঠ উপকরণ</SelectItem>
          <SelectItem value="/youtube">ইউটিউব</SelectItem>
          <SelectItem value="/diary">দিনলিপি</SelectItem>
        </SelectGroup>

        {user && (
          <SelectGroup>
            <SelectLabel className="text-green-500">Dashboard</SelectLabel>
            <SelectItem value="/dashboard">
              {user.name || "Dashboard"}
            </SelectItem>
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
};

// Memoizing the component to prevent unnecessary re-renders
export default memo(NavigationsSelection);
