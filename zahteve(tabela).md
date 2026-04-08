# Specifikacija zahtev – sledljivost (Program lojalnosti Maestro)

Dostopno na: https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?t=PGQ8T5fZjMAWlPkg-0

Za direktno vstavljanje poti spreminjaj naslednji link: https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?t=PGQ8T5fZjMAWlPkg-0&preview-route=%2Fnagrade
tako da zamenjaš zadnjo besedo linka "nagrada" z recimo "registracija" ali pa "admin" itd. Ali pa ponovno odpri vsak link v tabeli, ki predstavlja doloceno zaslonsko masko.

Podatkovni model ima improvizacijo "inheritance" z dvema 0,n povezavama iz uporabnika do admina in stranke, ker ima "zastojn verzija" powerdesignerja 16.5 onemogočeno to funkcionalnost.


## 1. Funkcionalne zahteve – STRANKA

| Zahteva | Funkcija | Zaslonske maske (Figma) | Tabele PM |
|--------|----------|-------------------------|-----------|
| Registracija stranke | Vnos podatkov, ustvarjanje računa, email verifikacija | [Registracija](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fregistracija) | stranka |
| Prijava/odjava | Avtentikacija uporabnika | [Prijava](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fprijava) | stranka |
| Naročilo kartice | Kreiranje kartice lojalnosti | [Naroči kartico](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fnaroci-kartico) | kartica_lojalnosti, stranka |
| Dodelitev statusa | Nastavitev začetnega statusa | / | status_lojalnosti, stranka |
| Pregled točk | Prikaz točk zvestobe | [Profil](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fprofil) | tocke_zvestobe, stranka |
| Pregled statusa | Prikaz trenutnega statusa + zgodovina | [Profil](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fprofil), [Zgodovina statusov](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fzgodovina-statusov) | status_lojalnosti, status_zgodovina |
| Pregled nagrad | Prikaz razpoložljivih nagrad | [Nagrade](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fnagrade) | nagrada |
| Dodeljevanje točk | Mesečni izračun točk | / | pravila_tockovanja, tocke_zvestobe, nakup |
| Vnovčenje točk | Uporaba točk za nagrade | [Nagrade](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fnagrade) | vnovcenje, nagrada, tocke_zvestobe |
| Sprememba statusa | Avtomatski prehod statusa | / | pravila_statusa, status_zgodovina |
| Izbira jezika | Preklop jezika | [Profil](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fprofil) | / |

---

## 2. Funkcionalne zahteve – ADMINISTRATOR

| Zahteva | Funkcija | Zaslonske maske (Figma) | Tabele PM |
|--------|----------|-------------------------|-----------|
| Prijava/odjava admina | Avtentikacija administratorja | [Admin prijava](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fadmin%2Fprijava) | admin |
| Pregled statusov strank | Filtriranje po obdobju | [Admin statusi](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fadmin%2Fstatusi) | stranka, status_zgodovina |
| Statistika nakupov | Analiza nakupov | [Admin nakupi](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fadmin%2Fnakupi) | nakup |
| Poizvedbe nad podatki | Izvajanje poizvedb | [Admin dashboard](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fadmin) | vse |
| Upravljanje nagrad | Dodajanje, urejanje, brisanje nagrad | [Admin](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fadmin) | nagrada |
| Upravljanje pravil točkovanja | Spreminjanje pravil za dodeljevanje točk | [Admin](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fadmin) | pravila_tockovanja |
| Upravljanje pravil statusov | Spreminjanje pravil prehodov statusov | [Admin statusi](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fadmin%2Fstatusi) | pravila_statusa |
| Upravljanje sporočil | Pregled sporočil strank | [Admin sporočila](https://www.figma.com/make/GEkmzHMuA9bZls8PZpxZHo/Loyalty-Program-Web-App?p=f&t=iFMcLhiMjNP43unB-0&fullscreen=1&preview-route=%2Fadmin%2Fsporocila) | kontaktni_obrazec |

---

## 3. Funkcionalne zahteve – INTEGRACIJA

| Zahteva | Funkcija | Zaslonske maske | Tabele PM |
|--------|----------|----------------|-----------|
| Pridobivanje podatkov o nakupih | Uvoz podatkov iz obstoječega sistema | / | nakup |

---

## Opombe

- "/" pomeni backend proces brez UI
- Vsi linki vodijo direktno na Figma screen (prek preview-route)

---

## Zaslonske maske (pregled)

### STRANKA

- /
- /registracija
- /prijava
- /naroci-kartico
- /profil
- /profil/uredi
- /pozabljeno-geslo
- /kontakt
- /zgodovina-statusov
- /zgodovina-nakupov
- /nagrade
- /gdpr
- /pogoji-uporabe
- /pogosta-vprasanja
- /kontakt-info

### ADMIN

- /admin
- /admin/uporabniki
- /admin/nakupi
- /admin/statusi
- /admin/sporocila

### ADMIN AVTENTIKACIJA

- /admin/prijava