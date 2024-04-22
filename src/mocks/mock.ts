export interface Instrument {
  id: number;
  name: string;
  description: string;
  image: string;
  popularСriterions: string[];
  popularResult: string[];
  functionalCriterions: string[];
  functionalResult: string[];
  documentation: string;
  recommendations: string;
  example: string;
}

const instruments: {
  [module: string]: Instrument[];
  endtoend: Instrument[];
} = {
  module: [
    {
      id: 1,
      name: "JEST",
      description:
        "Jest — это восхитительный фреймворк для тестирования JavaScript с акцентом на простоту.Работает с проектами, использующими Babel, TypeScript, Node, React, Angular, Vue и многое другое!",
      image: "./assets/images/jest.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["43.1k / 23.1k", "Facebook", "5"],
      functionalCriterions: [
        "Тестированиt асинхронного кода",
        "Mock функции",
        "Snapshot тестирование",
        "Автоматический перезапуск тестов",
        "Параллельное выполнение тестов",
        "Наличие CodeCoverage",
        "Наличие собственной библиотеки утверждений",
      ],
      functionalResult: ["+", "+", "+", "+", "+", "+", "+"],
      documentation: "https://jestjs.io/",
      recommendations:
        "Это самый популярный фреймворк для тестирования. Он отличается простотой использования и обеспечивает удобный способ описания тестовых сценариев и проверки результатов. Инструмент из коробки имеет весь функционал необходимый для работы  современных реалиях. Это и библиотека утверждений, и возможность тестирования асинхронного кода, Mock функции и многое другое. Инструмент универсален и интегрируется с другими средами разработки. Разработчики рекомендуют использовать его на проектах с React, Vue, Angular и другими как основной инструмент модульного тестирования.",
      example:
        "https://codesandbox.io/p/devbox/jestexample-8xm53w?file=%2Fsrc%2Fmain.test.js%3A24%2C1&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv14iv120007356j9z7l6nsl%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv14iv110002356j9sd7qzaa%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv14iv110004356jjmd88a8f%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv14iv110006356jnfgx9aq1%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv14iv110002356j9sd7qzaa%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv14iv110001356j2fdem6qy%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.html%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clv15nvwn0002356io90gl4vx%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A24%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A24%252C%2522endColumn%2522%253A1%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Fmain.test.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clv14iv110002356j9sd7qzaa%2522%252C%2522activeTabId%2522%253A%2522clv15nvwn0002356io90gl4vx%2522%257D%252C%2522clv14iv110006356jnfgx9aq1%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv14iv110005356jyhoro5nv%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A1234%252C%2522path%2522%253A%2522%2522%257D%255D%252C%2522id%2522%253A%2522clv14iv110006356jnfgx9aq1%2522%252C%2522activeTabId%2522%253A%2522clv14iv110005356jyhoro5nv%2522%257D%252C%2522clv14iv110004356jjmd88a8f%2522%253A%257B%2522id%2522%253A%2522clv14iv110004356jjmd88a8f%2522%252C%2522activeTabId%2522%253A%2522clv15odob005g356i63xeur8h%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522npm%2520run%2520test%2522%252C%2522id%2522%253A%2522clv15odob005g356i63xeur8h%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
    },
    {
      id: 2,
      name: "Mocha",
      description: "Description for product 2 (type 1)",
      image: "../assets/images/Mocha_logo.svg.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["22.3k / 8.5k", "TJ Holowaychuk", "4"],
      functionalCriterions: [
        "Тестированиt асинхронного кода",
        "Mock функции",
        "Snapshot тестирование",
        "Автоматический перезапуск тестов",
        "Параллельное выполнение тестов",
        "Наличие CodeCoverage",
        "Наличие собственной библиотеки утверждений",
      ],
      functionalResult: ["+", "-", "-", "+", "-", "-", "-"],
      documentation: "https://mochajs.org/",
      example:
        "https://codesandbox.io/p/devbox/mochaexample-txx53k?embed=1&file=%2Fmain.test.js&showConsole=true&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv16gl9h0006356iaiu7b82o%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv16gl9g0002356iunkk0flq%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv16gl9g0004356ivznd9b6z%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv16gl9h0005356ijwjx6xq6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv16gl9g0002356iunkk0flq%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv16gl9g0001356iy62ijhjn%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.html%2522%257D%255D%252C%2522id%2522%253A%2522clv16gl9g0002356iunkk0flq%2522%252C%2522activeTabId%2522%253A%2522clv16gl9g0001356iy62ijhjn%2522%257D%252C%2522clv16gl9h0005356ijwjx6xq6%2522%253A%257B%2522id%2522%253A%2522clv16gl9h0005356ijwjx6xq6%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clv16gl9g0004356ivznd9b6z%2522%253A%257B%2522id%2522%253A%2522clv16gl9g0004356ivznd9b6z%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522npx%2520mocha%2520main.test.js%2522%252C%2522id%2522%253A%2522clv18774y01gx356i2z0ubphr%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clv18774y01gx356i2z0ubphr%2522%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
      recommendations:
        "Это гибкий фреймворк для тестирования JavaScript-приложений, который позволяет писать и запускать тесты как для фронтенд-разработки, так и для бэкенд-разработки. Mocha активно поддерживается сообществом и имеет обширную документацию, что делает его популярным выбором для многих разработчиков. Некоторые особенности Mocha: гибкость и расширяемость, поддержка асинхронного кода, широкий набор функций, гибкий вывод результатов, поддержка различных окружений. Mocha может быть использован для тестирования как в браузере, так и на сервере. Инструмент рекомендуется исользовать в связке со сторонними библиотеками, расширющими его функционал (Sinon, Chai)",
    },
    {
      id: 5,
      name: "Jasmine",
      description: "Description for product 2 (type 1)",
      image: "./src/assets/images/jasmine.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["15.7k / 13.3k", "Pivotal Labs", "4"],
      functionalCriterions: [
        "Тестированиt асинхронного кода",
        "Mock функции",
        "Snapshot тестирование",
        "Автоматический перезапуск тестов",
        "Параллельное выполнение тестов",
        "Наличие CodeCoverage",
        "Наличие собственной библиотеки утверждений",
      ],
      functionalResult: ["+", "+", "-", "+", "+", "-", "+"],
      example:
        "https://codesandbox.io/p/devbox/jasmineexample-tsj9s7?embed=1&file=%2Fspec%2Fsum.spec.js&showConsole=true&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv1dxsaz0007356imuy1cd1p%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv1dxsaz0002356i1ykc7mdp%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv1dxsaz0004356i0dk5tb6h%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv1dxsaz0006356ik5fgzjim%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv1dxsaz0002356i1ykc7mdp%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv1dxsay0001356iwzfdh1mu%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.html%2522%257D%255D%252C%2522id%2522%253A%2522clv1dxsaz0002356i1ykc7mdp%2522%252C%2522activeTabId%2522%253A%2522clv1dxsay0001356iwzfdh1mu%2522%257D%252C%2522clv1dxsaz0006356ik5fgzjim%2522%253A%257B%2522id%2522%253A%2522clv1dxsaz0006356ik5fgzjim%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clv1dxsaz0004356i0dk5tb6h%2522%253A%257B%2522id%2522%253A%2522clv1dxsaz0004356i0dk5tb6h%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522npx%2520jasmine%2522%252C%2522id%2522%253A%2522clv1f1srm00iz356io5gxsejc%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clv1f1srm00iz356io5gxsejc%2522%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
      documentation: "https://jasmine.github.io/",
      recommendations:
        "Это один из самых старых тестовых фреймворков. Поддерживает из коробки большинство необходимого функционала, включая тестирование асинхронного кода и мокирование. Разработчики Angular рекомендуют использовать именно Jasmine в связке с Karma для тестирования прложений, написанных на их фреймворке",
    },
    {
      id: 3,
      name: "Qunit",
      description: "Description for product 2 (type 1)",
      image: "./images/qunit.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["4k / 1.1k", "OpenJS Foundation", "4"],
      functionalCriterions: [
        "Тестированиt асинхронного кода",
        "Mock функции",
        "Snapshot тестирование",
        "Автоматический перезапуск тестов",
        "Параллельное выполнение тестов",
        "Наличие CodeCoverage",
        "Наличие собственной библиотеки утверждений",
      ],
      functionalResult: ["+", "-", "-", "+", "-", "-", "+"],
      example:
        "https://codesandbox.io/p/devbox/qunitexample-5vvvdl?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv1fpny10007356isehl3ta4%2522%252C%2522sizes%2522%253A%255B46.97111631537861%252C53.02888368462139%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv1fpny10002356iunrmn7pp%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv1fpny10004356ixuriprop%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv1fpny10006356i6pp4bi8u%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50.44034192945908%252C49.55965807054092%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv1fpny10002356iunrmn7pp%2522%253A%257B%2522id%2522%253A%2522clv1fpny10002356iunrmn7pp%2522%252C%2522activeTabId%2522%253A%2522clv1g09j100ct356i6r88ux0b%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv1fpny00001356ie47l7t22%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.html%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Ftest%2522%252C%2522id%2522%253A%2522clv1g09j100ct356i6r88ux0b%2522%252C%2522mode%2522%253A%2522temporary%2522%257D%255D%257D%252C%2522clv1fpny10006356i6pp4bi8u%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv1fpny10005356iqghxvvou%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A1234%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clv1fpny10006356i6pp4bi8u%2522%252C%2522activeTabId%2522%253A%2522clv1fpny10005356iqghxvvou%2522%257D%252C%2522clv1fpny10004356ixuriprop%2522%253A%257B%2522id%2522%253A%2522clv1fpny10004356ixuriprop%2522%252C%2522activeTabId%2522%253A%2522clv1gal8d00ot356iz8w9q9n1%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clv1fpp2a003xdjec00y50iaa%2522%252C%2522id%2522%253A%2522clv1fyjix0098356ibsety87h%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clv1gal8d00ot356iz8w9q9n1%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
      documentation: "https://qunitjs.com/",
      recommendations:
        "Qunit - это инфраструктура модульного тестирования для языка программирования JavaScript. В сравнении с другими инструментами предоставляет малый функционал и уходит в прошлое. Рекомендуемая область использования инструмента - поддержка проектов на JQuery ",
    },
    {
      id: 4,
      name: "Node-tap",
      description: "Description for product 2 (type 1)",
      image: "/src/assets/images/node-tap.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["2.3k / 238", "Isaac Z. Schlueter", "4"],
      functionalCriterions: [
        "Тестированиt асинхронного кода",
        "Mock функции",
        "Snapshot тестирование",
        "Автоматический перезапуск тестов",
        "Параллельное выполнение тестов",
        "Наличие CodeCoverage",
        "Наличие собственной библиотеки утверждений",
      ],
      example:
        "https://codesandbox.io/p/devbox/tapexample-hpkcs5?embed=1&file=%2Fmain.test.js&showConsole=true",
      functionalResult: ["+", "-", "+", "-", "+", "+", "+"],
      documentation: "https://node-tap.org/basics/",
      recommendations:
        "Это одна из  библиотек, с помощью которых можно проводить модульное тестирование в NodeJS. Она имеет обширный функционал в виде параллельного выполнения тестов, подробных отчетов об ошибках и покрытии кода тестами, собтвенные утверждения и многое другое. ",
    },
    {
      id: 6,
      name: "AVA",
      description: "Description for product 2 (type 1)",
      image: "/src/assets/images/ava.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["20.5k / 210", "Sindre Sorhus	4", "3"],
      functionalCriterions: [
        "Тестированиt асинхронного кода",
        "Mock функции",
        "Snapshot тестирование",
        "Автоматический перезапуск тестов",
        "Параллельное выполнение тестов",
        "Наличие CodeCoverage",
        "Наличие собственной библиотеки утверждений",
      ],
      functionalResult: ["+", "-", "+", "+", "+", "-", "+"],
      example:
        "https://codesandbox.io/p/devbox/avaexample-tlxjl2?embed=1&file=%2Ftest.js&showConsole=true&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv1gqsnh0007356ibk9qmhfk%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv1gqsng0002356i1dopd365%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv1gqsng0004356iiizu6l2h%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv1gqsng0006356izrsk4t8m%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv1gqsng0002356i1dopd365%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv1gqsnf0001356ib2wo2mrw%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.html%2522%257D%255D%252C%2522id%2522%253A%2522clv1gqsng0002356i1dopd365%2522%252C%2522activeTabId%2522%253A%2522clv1gqsnf0001356ib2wo2mrw%2522%257D%252C%2522clv1gqsng0006356izrsk4t8m%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv1gqsng0005356itici38tg%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A1234%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clv1gqsng0006356izrsk4t8m%2522%252C%2522activeTabId%2522%253A%2522clv1gqsng0005356itici38tg%2522%257D%252C%2522clv1gqsng0004356iiizu6l2h%2522%253A%257B%2522id%2522%253A%2522clv1gqsng0004356iiizu6l2h%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522npm%2520test%2522%252C%2522id%2522%253A%2522clv1h66zk00hw356iyton0vkm%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clv1h66zk00hw356iyton0vkm%2522%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
      documentation: "https://github.com/avajs/ava",
      recommendations:
        "Это минималистичный фреймворк для модульного тестирования. Предоставляет удобный легко читаемый синтаксис без неявных глобальных переменных, имеет не малый функционал. Инструмент рекомендуется использовать на небольших простых проектах.",
    },
  ],

  endtoend: [
    {
      id: 1,
      name: "Playwright",
      description: "Description for product 3 (type 2)",
      image: "/src/assets/images/playwright.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["57.6k / 2.6k", "Microsoft", "4"],

      functionalCriterions: [
        "Поддерживаемые браузеры",
        "Поддерживаемые языки программирования",
        "Headless режим",
        "Снимки экрана",
        "Манипуляция и создание новых DOM-элементов",
        "Эмуляция мобильных устройств",
        "Параллельное выполнение тестов",
        "Генерация отчетов",
        "Инструменты для отладки",
        "Возможность интеграции с другими инструментами тестирования",
        "Параллельное выполнение тестов",
      ],
      functionalResult: [
        "Chromium, WebKit,Firefox",
        "JavaScript/TypeScript, Java, Python,C#",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
      ],
      documentation: "https://playwright.dev/docs/intro",
      recommendations:
        "Это популярный и современный инструмент, который несет в себе весь функционал не только для скозного тестирования, но и для веб-скрапинга. Он поддерживает бльшое количество языков программирования, платформ и браузеров. Это позволяет называть playwright наиболее универсальным инструментом Е2Е тестирования. При работе с инструментом рекомендуется: тестировать в первую очередь то, что видит пользователь, максимально изолировать тесты друг от друга, избегать third-party-зависимостей, Пользоваться полезными функциями локаторов: auto-waiting и retry, а также фильтрацией локаторов и их последовательностями.",
      example:
        "https://codesandbox.io/p/devbox/vw447z?migrateFrom=h3z2xv&embed=1&file=readme.md&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv2jfy1j0006356ipd665wl8%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv2jfy1j0002356iv44hq57z%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv2jfy1j0004356iwdzhlxk9%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv2jfy1j0005356iysbp9ab7%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv2jfy1j0002356iv44hq57z%2522%253A%257B%2522id%2522%253A%2522clv2jfy1j0002356iv44hq57z%2522%252C%2522activeTabId%2522%253A%2522clv2jindo00bd356is2isdlp3%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv2jfy1i0001356imeboom1d%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FlaunchPage.js%2522%252C%2522id%2522%253A%2522clv2jindo00bd356is2isdlp3%2522%252C%2522mode%2522%253A%2522temporary%2522%257D%255D%257D%252C%2522clv2jfy1j0005356iysbp9ab7%2522%253A%257B%2522id%2522%253A%2522clv2jfy1j0005356iysbp9ab7%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clv2jfy1j0004356iwdzhlxk9%2522%253A%257B%2522id%2522%253A%2522clv2jfy1j0004356iwdzhlxk9%2522%252C%2522activeTabId%2522%253A%2522clv2jijzr009c356ijikyk0dn%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv2jfy1j0003356i3xycly9l%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clv2jg0lv000bdcf87mveeamv%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522Development%2522%252C%2522id%2522%253A%2522clv2jijzr009c356ijikyk0dn%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
    },
    {
      id: 2,
      name: "Puppeteer",
      description: "Description for product 4 (type 2)",
      image: "/src/assets/images/puppeteer.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["85.4k / 7.8k", "Google", "4"],
      functionalCriterions: [
        "Поддерживаемые браузеры",
        "Поддерживаемые языки программирования",
        "Headless режим",
        "Снимки экрана",
        "Манипуляция и создание новых DOM-элементов",
        "Эмуляция мобильных устройств",
        "Параллельное выполнение тестов",
        "Генерация отчетов",
        "Инструменты для отладки",
        "Возможность интеграции с другими инструментами тестирования",
        "Параллельное выполнение тестов",
      ],
      functionalResult: [
        "Chromium",
        "JavaScript, TypeScript",
        "+",
        "+",
        "+",
        "+",
        "-",
        "+",
        "-",
        "+",
        "-",
      ],
      recommendations:
        "Puppeteer — это библиотека Node.js, которая предоставляет API высокого уровня для управления Chrome/Chromium через протокол DevTools. Инструмент поддерживает тестирование приложений только на языке JavaScript и взаимодействует с баузерами Chrome и FireFox. Это стоит учитывать при выборе данног инструмента. Он умеет выполнять навигацию на странице по URL и работать с мышкой и клавиатурой, Проверяет юзабилити страницы, видимость элементов, их поведение, и быстроту реакции интерфейса на разных устройствах.Умеет делать скриншоты страницы и генерировать PDF. Есть возможности анализа и тестирования доступности контента.",
      example:
        "https://codesandbox.io/p/devbox/tg9wl9?migrateFrom=qjk5pz&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv2k4t2m00062a66vol2d9jl%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv2k4t2l00022a66iglavdj5%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv2k4t2l00042a66pyr3qs6l%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv2k4t2m00052a66i70p6hvg%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv2k4t2l00022a66iglavdj5%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv2k4t2l00012a66dc3a8ggq%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%257D%255D%252C%2522id%2522%253A%2522clv2k4t2l00022a66iglavdj5%2522%252C%2522activeTabId%2522%253A%2522clv2k4t2l00012a66dc3a8ggq%2522%257D%252C%2522clv2k4t2m00052a66i70p6hvg%2522%253A%257B%2522id%2522%253A%2522clv2k4t2m00052a66i70p6hvg%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clv2k4t2l00042a66pyr3qs6l%2522%253A%257B%2522id%2522%253A%2522clv2k4t2l00042a66pyr3qs6l%2522%252C%2522activeTabId%2522%253A%2522clv2k4t2l00032a669uadcsjh%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv2k4t2l00032a669uadcsjh%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clv2k4uvq000bdcf884fmakcy%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522Development%2522%252C%2522id%2522%253A%2522clv2k5fjf00812a66ilks7ysx%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
      documentation: "https://pptr.dev/",
    },
    {
      id: 3,
      name: "Cypress",
      description: "Description for product 4 (type 2)",
      image: "/src/assets/images/cypress.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["45.4k / 9.8k", "Cypress.io", "4"],
      functionalCriterions: [
        "Поддерживаемые браузеры",
        "Поддерживаемые языки программирования",
        "Headless режим",
        "Снимки экрана",
        "Манипуляция и создание новых DOM-элементов",
        "Эмуляция мобильных устройств",
        "Параллельное выполнение тестов",
        "Генерация отчетов",
        "Инструменты для отладки",
        "Возможность интеграции с другими инструментами тестирования",
        "Параллельное выполнение тестов",
      ],
      functionalResult: [
        "Chromium, WebKit, Firefox",
        "JavaScript",
        "+",
        "+",
        "+",
        "+",
        "-",
        "+",
        "-",
        "+",
        "-",
      ],
      documentation: "https://docs.cypress.io/guides/overview/why-cypress",
      recommendations:
        "Инструмент поддерживает тестирование приложений только на языке JavaScript и взаимодействует с баузерами Chromium, WebKit, Firefox. Это стоит учитывать при выборе данног инструмента. Cypress поставляется в комплекте с jQuery (библиотека Javascript) и наследует многие методы jQuery для поиска и управления UI-компонентами, обработки событий, CSS-анимации и работы Ajax. Среди недостатков инструмента отмечают небольшое комьюнити, отстувие параллельного выполненя тестов и наличие платных дополнительных услуг. При всех недостатках Это next-gen инструмент для тестирования UI, созданный для современного веба. Он выполняет тесты непосредственно в браузере. Кроме того, Cypress предоставляет встроенный Test Runner, с помощью которой можно запускать тесты непосредственно из Cypress UI. Он предоставляет доступ к Cypress Dashboard, где показаны результаты всех запусков тестов.",
      example:
        "https://codesandbox.io/p/devbox/g77d4x?migrateFrom=j86y9r&embed=1&file=%2Fspecs%2FhomePage.cy.js&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv2kqqqa00062a66vn93pbmz%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv2kqqq900022a66sfrloed4%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv2kqqqa00042a66297coq1b%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv2kqqqa00052a66198967fe%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv2kqqq900022a66sfrloed4%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv2kqqq900012a6625hlboar%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%257D%255D%252C%2522id%2522%253A%2522clv2kqqq900022a66sfrloed4%2522%252C%2522activeTabId%2522%253A%2522clv2kqqq900012a6625hlboar%2522%257D%252C%2522clv2kqqqa00052a66198967fe%2522%253A%257B%2522id%2522%253A%2522clv2kqqqa00052a66198967fe%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clv2kqqqa00042a66297coq1b%2522%253A%257B%2522id%2522%253A%2522clv2kqqqa00042a66297coq1b%2522%252C%2522activeTabId%2522%253A%2522clv2krka0009d2a66d0x0y7ey%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv2kqqqa00032a66q84nx3ge%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clv2kqtg7000cdif8a5yrenhe%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522Development%2522%252C%2522id%2522%253A%2522clv2krka0009d2a66d0x0y7ey%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
    },
    {
      id: 4,
      name: "Seleium",
      description: "Description for product 4 (type 2)",
      image: "/src/assets/images/selenium.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["28.4k / 56k", "Open Source", "4"],
      functionalCriterions: [
        "Поддерживаемые браузеры",
        "Поддерживаемые языки программирования",
        "Headless режим",
        "Снимки экрана",
        "Манипуляция и создание новых DOM-элементов",
        "Эмуляция мобильных устройств",
        "Параллельное выполнение тестов",
        "Генерация отчетов",
        "Инструменты для отладки",
        "Возможность интеграции с другими инструментами тестирования",
        "Параллельное выполнение тестов",
      ],
      functionalResult: [
        "Chromium, WebKit, Firefox",
        "Java, Python, Ruby,JavaScript, Kotlin, C#",
        "+",
        "+",
        "+",
        "+",
        "-",
        "+",
        "-",
        "+",
        "-",
      ],
      documentation: "https://www.selenium.dev/documentation/webdriver/",
      recommendations:
        "Это проверенный временем инструмент, с гигантским комьюнити. Он работает с большим количеством языков программирования и основными соременными браузерами. Хорошо подходит для DevOps и CI, интегрируется с Jenkins и Maven Работает в связке с Appium в мобильном тестировании",
      example:
        "https://codesandbox.io/p/devbox/seleniumexample-rlv64g?embed=1&file=%2Ftest.js&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv2lat6b00072a668ua4r5nn%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv2lat6b00022a66jpde9nag%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv2lat6b00042a66vm5bhqow%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv2lat6b00062a66dac08j8a%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv2lat6b00022a66jpde9nag%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv2lat6b00012a66nh6ftqby%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.html%2522%257D%255D%252C%2522id%2522%253A%2522clv2lat6b00022a66jpde9nag%2522%252C%2522activeTabId%2522%253A%2522clv2lat6b00012a66nh6ftqby%2522%257D%252C%2522clv2lat6b00062a66dac08j8a%2522%253A%257B%2522id%2522%253A%2522clv2lat6b00062a66dac08j8a%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clv2lat6b00042a66vm5bhqow%2522%253A%257B%2522id%2522%253A%2522clv2lat6b00042a66vm5bhqow%2522%252C%2522tabs%2522%253A%255B%255D%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D ",
    },
    {
      id: 5,
      name: "Test-cafe",
      description: "Description for product 4 (type 2)",
      image: "/src/assets/images/testcafe.png",
      popularСriterions: [
        "Популярность (GitHub stars/Stack Overflow tags)",
        "Разработчик",
        "Документация (от 0 до 5 баллов)",
      ],
      popularResult: ["9.7k / 1.8k", "DevExpress", "4"],
      functionalCriterions: [
        "Поддерживаемые браузеры",
        "Поддерживаемые языки программирования",
        "Headless режим",
        "Снимки экрана",
        "Манипуляция и создание новых DOM-элементов",
        "Эмуляция мобильных устройств",
        "Параллельное выполнение тестов",
        "Генерация отчетов",
        "Инструменты для отладки",
        "Возможность интеграции с другими инструментами тестирования",
        "Параллельное выполнение тестов",
      ],
      functionalResult: [
        "Chromium, WebKit, Firefox,Opera",
        "JavaScript, TypeScript",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
      ],
      documentation:
        "https://testcafe.io/documentation/402635/guides/overview/getting-started",
      recommendations:
        "TestCafe это инструментальное средство для автоматизации End-to-End тестирования Web приложений основано на Node.js платформе, который под капотом использует Proxy. Основные компоненты TestCafe можно использовать с минимальным знанием языка программирования или даже первоначального его отсутствия, что делает его очень привлекательным для новичков, которые могут с первых дней внедрять автоматизацию. С помощью TestCafe тесты можно запускать на удаленных устройствах, в том числе и мобильных. А ключевое в этом то, что на удаленном устройстве, где будут раниться тесты, не нужно инсталлировать TestCafe. TestCafe внедряется в страницы в форме JavaScript-скрипта, то есть нет контроля браузера, как это происходит в Selenium. Зато это дает возможность TestCafe выполняться в любых веб-браузерах, в том числе и мобильных, а также иметь полнейший контроль над происходящим в JavaScript.",
      example:
        "https://codesandbox.io/p/devbox/testcafeeeample-zldw6h?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv2m8fck00072a66dbvcyuue%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv2m8fcj00022a66q7psoqte%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv2m8fcj00042a66tlu6bd14%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv2m8fck00062a667ni9vtyd%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv2m8fcj00022a66q7psoqte%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv2m8fcj00012a66rkrw7xuc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.html%2522%257D%255D%252C%2522id%2522%253A%2522clv2m8fcj00022a66q7psoqte%2522%252C%2522activeTabId%2522%253A%2522clv2m8fcj00012a66rkrw7xuc%2522%257D%252C%2522clv2m8fck00062a667ni9vtyd%2522%253A%257B%2522id%2522%253A%2522clv2m8fck00062a667ni9vtyd%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clv2m8fcj00042a66tlu6bd14%2522%253A%257B%2522id%2522%253A%2522clv2m8fcj00042a66tlu6bd14%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv2m8fcj00032a666uliter3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clv2m8fcj00032a666uliter3%2522%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
    },
  ],
};

export default instruments;

