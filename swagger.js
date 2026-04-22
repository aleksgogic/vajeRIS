/**
 * @openapi
 * /api/auth/register:
 *  post:
 *   summary: Registracija novega uporabnika
 *   description: Registracija uporabnika s njihovimi osebnimi podatki in pošiljanje verifikacijskega emaila.
 *   tags: [Avtentikacija]
 *   requestBody:
 *    required: true
 *    description: Registracijski podatki novega uporabnika.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        ime:
 *         type: string
 *         example: Janez
 *        priimek:
 *         type: string
 *         example: Novak
 *        email:
 *         type: string
 *         format: email
 *         example: janez@example.com
 *        geslo:
 *         type: string
 *         format: password
 *         example: password123
 *        uporabnisko_ime:
 *         type: string
 *         example: janeznovak
 *        starost:
 *         type: integer
 *         example: 30
 *        telefonska_stevilka:
 *         type: string
 *         example: "031 310 456"
 *        naslov:
 *         type: string
 *         example: "Ljubljanska cesta 2, 1000 Ljubljana"
 *       required:
 *        - ime
 *        - priimek
 *        - email
 *        - geslo
 *        - uporabnisko_ime
 *        - starost
 *        - telefonska_stevilka
 *        - naslov
 *   responses:
 *    '201':
 *     description: Created – uporabnik uspešno registriran, verlfikacijski email poslan.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *         userId:
 *          type: integer
 *         email:
 *          type: string
 *       example:
 *        message: "Uporabnik uspešno registriran"
 *        userId: 1
 *        email: janez@example.com
 *    '400':
 *     description: Bad Request – manjkajočih polj ali duplikat email/uporabniškega imena.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       examples:
 *        missingFields:
 *         value:
 *          message: Vsa obvezna polja morajo biti izpolnjena
 *        emailExists:
 *         value:
 *          message: Uporabnik s tem emailom že obstaja
 *        usernameExists:
 *         value:
 *          message: Uporabniško ime je že zasedeno
 *    '500':
 *     description: Internal Server Error – napaka pri registraciji.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       example:
 *        message: Napaka pri registraciji. Poskusite ponovno.
 */

/**
 * @openapi
 * /api/auth/login:
 *  post:
 *   summary: Prijava uporabnika
 *   description: Avtentifikacija uporabnika z emailom in geslom. Vrne JWT token.
 *   tags: [Avtentikacija]
 *   requestBody:
 *    required: true
 *    description: Uporabnikove kredenciale.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *         format: email
 *         example: janez@example.com
 *        geslo:
 *         type: string
 *         format: password
 *         example: password123
 *       required:
 *        - email
 *        - geslo
 *   responses:
 *    '200':
 *     description: OK – uporabnik uspešno avtentificiran.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         token:
 *          type: string
 *         user:
 *          type: object
 *          properties:
 *           id:
 *            type: integer
 *           email:
 *            type: string
 *           role:
 *            type: string
 *            enum: [USER, ADMIN]
 *       example:
 *        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *        user:
 *         id: 1
 *         email: janez@example.com
 *         role: USER
 *    '400':
 *     description: Bad Request – manjkajući email ali geslo.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       example:
 *        message: Email in geslo sta obvezna
 *    '401':
 *     description: Unauthorized – napačen email ali geslo.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       examples:
 *        wrongEmail:
 *         value:
 *          message: Napačen email
 *        wrongPassword:
 *         value:
 *          message: Napačno geslo
 *    '500':
 *     description: Internal Server Error – napaka pri prijavi.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       example:
 *        message: Napaka pri prijavi. Poskusite ponovno.
 */

