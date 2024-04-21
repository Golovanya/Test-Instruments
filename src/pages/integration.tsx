import { Text } from "@consta/uikit/Text";
import { Badge } from "@consta/uikit/Badge";
import { Card } from "@consta/uikit/Card";
import { Button } from "@consta/uikit/Button";

function Integration() {
  return (
    <div className="container">
      <div className="instrument-header">
        <div>
          <Text as="h1">Testing Libary</Text>
          <a href="https://testing-library.com/" target="_blank">
            <Button label="Документация" />
          </a>
        </div>
        <img className="" src="/src/assets/images/testing-libary.png" />
      </div>

      <Text as="p" lineHeight="m">
        С Testing Library вы можете выполнять различные задачи, связанные с
        тестированием пользовательского интерфейса приложения. Инструмент
        позволяет: тестировать отображение компонентов, (вы можете проверять,
        корректно ли отображается ваш компонент в DOM. проверять, что
        определенные элементы присутствуют на странице или отображаются
        корректно.) взаимодействовать с компонентами как пользователь,
        тестировать состояние компонента, доступность, работу с Api и данными,
        роутинг, интегрироваться с различными фреймворками и библиотеками.
      </Text>
      <hr />
      <Text as="h4">
        Экосистема является монополистом на рынке инструментов интеграционного
        тестирования. И включает в себя следующие элементы:
      </Text>
      <ul>
        <li>dom testing library — основная библиотека</li>
        <li>user-event — имитация браузерных событий</li>
        <li>jest-dom — кастомные матчеры Jest</li>
        <li>
          eslint-plugin-testing-library — плагин ESLint для Testing Library
        </li>
        <li>eslint-plugin-jest-dom — плагин ESLint для Jest DOM</li>
        <li>jasmine-dom — кастомные матчеры Jasmine</li>
        <li>
          jest Native — это дополнительная библиотека для библиотеки
          тестирования React Native
        </li>
        <li>
          riot-testing-library создается на основе библиотеки тестирования DOM
          путем добавления API-интерфейсов для работы с компонентами Riot.js.
        </li>
        <li>
          query-extensions — это экспериментальная сопутствующая библиотека для
          библиотеки тестирования, которая объединяет API более высокого уровня
          со стандартными основными запросами @testing-library.
        </li>
        <li>
          А также версии для фрейворков (React , Angular , Svelte, Marko,
          Preact, Reason, Native, Solid, Cypress, Puppeteer, Testcafe,
          Nightwatch, WebdriverIO )
        </li>
      </ul>
      <Card verticalSpace="m" horizontalSpace="m">
        <Badge status="warning" label="Главный принцип" />
        <h2>
          Чем лучше ваши тесты имитируют реальное использование вашего
          приложения, тем больше уверенности они могут вам дать
        </h2>
      </Card>

      <Text as="h4">
        Утилиты, включенные в этот проект, основаны на следующих принципах:
      </Text>
      <ol>
        <li>
          Если это связано с отображением компонентов, то оно должно работать с
          узлами DOM, а не с экземплярами компонентов, и не должно поощрять
          работу с экземплярами компонентов.
        </li>
        <li>
          Они должны быть в целом полезными для тестирования компонентов
          приложения так, как это делал бы пользователь.
        </li>
        <li>Реализация утилит и их API должны быть простыми и гибкими.</li>
      </ol>
      <Text as="h4">Пример использования:</Text>
      <iframe
        src="https://codesandbox.io/embed/2px97?view=editor+%2B+preview&module=%2Fsrc%2FApp.test.js"
        style={{
          width: "100%",
          fontSize: "16px",
          height: "600px",
          marginBottom: "50px",
        }}
        title="Testing Library Basics 1"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}

export default Integration;
