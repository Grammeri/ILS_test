**english**

The task involves implementing an application for displaying routes on a map. Given a set of routes (Table 1), the requirement is to implement a screen where, to the left, there is a table listing the routes, and to the right, a map. When selecting a route row from the table, the selected row should be highlighted, and on the map, the route points should be displayed as markers along with a polyline, representing the movement track across these route points. This polyline can be obtained from a road track construction service such as OSRM (or other similar services).

On choosing a route from the table, the map should centralize and scale in such a way that the entire route is within the visible area of the map. At any given time, only one route - the selected one - can be displayed on the map.

It is preferable to use the Leaflet package for map display, AntDesign for components, Redux (redux-toolkit) for managing the state of components and data, and Sagas for event handling. The application base can be React Create App or Vite. Only functional components and predominantly functional programming should be employed. The code should be distributed across directories based on its functions: components, selectors, reducers, sagas, HTTP-services, helpers, etc. The use of sagas for obtaining the track from points is mandatory, as is the use of any HTTP service for connecting to the track construction API. Error handling for HTTP services should be incorporated. CSS styles can be written using the SASS/LESS preprocessor.

The solution should be provided as source code, ready for deployment on a web server (either a file archive or a link to Github, for example). The application should be written cleanly and neatly, employing known patterns, and should be immediately refactored, as if you were writing a production application.

For obtaining the route polylines, the OSRM API can be used:
http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service

Route 1: 59.84660399, 30.29496392, 59.82934196, 30.42423701, 59.83567701, 30.38064206
Route 2: 59.82934196, 30.42423701, 59.82761295, 30.41705607, 59.84660399, 30.29496392
Route 3: 59.83567701, 30.38064206, 59.84660399, 30.29496392, 59.82761295, 30.41705607

**русский**

Требуется реализовать приложение по отображению маршрутов на карте.
Используя заданный набор маршрутов (таблица 1), реализовать экран, в котором слева будет таблица со списком маршрутов, а справа карта. При выборе в таблице строки с маршрутом, выбранная строка должна подсветиться, а на карте должны отобразиться точки маршрута в виде маркеров и полилиния (polyline) трека движения по точкам маршрута, полученная из сервиса построения треков по дорогам OSRM (или другой). При выборе маршрута в таблице, на карте происходит центрирование и масштабирование таким образом, что весь маршрут должен попасть в область видимости карты. Одновременно на карте может отображаться только один маршрут – выбранный.
Для отображения карты желательно использовать пакет Leaflet, для компонентов — AntDesign, для хранения стейта компонентов и данных обязательно использовать Redux (redux-toolkit), для реакции на события — Sagas. В качестве основы приложения можно использовать React Create App или Vite. Использовать только функциональные компоненты и преимущественно функциональное программирование. Распределять код по каталогам, исходя из принадлежности к функциям: components, selectors, reducers, sagas, HTTP-services, helpers, etc. Обязательно задействовать sagas для получения трека по точкам, а также обязательно задействовать любой HTTP-сервис для обращения к API построения треков. Предусмотреть обработку ошибок от HTTP-сервисов. CSS-стили допускается писать в  препроцессоре SASS/LESS.
Решение требуется предоставить в виде исходного кода, готового для развертывания на веб-сервере (приложить файловый архив или ссылку на github, например). Приложение нужно писать чисто и аккуратно, используя известные паттерны, сразу с рефакторингом - так, будто вы пишите production-приложение.
Для получения полилиний (polylines) маршрута можно использовать API OSRM:
http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service

Используя заданный набор маршрутов (таблица 1), реализовать экран, в котором слева будет таблица со списком маршрутов, а справа карта. При выборе в таблице строки с маршрутом, выбранная строка должна подсветиться, а на карте должны отобразиться точки маршрута в виде маркеров и полилиния (polyline) трека движения по точкам маршрута, полученная из сервиса построения треков по дорогам OSRM (или другой). При выборе маршрута в таблице, на карте происходит центрирование и масштабирование таким образом, что весь маршрут должен попасть в область видимости карты. Одновременно на карте может отображаться только один маршрут – выбранный.

Маршрут №1 59.84660399, 30.29496392 59.82934196, 30.42423701 59.83567701, 30.38064206
Маршрут №2 59.82934196, 30.42423701 59.82761295, 30.41705607 59.84660399, 30.29496392
Маршрут №3 59.83567701, 30.38064206 59.84660399, 30.29496392 59.82761295, 30.41705607


 
