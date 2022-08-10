import { Theme } from "./templates/theme";
import AppProvider from "./contexts";
import MainApp from "./navigation";

export default function App() {
  return (
    <AppProvider>
      <Theme>
        <MainApp />
      </Theme>
    </AppProvider>
  );
}
