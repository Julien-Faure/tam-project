
export default function getEnv(name : string) : string | undefined {
    const window1 = window as any;
    return window1?.configs?.[name] || process.env[name]
}