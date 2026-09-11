export function preloadMedia(src: string): Promise<string> { // i hate typescript types theyre confusing i miss C and C++ much better than this crap .................,,,,
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = () => resolve(src);
        image.onerror = () => reject(new Error("preload failed: " + src));
        image.src = src;
    });
}