export class Movie {
    get imageUrl(): string {
        return this._imageUrl;
    }

    private _imageUrl: string;


    constructor(imageUrl: string) {
        this._imageUrl = imageUrl;
    }
}
