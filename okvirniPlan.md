# Načrt razvoja – Program lojalnosti Maestro

## 1. Osnovne predpostavke

- Trajanje projekta: **12 mesecev**
- Ekipa: **5 članov**
- Metodologija: **Agile (Scrum)**
- Dolžina sprinta: **1 teden**
- Število sprintov: ~ **48–50 sprintov**
- Število izdaj (releases): **5**

---

## 2. Pregled izdaj (Release plan)

### Release 1 – Osnovna infrastruktura (Mesec 1–2)
**Cilj:** Postaviti temelje sistema

- Nastavitev projekta (repo, MVC arhitektura, CI/CD)
- Osnovni backend (API struktura)- REST API z  NODE.JS
- Osnovni frontend (routing, layout)-ANGULAR
- Podatkovni model (Oracle baza)
- Registracija uporabnika
- Prijava/odjava

---

### Release 2 – Upravljanje uporabnikov (Mesec 3–4)
**Cilj:** Delujoč uporabniški račun

- Profil uporabnika
- Urejanje podatkov
- Naročilo kartice lojalnosti
- Osnovni status (osnovni)
- Email verifikacija

---

### Release 3 – Točke in nakupi (Mesec 5–7)
**Cilj:** Core funkcionalnost lojalnosti

- Integracija z obstoječim sistemom (nakupi)
- Shranjevanje nakupov
- Mesečni izračun točk
- Pregled točk
- Pregled zgodovine nakupov

---

### Release 4 – Statusi in nagrade (Mesec 8–10)
**Cilj:** Napredna logika sistema

- Implementacija pravil statusov
- Avtomatsko prehajanje statusov
- Zgodovina statusov
- Pregled nagrad
- Vnovčenje točk

---

### Release 5 – Admin + optimizacija (Mesec 11–12)
**Cilj:** Upravljanje sistema

- Admin panel
- Upravljanje nagrad
- Upravljanje pravil (statusi + točke)
- Statistika in analitika
- Optimizacija sistema
- Večjezičnost (EN/SLO)

---

## 3. Sprint plan (prvi sprinti)

### Sprint 1
- Setup GitHub repozitorija
- Nastavitev razvojnega okolja
- Osnovna MVC struktura projekta (frontend-angular + backend-node.js)
- Definicija podatkovnega modela (pretvorba ER modela v fizični model)

---

### Sprint 2
- Dopolnjevanje podatkovne baze
- API za registracijo
- Frontend: registracija (/registracija)

---

### Sprint 3
- Login sistem (/prijava)
- Avtentikacija (JWT / session)
- Email verifikacija (resend)

---

### Sprint 4
- Profil uporabnika (/profil)
- Urejanje profila (/profil/uredi)
- Osnovna navigacija

---

### Sprint 5
- Naročilo kartice (/naroci-kartico)
- Povezava kartice z uporabnikom
- Backend logika za članstvo

---

### Sprint 6
- Integracija nakupov (dummy podatki)
- Tabela nakupov
- Prikaz zgodovine (/zgodovina-nakupov)

---

### Sprint 7
- Izračun točk (osnovna logika)
- Shranjevanje točk
- Prikaz točk v profilu

---

### Sprint 8
- Implementacija statusov
- Dodelitev začetnega statusa
- Prikaz statusa

---

## 4. Razdelitev dela (okvirno)

- **Backend (2 osebi)**  
  API, baza, integracije, logika

- **Frontend (2 osebi)**  
  UI, povezava na API, Figma implementacija

- **Full-stack / QA (1 oseba)**  
  testiranje, dokumentacija, povezovanje

---

## 5. Opombe

- Sprinti so kratki (1 teden), zato so naloge majhne
- Prioriteta: najprej **MVP (Release 1–3)**
- Admin funkcionalnosti pridejo kasneje
- Sistem mora biti skalabilen (≥500k uporabnikov)

## 6. Strategija testiranja

Testiranje bo potekalo kontinuirano skozi celoten razvoj (v vsakem sprintu) in dodatno pred vsako izdajo (release).

### Tipi testiranja

- **Unit testiranje**
  - Testiranje posameznih funkcij (backend logika, izračun točk)
  - Orodja: npr. Jest (Node.js)

- **Integracijsko testiranje**
  - Testiranje povezav med komponentami (API ↔ baza, frontend ↔ backend)

- **Sistemsko testiranje**
  - Testiranje celotnega sistema kot celote

- **Uporabniško testiranje (UAT)**
  - Preverjanje funkcionalnosti glede na zahteve

- **UI testiranje**
  - Preverjanje pravilnosti zaslonskih mask (Figma → implementacija)

- **Performance testiranje**
  - Obremenitveni testi (≥ 500.000 uporabnikov)

- **Varnostno testiranje**
  - Avtentikacija, zaščita podatkov, validacija inputov

---

## 7. Testiranje po izdajah (Release plan dopolnitev)

### Release 1
- Unit testi za REST API
- Test registracije in prijave
- Osnovni integracijski testi

---

### Release 2
- Test uporabniškega profila
- Test validacije podatkov
- UI testiranje (registracija, profil)

---

### Release 3
- Test izračuna točk
- Test integracije z nakupi
- Test pravilnosti podatkov

---

### Release 4
- Test pravil statusov
- Test prehajanja med statusi
- Test vnovčenja točk

---

### Release 5
- Celovito sistemsko testiranje
- Performance test
- Security test
- Uporabniško testiranje (UAT)

---

## 8. Testiranje v sprintih

Testiranje je vključeno v vsak sprint:

### Sprint X (velja za vse sprinte)

- Implementacija funkcionalnosti
- Pisanje unit testov
- Testiranje API endpointov
- Testiranje UI (manualno)
- Popravljanje napak (bug fixing)

---

## 9. Vloga QA (tester)

- Pisanje testnih scenarijev
- Izvajanje testov
- Evidenca napak (bug tracking)
- Validacija zahtev (ali funkcionalnost ustreza specifikaciji)

---

## 10. Orodja za testiranje

- Backend: Jest / Mocha
- Frontend: Cypress / Selenium
- API: Postman
- Bug tracking: GitHub Issues
