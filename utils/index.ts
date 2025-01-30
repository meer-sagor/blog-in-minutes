import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


type Truncate = {
    str: string,
    maxLength: number
    suffix?: string
}
export const truncateString = ({str, maxLength = 20, suffix = '...'}: Truncate)=> {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength - suffix.length) + suffix;
}