/**
 * @openapi
 * /api/auth/verify-email:
 *  post:
 *   summary: Potrditev emaila
 *   description: Potrditev emaila uporabnika z verifikacijskim tokenem.
 *   tags: [Avtentikacija]
 *   requestBody:
 *    required: true
 *    description: Verifikacijski token.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        token:
 *         type: string
 *         example: "2f4c9a5b5e2d4a1b9a5b2f4c9a5b5e2d"
 *       required:
 *        - token
 *   responses:
 *    '200':
 *     description: OK – email uspešno potrjen.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Email uspešno potrjen"
 *    '400':
 *     description: Bad Request – neveljaven ali potekel token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       example:
 *        message: "Neveljaven ali potekel verifikacijski token"
 *    '500':
 *     description: Internal Server Error – napaka pri potrjevanju.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       example:
 *        message: "Napaka pri potrjevanju emaila"
 */

/**
 * @openapi
 * /api/auth/reset-password:
 *  post:
 *   summary: Ponastavitev gesla
 *   description: Pošljanje navodil za ponastavitev gesla na email naslov.
 *   tags: [Avtentikacija]
 *   requestBody:
 *    required: true
 *    description: Email naslov uporabnika.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *         format: email
 *         example: janez@example.com
 *       required:
 *        - email
 *   responses:
 *    '200':
 *     description: OK – navodila za ponastavitev posljena.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Navodila za reset gesla poslana"
 *    '400':
 *     description: Bad Request – email ni podan.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       example:
 *        message: "Email je obvezen"
 *    '404':
 *     description: Not Found – uporabnik ne obstaja.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       example:
 *        message: "Uporabnik ne obstaja"
 *    '500':
 *     description: Internal Server Error – napaka pri pošiljanju.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       example:
 *        message: "Napaka pri pošiljanju emaila"
 */

