**"Lumia" workshop**

En övningsuppgift från kursen Producera och leverera mjukvara (fjärde kursen på YH-utbildning Fullstackutvecklare inriktning JavaScript, Teknikhögskolan, start HT23).

Syftet med uppgiften var att lära sig React, som vi börjat arbeta med i denna kurs, och i någon mån att bekanta sig med Bootstrap inför senare uppgifter. Uppgiften var avsedd för just övning och skulle inte lämnas in eller ligga till grund för betyg.

Vi fick en starter med material att utgå från:

- HTML-filer (index.html och contact.html)
- JSON-data (produktdata)
- stylesheets (custom och Bootstrap)

Till stöd hade vi User Stories (se nedan) och en video som visar hur (delar av) den färdiga produkten ska se ut och fungera, https://drive.google.com/file/d/1UycGO6R10bH8d1_SunoU-mtM6DxXntCv/view

Uppgiften skulle egentligen utföras i grupper om två studerande, men eftersom jag var sjuk när övriga klassen arbetade med uppgiften har jag utfört den på egen hand över lite längre tid. Det har gjort att jag gått miste om tillfällen till gemensam informationssökning (kunskapsutjämning),problemlösning och parkodning, men det har å andra sidan varit en boost att märka att jag självständigt kan bygga en visuellt något mer avancerad app med ett för mig nytt verktyg (React).

Jag har inte lagt mycket tid på att anpassa Bootstrap-stylingen och några delar följer inte helt videodemon: bakgrunden resizar abrupt under routing i vissa browserstorlekar och varukorgsmodalen följer inte heller helt med vid resizing av browsern. Eftersom jag inte tror att jag kommer att använda Bootstrap i större utsträckning utanför utbildningen har jag valt att bortse från dessa styling-skavanker och fokusera på att lära mig React, och anse user story 2 som uppfylld "good enough".

Jag har också testat att använda JSON för fake API i denna uppgift (koden för detta ligger kvar utkommenterad), men i slutänden valde jag att helt enkelt importera produktdata synkront – mängden produktdata var i detta fall mycket begränsad.

De viktigaste källor jag använt för uppgiften finns i sources.md.

----- User Stories -----

Använd dessa User Stories som stöd:

X 1. Som användare vill jag kunna se Lumias lampor.

X 2. Som användare vill jag att utseendet på webbsidans olika delar stämmer överens med videon.

X 3. Som användare vill jag kunna söka bland Lumias lampor och få träffar baserat på lampornas namn.

X 4. Som användare vill jag kunna gå mellan “Kontakta oss” och startsidan genom att klicka i menyn, utan att webbläsaren laddar om sidan.

X 5. Som användare vill jag kunna lägga till lampor i varukorgen på det sätt som visas i skissvideon.

X 6. Som användare vill jag kunna stänga varukorgen genom att klicka utanför den.

X 7. Som användare vill jag att varukorgens “total” uppdateras när jag lägger nya lampor i varukorgen.

X 8. Som användare vill jag kunna söka bland Lumias lampor och få träffar baserat på lampornas dolda keywords.

X 9. Som användare vill jag att om jag lägger flera exemplar av samma lampa ska inte nya rader skapas i varukorgen, utan istället att summan och ett antal uppdateras.

X 10. Som användare vill jag kunna minska antalet av en lampa i varukorgen.

X 11. Som användare vill jag kunna ta bort en lampa i varukorgen.

X 12. Som användare vill jag kunna tömma varukorgen.

X 13. Som användare vill jag kunna öppna varukorgen genom att klicka på ett menyalternativ för detta.

X 14. Som användare vill jag kunna klicka på “Beställ” i varukorgen och få en bekräftelse på att jag gjort detta.

X 15. Som användare vill jag få en bekräftelse i webbläsaren om kontaktar Lumia på “Kontakta oss”-sidan.
