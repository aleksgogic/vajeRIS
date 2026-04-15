# Načrt backenda (REST API) – Program lojalnosti Maestro

## 1. Osnovna arhitektura

- Arhitektura: **REST API**
- Backend: **Node.js (Express)**
- Frontend: **Angular**
- Baza: **Oracle**
- Avtentikacija: **JWT**
- Format: **JSON**

---

## 2. Glavni moduli sistema

- Avtentikacija
- Uporabnik (Stranka)
- Kartica lojalnosti
- Nakupi
- Točke
- Statusi
- Nagrade
- Administrator

---

## 3. REST API specifikacija

---

## 3.1 AVTENTIKACIJA

### POST /api/auth/register

**Opis:** Registracija uporabnika

**Request:**
```json
{
  "ime": "Janez",
  "priimek": "Novak",
  "email": "janez@example.com",
  "geslo": "password123"
}

Response (201):
{
  "message": "Uporabnik uspešno registriran",
  "userId": 1
}

POST /api/auth/login

Opis: Prijava uporabnika

Request:

{
  "email": "janez@example.com",
  "geslo": "password123"
}

Response (200):

{
  "token": "jwt_token",
  "user": {
    "id": 1,
    "email": "janez@example.com",
    "role": "USER"
  }
}

POST /api/auth/verify-email

Response (200):

{
  "message": "Email uspešno potrjen"
}
POST /api/auth/reset-password

Response (200):

{
  "message": "Navodila za reset gesla poslana"
}
3.2 UPORABNIK
GET /api/users/me

Response (200):

{
  "id": 1,
  "ime": "Janez",
  "priimek": "Novak",
  "email": "janez@example.com"
}
PUT /api/users/me

Response (200):

{
  "message": "Profil posodobljen"
}
GET /api/users/me/status

Response (200):

{
  "status": "SREBRNI"
}
GET /api/users/me/status-history

Response (200):

[
  {
    "status": "OSNOVNI",
    "datum": "2025-01-01"
  },
  {
    "status": "SREBRNI",
    "datum": "2025-03-01"
  }
]
3.3 KARTICA
POST /api/cards

Response (201):

{
  "message": "Kartica naročena",
  "cardId": 10
}
GET /api/cards/me

Response (200):

{
  "cardNumber": "1234-5678",
  "status": "AKTIVNA"
}
3.4 NAKUPI
GET /api/purchases

Response (200):

[
  {
    "id": 1,
    "znesek": 120.50,
    "datum": "2025-04-01"
  }
]
POST /api/purchases/import

Response (200):

{
  "message": "Nakupi uspešno uvoženi"
}
3.5 TOČKE
GET /api/points

Response (200):

{
  "points": 250
}
GET /api/points/history

Response (200):

[
  {
    "points": 50,
    "datum": "2025-03-01"
  }
]
POST /api/points/calculate

Response (200):

{
  "message": "Točke uspešno izračunane"
}
3.6 STATUSI
POST /api/status/evaluate

Response (200):

{
  "message": "Status posodobljen"
}
GET /api/status/rules

Response (200):

[
  {
    "status": "SREBRNI",
    "minZnesek": 500
  }
]
PUT /api/status/rules

Response (200):

{
  "message": "Pravila posodobljena"
}
3.7 NAGRADE
GET /api/rewards

Response (200):

[
  {
    "id": 1,
    "naziv": "Popust 10%",
    "potrebneTocke": 100
  }
]
POST /api/rewards/redeem

Request:

{
  "rewardId": 1
}

Response (200):

{
  "message": "Nagrada uspešno koriščena"
}
3.8 ADMIN
GET /api/admin/users

Response (200):

[
  {
    "id": 1,
    "email": "user@example.com"
  }
]
GET /api/admin/purchases

Response (200):

[
  {
    "id": 1,
    "znesek": 200
  }
]
GET /api/admin/statistics

Response (200):

{
  "totalUsers": 1000,
  "totalPurchases": 5000
}
POST /api/admin/rewards

Response (201):

{
  "message": "Nagrada dodana"
}
PUT /api/admin/rewards/:id

Response (200):

{
  "message": "Nagrada posodobljena"
}
DELETE /api/admin/rewards/:id

Response (200):

{
  "message": "Nagrada izbrisana"
}
PUT /api/admin/points-rules

Response (200):

{
  "message": "Pravila točkovanja posodobljena"
}
PUT /api/admin/status-rules

Response (200):

{
  "message": "Pravila statusov posodobljena"
}

4. Povezava frontend ↔ backend
Route	            Endpoint
/registracija	    POST /api/auth/register
/prijava	        POST /api/auth/login
/profil	            GET /api/users/me
/naroci-kartico 	POST /api/cards
/zgodovina-nakupov	GET /api/purchases
/nagrade	        GET /api/rewards
/admin	            GET /api/admin/statistics

5. Cron jobi
Mesečni izračun točk
Posodobitev statusov

6. Varnost
JWT avtentikacija
Hashiranje gesel (bcrypt)
Role-based access (ADMIN / USER)
Validacija vhodnih podatkov

7. Opombe
API je stateless
Vsi endpointi (razen auth) zahtevajo token
Uporaba service layer arhitekture

---
