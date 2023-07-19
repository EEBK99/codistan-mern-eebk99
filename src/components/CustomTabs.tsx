import React, { useState, ReactNode, ReactElement } from "react";

interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(
    (children as ReactElement<TabProps>[])[0].props.label
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <div className="flex bg-fiord-500 pl-64">
        {React.Children.map(children, (child) => {
          const tabChild = child as ReactElement<TabProps>;
          return (
            <div
              className={`${
                activeTab === tabChild.props.label ? "bg-gray-400" : ""
              } flex justify-center align-middle h-10 px-5`}
            >
              <button
                key={tabChild.props.label}
                className={`${
                  activeTab === tabChild.props.label
                    ? "text-fiord-500 underline"
                    : ""
                }text-gray-300 uppercase font-medium`}
                onClick={(e) => handleClick(e, tabChild.props.label)}
              >
                {tabChild.props.label}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        {React.Children.map(children, (child) => {
          const tabChild = child as ReactElement<TabProps>;
          if (tabChild.props.label === activeTab) {
            return (
              <div key={tabChild.props.label}>{tabChild.props.children}</div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="hidden">{children}</div>;
};

export { Tabs, Tab };
