import HomeScreen from "./src/screens/HomeScreen";
import { TaskProvider } from "./src/context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <HomeScreen />
    </TaskProvider>
  );
}
