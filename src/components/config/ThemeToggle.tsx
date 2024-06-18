import { UseTheme } from "@/components/config/UseTheme";
import { getIcon } from "@/components/icon/Icon";

const ThemeToggle = () => {
    const { theme,setTheme } = UseTheme();
    return (
        <button type="button" title={theme === 'light' ? '暗色模式':'亮色模式'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="inline-flex rounded-md p-2">
            {getIcon("Moon","18","filled","rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black duration-500")}
            {getIcon("SunOne","18","filled","absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white duration-500")}
        </button>
    )
}

export default ThemeToggle;
