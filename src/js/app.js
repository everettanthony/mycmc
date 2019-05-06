import * as Utils from './utils';

export default class Bootstrap {
    constructor() {}

    init() {
        if ( typeof window.Promise === 'undefined' || !self.Promise ) {
            return {
                then: fn => Utils.polyfillPromises( _ => this._onInit( fn ) )
            };
        }

        return this._onInit();
    }

    _onInit( fn ) {
        return new Promise( ( resolve, reject ) => {
            try {
                this._onPageReady();
                resolve();

                if ( fn && typeof fn === 'function' ) {
                    fn();
                }
            }
            catch ( err ) {
                console.log( `Error in App.init -> ${err}` );
                reject();
            }
        } );
    }

    _onPageReady() {}   
}