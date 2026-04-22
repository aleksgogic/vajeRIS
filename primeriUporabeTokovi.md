# Primeri uporabe za registracijo, 

### 1 Registracija

1. **Naslov**: Registracija
2. **Akterji**: Uporabniška vloga
3. **Povzetek funkcionalnosti**: Nov uporabnik opravi registracijo in aktivira račun prek e-pošte.
4. **Osnovni tok**:
   1. Uporabnik odpre masko za registracijo.
   2. Izpolni korake registracije (vnos imena, priimka, e-naslova, gesla-2x, uporabniškega imena, naslova bivanja in telefonske številke)
   3. Sistem validira podatke, ustvari račun v stanju "nepotrjen" in pošlje verifikacijsko povezavo.
   4. Uporabnik odpre verifikacijsko povezavo.
   5. Sistem aktivira račun in zaključi primer uporabe.
5. **Alternativni tokovi in napake**:
   - A1: Uporabnik popravi vnos v vnosnem polju.
     1. Uporabnik odpre masko za registracijo.
     2. Izpolni vnosne podatke.
     3. Uporabnik ugotovi da je napačno vnesel e-naslov.
     4. Uporabnik se vrne na vnosno polje za e-naslov in popravi podatek.
     5. Sistem ohrani že veljavne podatke, da jih ni treba ponovno vpisovati.
     6. Uporabnik nadaljuje in odda registracijo.
     7. Sistem validira podatke, ustvari račun v stanju "nepotrjen" in pošlje verifikacijsko povezavo.
     8. Uporabnik odpre verifikacijsko povezavo.
     9. Sistem aktivira račun in zaključi primer uporabe.
   - E1: E-naslov je že registriran.
     1. Uporabnik odpre masko za registracijo.
     2. Izpolni registracijo.
     3. Uporabnik pri oddaji vnese e-naslov, ki že obstaja v sistemu.
     4. Sistem zavrne registracijo in prikaže napako o že uporabljenem e-naslovu.
     5. Uporabnik vnese drug e-naslov in ponovno odda obrazec.
     6. Sistem validira podatke, ustvari račun v stanju "nepotrjen" in pošlje verifikacijsko povezavo.
     7. Uporabnik odpre verifikacijsko povezavo.
     8. Sistem aktivira račun in zaključi primer uporabe.
   - E2: Verifikacijska povezava je potekla.
     1. Uporabnik odpre masko za registracijo.
     2. Izpolni registracijo.
     3. Sistem validira podatke, ustvari račun v stanju "nepotrjen" in pošlje verifikacijsko povezavo.
     4. Uporabnik odpre povezavo za potrditev računa po pretečenem roku.
     5. Sistem zavrne aktivacijo in prikaže obvestilo o neveljavni povezavi.
     6. Uporabnik zahteva novo verifikacijsko povezavo.
     7. Sistem pošlje novo povezavo.
     8. Uporabnik odpre novo verifikacijsko povezavo.
     9. Sistem aktivira račun in zaključi primer uporabe.
6. **Predpogoj**: Uporabnik še nima računa v sistemu.
7. **Popogoj, posledice in učinki**: Uspeh: račun je aktiviran. Neuspeh: račun ostane neaktiven.
8. **Posebne zahteve**: Varna obravnava gesla in validacija obveznih polj.
9. **Prioriteta (MoSCoW)**: Must
10. **Sprejemni testi**:

| Primer uporabe  | Funkcijski sistem       | Začetno stanje   | Vhod                          | Pričakovan izhod                                  |
| --------------- | ----------------------- | ---------------- | ----------------------------- | ------------------------------------------------- |
| Registrirati se | Registracija uporabnika | Uporabnik nima računa | Veljavni podatki registracije | Ustvarjen nepotrjen račun in poslana verifikacija |

11. **Razširitev - pogostost uporabe in triggerji**: Pogostost: nizka. Trigger: klik na registracijo.

### 2 Prijava

1. **Naslov**: Prijaviti se
2. **Akterji**: Uporabnik (vloga), Administrator (vloga)
3. **Povzetek funkcionalnosti**: Akter se avtenticira in je preusmerjen na ustrezen pogled.
4. **Osnovni tok**:
      1. Uporabnik odpre masko za prijavo.
      2. Vnese e-naslov in geslo.
      3. Sistem preveri poverilnice in vlogo.
      4. Sistem vzpostavi sejo.
      5. Sistem preusmeri na uporabniško nadzorno ploščo.
