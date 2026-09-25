"use client";

import { CheckCircle2, XCircle } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
}

const Toast = ({ message, type }: ToastProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-gray-700 bg-[#17181c] px-5 py-3 text-sm font-semibold text-white shadow-lg">
      {type === "success" ? (
        <CheckCircle2
          size={20}
          className="shrink-0 text-[#CCFF00]"
        />
      ) : (
        <XCircle
          size={20}
          className="shrink-0 text-red-500"
        />
      )}

      <span>{message}</span>
    </div>
  );
};

export default Toast;