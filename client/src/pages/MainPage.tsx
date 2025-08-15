import {
  Menu,
  Target,
  Volume2,
  Settings,
  User,
  Brain,
  Coffee,
  Moon,
  Play,
  RotateCcw,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import FocusModal from "../modals/FocusModal";

const MainPage: React.FC = () => {
  const [showFocusModal, setShowFocusModal] = useState<boolean>(false);
  const [mode, setMode] = useState<"focus" | "break" | "long_break">("focus");
  const [focusTime, setFocusTime] = useState<number>(1500);
  const [focusRemainingTime, setFocusRemainingTime] = useState<string>("00:00");

  const handleFocusMode = (value: number) => {
    const totalSeconds = value * 60;
    setFocusTime(totalSeconds);
    // const minutes = Math.floor(totalSeconds / 60);
    // const seconds = totalSeconds % 60;
  };
  //initiate timer
  useEffect(() => {
    const interval = setInterval(() => {
      setFocusTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return prev;
        }
        const minutes = Math.floor(prev / 60);
        const seconds = prev % 60;
        setFocusRemainingTime(
          `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );

        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <button className="lg:hidden p-2 hover:bg-white/10 rounded-lg">
            <Menu className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            StaySharp
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Volume2 className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Settings className="w-4 h-4" />
          </button>
          <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
        </div>
      </header>

      {/* Timer */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="relative w-72 h-72">
          {/*Background circle */}
          <svg
            className="w-full   h-full rotate-[-90deg]"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="gray"
              stroke-width="4"
              fill="transparent"
            />
            {/*  Progress circle  */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="yellow"
              stroke-width="4"
              fill="transparent"
              stroke-dasharray="283"
              stroke-dashoffset="70"
              stroke-linecap="round"
            />
          </svg>

          {/*  Content inside */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-5xl font-mono font-bold bg-gradient-to-br from-white to-purple-200 bg-clip-text text-transparent">
              <p>{focusRemainingTime}</p>
            </div>
            <div className="text-purple-300 text-lg font-medium">
              {mode === "focus"
                ? "focus session"
                : mode === "break"
                ? "short breaK"
                : "long break"}
            </div>
            <div className="flex items-center space-x-4">
              <button className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center hover:scale-110 shadow-lg transition">
                <Play className="w-7 h-7 ml-1" />
              </button>
              <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center hover:scale-110 transition">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Mode Selector */}
      <div className="p-4 flex justify-center gap-2 lg:gap-4">
        <button
          onClick={() => {
            setShowFocusModal(true);
            setMode("focus");
          }}
          className={`p-3 bg-white/10 rounded-xl flex flex-col items-center space-y-1 w-20 shadow-lg  shadow-black/20 ${
            mode === "focus" && "ring-2 ring-green-500 shadow-xl"
          }`}
        >
          <Brain className="w-5 h-5" />
          <span className="text-xs">Focus</span>
        </button>
        <button
          onClick={() => {
            // setShowFocusModal(true);
            setMode("break");
          }}
          className={`p-3 bg-white/10 rounded-xl flex flex-col items-center space-y-1 w-20 shadow-lg shadow-black/20 ${
            mode === "break" && "ring-2 ring-green-500 shadow-xl"
          }`}
        >
          <Coffee className="w-5 h-5" />
          <span className="text-xs">Break</span>
        </button>
        <button
          onClick={() => {
            // setShowFocusModal(true);
            setMode("long_break");
          }}
          className={`p-3 bg-white/10 rounded-xl flex flex-col items-center space-y-1 shadow-lg shadow-black/20 ${
            mode === "long_break" && "ring-2 ring-green-500 shadow-xl"
          }`}
        >
          <Moon className="w-5 h-5" />
          <span className="text-xs">Long Break</span>
        </button>
      </div>
      {/* MODALS */}
      {showFocusModal && (
        <FocusModal
          setShowFocusModal={setShowFocusModal}
          onFocusValueSelect={handleFocusMode}
        />
      )}
    </div>
  );
};

export default MainPage;
