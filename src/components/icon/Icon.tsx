import { Theme } from "@icon-park/react/lib/runtime";
import Icon,{ALL_ICON_KEYS,IconType} from '@icon-park/react/es/all'

export const getIcon = (type: IconType, size: string, theme: Theme,className?:string) => {
 
  
  if(ALL_ICON_KEYS.indexOf(type) < 0) {
    throw new Error(`Icon of type ${type} not found.`);
  }
    
  
  return <Icon type={type} theme={theme} size={size} className={className} />;
};