export interface BuildPath {
    entry: string;
    html: string;
    output: string;
    public: string;
    src: string;
}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'

export interface BuildOptions {
    port: number;
    paths: BuildPath;
    mode: BuildMode;
    analyzer?: boolean;
    platform: BuildPlatform;
}