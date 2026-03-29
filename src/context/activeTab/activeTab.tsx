import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

interface ActiveTabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ActiveTabContext = createContext<ActiveTabContextType | undefined>(
  undefined,
);

export const ActiveTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  useEffect(() => {
    console.log('ActiveTab changed:', activeTab);
  }, [activeTab]);

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export const useActiveTab = () => {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error('useActiveTab must be used within an ActiveTabProvider');
  }
  return context;
};
