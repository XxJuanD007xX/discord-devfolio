import { Mic, Headphones, Settings } from 'lucide-react';
import avatarImage from '@/assets/avatar.png';

export const UserArea = () => {
    return (
        <div className="flex items-center justify-between px-2 py-1.5 bg-[#232428] rounded-lg mt-2 select-none border border-[#1e1f22]/50 shadow-inner">
            {/* User Info */}
            <div className="flex items-center gap-2 px-1 py-1 rounded hover:bg-[#3f4147] cursor-pointer transition-colors group">
                <div className="relative">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-secondary">
                        <img src={avatarImage} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#232428] rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    </div>
                </div>
                <div className="flex flex-col text-xs leading-tight">
                    <span className="font-bold text-[#dbdee1] group-hover:text-white transition-colors">
                        Wumpus
                    </span>
                    <span className="text-[#949ba4] text-[11px] font-medium group-hover:text-[#dbdee1] transition-colors">
                        #0001
                    </span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center">
                <button className="p-1.5 rounded hover:bg-[#3f4147] text-[#dbdee1] transition-colors relative group">
                    <Mic className="w-4 h-4" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        Mute
                    </span>
                </button>
                <button className="p-1.5 rounded hover:bg-[#3f4147] text-[#dbdee1] transition-colors relative group">
                    <Headphones className="w-4 h-4" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        Deafen
                    </span>
                </button>
                <button className="p-1.5 rounded hover:bg-[#3f4147] text-[#dbdee1] transition-colors relative group">
                    <Settings className="w-4 h-4 animate-[spin_5s_linear_infinite_paused] hover:animate-spin" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        User Settings
                    </span>
                </button>
            </div>
        </div>
    );
};
