// Here so that we can: import style from '[path-to].st.css'
declare module '*.st.css' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    const urlToAsset: string;
    export = urlToAsset;
}

declare module '*.jpg' {
    const urlToAsset: string;
    export = urlToAsset;
}