interface ActivityTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'board', label: 'Board' },
  { id: 'activity', label: 'Actividad' },
  { id: 'hobbies', label: 'Mis Hobbies' },
];

export const ActivityTabs = ({ activeTab, onTabChange }: ActivityTabsProps) => {
  return (
    <div className="flex gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-1 px-1 text-sm font-semibold transition-all relative ${
            activeTab === tab.id
              ? 'text-white'
              : 'text-[#949ba4] hover:text-[#dbdee1] hover:bg-[#35373c]/50 rounded'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#5865f2] rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};
