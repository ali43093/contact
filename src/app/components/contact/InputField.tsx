import React from "react";
import { Input } from "@/components/ui/input";

const InputField = ({
  label,
  value,
  name,
  onChange,
}: {
  label: string;
  value?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <Input
        type="text"
        autoComplete={name}
        placeholder=" "
        id=":S1:"
        className="peer h-[90px] block box-border w-full bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 group-first:rounded-t-2xl group-last:rounded-b-2xl rounded-none focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:shadow-lg"
        name={name}
        value={value ?? ''}
        onChange={onChange}
      />
      <label
        htmlFor=":S1:"
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
