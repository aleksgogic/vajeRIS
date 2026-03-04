# vajeRIS

## Funkcionalne zahteve-možno jih je pokazati v appu

### stranka-tukaj so navedene fun zahteve za stranko razdeljene na sklope

#### avtentikacija-vse potrebne funkcionalne zahteve za potrebe overjanja stranke
- 1. omogoča registracijo v sistem z vnosom osebnih podatkov(potrditev registracije prek email naslova vnešenega ob registraciji)
- 2. omogoča prijava/odjava v sistem(po opravljeni registraciji)
naročilo kartice

#### vmesnik-kar stranka vidi in uporablja na vmesniku
- 1. omogoča pregled točk zvestobe
- 2. omogoča pregled nakupovalnega programa
- 3. omogoča pregled zneskov preteklih nakupov
- 4. omogoča dobijanje točk zvestobe
- 5. omogoča vnovčenje točk zvestobe
- 6. omogoča izračun točk 1x na mesec (verjetno avtomatsko)
- 7. omogoča možnost spreminjanja/dodajanje/brisanja količine točk glede na izrabno ceno (npr trenutno je do 200€ dobi osnovni 5 srebrni 7,5 bronasti 0 in zlati 10--npr možnost spremembe tako cene npr spremenimo do 300€ in spremenimo koliko točk dobi posamezna kategorija)
- 8. omogoča možnost spreminjanja pravil kako stranke prehajajo med statusi
- 9. omogoča prehod stranke med statusi navzgor če zadošča pogojem in prehod navzdol če ne uspe doseči pogoja (seveda glede na pogoje zapisane v opisu programa padec iz zlatega v srebrni če ne zadošča pogoju 500€ mesecno....itd)
- 10. omogoča možnost prehoda med jeziki
- 11. naročilo kartice

### admin-tukaj so navedene fun zahteve za admina razdeljene na sklope

#### avtentikacija-vse potrebne funkcionalne zahteve za potrebe overjanja admina
- 11. registracija v sistem(potrditev registracije prek email naslova vnesenega ob registraciji)-glej dol 5. točko ne funkcionalne verjetno se admina hard kodira
- 12. prijava/odjava v sistem(po opravljeni registraciji)

#### vmesnik-kar admin vidi in uporablja na vmesniku
- 13. omogoča pregled statusov strank za poljubna obdobja(dnevno, mesečno, letno, alltime)
- 14. omogoča pregled statistike nakupov
- 15. omogoča poljubna poizvedba baze
- 16. omogoča upravljanje s programom nagrad, ki je na voljo kot nagrada za točke zvestobe
- 19. pregled statusov strank za izbrano obdobje
- 21. izvajanje poljubnih poizvedb nad bazo
- 23. upravljanje pravil točkovanja
- 24. upravljanje pravil prehajanja med statusi

#### Integracija
- Povezava z obstoječim informacijskim sistemom za potrebe pridobivanja podatkov


## Ne funkcionalne zahteve-tukaj so opisane ne funkcionalne zahteve

### 1. Zmogljivost in skalabilnost
- 1. sistem mora delovati za vsaj 500.000 uporabnikov, omogočati mora tudi razširitev na bistveno večje število uporabnikov (tudi mednarodno) (!!!vpraši koliko je to bistveno več!!!)

### 2. Večjezičnost
- 1. podpora za angleščino in slovenščino

### 3. Varnost
- 1. overjanje stranke registraciji

### 3. Tehnološke zahteve
- 1. uporabljena podatkovna baza Oracle

### 4. Zanesljivost in avtomatizacija

- 1. Mesečni izračun točk mora biti avtomatiziran
- 2. Sistem mora zagotavljati pravilnost izračunov
- 3. Zagotovljena mora biti visoka razpoložljivost

### Ostalo
- 1. v naprej določen admin račun