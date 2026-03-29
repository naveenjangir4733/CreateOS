import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

interface ActiveTabContextType {
  activeTab: string;
  activeSubTab: string;
  setActiveTab: (tab: string) => void;
  setActiveSubTab: (subTab: string) => void;
}

const ActiveTabContext = createContext<ActiveTabContextType | undefined>(
  undefined,
);

export const ActiveTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    return localStorage.getItem('activeTab') || 'Dashboard';
  });
  const [activeSubTab, setActiveSubTab] = useState<string>(() => {
    return localStorage.getItem('activeSubTab') || 'Overview';
  });

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
    localStorage.setItem('activeSubTab', activeSubTab);
  }, [activeTab, activeSubTab]);

  return (
    <ActiveTabContext.Provider
      value={{ activeTab, setActiveTab, activeSubTab, setActiveSubTab }}
    >
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
