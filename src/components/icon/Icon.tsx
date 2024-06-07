import { Theme } from "@icon-park/react/lib/runtime";
import {
  Wechat,
  Tiktok,
  Alipay,
  CloseOne,
  SunOne,
  Moon // 确保导入了所有需要的图标
} from '@icon-park/react';

// 创建一个映射类型，将图标的名称映射到其类型
type IconMap = {
    Wechat: typeof Wechat,
    Tiktok: typeof Tiktok,
    Alipay: typeof Alipay,
    CloseOne: typeof CloseOne,
    SunOne: typeof SunOne,
    Moon: typeof Moon
};

function createIconObject<T extends Record<string, any>>(obj: T): T {
    return obj;
}

// 定义一个图标组件的映射类型
const Icons = createIconObject({
    Wechat,
    Tiktok,
    Alipay,
    CloseOne,
    SunOne, // 注意这里：你的原始代码里有一个打字错误，'SunOne:' 应该是 'SunOne'
    Moon
} as IconMap);

// 使用keyof操作符从映射类型中提取所有键的联合类型，生成ParkIconType
export type IconType = keyof IconMap;

// 导出图标类型和主题类型
export type Theme = Theme;

// 简化getParkIcon函数，使用计算属性名从ParkIcons中获取组件
export const getIcon = (type: IconType, size: string, theme: Theme,className?:string) => {
  // 使用计算属性名获取图标组件
  const IconComponent = Icons[type];
  
  // 确保IconComponent存在
  if (!IconComponent) {
    throw new Error(`Icon of type ${type} not found.`);
  }
  
  // 返回图标组件的JSX元素
  return <IconComponent theme={theme} size={size} className={className} />;
};