# INSTRUKCJA

Aby uruchomić aplikację potrzebne są narzędzia takie jak: MongoDB, NodeJS, Yarn
Do poprawnego działania aplikacji webowej musi być uruchomiony serwer (backend)

## BACKEND

1. wejdź do folderu backend
2. uruchom polecenie instalacji pakietów

### `yarn`

3. uruchom aplikację

### `yarn run dev`

## FRONTEND

1. wejdź do folderu frontend
2. uruchom polecenie instalacji pakietów

### `yarn`

3. uruchom aplikację

### `yarn start`

## SPOSÓB DZIAŁANIA

Aplikacja webowa wyświetla dane jakie dostaje z backendu. Domyślnie odświeżanie ustawione jest na 0, czyli zostaną pobrane dane tylko w momencie wczytania strony. Odświeżanie można zmienić za pomocą inputa w prawym górnym rogu (wartości w sekundach). Aby móc przetestować aplikację należy dodać graczy za pomocą przycisku "Add" na górze strony. Każde wciśnięcie dodaje do bazy nowego gracza (jeżeli odświeżanie nie jest ustawione to nie pokażą się gracze). Paginacja ustawiona jest z poziomu kodu na 10. Filtrowanie graczy po nicku obsługiwane jest po każdej zmianie w inpucie. Po stronie backendu zapięty jest cron który co sekundę losuje gracza i daje mu losowe punkty. Filtrowanie również oddziałuje na paginację. W kodzie przedstawiłem użycie zarówno klas jak i komponentów funkcyjnych wykorzystujące hooki.
