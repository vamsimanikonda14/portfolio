import React from 'react';
import { Search, Home, ArrowLeft, AlertTriangle, Zap, Coffee, Heart } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 animate-bounce">
          <Coffee className="w-8 h-8 text-white/30" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <Heart className="w-6 h-6 text-white/40" />
        </div>
        <div className="absolute bottom-20 left-20 animate-spin">
          <Zap className="w-10 h-10 text-white/20" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce delay-300">
          <AlertTriangle className="w-7 h-7 text-white/35" />
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <h1 className="text-9xl md:text-[12rem] font-black text-white/90 leading-none select-none">
            4
            <span className="inline-block animate-bounce text-yellow-300">0</span>
            4
          </h1>
          
          {/* Floating eyes on the 0 */}
          <div className="absolute top-8 md:top-12 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2 animate-bounce">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-ping"></div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-ping delay-100"></div>
            </div>
          </div>
        </div>

        {/* Animated search icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Search className="w-16 h-16 text-white animate-spin" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-bounce">
              <span className="text-xs text-white font-bold flex items-center justify-center h-full">!</span>
            </div>
          </div>
        </div>

        {/* Funny messages */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 animate-pulse">
            Oops! Page Not Found
          </h2>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
            <p className="text-lg md:text-xl text-white/90 mb-4 animate-fade-in">
              🕵️ Our best detectives are on the case, but this page seems to have vanished into the digital void!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-white/80">
              <div className="animate-bounce delay-100">🔍 Searching...</div>
              <div className="animate-bounce delay-200">🤔 Thinking...</div>
              <div className="animate-bounce delay-300">😅 Still looking...</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <p className="text-white/90 text-sm md:text-base">
              <span className="animate-pulse">💡</span> 
              Maybe the page is playing hide and seek? 
              <span className="animate-bounce inline-block ml-2">🙈</span>
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-100 transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
            <Home className="w-5 h-5 group-hover:animate-bounce" />
            Go Home
          </button>
          
          <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 group-hover:animate-bounce" />
            Go Back
          </button>
        </div>

        {/* Animated footer message */}
        <div className="mt-12 text-white/70 text-sm animate-pulse">
          <p>Don't worry, even the best explorers get lost sometimes! 🗺️✨</p>
        </div>
      </div>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;