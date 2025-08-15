import {
  Award,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock,
  Coffee,
  Edit3,
  Home,
  List,
  Menu,
  Moon,
  Play,
  Plus,
  RotateCcw,
  Settings,
  Target,
  Trophy,
  User,
  Volume2,
  Zap
} from "lucide-react";
import React from "react";

const FocusApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Mobile Header */}
      <header className="flex items-center justify-between p-4 border-b border-white/10 lg:p-6">
        <div className="flex items-center space-x-2 lg:space-x-3">
          <button className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 lg:w-6 lg:h-6" />
          </div>
          <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            FocusFlow
          </h1>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Volume2 className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
          <div className="w-7 h-7 lg:w-8 lg:h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
        </div>
      </header>

      {/* Mobile Navigation Bar */}
      <nav className="lg:hidden flex items-center justify-around p-2 bg-black/20 border-b border-white/10">
        <button className="flex flex-col items-center space-y-1 p-2 text-purple-400">
          <Home className="w-5 h-5" />
          <span className="text-xs">Focus</span>
        </button>
        <button className="flex flex-col items-center space-y-1 p-2 text-gray-400">
          <List className="w-5 h-5" />
          <span className="text-xs">Tasks</span>
        </button>
        <button className="flex flex-col items-center space-y-1 p-2 text-gray-400">
          <BarChart3 className="w-5 h-5" />
          <span className="text-xs">Stats</span>
        </button>
        <button className="flex flex-col items-center space-y-1 p-2 text-gray-400">
          <Trophy className="w-5 h-5" />
          <span className="text-xs">Awards</span>
        </button>
      </nav>

      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-88px)]">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-80 xl:w-96 border-r border-white/10 p-6 space-y-6 overflow-y-auto">
          {/* Timer Mode Selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Timer Mode
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="p-3 bg-purple-600 rounded-xl flex flex-col items-center space-y-1 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                <Brain className="w-5 h-5" />
                <span className="text-xs font-medium">Focus</span>
                <span className="text-xs text-purple-200">25 min</span>
              </button>
              <button className="p-3 bg-white/10 rounded-xl flex flex-col items-center space-y-1 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Coffee className="w-5 h-5" />
                <span className="text-xs font-medium">Break</span>
                <span className="text-xs text-gray-400">5 min</span>
              </button>
            </div>
            <button className="w-full p-3 bg-white/10 rounded-xl flex flex-col items-center space-y-1 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Moon className="w-5 h-5" />
              <span className="text-xs font-medium">Long Break</span>
              <span className="text-xs text-gray-400">15 min</span>
            </button>
          </div>

          {/* Today's Stats */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Today's Progress
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-sm font-medium">Sessions</span>
                </div>
                <span className="text-xl font-bold">4/8</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium">Focus Time</span>
                </div>
                <span className="text-xl font-bold">1h 40m</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className="text-sm font-medium">Streak</span>
                </div>
                <span className="text-xl font-bold">12 days</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full p-3 bg-white/10 rounded-xl flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm font-medium">View Analytics</span>
              </button>
              <button className="w-full p-3 bg-white/10 rounded-xl flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Schedule Session</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Mobile Timer Mode Selector */}
          <div className="lg:hidden p-4 border-b border-white/10">
            <div className="flex space-x-2">
              <button className="flex-1 p-3 bg-purple-600 rounded-xl flex items-center justify-center space-x-2 text-sm font-medium">
                <Brain className="w-4 h-4" />
                <span>Focus</span>
                <span className="text-purple-200">25:00</span>
              </button>
              <button className="p-3 bg-white/10 rounded-xl flex items-center justify-center">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
            {/* Timer Circle - Responsive */}
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-white/20 relative overflow-hidden shadow-2xl">
                {/* Progress Circle */}
                <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-purple-500 border-r-purple-500 transform -rotate-90 transition-all duration-1000"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-900/50 to-slate-900/50 backdrop-blur-sm"></div>

                {/* Timer Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 lg:space-y-4">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold bg-gradient-to-br from-white to-purple-200 bg-clip-text text-transparent">
                    25:00
                  </div>
                  <div className="text-purple-300 text-sm lg:text-lg font-medium">
                    Focus Session
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center space-x-3 lg:space-x-4 mt-4 lg:mt-6">
                    <button className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Play className="w-5 h-5 lg:w-7 lg:h-7 ml-1" />
                    </button>
                    <button className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <RotateCcw className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Session Counter - Responsive positioning */}
              <div className="absolute -bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-1.5 lg:space-x-2">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stats Cards */}
          <div className="lg:hidden p-4 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl text-center">
                <div className="text-xl font-bold text-green-400">4/8</div>
                <div className="text-xs text-green-300">Sessions</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl text-center">
                <div className="text-xl font-bold text-blue-400">1h 40m</div>
                <div className="text-xs text-blue-300">Focus Time</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl text-center">
                <div className="text-xl font-bold text-orange-400">12</div>
                <div className="text-xs text-orange-300">Day Streak</div>
              </div>
            </div>
          </div>

          {/* Current Task - Responsive */}
          <div className="p-4 lg:p-8 border-t border-white/10">
            <div className="max-w-full lg:max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <h3 className="text-base lg:text-lg font-semibold">
                  Current Task
                </h3>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 bg-gradient-to-r from-white/10 to-purple-500/10 border border-purple-500/20 rounded-xl">
                <p className="text-sm lg:text-lg font-medium">
                  Complete quarterly marketing report and analyze user
                  engagement metrics
                </p>
                <div className="flex items-center justify-between mt-3 text-xs lg:text-sm text-gray-400">
                  <span>Project: Marketing Q4</span>
                  <span>2 of 8 sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Right Panel - Hidden on mobile */}
        <div className="hidden xl:block w-96 border-l border-white/10 p-6 space-y-6 overflow-y-auto">
          {/* Tasks Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                Today's Tasks
              </h3>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium line-through opacity-60">
                    Review design mockups
                  </p>
                  <p className="text-xs text-green-400">
                    2 sessions • Completed
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
                <Circle className="w-5 h-5 text-purple-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Marketing report analysis
                  </p>
                  <p className="text-xs text-purple-300">
                    2/8 sessions • In Progress
                  </p>
                </div>
                <button className="p-1 hover:bg-white/10 rounded transition-colors">
                  <Edit3 className="w-3 h-3" />
                </button>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <Circle className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Update project documentation
                  </p>
                  <p className="text-xs text-gray-400">
                    0/3 sessions • Pending
                  </p>
                </div>
                <button className="p-1 hover:bg-white/10 rounded transition-colors">
                  <Edit3 className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Weekly Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              This Week
            </h3>
            <div className="p-4 bg-gradient-to-r from-white/5 to-purple-500/5 border border-purple-500/20 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Focus Time</span>
                <span className="text-xl font-bold">12h 30m</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 mb-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-3/4 shadow-lg"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Goal: 16h</span>
                <span className="text-purple-300 font-medium">
                  78% completed
                </span>
              </div>
            </div>
          </div>

          {/* Achievement */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Recent Achievement
            </h3>
            <div className="p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl">
              <div className="flex items-center space-x-3">
                <Award className="w-10 h-10 text-yellow-400" />
                <div>
                  <p className="font-semibold text-yellow-400">Focus Master</p>
                  <p className="text-xs text-yellow-300">
                    Completed 50 focus sessions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Quick Stats
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-400">92%</div>
                <div className="text-sm text-blue-300 font-medium">
                  Completion Rate
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-400">4.2h</div>
                <div className="text-sm text-green-300 font-medium">
                  Average Daily
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusApp;
