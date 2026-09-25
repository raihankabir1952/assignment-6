"use client";

import { useContext } from "react";
import FitLogContext from "../context/FitLogContext";
import Toast from "./Toast";

const ToastProvider = () => {
  const context = useContext(FitLogContext);

  if (!context?.toastMessage) {
    return null;
  }

  return (
    <Toast
      message={context.toastMessage}
      type={context.toastType}
    />
  );
};

export default ToastProvider;