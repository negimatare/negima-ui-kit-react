/**
 * DashboardLayout Params
 */
export type HookCallbackParams = {
    onSuccess?: VoidFunction;
    onError?: (reason: any) => void;
    onAlways?: VoidFunction;
};