/**
 * @openapi
 * /api/users/me:
 *  get:
 *   summary: Pridobi podatke profila
 *   description: Pridobi podatke trenutno prijavljenega uporabnika.
 *   tags: [Uporabnik]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – profil uspešno pridobljen.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         id:
 *          type: integer
 *         ime:
 *          type: string
 *         priimek:
 *          type: string
 *         email:
 *          type: string
 *         uporabnisko_ime:
 *          type: string
 *         telefonska_stevilka:
 *          type: string
 *         naslov:
 *          type: string
 *       example:
 *        id: 1
 *        ime: Janez
 *        priimek: Novak
 *        email: janez@example.com
 *        uporabnisko_ime: janeznovak
 *        telefonska_stevilka: "031 310 456"
 *        naslov: "Ljubljanska cesta 2, 1000 Ljubljana"
 *    '401':
 *     description: Unauthorized – token manjka ali neveludan.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       example:
 *        message: "Neveludan token"
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/users/me:
 *  put:
 *   summary: Posodobitev profila
 *   description: Posodobitev podatkov profila trenutno prijavljenega uporabnika.
 *   tags: [Uporabnik]
 *   security:
 *    - jwt: []
 *   requestBody:
 *    required: true
 *    description: Podatki za posodobitev.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        ime:
 *         type: string
 *        priimek:
 *         type: string
 *        telefonska_stevilka:
 *         type: string
 *        naslov:
 *         type: string
 *   responses:
 *    '200':
 *     description: OK – profil uspešno posodobljen.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Profil posodobljen"
 *    '400':
 *     description: Bad Request – napačni podatki.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/users/me/status:
 *  get:
 *   summary: Pridobi trenutni status
 *   description: Pridobi trenutni status lojalnosti uporabnika (OSNOVNI, SREBRNI, ZLATI, BRONASTI).
 *   tags: [Uporabnik]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – status pridobljen uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         status:
 *          type: string
 *          enum: [OSNOVNI, SREBRNI, ZLATI, BRONASTI]
 *       example:
 *        status: "SREBRNI"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/users/me/status-history:
 *  get:
 *   summary: Zgodovina statusov
 *   description: Pridobi zgodovino statusov lojalnosti uporabnika.
 *   tags: [Uporabnik]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – zgodovina pridobljena uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          status:
 *           type: string
 *          datum:
 *           type: string
 *           format: date
 *       example:
 *        - status: "OSNOVNI"
 *          datum: "2025-01-01"
 *        - status: "SREBRNI"
 *          datum: "2025-03-01"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/cards:
 *  post:
 *   summary: Naročilo kartice
 *   description: Naročilo kartice lojalnosti za trenutnega uporabnika.
 *   tags: [Kartica]
 *   security:
 *    - jwt: []
 *   responses:
 *    '201':
 *     description: Created – kartica uspešno naročena.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *         cardId:
 *          type: integer
 *       example:
 *        message: "Kartica naročena"
 *        cardId: 10
 *    '400':
 *     description: Bad Request – kartica že obstaja.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/cards/me:
 *  get:
 *   summary: Pridobi podatke kartice
 *   description: Pridobi podatke kartice lojalnosti trenutnega uporabnika.
 *   tags: [Kartica]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – podatki kartice pridobljeni uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         cardNumber:
 *          type: string
 *         status:
 *          type: string
 *          enum: [AKTIVNA, NEAKTIVNA]
 *       example:
 *        cardNumber: "1234-5678"
 *        status: "AKTIVNA"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '404':
 *     description: Not Found – kartica ne obstaja.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/purchases:
 *  get:
 *   summary: Zgodovina nakupov
 *   description: Pridobi zgodovino nakupov trenutnega uporabnika.
 *   tags: [Nakupi]
 *   security:
 *    - jwt: []
 *   parameters:
 *    - name: limit
 *      in: query
 *      schema:
 *       type: integer
 *       default: 10
 *    - name: offset
 *      in: query
 *      schema:
 *       type: integer
 *       default: 0
 *   responses:
 *    '200':
 *     description: OK – zgodovina pridobljena uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          id:
 *           type: integer
 *          znesek:
 *           type: number
 *           format: float
 *          datum:
 *           type: string
 *           format: date
 *       example:
 *        - id: 1
 *          znesek: 120.50
 *          datum: "2025-04-01"
 *        - id: 2
 *          znesek: 85.00
 *          datum: "2025-04-05"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/purchases/import:
 *  post:
 *   summary: Uvoz nakupov
 *   description: Uvoz nakupov iz zunanjega sistema (samo za ADMIN).
 *   tags: [Nakupi]
 *   security:
 *    - jwt: []
 *   requestBody:
 *    required: true
 *    description: Podatki nakupov za uvoz.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        nakupi:
 *         type: array
 *         items:
 *          type: object
 *          properties:
 *           userId:
 *            type: integer
 *           znesek:
 *            type: number
 *           datum:
 *            type: string
 *            format: date
 *   responses:
 *    '200':
 *     description: OK – nakupi uspešno uvoženi.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Nakupi uspešno uvoženi"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/points:
 *  get:
 *   summary: Pridobi točke
 *   description: Pridobi trenutno število točk lojalnosti uporabnika.
 *   tags: [Točke]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – točke pridobljene uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         points:
 *          type: integer
 *       example:
 *        points: 250
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/points/history:
 *  get:
 *   summary: Zgodovina točk
 *   description: Pridobi zgodovino točk lojalnosti uporabnika.
 *   tags: [Točke]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – zgodovina pridobljena uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          points:
 *           type: integer
 *          datum:
 *           type: string
 *           format: date
 *       example:
 *        - points: 50
 *          datum: "2025-03-01"
 *        - points: 75
 *          datum: "2025-04-01"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/points/calculate:
 *  post:
 *   summary: Izračun točk
 *   description: Izračun točk za tekočo obdobje (samo za ADMIN).
 *   tags: [Točke]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – točke uspešno izračunane.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *        example:
 *         message: "Točke uspešno izračunane"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/status/evaluate:
 *  post:
 *   summary: Preračun statusov
 *   description: Preračun statusov vseh uporabnikov (samo za ADMIN).
 *   tags: [Statusi]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – statusi uspešno posodobljeni.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Status posodobljen"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/status/rules:
 *  get:
 *   summary: Pridobi pravila statusov
 *   description: Pridobi pravila za prehajanje med statusi lojalnosti.
 *   tags: [Statusi]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – pravila pridobljena uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          status:
 *           type: string
 *          minZnesek:
 *           type: number
 *       example:
 *        - status: "SREBRNI"
 *          minZnesek: 500
 *        - status: "ZLATI"
 *          minZnesek: 1000
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/status/rules:
 *  put:
 *   summary: Posodobitev pravil statusov
 *   description: Posodobitev pravil za prehajanje med statusi (samo za ADMIN).
 *   tags: [Statusi]
 *   security:
 *    - jwt: []
 *   requestBody:
 *    required: true
 *    description: Nova pravila statusov.
 *    content:
 *     application/json:
 *      schema:
 *       type: array
 *       items:
 *        type: object
 *        properties:
 *         status:
 *          type: string
 *         minZnesek:
 *          type: number
 *   responses:
 *    '200':
 *     description: OK – pravila uspešno posodobljena.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Pravila posodobljena"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '400':
 *     description: Bad Request – napačni podatki.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/rewards:
 *  get:
 *   summary: Seznam nagrad
 *   description: Pridobi seznam vseh nagrad, ki jih lahko koristijo uporabniki.
 *   tags: [Nagrade]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – nagrade pridobljene uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          id:
 *           type: integer
 *          naziv:
 *           type: string
 *          potrebneTocke:
 *           type: integer
 *       example:
 *        - id: 1
 *          naziv: "Popust 10%"
 *          potrebneTocke: 100
 *        - id: 2
 *          naziv: "Popust 20%"
 *          potrebneTocke: 200
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/rewards/redeem:
 *  post:
 *   summary: Vnovčenje nagrade
 *   description: Vnovčenje nagrade z uporabo točk lojalnosti.
 *   tags: [Nagrade]
 *   security:
 *    - jwt: []
 *   requestBody:
 *    required: true
 *    description: ID nagrade za vnovčenje.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        rewardId:
 *         type: integer
 *       required:
 *        - rewardId
 *   responses:
 *    '200':
 *     description: OK – nagrada uspešno koriščena.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Nagrada uspešno koriščena"
 *    '400':
 *     description: Bad Request – insufficient points or invalid reward.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *       examples:
 *        insufficientPoints:
 *         value:
 *          message: "Nimate dovolj točk"
 *        invalidReward:
 *         value:
 *          message: "Nagrada ne obstaja"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/admin/users:
 *  get:
 *   summary: Seznam uporabnikov
 *   description: Pridobi seznam vseh uporabnikov (samo za ADMIN).
 *   tags: [Admin]
 *   security:
 *    - jwt: []
 *   parameters:
 *    - name: limit
 *      in: query
 *      schema:
 *       type: integer
 *       default: 10
 *    - name: offset
 *      in: query
 *      schema:
 *       type: integer
 *       default: 0
 *   responses:
 *    '200':
 *     description: OK – uporabniki pridobljeni uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          id:
 *           type: integer
 *          email:
 *           type: string
 *          status:
 *           type: string
 *       example:
 *        - id: 1
 *          email: user@example.com
 *          status: SREBRNI
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/admin/purchases:
 *  get:
 *   summary: Seznam nakupov
 *   description: Pridobi seznam vseh nakupov (samo za ADMIN).
 *   tags: [Admin]
 *   security:
 *    - jwt: []
 *   parameters:
 *    - name: limit
 *      in: query
 *      schema:
 *       type: integer
 *       default: 10
 *    - name: offset
 *      in: query
 *      schema:
 *       type: integer
 *       default: 0
 *   responses:
 *    '200':
 *     description: OK – nakupi pridobljeni uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          id:
 *           type: integer
 *          znesek:
 *           type: number
 *          datum:
 *           type: string
 *           format: date
 *       example:
 *        - id: 1
 *          znesek: 200
 *          datum: "2025-04-01"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/admin/statistics:
 *  get:
 *   summary: Statistika
 *   description: Pridobi statistiko sistema (samo za ADMIN).
 *   tags: [Admin]
 *   security:
 *    - jwt: []
 *   responses:
 *    '200':
 *     description: OK – statistika pridobljena uspešno.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         totalUsers:
 *          type: integer
 *         totalPurchases:
 *          type: integer
 *       example:
 *        totalUsers: 1000
 *        totalPurchases: 5000
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/admin/rewards:
 *  post:
 *   summary: Dodaj nagrado
 *   description: Dodaj novo nagrado v sistem (samo za ADMIN).
 *   tags: [Admin]
 *   security:
 *    - jwt: []
 *   requestBody:
 *    required: true
 *    description: Podatki nove nagrade.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        naziv:
 *         type: string
 *        potrebneTocke:
 *         type: integer
 *       required:
 *        - naziv
 *        - potrebneTocke
 *   responses:
 *    '201':
 *     description: Created – nagrada uspešno dodana.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Nagrada dodana"
 *    '400':
 *     description: Bad Request – napačni podatki.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/admin/rewards/{id}:
 *  put:
 *   summary: Posodobitev nagrade
 *   description: Posodobitev obstoječe nagrade (samo za ADMIN).
 *   tags: [Admin]
 *   security:
 *    - jwt: []
 *   parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      schema:
 *       type: integer
 *   requestBody:
 *    required: true
 *    description: Novi podatki nagrade.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        naziv:
 *         type: string
 *        potrebneTocke:
 *         type: integer
 *   responses:
 *    '200':
 *     description: OK – nagrada uspešno posodobljena.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Nagrada posodobljena"
 *    '400':
 *     description: Bad Request – napačni podatki.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '404':
 *     description: Not Found – nagrada ne obstaja.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/admin/rewards/{id}:
 *  delete:
 *   summary: Izbriši nagrado
 *   description: Izbriši nagrado iz sistema (samo za ADMIN).
 *   tags: [Admin]
 *   security:
 *    - jwt: []
 *   parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      schema:
 *       type: integer
 *   responses:
 *    '200':
 *     description: OK – nagrada uspešno izbrisana.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Nagrada izbrisana"
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '404':
 *     description: Not Found – nagrada ne obstaja.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/admin/points-rules:
 *  put:
 *   summary: Posodobitev pravil točkovanja
 *   description: Posodobitev pravil kako se dodelone točke (samo za ADMIN).
 *   tags: [Admin]
 *   security:
 *    - jwt: []
 *   requestBody:
 *    required: true
 *    description: Nova pravila točkovanja.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        maxZnesek:
 *         type: number
 *        tockePoCeneni:
 *         type: object
 *         properties:
 *          osnovni:
 *           type: number
 *          srebrni:
 *           type: number
 *          zlati:
 *           type: number
 *          bronasti:
 *           type: number
 *   responses:
 *    '200':
 *     description: OK – pravila uspešno posodobljena.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Pravila točkovanja posodobljena"
 *    '400':
 *     description: Bad Request – napačni podatki.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * /api/admin/status-rules:
 *  put:
 *   summary: Posodobitev pravil statusov
 *   description: Posodobitev pravil kako se prehaja med statusi (samo za ADMIN).
 *   tags: [Admin]
 *   security:
 *    - jwt: []
 *   requestBody:
 *    required: true
 *    description: Nova pravila statusov.
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        statusi:
 *         type: array
 *         items:
 *          type: object
 *          properties:
 *           status:
 *            type: string
 *           minZnesek:
 *            type: number
 *           maxZnesek:
 *            type: number
 *   responses:
 *    '200':
 *     description: OK – pravila uspešno posodobljena.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *       example:
 *        message: "Pravila statusov posodobljena"
 *    '400':
 *     description: Bad Request – napačni podatki.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '401':
 *     description: Unauthorized – neveludan token.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '403':
 *     description: Forbidden – samo admini imajo dostop.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 *    '500':
 *     description: Internal Server Error.
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessage'
 */

/**
 * @openapi
 * components:
 *  schemas:
 *   ErrorMessage:
 *    type: object
 *    properties:
 *     message:
 *      type: string
 *    required:
 *     - message
 *  securitySchemes:
 *   jwt:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 *    description: JWT token za avtentifikacijo
 */
