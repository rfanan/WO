export const COLOR = {
    white: "#FFFFFF",
    black: "#1C1B1F",
    blackFont: "#1C1B1F",
    tabText: "#1D192B",
    brownishGrey: "#717171",
    primaryButton: "#0067b0",
    blueChip: "#DBF1FE",
    gray: "#CAC4D0",
    grayMedium : "#EAEAEA",
    lightGray : "#f2f3f461",
    defaultBackground: "#FFFFFF",
    grayDefault: "#EAEAEA",
    yellowDefault: "#F6CF53",
    yellow: "#ffca1e",
    lightYellow: "#ffeecc",
    redDefault: "#FF3D00",
    softRed: "#ffd8d2",
    softGreen: "#d2ffd3",
    yellowInfo: "#FFF5EC",
    secondaryText: "#49454F",
    green: "#207D13",
    lightGreen: "#d6ffdc",
    red: "#ff3d00",
    darkRed: "#850303",
    grayDetail: "#99A3AF",
    lightRed: "#ffc7c7",
    purpleDefault: "#6D1EFA",
    purple: "#6D1EFA",
    lightPurple: "#d2b4ff",
    orangeDefault: "#FA8614",
    nebula: "#19A2FF",
    blue: "#19A2FF",
    lightBlue: "#dbefff",
    veryLightBlue: "#55bcff",
    disabledColor: "#bdbdbd",
    formGray: "#EFEFF1",

    primaryColor: "#0067b0",
    // selectedColor: "#c3e1c3",
    // selectedColorText: "#233227",
    // primaryBlue: "#063A65",
};

// Function to convert hex to rgba
export const hexToRGBA = (hex: string, alpha: any) => {
    // Remove the '#' symbol if present
    hex = hex.replace("#", "");

    // Parse the hex values for red, green, and blue components
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4, 6), 16);

    // Return the rgba string with the alpha value
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
