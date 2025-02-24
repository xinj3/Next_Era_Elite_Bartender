import defaultAlgorithm from './themes/default';
/** Get current context Design Token. Will be different if you are using nest theme config. */
declare function useToken(): {
    theme: import("@ant-design/cssinjs").Theme<import("./interface").SeedToken, import("./interface").MapToken>;
    token: import("./interface").GlobalToken;
    hashId: string;
};
declare const _default: {
    /** @private Test Usage. Do not use in production. */
    defaultConfig: {
        token: import("./interface").SeedToken;
        hashed: boolean;
    };
    /** Default seedToken */
    defaultSeed: import("./interface").SeedToken;
    useToken: typeof useToken;
    defaultAlgorithm: typeof defaultAlgorithm;
    darkAlgorithm: import("@ant-design/cssinjs").DerivativeFunc<import("./interface").SeedToken, import("./interface").MapToken>;
    compactAlgorithm: import("@ant-design/cssinjs").DerivativeFunc<import("./interface").SeedToken, import("./interface").MapToken>;
};
export default _default;
