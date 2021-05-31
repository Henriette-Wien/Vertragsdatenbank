/**
 * Zentrale Klasse für alle Datenbazugriffe. Diese Klasse versteckt die
 * Einzelheiten der Firebase-Datenbank vor dem Rest der Anwendung, indem
 * sie für alle benötigten Datenbankzugriffe eine Methode definiert, in der
 * der Zugriff auf Firebase ausprogrammiert wurde.
 *
 * Vgl. https://firebase.google.com/docs/firestore?authuser=0
 * Vgl. https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0
 */
class Database {
    /**
     * Konstruktor. Hier wird die Verbindung zur Firebase-Datenbank
     * hergestellt.
     *
     * Vgl. https://firebase.google.com/docs/firestore/quickstart
     */
    constructor() {
        // Diese Informationen müssen aus der Firebase-Konsole ermittelt
        // werden, indem dort ein neues Projekt mit einer neuen Datenbank
        // angelegt und diese dann mit einer neuen App verknüpft wird.
        firebase.initializeApp({
                apiKey: "AIzaSyDI_xzSC-_ZWcWr47v9F8U2Uu6eEwClv3U",
                authDomain: "vertragsdatenbank-e45e5.firebaseapp.com",
                databaseURL: "https://vertragsdatenbank-e45e5-default-rtdb.europe-west1.firebasedatabase.app",
                projectId: "vertragsdatenbank-e45e5",
                storageBucket: "vertragsdatenbank-e45e5.appspot.com",
                messagingSenderId: "820712065257",
                appId: "1:820712065257:web:93b8038c2e2ce56db70878",
                measurementId: "G-SSMMJ3VXD2"
            });

        // Dieses Objekt dient dem eigentlichen Datenbankzugriff.
        // Dabei können beliebig viele "Collections" angesprochen werden,
        // die in etwa den Tabellen einer klassischen Datenbank entsprechen.
        this._db = firebase.firestore();
        this._contract = this._db.collection("contract");
        this._archive = this._db.collection("archive");
    }

    /**
     * Gibt alle in der Datenbank gespeicherten Posts zurück. Hier gilt
     * dasselbe wie im Kommentar zur Methode createDemoData() geschrieben.
     * Alle Dokumente auf einmal auszulesen ist nur dann eine gute Idee,
     * wenn man weiß, dass es nicht viele geben kann. Besser wäre daher,
     * die Menge mit der where()-Funktion von Firebase einzuschränken.
     *
     * @returns Promise-Objekt mit den gespeicherten Posts
     */
/**    async selectAllPosts() {
        let result = await this._posts.orderBy("year").get();
        let posts = [];

        result.forEach(entry => {

            let post = entry.data();
            posts.push(post);

        });

        return posts;
    }

    /**
     * Alle vorhanden Länder auslesen.
     * @returns {Promise<[]>}
     */
/**    async selectAllCountries() {
        let result = await this._countries.orderBy("name").get();
        let countries = [];

        result.forEach(entry => {
            let country = entry.data();
            countries.push(country);
        });

        return countries;
    }

    /**
     * Gibt ein einzelnen Post anhand seiner ID zurück.
     * @param id: ID des gesuchten Posts
     * @returns Promise-Objekt mit dem gesuchten Posts
     */
/**    async selectPostById(id) {
        let result = await this._posts.doc(id).get();
        return result.data();
    }

    /**
     * Gibt ein einzelnes Country anhand seiner ID zurück.
     * @param id: ID des gesuchten Country
     * @returns Promise-Objekt mit dem gesuchten County
     */
/**    async selectCountryById(id) {
        let result = await this._countries.doc(id).get();
        return result.data();
    }

    /**
     * Speichert einzelnen Post in der Datenbank.
     * @param post: Zu speicherndes Post-Objekt
     */
/**    savePost(post) {
        let saved = true;
        this._posts.add(post).catch(function(error){
            saved = false;
        });
        return saved;
    }
    /**
     * Speichert einzelnes Country in der Datenbank.
     * @param country: Zu speicherndes Country-Objekt
     */
/**    saveCountry(country) {
        this._countries.doc(country.id).set(country);

    }

    /**
     * Löscht ein einzelnen Post aus der Datenbank.
     * @param id: ID des zu löschenden Posts
     * @returns Promise-Objekt zum Abfangen von Fehlern oder Warten auf Erfolg
     */
/**    async deletePostById(id) {
        return this._posts.doc(id).delete();
    }
    /**
     * Löscht ein einzelnes Country aus der Datenbank.
     * @param id: ID des zu löschenden Country
     * @returns Promise-Objekt zum Abfangen von Fehlern oder Warten auf Erfolg
     */
/**    async deleteCountryById(id) {
        return this._countries.doc(id).delete();
    }

    /**
     * Speichert die übergebenen Posts in der Datenbank.
     * @param posts: Liste mit den zu speichernden Objekten
     * @returns Promise-Objekt zum Abfangen von Fehlern oder Warten auf Erfolg
     */
/**    async savePosts(posts) {
        let batch = this._db.batch();

        posts.forEach(post => {
            let dbPost = this._posts.doc(post.id);
            batch.set(dbPost, post);
        });

        return batch.commit();
    }
    /**
     * Speichert die übergebenen Countries in der Datenbank.
     * @param countries: Liste mit den zu speichernden Objekten
     * @returns Promise-Objekt zum Abfangen von Fehlern oder Warten auf Erfolg
     */
/**    async saveCountries(countries) {
        let batch = this._db.batch();

        countries.forEach(country => {
            let dbCountry = this._countries.doc(country.id);
            batch.set(dbCountry, country);
        });

        return batch.commit();
    }

    /**
     * Löscht ein oder mehrerer Posts aus der Datenbank.
     * @param ids: Liste der IDs der zu löschenden Posts
     * @returns Promise-Objekt zum Abfangen von Fehlern oder Warten auf Erfolg
     */
/**     async deletePostsById(ids) {
        let batch = this._db.batch();

        ids.forEach(id => {
            let dbPost = this._posts.doc(id);
            batch.delete(dbPost);
        });

        return batch.commit();
    }
    /**
     * Löscht ein oder mehrerer Countries aus der Datenbank.
     * @param ids: Liste der IDs der zu löschenden Countries
     * @returns Promise-Objekt zum Abfangen von Fehlern oder Warten auf Erfolg
     */
/**     async deleteCountriesById(ids) {
        let batch = this._db.batch();

        ids.forEach(id => {
            let dbCountry = this._countries.doc(id);
            batch.delete(dbCountry);
        });

        return batch.commit();
    }
    */
}
