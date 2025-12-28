import { createContext, useEffect, useState } from "react";
import workspaceData from "../data/workspaceData";

export const WorkspaceContext = createContext();

export function WorkspaceProvider({ children }) {
  const [data, setData] = useState(null);

  // Load data
  useEffect(() => {
    const savedData = localStorage.getItem("workspace-data");

    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      setData(workspaceData);
      localStorage.setItem("workspace-data", JSON.stringify(workspaceData));
    }
  }, []);

  // Sync changes to localStorage
  useEffect(() => {
    if (data) {
      localStorage.setItem("workspace-data", JSON.stringify(data));
    }
  }, [data]);

  return (
    <WorkspaceContext.Provider value={{ data, setData }}>
      {children}
    </WorkspaceContext.Provider>
  );
}
