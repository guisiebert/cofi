export default function CapitalizeFirstLetter(str: string) {
    // Convert the first character to uppercase
    const firstLetter = str.charAt(0).toUpperCase();
    
    // Get the rest of the string
    const restOfString = str.slice(1);
    
    // Concatenate the first letter with the rest of the string
    const capitalizedString = firstLetter + restOfString;
    
    return capitalizedString;
}