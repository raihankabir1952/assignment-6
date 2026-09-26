"use client";

import React, {
  createContext,
  useState,
  useSyncExternalStore,
} from "react";

interface Workout {
  id: number;
  name: string;
  image: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  equipment: string;
}

type ToastType = "success" | "error";

interface FitLogContextType {
  planWorkouts: Workout[];
  savedWorkouts: Workout[];
  completedWorkouts: number[];

  setPlanWorkouts: React.Dispatch<
    React.SetStateAction<Workout[]>
  >;

  setSavedWorkouts: React.Dispatch<
    React.SetStateAction<Workout[]>
  >;

  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;

  toastMessage: string;
  toastType: ToastType;
  showToast: (
    message: string,
    type?: ToastType
  ) => void;
  clearToast: () => void;
};

/* 
   LocalStorage helper
*/

const listeners = new Map<string, Set<() => void>>();

const subscribeToStorage = (
  key: string,
  callback: () => void
) => {
  if (!listeners.has(key)) {
    listeners.set(key, new Set());
  }

  listeners.get(key)!.add(callback);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === key) {
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.get(key)?.delete(callback);
    window.removeEventListener(
      "storage",
      handleStorage
    );
  };
};

const notifyStorageChange = (key: string) => {
  listeners.get(key)?.forEach((listener) => {
    listener();
  });
};

const getStorageValue = <T,>(
  key: string,
  fallback: T
): T => {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const storedValue = localStorage.getItem(key);

    if (!storedValue) {
      return fallback;
    }

    return JSON.parse(storedValue) as T;
  } catch {
    return fallback;
  }
};

/* 
   LocalStorage hook
*/

const useLocalStorage = <T,>(
  key: string,
  fallback: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const subscribe = React.useCallback(
    (callback: () => void) =>
      subscribeToStorage(key, callback),
    [key]
  );

  const getSnapshot = React.useCallback(
    () => {
      const value = getStorageValue(key, fallback);

      return JSON.stringify(value);
    },
    [key, fallback]
  );

  const getServerSnapshot = React.useCallback(
    () => JSON.stringify(fallback),
    [fallback]
  );

  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const value = JSON.parse(snapshot) as T;

  const setValue: React.Dispatch<
    React.SetStateAction<T>
  > = (update) => {
    const currentValue = getStorageValue(
      key,
      fallback
    );

    const nextValue =
      typeof update === "function"
        ? (update as (previous: T) => T)(currentValue)
        : update;

    localStorage.setItem(
      key,
      JSON.stringify(nextValue)
    );

    notifyStorageChange(key);
  };

  return [value, setValue];
};

/* 
   Context
 */

const FitLogContext =
  createContext<FitLogContextType | null>(null);

const FitLogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Today's plan
  const [planWorkouts, setPlanWorkouts] =
    useLocalStorage<Workout[]>(
      "fitlog-plan",
      []
    );

  // Saved workouts
  const [savedWorkouts, setSavedWorkouts] =
    useLocalStorage<Workout[]>(
      "fitlog-saved",
      []
    );

  // Completed workout IDs
  const [completedWorkouts, setCompletedWorkouts] =
    useLocalStorage<number[]>(
      "fitlog-completed",
      []
    );

  // Toast state
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] =
    useState<ToastType>("success");

  // Add workout to today's plan
  const addToPlan = (workout: Workout) => {
    setPlanWorkouts((prev) => {
      // Prevent duplicate workouts
      if (
        prev.some(
          (item) => item.id === workout.id
        )
      ) {
        return prev;
      }

      // Maximum 5 workouts
      if (prev.length >= 5) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Save workout for later
  const saveForLater = (workout: Workout) => {
    setSavedWorkouts((prev) => {
      // Prevent duplicate saved workouts
      if (
        prev.some(
          (item) => item.id === workout.id
        )
      ) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove workout from today's plan
  const removeFromPlan = (id: number) => {
    setPlanWorkouts((prev) =>
      prev.filter(
        (workout) => workout.id !== id
      )
    );
  };

  // Remove workout from saved list
  const removeFromSaved = (id: number) => {
    setSavedWorkouts((prev) =>
      prev.filter(
        (workout) => workout.id !== id
      )
    );
  };

  // Mark workout as completed
  const markAsDone = (id: number) => {
    setCompletedWorkouts((prev) => {
      // Prevent duplicate completed IDs
      if (prev.includes(id)) {
        return prev;
      }

      return [...prev, id];
    });
  };

  // Show toast notification
  const showToast = (
    message: string,
    type: ToastType = "success"
  ) => {
    setToastMessage(message);
    setToastType(type);

    // Hide toast after 2 seconds
    setTimeout(() => {
      setToastMessage("");
    }, 2000);
  };

  // Clear toast
  const clearToast = () => {
    setToastMessage("");
  };

  return (
    <FitLogContext.Provider
      value={{
        planWorkouts,
        savedWorkouts,
        completedWorkouts,

        setPlanWorkouts,
        setSavedWorkouts,

        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markAsDone,

        toastMessage,
        toastType,
        showToast,
        clearToast,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export { FitLogProvider };
export default FitLogContext;