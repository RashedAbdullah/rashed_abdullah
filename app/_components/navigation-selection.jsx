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

export default function NavigationsSelection({ user }) {
  const router = useRouter();

  const handleNavigation = (value) => {
    if (value) router.push(value);
  };

  return (
    <Select className="bg-transparent" onValueChange={handleNavigation}>
      <SelectTrigger className="w-[180px] py-1">
        <SelectValue
          placeholder="Navigations"
          className="placeholder:text-green-500"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Navigations</SelectLabel>
          <SelectItem value="/quran/surah">Quran kareem</SelectItem>
          <SelectItem value="/youtube">YouTube</SelectItem>
          <SelectItem value="/diary">Diary</SelectItem>
        </SelectGroup>

        {user && (
          <SelectGroup>
            <SelectLabel className="text-green-500">Dashboard</SelectLabel>
            <SelectItem value="/dashboard">{user.name}</SelectItem>
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
}