5. **Alternativni tokovi in napake**:
    - A1: Prijava administratorja.
      1. Admin odpre masko za prijavo.
      2. Vnese e-naslov in geslo za administratorski račun.
      3. Sistem preveri poverilnice in vlogo.
      4. Sistem prepozna administratorsko vlogo.
      5. Sistem vzpostavi sejo.
      6. Sistem preusmeri na administratorsko nadzorno ploščo.
    - A2: Pozabljeno geslo in ponastavitev.
      1. uporabnik odpre masko za prijavo.
      2. Vnese e-naslov in napačno geslo.
      3. Sistem preveri poverilnice in zavrne prijavo.
      4. Sistem poveča števec neuspelih poskusov in prikaže napako.
      5. Ime razširitve: Ponastavitev gesla ob pozabljenem geslu, Pogoj: pozabljeno geslo: Primer uporabe, ki se izvede: Ponastavitev gesla.
      5. Uporabnik vnese novo geslo.
      6. Sistem preveri poverilnice in vlogo.
      7. Sistem vzpostavi sejo.
      8. Sistem preusmeri na ustrezno nadzorno ploščo.
    - E1: Napačno geslo.
      1. uporabnik odpre masko za prijavo.
      2. Vnese e-naslov in napačno geslo.
      3. Sistem preveri poverilnice in zavrne prijavo.
      4. Sistem poveča števec neuspelih poskusov in prikaže napako.
      5. Uporabnik popravi geslo in ponovno odda prijavo.
      6. Sistem preveri poverilnice in vlogo.
      7. Sistem vzpostavi sejo.
      8. Sistem preusmeri na ustrezno nadzorno ploščo.
    - E2: Račun ni verificiran.
      1. Uporabnik odpre masko za prijavo.
      2. Vnese e-naslov in geslo neverificiranega računa.
      3. Sistem preveri poverilnice in ugotovi, da račun ni verificiran.
      4. Sistem zavrne prijavo in ponudi ponovno pošiljanje verifikacije.
      5. Uporabnik potrdi e-poštni naslov preko nove verifikacijske povezave.
      6. Uporabnik ponovno odpre prijavno masko in vnese e-naslov ter geslo.
      7. Sistem preveri poverilnice in vlogo.
      8. Sistem vzpostavi sejo in preusmeri na ustrezno nadzorno ploščo.
6. **Predpogoj**: Račun obstaja.
7. **Popogoj, posledice in učinki**: Uspeh: aktivna seja. Neuspeh: seja ni vzpostavljena.
8. **Posebne zahteve**: Zaščita prijavnega toka in varna seja.
9. **Prioriteta (MoSCoW)**: Must
10. **Sprejemni testi**:

| Primer uporabe | Funkcijski sistem        | Začetno stanje      | Vhod                       | Pričakovan izhod                |
| -------------- | ------------------------ | ------------------- | -------------------------- | ------------------------------- |
| Prijaviti se   | Avtentikacija uporabnika | Uporabnik ima račun | Veljaven e-naslov in geslo | Uspešna prijava in preusmeritev |

11. **Razširitev - pogostost uporabe in triggerji**: Pogostost: visoka. Trigger: klik na prijavo.


### 2 Unovčenje točk zvestobe

1. **Naslov**: Unovčiti točke zvestobe
2. **Akterji**: Uporabnik (vloga)
3. **Povzetek funkcionalnosti**: Akter obišče ponudbo nagrad in z zasluženimi točkami kupi nagrado.
4. **Osnovni tok**:
      1. Uporabnik odpre masko za nagrade.
      2. Izbere nagrado.
      3. Sistem preveri če ima uporabnik veljavno količino točk zvestobe ter če je nagrada na zalogi in odobri izbrano nagrado.
      4. Sistem zmanjša število točk na profilu uporabnika za število točk nagrade.
      5. Sistem zmanjša količino izbrane nagrade v zalogi.
      6. Nagrada je poslana uporabniku in o tem je obveščen ter preusmerjen na masko za nagrade (ali jo prevzame na licu mesta.)
5. **Alternativni tokovi in napake**:
    - E1: Ne zadostna količina točk zvestobe na profiu uporabnika.
      1. Uporabnik odpre masko za nagrade.
      2. Izbere nagrado.
      3. Sistem preveri če ima uporabnik veljavno količino točk zvestobe in ugotovi, da nima dovolj.
      4. Sistem obvesti uporabnika o ne zadostni količini točk.
      5. Sistem preusmeri uporabnika na ostale nagrade.
    - E2: Nagrada ni na zalogi.
      1. Uporabnik odpre masko za nagrade.
      2. Izbere nagrado.
      3. Sistem preveri če ima uporabnik veljavno količino točk zvestobe.
      4. Sistem preveri če je nagrada na zalogi in ugotovi da ni.
      4. Sistem obvesti uporabnika, da nagrada ni na zalogi.
      5. Sistem preusmeri uporabnika na ostale nagrade.
6. **Predpogoj**: Uporabnik ima zadostvno količino točk zvestobe in nagrada je na zalogi.
7. **Popogoj, posledice in učinki**: Uspeh: uporabnik je nagrado dobil/kupil s točkami zvestobe. Neuspeh: uporabnik nagrade ni dobil/ni kupil
8. **Posebne zahteve**: 
9. **Prioriteta (MoSCoW)**: Must
10. **Sprejemni testi**:

| Primer uporabe           | Funkcijski sistem        | Začetno stanje      | Vhod                             | Pričakovan izhod                |
| ------------------------ | ------------------------ | ------------------- | -------------------------------- | ------------------------------- |
| Unovčiti točke zvestobe  | Avtentikacija uporabnika | Uporabnik je prijavljen in ima zadostvno količino točk | Veljaven e-naslov in geslo | Uspešna prijava in preusmeritev |

11. **Razširitev - pogostost uporabe in triggerji**: Pogostost: visoka. Trigger: klik na prijavo.