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
    <div className="flex gap-6 mb-4 border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-3 text-sm font-medium transition-all relative ${
            activeTab === tab.id
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};
