import { useContext } from "react";
import { WorkspaceContext } from "../context/WorkspaceContext";

export const useWorkspace = () => {
  return useContext(WorkspaceContext);
};
