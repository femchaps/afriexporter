const width  = window.innerWidth;

let scale = width / 1440;
scale = scale.toFixed(2);


export const COLORS = {
    //base colors
    primary: "#232323", // black
    secondary: "#BEC2C8", //grey

    //colors
    normal_white: "#FFFFFF",
    background: "#E5E5E5"
}

export const SIZES = {

    //app dimensions
    width,
    scale
}

const appTheme = {COLORS, SIZES};

export default appTheme;