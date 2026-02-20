import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface ToolPage {
    id: bigint;
    files: Array<ExternalBlob>;
    title: string;
    content: string;
    category: ToolCategory;
}
export interface Tool {
    id: bigint;
    name: string;
    usageCount: bigint;
    description: string;
    category: string;
    iconUrl: string;
    favoriteCount: bigint;
}
export interface UserProfile {
    bio: string;
    displayName: string;
    badges: Array<string>;
    favoriteTools: Array<bigint>;
    memberships: Array<string>;
}
export interface ToolCategory {
    id: bigint;
    name: string;
    description: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addBadgeToProfile(badge: string): Promise<void>;
    addToolCategory(name: string, description: string): Promise<bigint>;
    addToolPage(title: string, content: string, categoryId: bigint, files: Array<ExternalBlob>): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    findToolByName(searchTerm: string): Promise<Array<Tool>>;
    getAllToolCategories(): Promise<Array<ToolCategory>>;
    getAllToolPages(): Promise<Array<ToolPage>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getToolCategory(id: bigint): Promise<ToolCategory | null>;
    getToolPage(id: bigint): Promise<ToolPage | null>;
    getToolPagesByCategory(categoryId: bigint): Promise<Array<ToolPage>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    initializeTools(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    saveToolToFavorites(toolId: bigint): Promise<void>;
    trackToolUsage(toolId: bigint): Promise<void>;
}
