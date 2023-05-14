export class LocalstorageUtils {
    static getDataByKey<T>(key: string): T | null {
        if (!key) return null;

        const savedJSON: string | null = localStorage.getItem(key);

        if (!savedJSON || typeof savedJSON !== 'string') return null;

        const data: T | null = JSON.parse(savedJSON);

        return data;
    }

    static saveAndReturnData<T>(key: string, data: T): T {
        localStorage.setItem(key, JSON.stringify(data));

        return data;
    }

    static removeDataByKey(key: string): void {
        if (!!key) localStorage.removeItem(key);
    }

    constructor() {}
}
